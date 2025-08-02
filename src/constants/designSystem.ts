import { Platform } from 'react-native';

// Typography System
export const TYPOGRAPHY = {
  // Font Family
  fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'SF-Pro-Display',
  
  // Letter Spacing (all -2%)
  letterSpacing: -0.02,
  
  // Text Styles
  h1: {
    fontSize: 32,
    lineHeight: 32 * 1.1, // 110%
    fontWeight: '600' as const, // semibold
    letterSpacing: -0.02,
  },
  h2: {
    fontSize: 24,
    lineHeight: 24 * 1.2, // 120%
    fontWeight: '600' as const, // semibold
    letterSpacing: -0.02,
  },
  h3: {
    fontSize: 20,
    lineHeight: 20 * 1.2, // 120%
    fontWeight: '600' as const, // semibold
    letterSpacing: -0.02,
  },
  largeText: {
    fontSize: 18,
    lineHeight: 18 * 1.3, // 130%
    fontWeight: '400' as const, // regular
    letterSpacing: -0.02,
  },
  text: {
    fontSize: 16,
    lineHeight: 16 * 1.3, // 130%
    fontWeight: '400' as const, // regular
    letterSpacing: -0.02,
  },
  caption: {
    fontSize: 12,
    lineHeight: 12 * 1.3, // 130%
    fontWeight: '400' as const, // regular
    letterSpacing: -0.02,
  },
  micro: {
    fontSize: 8,
    lineHeight: 8 * 1.3, // 130%
    fontWeight: '400' as const, // regular
    letterSpacing: -0.02,
  },
  
  // Weight Variants
  regular: {
    fontWeight: '400' as const,
  },
  semibold: {
    fontWeight: '600' as const,
  },
};

// Spacing System (only use these values unless otherwise stated)
export const SPACING = {
  xs: 6,
  sm: 12,
  md: 18,
  lg: 24,
  xl: 36,
  xxl: 48,
  xxxl: 64,
} as const;

// Spacing Values (for direct use)
export const SPACING_VALUES = {
  6: 6,
  12: 12,
  18: 18,
  24: 24,
  36: 36,
  48: 48,
  64: 64,
} as const;

// Common Spacing Patterns
export const SPACING_PATTERNS = {
  // Margins
  margin: {
    xs: SPACING.xs,
    sm: SPACING.sm,
    md: SPACING.md,
    lg: SPACING.lg,
    xl: SPACING.xl,
    xxl: SPACING.xxl,
    xxxl: SPACING.xxxl,
  },
  // Padding
  padding: {
    xs: SPACING.xs,
    sm: SPACING.sm,
    md: SPACING.md,
    lg: SPACING.lg,
    xl: SPACING.xl,
    xxl: SPACING.xxl,
    xxxl: SPACING.xxxl,
  },
  // Gaps
  gap: {
    xs: SPACING.xs,
    sm: SPACING.sm,
    md: SPACING.md,
    lg: SPACING.lg,
    xl: SPACING.xl,
    xxl: SPACING.xxl,
    xxxl: SPACING.xxxl,
  },
};

// Helper function to get typography style
export const getTypographyStyle = (variant: keyof typeof TYPOGRAPHY) => {
  return TYPOGRAPHY[variant];
};

// Helper function to get spacing value
export const getSpacing = (size: keyof typeof SPACING) => {
  return SPACING[size];
};

// Common style combinations
export const COMMON_STYLES = {
  // Screen padding
  screenPadding: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.lg,
  },
  // Card padding
  cardPadding: {
    padding: SPACING.md,
  },
  // Section spacing
  sectionSpacing: {
    marginVertical: SPACING.lg,
  },
  // Item spacing
  itemSpacing: {
    marginBottom: SPACING.md,
  },
  // Button padding
  buttonPadding: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
}; 