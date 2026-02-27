import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Editor from '../components/Editor/Editor';

describe('Editor – diff highlighting and cursor rendering', () => {
  it('renders the code area without errors for plain content', () => {
    const { container } = render(<Editor lines={['hello world']} label="Test" />);
    expect(container.querySelector('pre')).not.toBeNull();
  });

  it('does not show red highlights when goalLines is not provided', () => {
    const { container } = render(<Editor lines={['hello']} label="Test" />);
    expect(container.querySelector('.text-red-400')).toBeNull();
  });

  it('highlights mismatched characters in red', () => {
    const { container } = render(
      <Editor lines={['hxllo']} label="Test" goalLines={['hello']} />,
    );
    const redTexts = Array.from(container.querySelectorAll('.text-red-400')).map(
      (el) => el.textContent,
    );
    // 'x' (index 1) differs from 'e'
    expect(redTexts).toContain('x');
  });

  it('does not highlight matching characters as errors', () => {
    const { container } = render(
      <Editor lines={['hello']} label="Test" goalLines={['hello']} />,
    );
    expect(container.querySelector('.text-red-400')).toBeNull();
  });

  it('places the cursor glyph at the correct character index', () => {
    const { container } = render(
      <Editor lines={['hello']} label="Test" showCursor cursorRow={0} cursorCol={2} />,
    );
    const cursorSpan = container.querySelector('.cursor-blink');
    expect(cursorSpan).not.toBeNull();
    // index 2 of 'hello' is 'l'
    expect(cursorSpan?.textContent).toBe('l');
  });

  it('cursor on a mismatched character uses red background', () => {
    const { container } = render(
      <Editor
        lines={['hxllo']}
        label="Test"
        showCursor
        cursorRow={0}
        cursorCol={1}
        goalLines={['hello']}
      />,
    );
    const cursorSpan = container.querySelector('.cursor-blink');
    expect(cursorSpan?.classList.contains('bg-red-400')).toBe(true);
    expect(cursorSpan?.textContent).toBe('x');
  });

  it('cursor at end-of-line (past all chars) renders a space', () => {
    const { container } = render(
      <Editor lines={['hi']} label="Test" showCursor cursorRow={0} cursorCol={2} />,
    );
    const cursorSpan = container.querySelector('.cursor-blink');
    expect(cursorSpan?.textContent).toBe(' ');
  });

  it('empty cursor row renders exactly one space — no double-space regression', () => {
    // BUG: before fix, a placeholder char (text-slate-200 ' ') was rendered in addition
    // to the end-of-line cursor fallback, producing two spaces.
    const { container } = render(
      <Editor
        lines={['']}
        label="Test"
        showCursor
        cursorRow={0}
        cursorCol={0}
        goalLines={['hello']}
      />,
    );
    const lineContent = container.querySelector('.relative.whitespace-pre');
    // After fix: exactly one space from the cursor fallback
    expect(lineContent?.textContent).toBe(' ');
  });

  it('non-cursor empty row still renders visible content (placeholder + dots)', () => {
    // Row 0 is empty, row 1 holds the cursor — row 0 must still show something
    const { container } = render(
      <Editor
        lines={['', 'world']}
        label="Test"
        showCursor
        cursorRow={1}
        cursorCol={0}
        goalLines={['hello', 'world']}
      />,
    );
    const lineContents = container.querySelectorAll('.relative.whitespace-pre');
    expect((lineContents[0].textContent?.length ?? 0)).toBeGreaterThan(0);
  });

  it('shows dot indicators for missing trailing characters in shorter lines', () => {
    // 'hi' (2 chars) vs goal 'hello' (5 chars) → 3 missing → '···'
    const { container } = render(
      <Editor lines={['hi']} label="Test" goalLines={['hello']} />,
    );
    const lineContent = container.querySelector('.relative.whitespace-pre');
    expect(lineContent?.textContent).toContain('···');
  });

  it('renders the correct number of line-number elements', () => {
    const { container } = render(
      <Editor
        lines={['foo', 'bar', 'baz']}
        label="Editor"
        goalLines={['foo', 'bar', 'baz']}
      />,
    );
    const lineNums = container.querySelectorAll('.text-slate-600.select-none');
    expect(lineNums).toHaveLength(3);
  });

  it('highlights mismatches across multiple lines independently', () => {
    const { container } = render(
      <Editor
        lines={['hello', 'XXXXX']}
        label="Test"
        goalLines={['hello', 'world']}
      />,
    );
    // Line 0: all match → no reds from that line
    // Line 1: all differ → 5 red spans
    const redSpans = container.querySelectorAll('.text-red-400');
    expect(redSpans.length).toBeGreaterThanOrEqual(5);
  });
});
