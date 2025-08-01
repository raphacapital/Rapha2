import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { supabase } from '../services/supabase';

/**
 * Login Screen Component
 *
 * Handles Apple Sign-In authentication and user profile creation.
 * Production-ready with proper error handling and loading states.
 */
export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAppleSignIn = useCallback(async () => {
    try {
      setIsLoading(true);

      // Check if Apple Sign-In is available
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert('Error', 'Apple Sign-In is not available on this device');
        return;
      }

      // Request Apple Sign-In
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      console.log('Apple Sign-In successful:', credential);

      // Sign in with Supabase using the ID token
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'apple',
        token: credential.identityToken!,
      });

      if (error) {
        console.error('Supabase sign-in error:', error);
        Alert.alert('Error', 'Failed to sign in. Please try again.');
        return;
      }

      console.log('Supabase sign-in successful:', data);

      // Extract user information
      const fullName = credential.fullName;
      const email = credential.email;
      const userId = data.user?.id;

      if (userId && fullName) {
        // Create or update user profile
        const { error: profileError } = await supabase
          .from('user_profiles')
          .upsert(
            {
              user_id: userId,
              display_name: `${fullName.givenName || ''} ${fullName.familyName || ''}`.trim(),
              email: email || null,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'user_id' }
          );

        if (profileError) {
          console.error('Profile update error:', profileError);
          Alert.alert('Warning', 'Signed in successfully, but could not save profile information.');
        } else {
          console.log('Profile updated successfully');
          Alert.alert('Success', 'Successfully signed in and profile created!');
        }
      }

    } catch (error: any) {
      console.error('Apple Sign-In error:', error);
      
      if (error.code === 'ERR_CANCELED') {
        // User canceled the sign-in
        return;
      }
      
      Alert.alert('Error', 'Failed to sign in with Apple. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <View style={styles.content}>
        <Text style={styles.title}>Rapha</Text>
        <Text style={styles.subtitle}>AI Bible Devotion App</Text>
        
        <View style={styles.spacer} />
        
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={8}
          style={styles.appleButton}
          onPress={handleAppleSignIn}
        />
        
        {isLoading && (
          <Text style={styles.loadingText}>Signing in...</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
  },
  spacer: {
    height: 60,
  },
  appleButton: {
    width: 280,
    height: 50,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#666666',
  },
}); 