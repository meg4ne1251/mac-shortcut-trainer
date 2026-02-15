import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import type { GameMode } from '../../types';
import AdPlaceholder from '../ui/AdPlaceholder';

const SHORTCUTS = [
  'ctrlF', 'ctrlB', 'ctrlN', 'ctrlP',
  'ctrlA', 'ctrlE', 'ctrlK', 'ctrlH', 'ctrlD',
] as const;

const MODES: { key: GameMode; icon: string }[] = [
  { key: 'code',     icon: '💻' },
  { key: 'text',     icon: '📝' },
  { key: 'adaptive', icon: '🎯' },
];

export default function StartScreen() {
  const { t, i18n } = useTranslation();
  const startGame = useGameStore((s) => s.startGame);
  const [selectedMode, setSelectedMode] = useState<GameMode>('code');

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ja' ? 'en' : 'ja');
  };

  const enterFullscreen = () => {
    document.documentElement.requestFullscreen?.().catch(() => {});
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* Lang toggle */}
      <button
        onClick={toggleLang}
        className="absolute top-4 right-4 rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-400 hover:border-slate-500 hover:text-slate-200 transition-colors"
      >
        {i18n.language === 'ja' ? 'EN' : 'JA'}
      </button>

      {/* Logo / Title */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-5xl font-bold tracking-tight">
          <span className="text-cyan-400">⌨</span>{' '}
          {t('app.title')}
        </h1>
        <p className="text-lg text-slate-400">{t('app.subtitle')}</p>
      </div>

      {/* How to play */}
      <div className="mb-6 w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900/50 p-6">
        <h2 className="mb-3 text-lg font-semibold text-slate-200">{t('start.howToPlay')}</h2>
        <p className="mb-4 text-sm text-slate-400">{t('start.description')}</p>

        <h3 className="mb-2 text-sm font-semibold text-slate-300">{t('start.shortcuts')}</h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
          {SHORTCUTS.map((key) => (
            <div key={key} className="flex items-center gap-2 py-0.5">
              <kbd className="inline-flex h-5 min-w-[4rem] items-center justify-center rounded border border-slate-700 bg-slate-800 px-1.5 font-mono text-[10px] text-cyan-400">
                {t(`start.shortcutList.${key}`).split('—')[0].trim()}
              </kbd>
              <span className="text-slate-400">
                {t(`start.shortcutList.${key}`).split('—')[1]?.trim()}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">💡 {t('start.tip')}</p>
      </div>

      {/* Mode selection */}
      <div className="mb-6 w-full max-w-lg">
        <h3 className="mb-3 text-center text-sm font-semibold text-slate-300">
          {t('start.selectMode')}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {MODES.map(({ key, icon }) => (
            <button
              key={key}
              onClick={() => setSelectedMode(key)}
              className={`rounded-lg border p-3 text-center transition-all ${
                selectedMode === key
                  ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/10'
                  : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              <div className="text-xl mb-1">{icon}</div>
              <div className="text-sm font-semibold">
                {t(`start.mode${key.charAt(0).toUpperCase() + key.slice(1)}`)}
              </div>
              <div className="text-[10px] mt-0.5 opacity-70">
                {t(`start.mode${key.charAt(0).toUpperCase() + key.slice(1)}Desc`)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => startGame(selectedMode)}
          className="rounded-lg bg-cyan-500 px-8 py-3 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30 active:scale-95"
        >
          {t('start.play')}
        </button>
        <button
          onClick={enterFullscreen}
          className="rounded-lg border border-slate-700 px-4 py-3 text-sm text-slate-400 transition-colors hover:border-slate-500 hover:text-slate-200"
        >
          {t('start.fullscreen')}
        </button>
      </div>

      <AdPlaceholder />
    </div>
  );
}
