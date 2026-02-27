import { describe, it, expect, beforeEach } from 'vitest';
import { useGameStore } from '../store/gameStore';

beforeEach(() => {
  useGameStore.getState().resetGame();
});

// Convenience: start a game and return the fresh store reference
function setup() {
  useGameStore.getState().startGame('code');
  return useGameStore.getState();
}

describe('gameStore – undo/redo', () => {
  it('undo on empty stack leaves state unchanged', () => {
    setup();
    const linesBefore = [...useGameStore.getState().lines];
    useGameStore.getState().undo();
    expect(useGameStore.getState().lines).toEqual(linesBefore);
    expect(useGameStore.getState().undoStack).toHaveLength(0);
  });

  it('redo on empty stack leaves state unchanged', () => {
    setup();
    const linesBefore = [...useGameStore.getState().lines];
    useGameStore.getState().redo();
    expect(useGameStore.getState().lines).toEqual(linesBefore);
    expect(useGameStore.getState().redoStack).toHaveLength(0);
  });

  it('pushSnapshot + undo restores previous lines', () => {
    setup();
    const original = [...useGameStore.getState().lines];
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().deleteForward();    // mutate
    expect(useGameStore.getState().lines).not.toEqual(original);
    useGameStore.getState().undo();
    expect(useGameStore.getState().lines).toEqual(original);
  });

  it('pushSnapshot + undo + redo re-applies the edit', () => {
    setup();
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('X');
    const afterEdit = [...useGameStore.getState().lines];
    useGameStore.getState().undo();
    expect(useGameStore.getState().lines).not.toEqual(afterEdit);
    useGameStore.getState().redo();
    expect(useGameStore.getState().lines).toEqual(afterEdit);
  });

  it('undo moves current state to redo stack', () => {
    setup();
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('Y');
    expect(useGameStore.getState().redoStack).toHaveLength(0);
    useGameStore.getState().undo();
    expect(useGameStore.getState().redoStack).toHaveLength(1);
  });

  it('redo moves current state back to undo stack', () => {
    setup();
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('Z');
    useGameStore.getState().undo();
    // undoStack consumed, redoStack has 1
    expect(useGameStore.getState().undoStack).toHaveLength(0);
    useGameStore.getState().redo();
    expect(useGameStore.getState().undoStack).toHaveLength(1);
    expect(useGameStore.getState().redoStack).toHaveLength(0);
  });

  it('pushSnapshot clears the redo stack', () => {
    setup();
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('A');
    useGameStore.getState().undo();
    expect(useGameStore.getState().redoStack).toHaveLength(1);
    // A new edit must clear redo
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('B');
    expect(useGameStore.getState().redoStack).toHaveLength(0);
  });

  it('undo restores cursor position captured at snapshot time', () => {
    setup();
    useGameStore.getState().moveCursorRight();
    useGameStore.getState().moveCursorRight();
    const cursorAtSnapshot = { ...useGameStore.getState().cursor }; // col 2
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().moveCursorToLineEnd(); // col = lineLen (nav, no snapshot)
    useGameStore.getState().undo();
    expect(useGameStore.getState().cursor).toEqual(cursorAtSnapshot);
  });

  it('three sequential undos restore the original state (LIFO)', () => {
    setup();
    const original = [...useGameStore.getState().lines];
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('a');
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('b');
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('c');
    expect(useGameStore.getState().undoStack).toHaveLength(3);
    useGameStore.getState().undo();
    useGameStore.getState().undo();
    useGameStore.getState().undo();
    expect(useGameStore.getState().lines).toEqual(original);
    expect(useGameStore.getState().undoStack).toHaveLength(0);
    expect(useGameStore.getState().redoStack).toHaveLength(3);
  });

  it('two sequential redos re-apply in FIFO order', () => {
    setup();
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('x');
    const afterX = [...useGameStore.getState().lines];
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('y');
    const afterY = [...useGameStore.getState().lines];
    useGameStore.getState().undo();
    useGameStore.getState().undo();
    useGameStore.getState().redo(); // → afterX
    expect(useGameStore.getState().lines).toEqual(afterX);
    useGameStore.getState().redo(); // → afterY
    expect(useGameStore.getState().lines).toEqual(afterY);
  });

  it('undo stack is capped at MAX_HISTORY (50)', () => {
    setup();
    for (let i = 0; i < 55; i++) {
      useGameStore.getState().pushSnapshot();
    }
    expect(useGameStore.getState().undoStack.length).toBe(50);
  });

  it('loadProblem resets both undo and redo stacks', () => {
    setup();
    useGameStore.getState().pushSnapshot();
    useGameStore.getState().insertChar('Q');
    useGameStore.getState().undo(); // fills redoStack
    expect(useGameStore.getState().redoStack.length).toBe(1);
    useGameStore.getState().loadProblem(0);
    expect(useGameStore.getState().undoStack.length).toBe(0);
    expect(useGameStore.getState().redoStack.length).toBe(0);
  });
});
