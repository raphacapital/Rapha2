import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import LightRays from '../components/LightRays';

/**
 * Splash Screen Component
 * 
 * Splash screen with animated light rays effect.
 */
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LightRays
        raysOrigin="top-center"
        raysColor="#FFF79A"
        raysSpeed={0.5}
        lightSpread={0.3}
        rayLength={5}
        pulsating={true}
        noiseAmount={0.0}
        distortion={0.0}
        style={styles.lightRays}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  lightRays: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}); 