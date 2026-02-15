import { describe, it, expect, beforeEach } from 'vitest';
import { useGameStore } from '../store/gameStore';

// Reset Zustand store before each test
beforeEach(() => {
  useGameStore.getState().resetGame();
});

describe('gameStore - editor operations', () => {
  it('should start with default state', () => {
    const state = useGameStore.getState();
    expect(state.currentScreen).toBe('start');
    expect(state.gameMode).toBe('code');
    expect(state.lines).toEqual([]);
    expect(state.cursor).toEqual({ row: 0, col: 0 });
    expect(state.problemResults).toEqual([]);
  });

  it('should load a problem', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    const state = useGameStore.getState();
    expect(state.currentScreen).toBe('game');
    expect(state.gameMode).toBe('code');
    expect(state.lines.length).toBeGreaterThan(0);
    expect(state.currentProblemIndex).toBe(0);
  });

  it('should move cursor right', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorRight();
    const state = useGameStore.getState();
    expect(state.cursor.col).toBe(1);
  });

  it('should not move cursor left past position 0', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorLeft();
    const state = useGameStore.getState();
    expect(state.cursor.col).toBe(0);
    expect(state.cursor.row).toBe(0);
  });

  it('should move cursor down', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorDown();
    const state = useGameStore.getState();
    expect(state.cursor.row).toBe(1);
  });

  it('should move cursor up from row 1', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorDown();
    store.moveCursorUp();
    const state = useGameStore.getState();
    expect(state.cursor.row).toBe(0);
  });

  it('should not move cursor up past row 0', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorUp();
    const state = useGameStore.getState();
    expect(state.cursor.row).toBe(0);
  });

  it('should move cursor to line start', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorRight();
    store.moveCursorRight();
    store.moveCursorToLineStart();
    const state = useGameStore.getState();
    expect(state.cursor.col).toBe(0);
  });

  it('should move cursor to line end', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorToLineEnd();
    const state = useGameStore.getState();
    const lineLen = state.lines[0].length;
    expect(state.cursor.col).toBe(lineLen);
  });

  it('should insert a character', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorToLineEnd();
    const lineBefore = useGameStore.getState().lines[0];
    store.insertChar(';');
    const state = useGameStore.getState();
    expect(state.lines[0]).toBe(lineBefore + ';');
    expect(state.cursor.col).toBe(lineBefore.length + 1);
  });

  it('should delete forward (ctrl+d)', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    const origLine = useGameStore.getState().lines[0];
    store.deleteForward();
    const state = useGameStore.getState();
    expect(state.lines[0]).toBe(origLine.substring(1));
    expect(state.cursor.col).toBe(0);
  });

  it('should delete backward (ctrl+h)', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorRight();
    const origLine = useGameStore.getState().lines[0];
    store.deleteBackward();
    const state = useGameStore.getState();
    expect(state.lines[0]).toBe(origLine.substring(0, 0) + origLine.substring(1));
    expect(state.cursor.col).toBe(0);
  });

  it('should kill line from cursor to end (ctrl+k)', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorRight();
    store.moveCursorRight();
    store.moveCursorRight();
    store.killLine();
    const state = useGameStore.getState();
    expect(state.lines[0].length).toBe(3);
  });

  it('should kill line at end of line joins next line', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorToLineEnd();
    const line0 = useGameStore.getState().lines[0];
    const line1 = useGameStore.getState().lines[1];
    const lineCount = useGameStore.getState().lines.length;
    store.killLine();
    const state = useGameStore.getState();
    expect(state.lines.length).toBe(lineCount - 1);
    expect(state.lines[0]).toBe(line0 + line1);
  });

  it('should split line (enter)', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.moveCursorRight();
    store.moveCursorRight();
    const origLine = useGameStore.getState().lines[0];
    const origLineCount = useGameStore.getState().lines.length;
    store.splitLine();
    const state = useGameStore.getState();
    expect(state.lines.length).toBe(origLineCount + 1);
    expect(state.lines[0]).toBe(origLine.substring(0, 2));
    expect(state.lines[1]).toBe(origLine.substring(2));
    expect(state.cursor.row).toBe(1);
    expect(state.cursor.col).toBe(0);
  });
});

describe('gameStore - game flow', () => {
  it('should start in code mode', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    const state = useGameStore.getState();
    expect(state.gameMode).toBe('code');
    expect(state.activeProblems[0].type).toBe('code');
  });

  it('should start in text mode', () => {
    const store = useGameStore.getState();
    store.startGame('text');
    const state = useGameStore.getState();
    expect(state.gameMode).toBe('text');
    expect(state.activeProblems[0].type).toBe('text');
  });

  it('should log key presses', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.logKeyPress('ctrl_f', false);
    store.logKeyPress('mouse', true);
    const state = useGameStore.getState();
    expect(state.keyLogs.length).toBe(2);
    expect(state.keyLogs[0].key).toBe('ctrl_f');
    expect(state.keyLogs[0].isMiss).toBe(false);
    expect(state.keyLogs[1].key).toBe('mouse');
    expect(state.keyLogs[1].isMiss).toBe(true);
    expect(state.missCount).toBe(1);
  });

  it('should show and clear warning', () => {
    const store = useGameStore.getState();
    store.showWarning('test');
    expect(useGameStore.getState().warningMessage).toBe('test');
    store.clearWarning();
    expect(useGameStore.getState().warningMessage).toBeNull();
  });

  it('should check completion correctly', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    // After starting, lines should differ from goal
    expect(store.checkCompletion()).toBe(false);
  });

  it('should reset game properly', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.logKeyPress('ctrl_f', false);
    store.resetGame();
    const state = useGameStore.getState();
    expect(state.currentScreen).toBe('start');
    expect(state.gameMode).toBe('code');
    expect(state.lines).toEqual([]);
    expect(state.problemResults).toEqual([]);
  });
});

describe('gameStore - completion', () => {
  it('should detect completion when lines match goal', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    const problem = store.getCurrentProblem();
    // Manually set lines to the goal content
    useGameStore.setState({ lines: problem.goalContent.split('\n') });
    expect(useGameStore.getState().checkCompletion()).toBe(true);
  });

  it('should complete problem and record result', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    const problem = store.getCurrentProblem();
    // Simulate some key presses
    store.logKeyPress('ctrl_e', false);
    store.logKeyPress('ctrl_f', false);
    // Set lines to goal
    useGameStore.setState({ lines: problem.goalContent.split('\n') });
    store.completeProblem();
    const state = useGameStore.getState();
    expect(state.problemCompleted).toBe(true);
    expect(state.problemResults.length).toBe(1);
    expect(state.problemResults[0].completed).toBe(true);
    expect(state.problemResults[0].problemId).toBe(problem.id);
  });
});
