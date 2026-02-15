import type { GameResult, ShortcutStat } from '../types';
import { createUser, createSession, type ApiKeyLog } from './api';

const STORAGE_KEY = 'refactoring-racer';
const USER_ID_KEY = 'refactoring-racer-user-id';

export interface SavedData {
  bestTotalTime: number | null;
  gamesPlayed: number;
  shortcutStats: Record<string, ShortcutStat>;
}

function getDefault(): SavedData {
  return { bestTotalTime: null, gamesPlayed: 0, shortcutStats: {} };
}

export function loadSavedData(): SavedData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefault();
    return JSON.parse(raw) as SavedData;
  } catch {
    return getDefault();
  }
}

// --- User ID management ---

export function getSavedUserId(): string | null {
  return localStorage.getItem(USER_ID_KEY);
}

export function saveUserId(userId: string): void {
  localStorage.setItem(USER_ID_KEY, userId);
}

/** Ensure we have a user ID — create one via API if needed, fallback to local UUID. */
export async function ensureUserId(locale: string): Promise<string> {
  const existing = getSavedUserId();
  if (existing) return existing;

  try {
    const user = await createUser(locale);
    saveUserId(user.id);
    return user.id;
  } catch {
    // API unavailable — generate local UUID
    const localId = crypto.randomUUID();
    saveUserId(localId);
    return localId;
  }
}

// --- Sync to backend ---

/** Send each game result to the API (best-effort, non-blocking). */
export async function syncResultsToBackend(results: GameResult[]): Promise<void> {
  const userId = getSavedUserId();
  if (!userId) return;

  for (const r of results) {
    try {
      const keyLogs: ApiKeyLog[] = r.keyLogs.map((l) => ({
        key: l.key,
        latency_ms: l.latencyMs,
        is_miss: l.isMiss,
      }));
      await createSession({
        user_id: userId,
        problem_key: r.problemId,
        total_time_ms: r.totalTimeMs,
        total_misses: r.totalMisses,
        completed: r.completed,
        key_logs: keyLogs,
      });
    } catch {
      // Silently fail — localStorage is the fallback
      console.warn(`Failed to sync session for problem ${r.problemId}`);
    }
  }
}

export function saveGameResults(results: GameResult[]): void {
  const prev = loadSavedData();
  const totalTime = results.reduce((s, r) => s + r.totalTimeMs, 0);

  prev.gamesPlayed += 1;
  if (prev.bestTotalTime === null || totalTime < prev.bestTotalTime) {
    prev.bestTotalTime = totalTime;
  }

  // Merge shortcut stats (running average)
  for (const r of results) {
    for (const [key, stat] of Object.entries(r.shortcutStats)) {
      const existing = prev.shortcutStats[key];
      if (!existing) {
        prev.shortcutStats[key] = { ...stat };
      } else {
        const totalAttempts = existing.totalAttempts + stat.totalAttempts;
        const avgLatency =
          (existing.avgLatencyMs * existing.totalAttempts +
            stat.avgLatencyMs * stat.totalAttempts) /
          totalAttempts;
        const missCount = existing.missCount + stat.missCount;
        const missRate = totalAttempts > 0 ? missCount / totalAttempts : 0;
        existing.avgLatencyMs = avgLatency;
        existing.totalAttempts = totalAttempts;
        existing.missCount = missCount;
        existing.masteryScore = Math.max(
          0,
          Math.min(1, (500 / Math.max(avgLatency, 1)) * (1 - missRate)),
        );
      }
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(prev));

  // Async sync to backend (fire and forget)
  syncResultsToBackend(results).catch(() => {});
}
