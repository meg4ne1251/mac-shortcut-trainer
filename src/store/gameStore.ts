import { create } from 'zustand';
import type { KeyLog, GameResult, CursorPosition, Screen, ShortcutStat, GameMode, Problem } from '../types';
import { codeProblems, textProblems } from '../data/problems';
import { saveGameResults, ensureUserId, getSavedUserId } from '../lib/storage';
import { getNextAdaptiveProblem } from '../lib/api';
import i18n from '../i18n';

function getProblemsForMode(mode: GameMode): Problem[] {
  switch (mode) {
    case 'code': return codeProblems;
    case 'text': return textProblems;
    case 'adaptive': return [...codeProblems, ...textProblems]; // fallback pool
  }
}

interface GameState {
  currentScreen: Screen;
  gameMode: GameMode;
  currentProblemIndex: number;
  activeProblems: Problem[];
  lines: string[];
  cursor: CursorPosition;
  problemStartTime: number | null;
  lastKeyTime: number | null;
  keyLogs: KeyLog[];
  missCount: number;
  warningMessage: string | null;
  problemCompleted: boolean;
  problemResults: GameResult[];
  adaptiveLoading: boolean;

  setScreen: (screen: Screen) => void;
  startGame: (mode: GameMode) => void;
  loadProblem: (index: number) => void;
  loadAdaptiveProblem: () => Promise<void>;
  nextProblem: () => void;

  moveCursorRight: () => void;
  moveCursorLeft: () => void;
  moveCursorDown: () => void;
  moveCursorUp: () => void;
  moveCursorToLineStart: () => void;
  moveCursorToLineEnd: () => void;
  killLine: () => void;
  deleteBackward: () => void;
  deleteForward: () => void;
  insertChar: (chars: string) => void;
  splitLine: () => void;

  logKeyPress: (key: string, isMiss: boolean) => void;
  showWarning: (msg: string) => void;
  clearWarning: () => void;

  checkCompletion: () => boolean;
  completeProblem: () => void;
  finishGame: () => void;
  resetGame: () => void;

  getCurrentProblem: () => Problem;
  getElapsedMs: () => number;
}

export const useGameStore = create<GameState>((set, get) => ({
  currentScreen: 'start',
  gameMode: 'code',
  currentProblemIndex: 0,
  activeProblems: codeProblems,
  lines: [],
  cursor: { row: 0, col: 0 },
  problemStartTime: null,
  lastKeyTime: null,
  keyLogs: [],
  missCount: 0,
  warningMessage: null,
  problemCompleted: false,
  problemResults: [],
  adaptiveLoading: false,

  setScreen: (screen) => set({ currentScreen: screen }),

  startGame: (mode: GameMode) => {
    // Ensure user exists (async, fire-and-forget)
    ensureUserId(i18n.language).catch(() => {});
    const problems = getProblemsForMode(mode);
    set({
      currentScreen: 'game',
      gameMode: mode,
      currentProblemIndex: 0,
      problemResults: [],
      activeProblems: problems,
    });
    if (mode === 'adaptive') {
      get().loadAdaptiveProblem();
    } else {
      get().loadProblem(0);
    }
  },

  loadProblem: (index) => {
    const probs = get().activeProblems;
    const problem = probs[index];
    set({
      currentProblemIndex: index,
      lines: problem.initialContent.split('\n'),
      cursor: { ...problem.cursorStart },
      problemStartTime: Date.now(),
      lastKeyTime: Date.now(),
      keyLogs: [],
      missCount: 0,
      warningMessage: null,
      problemCompleted: false,
    });
  },

  loadAdaptiveProblem: async () => {
    set({ adaptiveLoading: true });
    const userId = getSavedUserId();
    if (!userId) {
      // Fallback to first problem in the pool
      get().loadProblem(0);
      set({ adaptiveLoading: false });
      return;
    }
    try {
      const apiProblem = await getNextAdaptiveProblem(userId);
      // Convert API problem to local Problem format
      const problem: Problem = {
        id: apiProblem.problem_key,
        titleKey: `problems.${apiProblem.problem_key}_title`,
        descriptionKey: `problems.${apiProblem.problem_key}_desc`,
        type: apiProblem.type as 'code' | 'text',
        difficulty: apiProblem.difficulty as 'easy' | 'medium' | 'hard',
        initialContent: apiProblem.initial_content,
        goalContent: apiProblem.goal_content,
        requiredKeys: apiProblem.required_keys,
        cursorStart: { row: 0, col: 0 },
      };
      // Replace the current active problems pool with just this one
      // and load it
      set((state) => ({
        activeProblems: [...state.activeProblems, problem],
        adaptiveLoading: false,
      }));
      const idx = get().activeProblems.length - 1;
      get().loadProblem(idx);
    } catch {
      // API unavailable — fallback to random local problem
      const pool = get().activeProblems;
      const idx = Math.floor(Math.random() * pool.length);
      get().loadProblem(idx);
      set({ adaptiveLoading: false });
    }
  },

  nextProblem: () => {
    const state = get();
    if (state.gameMode === 'adaptive') {
      // In adaptive mode, play 5 problems then finish
      if (state.problemResults.length >= 5) {
        get().finishGame();
      } else {
        get().loadAdaptiveProblem();
      }
      return;
    }
    const nextIndex = state.currentProblemIndex + 1;
    if (nextIndex < state.activeProblems.length) {
      get().loadProblem(nextIndex);
    } else {
      get().finishGame();
    }
  },

  // --- Editor operations ---

  moveCursorRight: () =>
    set((state) => {
      const line = state.lines[state.cursor.row];
      if (state.cursor.col < line.length) {
        return { cursor: { ...state.cursor, col: state.cursor.col + 1 } };
      } else if (state.cursor.row < state.lines.length - 1) {
        return { cursor: { row: state.cursor.row + 1, col: 0 } };
      }
      return {};
    }),

  moveCursorLeft: () =>
    set((state) => {
      if (state.cursor.col > 0) {
        return { cursor: { ...state.cursor, col: state.cursor.col - 1 } };
      } else if (state.cursor.row > 0) {
        const prevLine = state.lines[state.cursor.row - 1];
        return { cursor: { row: state.cursor.row - 1, col: prevLine.length } };
      }
      return {};
    }),

  moveCursorDown: () =>
    set((state) => {
      if (state.cursor.row < state.lines.length - 1) {
        const nextLine = state.lines[state.cursor.row + 1];
        return {
          cursor: {
            row: state.cursor.row + 1,
            col: Math.min(state.cursor.col, nextLine.length),
          },
        };
      }
      return {};
    }),

  moveCursorUp: () =>
    set((state) => {
      if (state.cursor.row > 0) {
        const prevLine = state.lines[state.cursor.row - 1];
        return {
          cursor: {
            row: state.cursor.row - 1,
            col: Math.min(state.cursor.col, prevLine.length),
          },
        };
      }
      return {};
    }),

  moveCursorToLineStart: () =>
    set((state) => ({
      cursor: { ...state.cursor, col: 0 },
    })),

  moveCursorToLineEnd: () =>
    set((state) => ({
      cursor: { ...state.cursor, col: state.lines[state.cursor.row].length },
    })),

  killLine: () =>
    set((state) => {
      const { row, col } = state.cursor;
      const line = state.lines[row];
      const newLines = [...state.lines];

      if (col < line.length) {
        // Kill from cursor to end of line
        newLines[row] = line.substring(0, col);
      } else if (row < newLines.length - 1) {
        // At end of line — join with next line
        newLines[row] = line + newLines[row + 1];
        newLines.splice(row + 1, 1);
      }

      return { lines: newLines };
    }),

  deleteBackward: () =>
    set((state) => {
      const { row, col } = state.cursor;
      const newLines = [...state.lines];

      if (col > 0) {
        const line = newLines[row];
        newLines[row] = line.substring(0, col - 1) + line.substring(col);
        return { lines: newLines, cursor: { row, col: col - 1 } };
      } else if (row > 0) {
        const prevLine = newLines[row - 1];
        newLines[row - 1] = prevLine + newLines[row];
        newLines.splice(row, 1);
        return { lines: newLines, cursor: { row: row - 1, col: prevLine.length } };
      }

      return {};
    }),

  deleteForward: () =>
    set((state) => {
      const { row, col } = state.cursor;
      const newLines = [...state.lines];
      const line = newLines[row];

      if (col < line.length) {
        newLines[row] = line.substring(0, col) + line.substring(col + 1);
        return { lines: newLines };
      } else if (row < newLines.length - 1) {
        newLines[row] = line + newLines[row + 1];
        newLines.splice(row + 1, 1);
        return { lines: newLines };
      }

      return {};
    }),

  insertChar: (chars) =>
    set((state) => {
      const { row, col } = state.cursor;
      const newLines = [...state.lines];
      const line = newLines[row];
      newLines[row] = line.substring(0, col) + chars + line.substring(col);
      return { lines: newLines, cursor: { row, col: col + chars.length } };
    }),

  splitLine: () =>
    set((state) => {
      const { row, col } = state.cursor;
      const newLines = [...state.lines];
      const line = newLines[row];
      newLines[row] = line.substring(0, col);
      newLines.splice(row + 1, 0, line.substring(col));
      return { lines: newLines, cursor: { row: row + 1, col: 0 } };
    }),

  // --- Logging ---

  logKeyPress: (key, isMiss) => {
    const now = Date.now();
    const state = get();
    const latencyMs = state.lastKeyTime ? now - state.lastKeyTime : 0;

    set((s) => ({
      keyLogs: [...s.keyLogs, { key, latencyMs, isMiss, timestamp: now }],
      lastKeyTime: now,
      missCount: isMiss ? s.missCount + 1 : s.missCount,
    }));
  },

  showWarning: (msg) => set({ warningMessage: msg }),
  clearWarning: () => set({ warningMessage: null }),

  // --- Completion ---

  checkCompletion: () => {
    const state = get();
    const problem = state.activeProblems[state.currentProblemIndex];
    return state.lines.join('\n') === problem.goalContent;
  },

  completeProblem: () => {
    const state = get();
    if (state.problemCompleted) return;

    const problem = state.activeProblems[state.currentProblemIndex];
    const totalTimeMs = state.problemStartTime ? Date.now() - state.problemStartTime : 0;

    // Aggregate per-shortcut stats
    const agg: Record<string, { totalLatency: number; count: number; misses: number }> = {};
    for (const log of state.keyLogs) {
      if (!agg[log.key]) agg[log.key] = { totalLatency: 0, count: 0, misses: 0 };
      agg[log.key].totalLatency += log.latencyMs;
      agg[log.key].count += 1;
      if (log.isMiss) agg[log.key].misses += 1;
    }

    const shortcutStats: Record<string, ShortcutStat> = {};
    for (const [key, stat] of Object.entries(agg)) {
      const avgLatency = stat.totalLatency / stat.count;
      const missRate = stat.count > 0 ? stat.misses / stat.count : 0;
      shortcutStats[key] = {
        shortcutKey: key,
        avgLatencyMs: avgLatency,
        totalAttempts: stat.count,
        missCount: stat.misses,
        masteryScore: Math.max(0, Math.min(1, (500 / Math.max(avgLatency, 1)) * (1 - missRate))),
      };
    }

    const result: GameResult = {
      problemId: problem.id,
      totalTimeMs,
      totalMisses: state.missCount,
      completed: true,
      keyLogs: [...state.keyLogs],
      shortcutStats,
    };

    set((s) => ({
      problemResults: [...s.problemResults, result],
      problemCompleted: true,
    }));
  },

  finishGame: () => {
    const state = get();
    saveGameResults(state.problemResults);
    set({ currentScreen: 'result' });
  },

  resetGame: () =>
    set({
      currentScreen: 'start',
      gameMode: 'code',
      currentProblemIndex: 0,
      activeProblems: codeProblems,
      lines: [],
      cursor: { row: 0, col: 0 },
      problemStartTime: null,
      lastKeyTime: null,
      keyLogs: [],
      missCount: 0,
      warningMessage: null,
      problemCompleted: false,
      problemResults: [],
      adaptiveLoading: false,
    }),

  getCurrentProblem: () => get().activeProblems[get().currentProblemIndex],
  getElapsedMs: () => {
    const s = get();
    return s.problemStartTime ? Date.now() - s.problemStartTime : 0;
  },
}));
