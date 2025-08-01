/**
 * TypeScript Type Definitions for Rapha Bible Devotion App
 * 
 * This file contains all the type definitions used throughout the app,
 * including user profiles, onboarding responses, and devotional content.
 */

// ============================================================================
// CORE USER TYPES
// ============================================================================

/** Basic user profile information */
export interface UserProfile {
  id: string;
  email?: string;
  created_at: string;
  updated_at: string;
}

/** Complete user profile with onboarding and history */
export interface CompleteUserProfile {
  user_id: string;
  onboarding_responses: OnboardingResponses;
  user_history: UserHistory;
}

/** User engagement and activity history */
export interface UserHistory {
  previous_devotions: string[];
  engagement_patterns?: any;
  date_last_updated: string;
}

// ============================================================================
// ONBOARDING TYPES
// ============================================================================

/** User responses from the 11-screen onboarding process */
export interface OnboardingResponses {
  faith_journey: FaithJourney;
  life_stage: LifeStage[];
  daily_challenges: DailyChallenge[];
  growth_areas: GrowthArea[];
  devotional_preferences: DevotionalPreferences;
  preferred_time: PreferredTime;
  emotional_state: EmotionalState[];
  spiritual_interests: SpiritualInterest[];
  sensitive_areas: SensitiveArea[];
  prayer_focus?: string;
}

/** User preferences for devotional content (1-5 scale) */
export interface DevotionalPreferences {
  gentle_challenging: number;
  encouraging_convicting: number;
  simple_deep: number;
  practical_theological: number;
  stories_concepts: number;
  reflection_action: number;
}

// ============================================================================
// ONBOARDING OPTIONS (ENUMS)
// ============================================================================

export type FaithJourney = 
  | 'new_to_faith'
  | 'growing_believer'
  | 'established_in_faith'
  | 'mature_believer'
  | 'returning_after_time_away'
  | 'exploring_questioning';

export type LifeStage = 
  | 'student'
  | 'single'
  | 'married'
  | 'parent'
  | 'caregiver'
  | 'retired'
  | 'major_life_transition';

export type DailyChallenge = 
  | 'work_career_stress'
  | 'relationships_family'
  | 'health_wellness'
  | 'finances_provision'
  | 'anxiety_emotional_struggles'
  | 'none_major_challenges';

export type GrowthArea = 
  | 'prayer'
  | 'bible_knowledge'
  | 'patience'
  | 'forgiveness'
  | 'faith'
  | 'love'
  | 'purpose'
  | 'peace'
  | 'generosity'
  | 'leadership';

export type PreferredTime = 
  | 'morning'
  | 'midday'
  | 'evening'
  | 'night'
  | 'varies_day_to_day';

export type EmotionalState = 
  | 'peaceful'
  | 'stressed'
  | 'grieving'
  | 'anxious'
  | 'grateful'
  | 'confused'
  | 'hopeful'
  | 'overwhelmed'
  | 'content'
  | 'uncertain';

export type SpiritualInterest = 
  | 'gods_love'
  | 'prayer'
  | 'relationships'
  | 'calling'
  | 'healing'
  | 'bible_stories'
  | 'worship'
  | 'service'
  | 'growth'
  | 'community';

export type SensitiveArea = 
  | 'past_trauma'
  | 'mental_health'
  | 'family_challenges'
  | 'health_issues'
  | 'financial_hardship'
  | 'none_apply';

// ============================================================================
// DEVOTIONAL CONTENT TYPES
// ============================================================================

/** Daily devotional content structure (6-minute format) */
export interface DevotionalContent {
  id: string;
  user_id: string;
  date: string;
  scripture: {
    reference: string;
    text: string;
    translation: string;
  };
  reflection: string;
  prayer: string;
  theme: string;
  estimated_read_time: number;
  created_at: string;
}

// ============================================================================
// NAVIGATION TYPES
// ============================================================================

/** Main navigation stack parameter list */
export type RootStackParamList = {
  Auth: undefined;
  Onboarding: undefined;
  Main: undefined;
  DailyDevotion: undefined;
  Prayer: undefined;
  Community: undefined;
  Scripture: undefined;
  Profile: undefined;
};

// ============================================================================
// API & AUTH TYPES
// ============================================================================

/** Standard API response wrapper */
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

/** Authentication state management */
export interface AuthState {
  user: UserProfile | null;
  session: any | null;
  loading: boolean;
} 