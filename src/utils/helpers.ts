/**
 * Utility Functions
 * 
 * This file contains helper functions used throughout the app for common operations
 * like date formatting, validation, and data manipulation.
 */

import { OnboardingResponses, DevotionalPreferences } from '../types';

// ============================================================================
// DATE UTILITIES
// ============================================================================

/**
 * Format date to YYYY-MM-DD string
 */
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

/**
 * Get today's date as YYYY-MM-DD string
 */
export const getToday = (): string => {
  return formatDate(new Date());
};

/**
 * Check if date string is today
 */
export const isToday = (dateString: string): boolean => {
  return dateString === getToday();
};

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate prayer focus text length
 */
export const validatePrayerFocus = (text: string): boolean => {
  return text.length <= 300;
};

// ============================================================================
// ONBOARDING UTILITIES
// ============================================================================

/**
 * Create default devotional preferences (all set to middle value)
 */
export const createDefaultDevotionalPreferences = (): DevotionalPreferences => {
  return {
    gentle_challenging: 3,
    encouraging_convicting: 3,
    simple_deep: 3,
    practical_theological: 3,
    stories_concepts: 3,
    reflection_action: 3,
  };
};

/**
 * Check if onboarding is complete by validating all required fields
 */
export const isOnboardingComplete = (responses: Partial<OnboardingResponses>): boolean => {
  const requiredFields = [
    'faith_journey',
    'life_stage',
    'daily_challenges',
    'growth_areas',
    'devotional_preferences',
    'preferred_time',
    'emotional_state',
    'spiritual_interests',
    'sensitive_areas',
  ];

  return requiredFields.every(field => {
    const value = responses[field as keyof OnboardingResponses];
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return value !== undefined && value !== null;
  });
};

// ============================================================================
// STRING UTILITIES
// ============================================================================

/**
 * Capitalize first letter of string
 */
export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Format read time for display
 */
export const formatReadTime = (minutes: number): string => {
  return minutes === 1 ? '1 minute read' : `${minutes} minutes read`;
};

// ============================================================================
// ERROR HANDLING
// ============================================================================

/**
 * Extract user-friendly error message from various error types
 */
export const handleError = (error: any): string => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  if (error?.error_description) {
    return error.error_description;
  }
  
  return 'An unexpected error occurred. Please try again.';
};

// ============================================================================
// STORAGE KEYS
// ============================================================================

/**
 * Constants for local storage keys
 */
export const storageKeys = {
  ONBOARDING_COMPLETE: 'onboarding_complete',
  USER_PREFERENCES: 'user_preferences',
  LAST_DEVOTIONAL_DATE: 'last_devotional_date',
  NOTIFICATION_SETTINGS: 'notification_settings',
} as const;

// ============================================================================
// NAVIGATION UTILITIES
// ============================================================================

/**
 * Get display title for screen names
 */
export const getScreenTitle = (screenName: string): string => {
  const titles: Record<string, string> = {
    'DailyDevotion': 'Today\'s Devotion',
    'Prayer': 'Prayer',
    'Community': 'Community',
    'Scripture': 'Scripture',
    'Profile': 'Profile',
    'Onboarding': 'Welcome',
  };
  
  return titles[screenName] || screenName;
};

// ============================================================================
// TIME UTILITIES
// ============================================================================

/**
 * Get current time of day
 */
export const getTimeOfDay = (): 'morning' | 'afternoon' | 'evening' | 'night' => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}; 