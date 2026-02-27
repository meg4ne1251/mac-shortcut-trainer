import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import Editor from '../Editor/Editor';
import AdPlaceholder from '../ui/AdPlaceholder';
import { useTimer, formatTime } from '../../hooks/useTimer';
import type { Difficulty, Category, Language } from '../../types';

const SHORTCUT_HINTS = [
  { keys: '⌃F', desc: '→' },
  { keys: '⌃B', desc: '←' },
  { keys: '⌃N', desc: '↓' },
  { keys: '⌃P', desc: '↑' },
  { keys: '⌃A', desc: '⇤' },
  { keys: '⌃E', desc: '⇥' },
  { keys: '⌃K', desc: '✂' },
  { keys: '⌃H', desc: '⌫' },
  { keys: '⌃D', desc: '⌦' },
  { keys: '⌃Z', desc: '↩' },
  { keys: '⌃⇧Z', desc: '↪' },
] as const;

export default function GameScreen() {
  const { t } = useTranslation();

  const {
    currentProblemIndex,
    activeProblems,
    gameMode,
    lines,
    cursor,
    missCount,
    warningMessage,
    problemCompleted,
    problemStartTime,
    problemResults,
    adaptiveLoading,
  } = useGameStore();

  const problem = activeProblems[currentProblemIndex];
  const goalLines = problem?.goalContent.split('\n') ?? [];
  const isRunning = !!problemStartTime && !problemCompleted;
  const elapsed = useTimer(isRunning);

  // For adaptive mode, show how many problems completed out of 5
  const totalProblems = gameMode === 'adaptive' ? 5 : activeProblems.length;
  const currentNum = gameMode === 'adaptive' ? problemResults.length + 1 : currentProblemIndex + 1;

  const difficultyColors: Record<Difficulty, string> = {
    easy: 'text-green-400 bg-green-400/10 border-green-400/30',
    medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    hard: 'text-red-400 bg-red-400/10 border-red-400/30',
  };

  const categoryIcons: Record<Category, string> = {
    typing: '⌨️',
    shortcut: '⚡',
  };

  const languageBadges: Record<Language, string> = {
    en: 'EN',
    ja: 'JA',
    mixed: 'MIX',
  };

  const modeLabels: Record<string, string> = {
    code: t('game.modeCode'),
    text: t('game.modeText'),
    adaptive: t('game.modeAdaptive'),
  };

  const resetGame = useGameStore((s) => s.resetGame);

  if (adaptiveLoading || !problem) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-cyan-400 text-lg animate-pulse">{t('game.loading')}</div>
      </div>
    );
  }

  // Use "Your Text" label for text mode
  const currentLabel = problem.type === 'text' ? t('game.currentText') : t('game.current');

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="hidden lg:flex w-64 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-950/50 p-4">
        {/* Shortcut hints */}
        <div className="mb-6">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {t('game.shortcuts')}
          </h3>
          <div className="space-y-1">
            {SHORTCUT_HINTS.map(({ keys, desc }) => (
              <div
                key={keys}
                className="flex items-center justify-between rounded-md bg-slate-900/50 px-2 py-1.5"
              >
                <kbd className="rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-cyan-400">
                  {keys}
                </kbd>
                <span className="text-[11px] text-slate-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Ad Placeholder in sidebar */}
        <div className="mt-auto">
          <AdPlaceholder />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col px-4 py-4 overflow-auto">
        {/* Top bar */}
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={resetGame}
              className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-500 hover:border-slate-500 hover:text-slate-300 transition-colors"
              title={t('game.quit')}
            >
              ✕ {t('game.quit')}
            </button>
            <span className="text-sm text-slate-400">
              {t('game.problem')} {currentNum} {t('game.of')} {totalProblems}
            </span>
            <span
              className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase ${difficultyColors[problem.difficulty]}`}
            >
              {problem.difficulty}
            </span>
            <span className="text-[10px] text-slate-500 border border-slate-700 rounded-full px-2 py-0.5">
              {categoryIcons[problem.category]} {modeLabels[gameMode]}
            </span>
            <span className="text-[10px] text-slate-500 border border-slate-700 rounded-full px-2 py-0.5">
              {languageBadges[problem.language]}
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono text-sm">
            <div>
              <span className="text-slate-500">{t('game.time')}: </span>
              <span className="text-cyan-400">{formatTime(elapsed)}</span>
            </div>
            <div>
              <span className="text-slate-500">{t('game.misses')}: </span>
              <span className={missCount > 0 ? 'text-red-400' : 'text-green-400'}>{missCount}</span>
            </div>
          </div>
        </div>

        {/* Problem info */}
        <div className="mx-auto w-full max-w-4xl mb-4">
          <h2 className="text-lg font-semibold text-slate-200">{t(problem.titleKey)}</h2>
          <p className="text-sm text-slate-400">{t(problem.descriptionKey)}</p>
        </div>

        {/* Editors */}
        <div className="mx-auto w-full max-w-4xl flex-1 space-y-4">
          {/* Goal (read-only) */}
          <Editor lines={goalLines} label={t('game.goal')} variant="secondary" />

          {/* Player's code/text with diff highlighting */}
          <Editor
            lines={lines}
            cursorRow={cursor.row}
            cursorCol={cursor.col}
            showCursor
            label={currentLabel}
            variant="primary"
            goalLines={goalLines}
          />
        </div>

        {/* Warning / completion overlay */}
        <div className="mx-auto w-full max-w-4xl mt-3 h-8">
          {warningMessage && (
            <div className="flex items-center gap-2 rounded-md bg-red-500/10 border border-red-500/30 px-4 py-1.5 text-sm text-red-400 animate-pulse">
              ⚠️ {t('game.warning')}
            </div>
          )}
          {problemCompleted && (
            <div className="flex items-center gap-2 rounded-md bg-green-500/10 border border-green-500/30 px-4 py-1.5 text-sm text-green-400">
              ✓ {t('game.completed')}
            </div>
          )}
        </div>

        {/* Mobile-only: Shortcut hints at bottom */}
        <div className="lg:hidden mx-auto w-full max-w-4xl mt-4">
          <div className="flex flex-wrap gap-2 justify-center text-[10px] text-slate-600">
            {SHORTCUT_HINTS.map(({ keys, desc }) => (
              <kbd
                key={keys}
                className="rounded border border-slate-800 bg-slate-900 px-1.5 py-0.5"
              >
                {keys}{desc}
              </kbd>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
