export interface Problem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  type: 'code' | 'text';
  difficulty: 'easy' | 'medium' | 'hard';
  initialContent: string;
  goalContent: string;
  requiredKeys: string[];
  cursorStart: CursorPosition;
}

export interface CursorPosition {
  row: number;
  col: number;
}

export interface KeyLog {
  key: string;
  latencyMs: number;
  isMiss: boolean;
  timestamp: number;
}

export interface ShortcutStat {
  shortcutKey: string;
  avgLatencyMs: number;
  totalAttempts: number;
  missCount: number;
  masteryScore: number;
}

export interface GameResult {
  problemId: string;
  totalTimeMs: number;
  totalMisses: number;
  completed: boolean;
  keyLogs: KeyLog[];
  shortcutStats: Record<string, ShortcutStat>;
}

export type GameMode = 'code' | 'text' | 'adaptive';
export type Screen = 'start' | 'game' | 'result';
