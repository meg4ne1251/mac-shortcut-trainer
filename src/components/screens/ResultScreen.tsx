import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../store/gameStore';
import { problems as allProblems } from '../../data/problems';
import { formatTime } from '../../hooks/useTimer';
import type { ShortcutStat} from '../../types';
import AdPlaceholder from '../ui/AdPlaceholder';

/** Human-readable shortcut labels */
const KEY_LABELS: Record<string, string> = {
  ctrl_f: 'Ctrl+F',
  ctrl_b: 'Ctrl+B',
  ctrl_n: 'Ctrl+N',
  ctrl_p: 'Ctrl+P',
  ctrl_a: 'Ctrl+A',
  ctrl_e: 'Ctrl+E',
  ctrl_k: 'Ctrl+K',
  ctrl_h: 'Ctrl+H',
  ctrl_d: 'Ctrl+D',
};

const SHORTCUT_KEYS = new Set(Object.keys(KEY_LABELS));

export default function ResultScreen() {
  const { t } = useTranslation();
  const { problemResults, resetGame, activeProblems } = useGameStore();

  // Aggregate stats across all problems
  const aggregated = useMemo(() => {
    const agg: Record<string, { totalLatency: number; count: number; misses: number }> = {};

    for (const r of problemResults) {
      for (const [key, stat] of Object.entries(r.shortcutStats)) {
        if (!SHORTCUT_KEYS.has(key)) continue;
        if (!agg[key]) agg[key] = { totalLatency: 0, count: 0, misses: 0 };
        agg[key].totalLatency += stat.avgLatencyMs * stat.totalAttempts;
        agg[key].count += stat.totalAttempts;
        agg[key].misses += stat.missCount;
      }
    }

    const stats: ShortcutStat[] = Object.entries(agg).map(([key, s]) => {
      const avgLatency = s.count > 0 ? s.totalLatency / s.count : 0;
      const missRate = s.count > 0 ? s.misses / s.count : 0;
      return {
        shortcutKey: key,
        avgLatencyMs: avgLatency,
        totalAttempts: s.count,
        missCount: s.misses,
        masteryScore: Math.max(0, Math.min(1, (500 / Math.max(avgLatency, 1)) * (1 - missRate))),
      };
    });

    stats.sort((a, b) => a.masteryScore - b.masteryScore);
    return stats;
  }, [problemResults]);

  const totalTime = problemResults.reduce((sum, r) => sum + r.totalTimeMs, 0);
  const totalMisses = problemResults.reduce((sum, r) => sum + r.totalMisses, 0);
  const totalKeys = aggregated.reduce((sum, s) => sum + s.totalAttempts, 0);
  const totalMissKeys = aggregated.reduce((sum, s) => sum + s.missCount, 0);
  const accuracy = totalKeys > 0 ? ((totalKeys - totalMissKeys) / totalKeys) * 100 : 100;

  const weakKeys = aggregated.filter((s) => s.masteryScore < 0.6);
  const strongKeys = aggregated.filter((s) => s.masteryScore >= 0.6);

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-slate-100">🏁 {t('result.title')}</h1>

      {/* Summary cards */}
      <div className="mb-8 grid grid-cols-3 gap-4 w-full max-w-lg">
        <SummaryCard label={t('result.totalTime')} value={formatTime(totalTime)} color="cyan" />
        <SummaryCard label={t('result.totalMisses')} value={String(totalMisses)} color={totalMisses === 0 ? 'green' : 'red'} />
        <SummaryCard label={t('result.accuracy')} value={`${accuracy.toFixed(1)}%`} color={accuracy >= 90 ? 'green' : accuracy >= 70 ? 'yellow' : 'red'} />
      </div>

      {/* Weak keys */}
      {weakKeys.length > 0 && (
        <div className="mb-6 w-full max-w-lg rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <h2 className="mb-3 text-sm font-semibold text-red-400">⚠️ {t('result.weakKeys')}</h2>
          <div className="space-y-2">
            {weakKeys.map((s) => (
              <ShortcutRow key={s.shortcutKey} stat={s} />
            ))}
          </div>
        </div>
      )}

      {/* Strong keys */}
      {strongKeys.length > 0 && (
        <div className="mb-6 w-full max-w-lg rounded-xl border border-green-500/20 bg-green-500/5 p-4">
          <h2 className="mb-3 text-sm font-semibold text-green-400">✓ {t('result.strongKeys')}</h2>
          <div className="space-y-2">
            {strongKeys.map((s) => (
              <ShortcutRow key={s.shortcutKey} stat={s} />
            ))}
          </div>
        </div>
      )}

      {weakKeys.length === 0 && (
        <p className="mb-6 text-sm text-green-400">{t('result.noWeakKeys')}</p>
      )}

      {/* Problem breakdown */}
      <div className="mb-8 w-full max-w-lg">
        <h2 className="mb-3 text-sm font-semibold text-slate-300">{t('result.problemResults')}</h2>
        <div className="space-y-2">
          {problemResults.map((r, i) => {
            const problem = activeProblems.find((p) => p.id === r.problemId) ?? allProblems.find((p) => p.id === r.problemId);
            return (
              <div key={r.problemId} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm">
                <span className="text-slate-300">
                  {i + 1}. {problem ? t(problem.titleKey) : r.problemId}
                </span>
                <div className="flex gap-4 text-xs font-mono">
                  <span className="text-cyan-400">{formatTime(r.totalTimeMs)}</span>
                  <span className={r.totalMisses > 0 ? 'text-red-400' : 'text-green-400'}>
                    {r.totalMisses} miss
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Play again */}
      <button
        onClick={resetGame}
        className="rounded-lg bg-cyan-500 px-8 py-3 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 active:scale-95"
      >
        {t('result.playAgain')}
      </button>

      <AdPlaceholder />
    </div>
  );
}

// --- Sub-components ---

function SummaryCard({ label, value, color }: { label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5',
    green: 'text-green-400 border-green-500/30 bg-green-500/5',
    yellow: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5',
    red: 'text-red-400 border-red-500/30 bg-red-500/5',
  };

  return (
    <div className={`rounded-xl border p-4 text-center ${colorMap[color]}`}>
      <div className="text-2xl font-bold font-mono">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  );
}

function ShortcutRow({ stat }: { stat: ShortcutStat }) {
  const pct = Math.round(stat.masteryScore * 100);
  const barColor = pct >= 60 ? 'bg-green-500' : pct >= 30 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="flex items-center gap-3 text-xs">
      <kbd className="inline-flex w-16 items-center justify-center rounded border border-slate-700 bg-slate-800 py-0.5 font-mono text-[10px] text-slate-300">
        {KEY_LABELS[stat.shortcutKey] ?? stat.shortcutKey}
      </kbd>
      <div className="flex-1">
        <div className="h-1.5 w-full rounded-full bg-slate-800">
          <div className={`h-1.5 rounded-full ${barColor}`} style={{ width: `${pct}%` }} />
        </div>
      </div>
      <span className="w-16 text-right font-mono text-slate-400">
        {Math.round(stat.avgLatencyMs)}ms
      </span>
      <span className="w-8 text-right font-mono text-slate-500">×{stat.totalAttempts}</span>
    </div>
  );
}
