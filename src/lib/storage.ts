import type { GameResult, ShortcutStat } from '../types';

const STORAGE_KEY = 'refactoring-racer';

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
}
