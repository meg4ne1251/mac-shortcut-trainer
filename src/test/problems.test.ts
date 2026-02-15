import { describe, it, expect } from 'vitest';
import { codeProblems, textProblems, problemsByType, problems } from '../data/problems';

describe('problems data', () => {
  it('should have 5 code problems', () => {
    expect(codeProblems.length).toBe(5);
  });

  it('should have 5 text problems', () => {
    expect(textProblems.length).toBe(5);
  });

  it('should have 10 total problems', () => {
    expect(problems.length).toBe(10);
  });

  it('should have correct types', () => {
    codeProblems.forEach((p) => expect(p.type).toBe('code'));
    textProblems.forEach((p) => expect(p.type).toBe('text'));
  });

  it('all problems should have unique IDs', () => {
    const ids = problems.map((p) => p.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('all problems should have required fields', () => {
    for (const p of problems) {
      expect(p.id).toBeTruthy();
      expect(p.titleKey).toBeTruthy();
      expect(p.descriptionKey).toBeTruthy();
      expect(['easy', 'medium', 'hard']).toContain(p.difficulty);
      expect(p.initialContent).toBeTruthy();
      expect(p.goalContent).toBeTruthy();
      expect(p.requiredKeys.length).toBeGreaterThan(0);
      expect(p.cursorStart).toBeDefined();
    }
  });

  it('initial and goal content should differ', () => {
    for (const p of problems) {
      expect(p.initialContent).not.toBe(p.goalContent);
    }
  });

  it('problemsByType should reference the correct arrays', () => {
    expect(problemsByType.code).toBe(codeProblems);
    expect(problemsByType.text).toBe(textProblems);
  });

  it('all required keys should follow ctrl_x format', () => {
    for (const p of problems) {
      for (const key of p.requiredKeys) {
        expect(key).toMatch(/^ctrl_[a-z]$/);
      }
    }
  });
});
