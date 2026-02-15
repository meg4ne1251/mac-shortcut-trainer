import { describe, it, expect, beforeEach } from 'vitest';
import { loadSavedData } from '../lib/storage';
import type { ShortcutStat } from '../types';

// Mock localStorage
const storage: Record<string, string> = {};
beforeEach(() => {
  for (const key of Object.keys(storage)) delete storage[key];
  Object.defineProperty(global, 'localStorage', {
    value: {
      getItem: (key: string) => storage[key] ?? null,
      setItem: (key: string, val: string) => { storage[key] = val; },
      removeItem: (key: string) => { delete storage[key]; },
      clear: () => { for (const k of Object.keys(storage)) delete storage[k]; },
    },
    writable: true,
    configurable: true,
  });
});

describe('storage - loadSavedData', () => {
  it('should return defaults when nothing saved', () => {
    const data = loadSavedData();
    expect(data.bestTotalTime).toBeNull();
    expect(data.gamesPlayed).toBe(0);
    expect(data.shortcutStats).toEqual({});
  });

  it('should return saved data if present', () => {
    const saved = {
      bestTotalTime: 5000,
      gamesPlayed: 3,
      shortcutStats: {
        ctrl_f: {
          shortcutKey: 'ctrl_f',
          avgLatencyMs: 200,
          totalAttempts: 10,
          missCount: 1,
          masteryScore: 0.8,
        } as ShortcutStat,
      },
    };
    storage['refactoring-racer'] = JSON.stringify(saved);
    const data = loadSavedData();
    expect(data.bestTotalTime).toBe(5000);
    expect(data.gamesPlayed).toBe(3);
    expect(data.shortcutStats['ctrl_f'].avgLatencyMs).toBe(200);
  });

  it('should return defaults on corrupt JSON', () => {
    storage['refactoring-racer'] = 'corrupt{{{';
    const data = loadSavedData();
    expect(data.bestTotalTime).toBeNull();
    expect(data.gamesPlayed).toBe(0);
  });
});
