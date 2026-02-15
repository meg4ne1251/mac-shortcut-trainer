import { useGameStore } from './store/gameStore';
import { useKeyHandler } from './hooks/useKeyHandler';
import StartScreen from './components/screens/StartScreen';
import GameScreen from './components/screens/GameScreen';
import ResultScreen from './components/screens/ResultScreen';

export default function App() {
  const currentScreen = useGameStore((s) => s.currentScreen);
  useKeyHandler();

  return (
    <div className="min-h-screen font-sans">
      {currentScreen === 'start' && <StartScreen />}
      {currentScreen === 'game' && <GameScreen />}
      {currentScreen === 'result' && <ResultScreen />}
    </div>
  );
}
