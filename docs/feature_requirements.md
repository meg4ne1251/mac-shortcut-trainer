# Role

You are an experienced Senior Full Stack Engineer.
Your goal is to design a maintainable and readable codebase while respecting the existing design philosophy.

# Project Context

- **Tech Stack**: Vite, React 19, TypeScript, Tailwind CSS 4, Zustand, i18next.
- **Current Status**: The application is a Mac shortcut trainer game. The basic game loop (typing/navigating code) is implemented.
- **Objective**: Implement several new features to enhance gameplay, user experience, and content volume.

# Request: Feature Additions & Changes

The following changes will be implemented to address the user's requirements.

## Feature 1: Left Side Panel Layout & Ad Placeholder

- **Requirements**:
  - Introduce a sidebar on the left side of the `GameScreen`.
  - Move the "Mac Keybinds" hint (currently at the bottom) to this new left sidebar.
  - Reserve space in this sidebar for future advertisements.
  - Ensure the main game area remains centered or appropriately sized next to the sidebar.
  - Responsive design: specific handling for smaller screens (e.g., hide sidebar or move to bottom) if necessary, but primary focus is desktop.
- **Target Files**: `src/components/screens/GameScreen.tsx`

## Feature 2: Diff Highlighting

- **Requirements**:
  - Visualize the difference between the "Goal" text and the "User's Current Input".
  - Instead of just showing the goal text as static, highlight characters in the user's input that do *not* match the goal text in red (or a distinct error color).
  - This helps the user instantly recognize mistakes.
- **Target Files**: `src/components/Editor/Editor.tsx`

## Feature 3: Undo / Redo Support

- **Requirements**:
  - Implement `Ctrl+Z` to Undo the last action (text edit or cursor movement if tracked).
  - Implement `Ctrl+Shift+Z` to Redo the last undone action.
  - This functionality must work within the coding area.
- **Target Files**: `src/hooks/useKeyHandler.ts`, `src/store/gameStore.ts`

## Feature 4: Expand Problem Set (Japanese & Difficulty)

- **Requirements**:
  - Add approximately 20 new problems, focusing on **Japanese** text.
  - Ensure problems cover all difficulty levels (Easy, Normal, Hard).
  - If a specific difficulty lacks problems, generate new ones to balance the distribution.
- **Target Files**: `src/data/problems.ts`

## Feature 5: Multilingual (Input Switching) Documents

- **Requirements**:
  - Add problems that require switching between English and Japanese input methods (IME).
  - These problems should challenge the user's ability to switch contexts quickly.
  - Clear visual indication or metadata might be needed to warn the user that IME switching is required.
- **Target Files**: `src/data/problems.ts`, `src/components/screens/StartScreen.tsx` (if category indication is needed)

## Feature 6: Focus Categories (Typing vs. Shortcuts)

- **Requirements**:
  - Classify problems into two main categories:
        1. **Typing-focused**: Heavy text entry, fewer complex navigations.
        2. **Navigation-focused**: Heavy use of shortcuts (jump word, delete line) with less raw typing.
  - In the `StartScreen`, allow the user to choose which type of practice they want.
- **Target Files**: `src/data/problems.ts`, `src/components/screens/StartScreen.tsx`, `src/store/gameStore.ts`

## Feature 7: Game Difficulty Modes

- **Requirements**:
  - Introduce 3 difficulty levels: **Easy**, **Normal**, **Hard**.
  - **Differentiation**:
    - **Easy**: Simple content, generous constraints. Suitable for learning basic cursor movements (`Ctrl+F/B/N/P`).
    - **Normal**: Standard code editing tasks. Balanced mix of typing and navigation.
    - **Hard**: Complex editing, long text, or tricky shortcut combinations (`Ctrl+K` followed by `Ctrl+Y`, etc.). Stricter timing or precision requirements (optional implementation choice).
  - **Tagging**: All existing and new problems must be tagged with a difficulty level.
  - **Selection**: Users select difficulty on the `StartScreen`.
- **Target Files**: `src/store/gameStore.ts`, `src/components/screens/StartScreen.tsx`, `src/data/problems.ts`

# Constraints (Important)

- **Reuse Existing Components**: Use `Editor`, `Button` (if exists), or existing UI patterns.
- **No New Heavy Libraries**: Implement Undo/Redo logic using simple state history in `zustand` or local state, without adding a heavy undo-redo library.
- **Type Safety**: Avoid `any`. Define interfaces for Problem modes/categories.
- **Design**: Maintain the "Premium/Dark Mode" aesthetic (Slate/Cyan colors) defined in the current `Editor`.

# Implementation Plan

1. **Refactor Data & State**:
    - Update `Problem` interface to include:
        - `category`: 'typing' | 'shortcut'
        - `difficulty`: 'easy' | 'normal' | 'hard'
        - `language`: 'en' | 'ja' | 'mixed'
    - **Categorize & Generate**:
        - Review existing problems and assign tags.
        - Generate strict "Hard" problems and "Japanese" problems to fill gaps.
    - Update `gameStore` to handle `difficulty` selection and filtering.
    - Add `history` (past/future) states to `gameStore` for Undo/Redo.
2. **Update Logic**:
    - Implement `undo` and `redo` actions in `gameStore`.
    - Bind `Ctrl+Z` / `Ctrl+Shift+Z` in `useKeyHandler`.
    - Update `Editor` component to accept `originalText` (goal) vs `currentText` and implement the diff highlighting logic.
3. **Update UI**:
    - Modify `GameScreen` to use a Grid/Flex layout with a left sidebar.
    - Update `StartScreen` to include:
        - Category selection (Typing / Shortcut)
        - Difficulty selection (Easy / Normal / Hard)
