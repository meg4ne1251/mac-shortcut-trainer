interface EditorProps {
  lines: string[];
  cursorRow?: number;
  cursorCol?: number;
  showCursor?: boolean;
  label: string;
  variant?: 'primary' | 'secondary';
}

export default function Editor({
  lines,
  cursorRow,
  cursorCol,
  showCursor = false,
  label,
  variant = 'primary',
}: EditorProps) {
  const bgColor = variant === 'primary' ? 'bg-slate-900' : 'bg-slate-900/60';
  const borderColor = variant === 'primary' ? 'border-cyan-500/40' : 'border-slate-700';

  return (
    <div className={`rounded-lg border ${borderColor} overflow-hidden`}>
      {/* Header */}
      <div
        className={`px-4 py-2 text-xs font-medium uppercase tracking-wider ${
          variant === 'primary'
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
                {renderLineContent(line, row, cursorRow, cursorCol, showCursor)}
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
) {
  const isCursorRow = showCursor && row === cursorRow;

  if (!isCursorRow) {
    return <span className="text-slate-200">{line || ' '}</span>;
  }

  const col = cursorCol ?? 0;
  const before = line.substring(0, col);
  const at = line[col] ?? ' ';
  const after = col < line.length ? line.substring(col + 1) : '';

  return (
    <>
      <span className="text-slate-200">{before}</span>
      <span className="cursor-blink bg-cyan-400 text-slate-950 font-bold">{at}</span>
      <span className="text-slate-200">{after}</span>
    </>
  );
}
