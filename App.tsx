import { StatusBar } from 'expo-status-bar';
import SplashScreen from './src/screens/SplashScreen';

/**
 * Main App Component
 * 
 * This is the root component of the Rapha Bible Devotion App.
 * Currently displays the splash screen with light rays effect.
 */
export default function App() {
  return (
    <>
      <SplashScreen />
      <StatusBar style="auto" />
    </>
  );
}
