import { useEffect, type RefObject } from 'react';
import { useGameStore } from '../store/gameStore';

/** Maps Ctrl+key combos and other keys to store actions. */
export function useKeyHandler(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    let warningTimer: ReturnType<typeof setTimeout> | null = null;

    const handleKeyDown = (e: KeyboardEvent) => {
      const state = useGameStore.getState();
      if (state.currentScreen !== 'game' || state.problemCompleted) return;

      // Skip events during IME composition (Japanese input etc.)
      if (e.isComposing) return;

      const { ctrlKey, metaKey, shiftKey, key } = e;

      // --- Ctrl shortcuts ---
      if (ctrlKey || metaKey) {
        const k = key.toLowerCase();

        // Undo: Ctrl+Z (no Shift)
        if (k === 'z' && !shiftKey) {
          e.preventDefault();
          state.undo();
          state.logKeyPress('ctrl_z', false);
          // Check if undo resulted in completion
          checkAfterEdit('undo');
          return;
        }

        // Redo: Ctrl+Shift+Z
        if (k === 'z' && shiftKey) {
          e.preventDefault();
          state.redo();
          state.logKeyPress('ctrl_shift_z', false);
          checkAfterEdit('redo');
          return;
        }

        // Navigation handlers (no snapshot needed)
        const navHandlers: Record<string, () => void> = {
          f: state.moveCursorRight,
          b: state.moveCursorLeft,
          n: state.moveCursorDown,
          p: state.moveCursorUp,
          a: state.moveCursorToLineStart,
          e: state.moveCursorToLineEnd,
        };

        if (navHandlers[k]) {
          e.preventDefault();
          navHandlers[k]();
          state.logKeyPress(`ctrl_${k}`, false);
          return;
        }

        // Edit handlers (push snapshot before edit)
        const editHandlers: Record<string, () => void> = {
          k: state.killLine,
          h: state.deleteBackward,
          d: state.deleteForward,
        };

        if (editHandlers[k]) {
          e.preventDefault();
          state.pushSnapshot();
          editHandlers[k]();
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
        state.pushSnapshot();
        state.deleteBackward();
        state.logKeyPress('backspace', false);
        checkAfterEdit('h');
        return;
      }
      if (key === 'Delete') {
        e.preventDefault();
        state.pushSnapshot();
        state.deleteForward();
        state.logKeyPress('delete', false);
        checkAfterEdit('d');
        return;
      }

      // --- Enter ---
      if (key === 'Enter') {
        e.preventDefault();
        state.pushSnapshot();
        state.splitLine();
        state.logKeyPress('enter', false);
        checkAfterEdit('enter');
        return;
      }

      // --- Tab → insert 2 spaces ---
      if (key === 'Tab') {
        e.preventDefault();
        state.pushSnapshot();
        state.insertChar('  ');
        state.logKeyPress('tab', false);
        checkAfterEdit('tab');
        return;
      }

      // --- Printable character ---
      if (key.length === 1 && !ctrlKey && !metaKey && !e.altKey) {
        e.preventDefault();
        state.pushSnapshot();
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
      // Check after any text-modifying or undo/redo operation
      const editKeys = new Set(['k', 'h', 'd', 'char', 'enter', 'tab', 'undo', 'redo']);
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

    /** Handle IME composition end — insert the confirmed string */
    const handleCompositionEnd = (e: CompositionEvent) => {
      const state = useGameStore.getState();
      if (state.currentScreen !== 'game' || state.problemCompleted) return;
      if (e.data) {
        state.pushSnapshot();
        state.insertChar(e.data);
        state.logKeyPress('ime_commit', false);
        checkAfterEdit('char');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('compositionend', handleCompositionEnd);
    const container = containerRef.current;
    container?.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('compositionend', handleCompositionEnd);
      container?.removeEventListener('mousedown', handleMouseDown);
      if (warningTimer) clearTimeout(warningTimer);
    };
  }, [containerRef]);
}
