interface EditorProps {
  lines: string[];
  cursorRow?: number;
  cursorCol?: number;
  showCursor?: boolean;
  label: string;
  variant?: 'primary' | 'secondary';
  /** If provided, characters in `lines` that differ from `goalLines` will be highlighted in red */
  goalLines?: string[];
}

export default function Editor({
  lines,
  cursorRow,
  cursorCol,
  showCursor = false,
  label,
  variant = 'primary',
  goalLines,
}: EditorProps) {
  const bgColor = variant === 'primary' ? 'bg-slate-900' : 'bg-slate-900/60';
  const borderColor = variant === 'primary' ? 'border-cyan-500/40' : 'border-slate-700';

  return (
    <div className={`rounded-lg border ${borderColor} overflow-hidden`}>
      {/* Header */}
      <div
        className={`px-4 py-2 text-xs font-medium uppercase tracking-wider ${variant === 'primary'
            ? 'bg-cyan-500/10 text-cyan-400 border-b border-cyan-500/20'
            : 'bg-slate-800/50 text-slate-400 border-b border-slate-700'
          }`}
      >
        {label}
      </div>

      {/* Code area */}
      <div className={`${bgColor} p-4 overflow-x-auto`}>
        <pre className="font-mono text-sm leading-6">
          {lines.map((line, row) => (
            <div key={row} className="flex">
              {/* Line number */}
              <span className="inline-block w-8 text-right pr-3 text-slate-600 select-none flex-shrink-0">
                {row + 1}
              </span>

              {/* Line content */}
              <span className="relative whitespace-pre">
                {renderLineContent(line, row, cursorRow, cursorCol, showCursor, goalLines)}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

function renderLineContent(
  line: string,
  row: number,
  cursorRow?: number,
  cursorCol?: number,
  showCursor?: boolean,
  goalLines?: string[],
) {
  const isCursorRow = showCursor && row === cursorRow;
  const goalLine = goalLines?.[row];
  const hasDiff = goalLines !== undefined;

  // No cursor, no diff — simple render
  if (!isCursorRow && !hasDiff) {
    return <span className="text-slate-200">{line || ' '}</span>;
  }

  // Build diff-aware character classes
  const col = isCursorRow ? (cursorCol ?? 0) : -1;
  const chars = line.length > 0 ? line.split('') : [' '];
  const isEmptyLine = line.length === 0;

  return (
    <>
      {chars.map((ch, i) => {
        const actualIndex = isEmptyLine ? -1 : i;
        const isCursorChar = isCursorRow && actualIndex === col;
        const isMismatch = hasDiff && !isEmptyLine && goalLine !== undefined && ch !== goalLine[i];

        if (isCursorChar) {
          return (
            <span
              key={i}
              className={`cursor-blink font-bold ${isMismatch
                  ? 'bg-red-400 text-slate-950'
                  : 'bg-cyan-400 text-slate-950'
                }`}
            >
              {ch}
            </span>
          );
        }

        if (isMismatch) {
          return (
            <span key={i} className="text-red-400">
              {ch}
            </span>
          );
        }

        return (
          <span key={i} className="text-slate-200">
            {ch}
          </span>
        );
      })}
      {/* Cursor at end of line */}
      {isCursorRow && col >= line.length && (
        <span className="cursor-blink bg-cyan-400 text-slate-950 font-bold">{' '}</span>
      )}
      {/* Extra characters indicator: line is shorter than goal */}
      {hasDiff && goalLine !== undefined && line.length < goalLine.length && !isCursorRow && (
        <span className="text-red-400/30">{'·'.repeat(goalLine.length - line.length)}</span>
      )}
    </>
  );
}
