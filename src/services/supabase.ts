/**
 * Supabase Service Layer
 * 
 * This file contains all Supabase client configuration and service functions
 * for authentication, user profiles, devotional content, and community features.
 */

import { createClient } from '@supabase/supabase-js';
import { UserProfile, CompleteUserProfile, DevotionalContent, OnboardingResponses } from '../types';

// ============================================================================
// SUPABASE CLIENT CONFIGURATION
// ============================================================================

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ============================================================================
// USER PROFILE SERVICE
// ============================================================================

export const userProfileService = {
  /**
   * Create or update user profile
   */
  async upsertProfile(userId: string, profile: Partial<CompleteUserProfile>) {
    const { data, error } = await supabase
      .from('user_profiles')
      .upsert({
        user_id: userId,
        ...profile,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();
    
    return { data, error };
  },

  /**
   * Get user profile by ID
   */
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    return { data, error };
  },

  /**
   * Update onboarding responses for user
   */
  async updateOnboarding(userId: string, responses: OnboardingResponses) {
    const { data, error } = await supabase
      .from('user_profiles')
      .update({
        onboarding_responses: responses,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId)
      .select()
      .single();
    
    return { data, error };
  },
};

// ============================================================================
// DEVOTIONAL CONTENT SERVICE
// ============================================================================

export const devotionalService = {
  /**
   * Create new devotional content for user
   */
  async createDevotional(devotional: Omit<DevotionalContent, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('devotional_content')
      .insert({
        ...devotional,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();
    
    return { data, error };
  },

  /**
   * Get today's devotional for user
   */
  async getTodaysDevotional(userId: string) {
    const today = new Date().toISOString().split('T')[0];
    
    const { data, error } = await supabase
      .from('devotional_content')
      .select('*')
      .eq('user_id', userId)
      .eq('date', today)
      .single();
    
    return { data, error };
  },

  /**
   * Get devotional history for user
   */
  async getDevotionalHistory(userId: string, limit = 30) {
    const { data, error } = await supabase
      .from('devotional_content')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false })
      .limit(limit);
    
    return { data, error };
  },

  /**
   * Check if user has devotional for today
   */
  async hasTodaysDevotional(userId: string) {
    const today = new Date().toISOString().split('T')[0];
    
    const { data, error } = await supabase
      .from('devotional_content')
      .select('id')
      .eq('user_id', userId)
      .eq('date', today)
      .single();
    
    return { data: !!data, error };
  },
};

// ============================================================================
// AUTHENTICATION SERVICE
// ============================================================================

export const authService = {
  /**
   * Sign in with Apple
   */
  async signInWithApple() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo: 'com.rapha.bible.app://auth/callback',
      },
    });
    
    return { data, error };
  },

  /**
   * Sign out user
   */
  async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  /**
   * Get current session
   */
  async getSession() {
    const { data, error } = await supabase.auth.getSession();
    return { data, error };
  },

  /**
   * Get current user
   */
  async getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    return { data, error };
  },
};

// ============================================================================
// COMMUNITY SERVICE (FOR FUTURE USE)
// ============================================================================

export const communityService = {
  /**
   * Get community posts
   */
  async getPosts(limit = 20) {
    const { data, error } = await supabase
      .from('community_posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    
    return { data, error };
  },

  /**
   * Create community post
   */
  async createPost(post: any) {
    const { data, error } = await supabase
      .from('community_posts')
      .insert({
        ...post,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();
    
    return { data, error };
  },
}; 