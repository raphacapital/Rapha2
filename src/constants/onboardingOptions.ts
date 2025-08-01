/**
 * Onboarding Options Constants
 * 
 * This file contains all the predefined options for the 11-screen onboarding process.
 * Each option includes a value (for database storage) and a label (for UI display).
 */

import { 
  FaithJourney, 
  LifeStage, 
  DailyChallenge, 
  GrowthArea, 
  PreferredTime, 
  EmotionalState, 
  SpiritualInterest, 
  SensitiveArea 
} from '../types';

// ============================================================================
// FAITH JOURNEY OPTIONS
// ============================================================================

export const FAITH_JOURNEY_OPTIONS: { value: FaithJourney; label: string }[] = [
  { value: 'new_to_faith', label: 'New to faith - just starting to learn about God' },
  { value: 'growing_believer', label: 'Growing believer - know the basics but want to grow' },
  { value: 'established_in_faith', label: 'Established in faith - comfortable with deeper spiritual topics' },
  { value: 'mature_believer', label: 'Mature believer - enjoy theological discussions and study' },
  { value: 'returning_after_time_away', label: 'Returning after time away' },
  { value: 'exploring_questioning', label: 'Exploring/questioning' },
];

// ============================================================================
// LIFE STAGE OPTIONS
// ============================================================================

export const LIFE_STAGE_OPTIONS: { value: LifeStage; label: string }[] = [
  { value: 'student', label: 'Student' },
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'parent', label: 'Parent' },
  { value: 'caregiver', label: 'Caregiver' },
  { value: 'retired', label: 'Retired' },
  { value: 'major_life_transition', label: 'In a major life transition' },
];

// ============================================================================
// DAILY CHALLENGES OPTIONS
// ============================================================================

export const DAILY_CHALLENGES_OPTIONS: { value: DailyChallenge; label: string }[] = [
  { value: 'work_career_stress', label: 'Work/career stress' },
  { value: 'relationships_family', label: 'Relationships & family' },
  { value: 'health_wellness', label: 'Health & wellness' },
  { value: 'finances_provision', label: 'Finances & provision' },
  { value: 'anxiety_emotional_struggles', label: 'Anxiety & emotional struggles' },
  { value: 'none_major_challenges', label: 'None of these major challenges' },
];

// ============================================================================
// GROWTH AREAS OPTIONS
// ============================================================================

export const GROWTH_AREAS_OPTIONS: { value: GrowthArea; label: string }[] = [
  { value: 'prayer', label: 'Prayer' },
  { value: 'bible_knowledge', label: 'Bible knowledge' },
  { value: 'patience', label: 'Patience' },
  { value: 'forgiveness', label: 'Forgiveness' },
  { value: 'faith', label: 'Faith' },
  { value: 'love', label: 'Love' },
  { value: 'purpose', label: 'Purpose' },
  { value: 'peace', label: 'Peace' },
  { value: 'generosity', label: 'Generosity' },
  { value: 'leadership', label: 'Leadership' },
];

// ============================================================================
// PREFERRED TIME OPTIONS
// ============================================================================

export const PREFERRED_TIME_OPTIONS: { value: PreferredTime; label: string }[] = [
  { value: 'morning', label: 'Morning' },
  { value: 'midday', label: 'Midday' },
  { value: 'evening', label: 'Evening' },
  { value: 'night', label: 'Night' },
  { value: 'varies_day_to_day', label: 'It varies day to day' },
];

// ============================================================================
// EMOTIONAL STATE OPTIONS
// ============================================================================

export const EMOTIONAL_STATE_OPTIONS: { value: EmotionalState; label: string }[] = [
  { value: 'peaceful', label: 'Peaceful' },
  { value: 'stressed', label: 'Stressed' },
  { value: 'grieving', label: 'Grieving' },
  { value: 'anxious', label: 'Anxious' },
  { value: 'grateful', label: 'Grateful' },
  { value: 'confused', label: 'Confused' },
  { value: 'hopeful', label: 'Hopeful' },
  { value: 'overwhelmed', label: 'Overwhelmed' },
  { value: 'content', label: 'Content' },
  { value: 'uncertain', label: 'Uncertain' },
];

// ============================================================================
// SPIRITUAL INTERESTS OPTIONS
// ============================================================================

export const SPIRITUAL_INTERESTS_OPTIONS: { value: SpiritualInterest; label: string }[] = [
  { value: 'gods_love', label: "God's love" },
  { value: 'prayer', label: 'Prayer' },
  { value: 'relationships', label: 'Relationships' },
  { value: 'calling', label: 'Calling' },
  { value: 'healing', label: 'Healing' },
  { value: 'bible_stories', label: 'Bible stories' },
  { value: 'worship', label: 'Worship' },
  { value: 'service', label: 'Service' },
  { value: 'growth', label: 'Growth' },
  { value: 'community', label: 'Community' },
];

// ============================================================================
// SENSITIVE AREAS OPTIONS
// ============================================================================

export const SENSITIVE_AREAS_OPTIONS: { value: SensitiveArea; label: string }[] = [
  { value: 'past_trauma', label: 'Past trauma or difficult experiences' },
  { value: 'mental_health', label: 'Mental health & emotional struggles' },
  { value: 'family_challenges', label: 'Family challenges or dysfunction' },
  { value: 'health_issues', label: 'Health issues or chronic illness' },
  { value: 'financial_hardship', label: 'Financial hardship or loss' },
  { value: 'none_apply', label: 'None of these apply' },
];

// ============================================================================
// DEVOTIONAL PREFERENCES LABELS
// ============================================================================

/** Labels for the 6-point preference sliders in onboarding */
export const DEVOTIONAL_PREFERENCES_LABELS = {
  gentle_challenging: { left: 'Gentle', right: 'Challenging' },
  encouraging_convicting: { left: 'Encouraging', right: 'Convicting' },
  simple_deep: { left: 'Simple', right: 'Deep' },
  practical_theological: { left: 'Practical', right: 'Theological' },
  stories_concepts: { left: 'Stories', right: 'Concepts' },
  reflection_action: { left: 'Reflection', right: 'Action' },
} as const; 