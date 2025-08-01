import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import LightRays from '../components/LightRays';
import Particles from '../components/Particles';

/**
 * Splash Screen Component
 *
 * Splash screen with animated light rays effect and floating particles.
 */
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Light Rays Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#FFF79A" // User changed to yellow
        raysSpeed={1} // User changed speed
        lightSpread={0.05} // Assistant changed for prominence
        rayLength={5} // User changed length
        pulsating={true} // Assistant added
        noiseAmount={0.0} // User changed noise
        distortion={0.0} // User changed distortion
        style={styles.lightRays}
      />

      {/* Particles Overlay */}
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        style={styles.particles}
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
  particles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}); 