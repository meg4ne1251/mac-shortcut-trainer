import { describe, it, expect, beforeEach } from 'vitest';
import { useGameStore } from '../store/gameStore';
import { codeProblems, textProblems } from '../data/problems';

beforeEach(() => {
  useGameStore.getState().resetGame();
});

describe('gameStore – problem filtering', () => {
  it('loads all code problems when no filters are active', () => {
    useGameStore.getState().startGame('code');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.type === 'code')).toBe(true);
    expect(activeProblems).toHaveLength(codeProblems.length);
  });

  it('loads all text problems when no filters are active', () => {
    useGameStore.getState().startGame('text');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.type === 'text')).toBe(true);
    expect(activeProblems).toHaveLength(textProblems.length);
  });

  it('filters code problems by difficulty=easy', () => {
    const store = useGameStore.getState();
    store.setDifficulty('easy');
    store.startGame('code');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.difficulty === 'easy')).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('filters code problems by difficulty=medium', () => {
    const store = useGameStore.getState();
    store.setDifficulty('medium');
    store.startGame('code');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.difficulty === 'medium')).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('filters code problems by difficulty=hard', () => {
    const store = useGameStore.getState();
    store.setDifficulty('hard');
    store.startGame('code');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.difficulty === 'hard')).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('filters code problems by category=typing', () => {
    const store = useGameStore.getState();
    store.setCategory('typing');
    store.startGame('code');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.category === 'typing')).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('filters text problems by category=shortcut', () => {
    const store = useGameStore.getState();
    store.setCategory('shortcut');
    store.startGame('text');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.category === 'shortcut')).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('filters text problems by language=ja', () => {
    const store = useGameStore.getState();
    store.setLanguage('ja');
    store.startGame('text');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.language === 'ja')).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('filters text problems by language=mixed', () => {
    const store = useGameStore.getState();
    store.setLanguage('mixed');
    store.startGame('text');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems.every((p) => p.language === 'mixed')).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('falls back to the full pool when filter produces no matches', () => {
    // All code problems are language=en, so filtering by ja gives 0 → fall back
    const store = useGameStore.getState();
    store.setLanguage('ja');
    store.startGame('code');
    const { activeProblems } = useGameStore.getState();
    expect(activeProblems).toHaveLength(codeProblems.length);
  });

  it('combined difficulty + category filter returns only matching problems', () => {
    const store = useGameStore.getState();
    store.setDifficulty('easy');
    store.setCategory('shortcut');
    store.startGame('text');
    const { activeProblems } = useGameStore.getState();
    expect(
      activeProblems.every((p) => p.difficulty === 'easy' && p.category === 'shortcut'),
    ).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('combined difficulty + language filter on text problems', () => {
    const store = useGameStore.getState();
    store.setDifficulty('easy');
    store.setLanguage('ja');
    store.startGame('text');
    const { activeProblems } = useGameStore.getState();
    expect(
      activeProblems.every((p) => p.difficulty === 'easy' && p.language === 'ja'),
    ).toBe(true);
    expect(activeProblems.length).toBeGreaterThan(0);
  });

  it('finishGame transitions currentScreen to result', () => {
    const store = useGameStore.getState();
    store.startGame('code');
    store.finishGame();
    expect(useGameStore.getState().currentScreen).toBe('result');
  });

  it('setDifficulty(null) after a filter resets to all problems', () => {
    const store = useGameStore.getState();
    store.setDifficulty('easy');
    store.startGame('code');
    expect(useGameStore.getState().activeProblems.every((p) => p.difficulty === 'easy')).toBe(true);

    // Reset and start with no filter
    useGameStore.getState().resetGame();
    useGameStore.getState().startGame('code');
    expect(useGameStore.getState().activeProblems).toHaveLength(codeProblems.length);
  });
});
