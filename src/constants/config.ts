/**
 * App Configuration Constants
 * 
 * This file contains all app-wide configuration settings, environment variables,
 * and validation functions.
 */

// ============================================================================
// APP METADATA
// ============================================================================

export const APP_CONFIG = {
  name: 'Rapha',
  version: '1.0.0',
  description: 'AI Bible Devotion App',
} as const;

// ============================================================================
// ENVIRONMENT VARIABLES
// ============================================================================

export const ENV_CONFIG = {
  // Supabase Configuration
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL || '',
  supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '',
  
  // AI Service Configuration (for future use)
  openaiApiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY || '',
  anthropicApiKey: process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY || '',
} as const;

// ============================================================================
// APP SETTINGS
// ============================================================================

export const APP_SETTINGS = {
  // Devotional Settings
  devotionalReadTime: 6, // minutes
  maxPrayerFocusLength: 300, // characters
  
  // Onboarding Settings
  onboardingScreens: 11,
  
  // Navigation Settings
  tabBarHeight: 60,
  
  // UI Settings
  borderRadius: 12,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
} as const;

// ============================================================================
// CONFIGURATION VALIDATION
// ============================================================================

/**
 * Validate that all required environment variables are set
 * @returns true if all required vars are present, false otherwise
 */
export const validateConfig = (): boolean => {
  const requiredEnvVars = [
    'EXPO_PUBLIC_SUPABASE_URL',
    'EXPO_PUBLIC_SUPABASE_ANON_KEY',
  ];
  
  const missing = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );
  
  if (missing.length > 0) {
    console.warn(
      `Missing required environment variables: ${missing.join(', ')}`
    );
    return false;
  }
  
  return true;
}; 