import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LightRays from '../components/LightRays';
import Particles from '../components/Particles';
import { TYPOGRAPHY, SPACING } from '../constants/designSystem';




export default function SplashScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  
  const contentWidth = width - (SPACING.xl * 2);
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <LightRays
        raysOrigin="top-center"
        raysColor="#FFF79A"
        raysSpeed={1}
        lightSpread={0.05}
        rayLength={10}
        pulsating={true}
        noiseAmount={0.0}
        distortion={0.0}
        style={styles.lightRays}
      />

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

      {/* Main container */}
      <View style={[styles.mainContainer, {
        paddingTop: insets.top + SPACING.xxxl, // 64px from top
        paddingBottom: insets.bottom + SPACING.xl, // 36px from bottom
      }]}>
        
        {/* Spacer to push content to bottom */}
        <View style={styles.spacer} />
        
        {/* Content from top to bottom */}
        <View style={styles.bottomContent}>
          {/* Wordmark */}
          <View style={styles.wordmarkContainer}>
            <Image
              source={require('../assets/logos/wordmark.png')}
              style={[styles.wordmark, { width: 75, height: 30.24}]}
              resizeMode="contain"
            />
          </View>

          {/* H1 Text */}
          <View style={styles.h1Container}>
            <Text style={styles.h1Text}>Your Personalized{'\n'}Daily Devotional</Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, { width: contentWidth }]}
              onPress={() => console.log('Get Started pressed')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.signInContainer}
              onPress={() => console.log('Sign In pressed')}
            >
              <Text style={styles.signInText}>
                Already have an account? <Text style={styles.signInLink}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  spacer: {
    flex: 1, // Takes up remaining space to push content to bottom
  },
  bottomContent: {
    alignItems: 'center',
  },
  wordmarkContainer: {
    alignItems: 'center',
  },
  wordmark: {
    tintColor: '#FFFFFF',
  },
  h1Container: {
    alignItems: 'center',
    marginTop: SPACING.lg, // 24px above H1 text
  },
  h1Text: {
    ...TYPOGRAPHY.h1,
    ...TYPOGRAPHY.semibold,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  gradientContainer: {
    borderRadius: 0,
  },
  gradientTextContainer: {
    borderRadius: 0,
  },

  bottomSection: {
    alignItems: 'center',
    height: 80, // Equal height for visual balance
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: SPACING.xl, // 36px above buttons
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: SPACING.md,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...TYPOGRAPHY.largeText,
    ...TYPOGRAPHY.semibold,
    color: '#000000',
  },
  signInContainer: {
    marginTop: SPACING.sm,
    alignItems: 'center',
    marginBottom: 0,
    paddingBottom: 0,
  },
  signInText: {
    ...TYPOGRAPHY.text,
    ...TYPOGRAPHY.regular,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  signInLink: {
    ...TYPOGRAPHY.semibold,
  },
}); 