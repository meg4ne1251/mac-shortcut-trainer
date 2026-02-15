import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

/** Maps Ctrl+key combos and other keys to store actions. */
export function useKeyHandler() {
  useEffect(() => {
    let warningTimer: ReturnType<typeof setTimeout> | null = null;

    const handleKeyDown = (e: KeyboardEvent) => {
      const state = useGameStore.getState();
      if (state.currentScreen !== 'game' || state.problemCompleted) return;

      const { ctrlKey, metaKey, key } = e;

      // --- Ctrl shortcuts ---
      if (ctrlKey || metaKey) {
        const k = key.toLowerCase();
        const handlers: Record<string, () => void> = {
          f: state.moveCursorRight,
          b: state.moveCursorLeft,
          n: state.moveCursorDown,
          p: state.moveCursorUp,
          a: state.moveCursorToLineStart,
          e: state.moveCursorToLineEnd,
          k: state.killLine,
          h: state.deleteBackward,
          d: state.deleteForward,
        };

        if (handlers[k]) {
          e.preventDefault();
          handlers[k]();
          state.logKeyPress(`ctrl_${k}`, false);
          checkAfterEdit(k);
          return;
        }

        // Block other Ctrl combos silently
        e.preventDefault();
        return;
      }

      // --- Arrow keys → penalise ---
      if (key.startsWith('Arrow')) {
        e.preventDefault();
        state.logKeyPress(`arrow_${key.replace('Arrow', '').toLowerCase()}`, true);
        showWarn(state);
        return;
      }

      // --- Backspace / Delete (no penalty, but no shortcut credit) ---
      if (key === 'Backspace') {
        e.preventDefault();
        state.deleteBackward();
        state.logKeyPress('backspace', false);
        checkAfterEdit('h');
        return;
      }
      if (key === 'Delete') {
        e.preventDefault();
        state.deleteForward();
        state.logKeyPress('delete', false);
        checkAfterEdit('d');
        return;
      }

      // --- Enter ---
      if (key === 'Enter') {
        e.preventDefault();
        state.splitLine();
        state.logKeyPress('enter', false);
        checkAfterEdit('enter');
        return;
      }

      // --- Tab → insert 2 spaces ---
      if (key === 'Tab') {
        e.preventDefault();
        state.insertChar('  ');
        state.logKeyPress('tab', false);
        checkAfterEdit('tab');
        return;
      }

      // --- Printable character ---
      if (key.length === 1 && !ctrlKey && !metaKey && !e.altKey) {
        e.preventDefault();
        state.insertChar(key);
        state.logKeyPress('char', false);
        checkAfterEdit('char');
        return;
      }
    };

    /** Show warning and auto-clear */
    function showWarn(state: ReturnType<typeof useGameStore.getState>) {
      state.showWarning('warning');
      if (warningTimer) clearTimeout(warningTimer);
      warningTimer = setTimeout(() => {
        useGameStore.getState().clearWarning();
      }, 2000);
    }

    /** Check for problem completion after an edit operation */
    function checkAfterEdit(k: string) {
      // Only check after text-modifying operations
      const editKeys = new Set(['k', 'h', 'd', 'char', 'enter', 'tab']);
      if (!editKeys.has(k)) return;

      const s = useGameStore.getState();
      if (s.checkCompletion()) {
        s.completeProblem();
        setTimeout(() => {
          useGameStore.getState().nextProblem();
        }, 1500);
      }
    }

    // --- Mouse click in game area → penalise ---
    const handleMouseDown = () => {
      const state = useGameStore.getState();
      if (state.currentScreen !== 'game' || state.problemCompleted) return;
      state.logKeyPress('mouse', true);
      showWarn(state);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
      if (warningTimer) clearTimeout(warningTimer);
    };
  }, []);
}
