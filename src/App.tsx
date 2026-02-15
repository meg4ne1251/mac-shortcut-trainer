import { useRef } from 'react';
import { useGameStore } from './store/gameStore';
import { useKeyHandler } from './hooks/useKeyHandler';
import ErrorBoundary from './components/ui/ErrorBoundary';
import StartScreen from './components/screens/StartScreen';
import GameScreen from './components/screens/GameScreen';
import ResultScreen from './components/screens/ResultScreen';

export default function App() {
  const currentScreen = useGameStore((s) => s.currentScreen);
  const containerRef = useRef<HTMLDivElement>(null);
  useKeyHandler(containerRef);

  return (
    <ErrorBoundary>
      <div ref={containerRef} className="min-h-screen font-sans">
        {currentScreen === 'start' && <StartScreen />}
        {currentScreen === 'game' && <GameScreen />}
        {currentScreen === 'result' && <ResultScreen />}
      </div>
    </ErrorBoundary>
  );
}
