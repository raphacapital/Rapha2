# Rapha AI Bible Devotion App

A personalized daily devotional app that uses AI to create meaningful spiritual content based on user profiles and life circumstances.

## Features

- **Personalized Daily Devotionals**: AI-generated content tailored to user's faith journey, life stage, and current challenges
- **Comprehensive Onboarding**: 11-screen profiling to understand user's spiritual needs
- **Prayer & Journaling Tools**: Track prayers, journal reflections, and spiritual milestones
- **Community Features**: Safe environment for prayer sharing and spiritual discussions
- **Scripture Access**: Easy Bible reading with multiple translations
- **Subscription Management**: Trial-to-paid conversion with Superwall integration

## Tech Stack

- **Frontend**: React Native with Expo
- **Backend**: Supabase (Database, Authentication, Real-time)
- **AI Services**: Claude/ChatGPT for personalized content generation
- **Payments**: Superwall (planned)
- **Deployment**: EAS Build for iOS/Android

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # App screens and navigation
├── services/       # API and external service integrations
├── types/          # TypeScript type definitions
├── utils/          # Helper functions and utilities
├── hooks/          # Custom React hooks
├── constants/      # App constants and configuration
└── assets/         # Images, fonts, and static assets
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RaphaApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   EXPO_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   EXPO_PUBLIC_ANTHROPIC_API_KEY=your_anthropic_api_key
   ```

4. **Supabase Setup**
   - Create a new Supabase project
   - Set up the database schema (see `../temp/schema.sql`)
   - Configure authentication providers (Google, Apple)
   - Update environment variables with your Supabase credentials

5. **Run the app**
   ```bash
   # Development
   npm start
   
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

## Database Schema

### Tables

- `user_profiles`: User onboarding responses and preferences
- `devotional_content`: Generated daily devotionals
- `prayer_requests`: User prayer requests and tracking
- `journal_entries`: User reflection and journal entries
- `community_posts`: Community prayer sharing and discussions

## Development Guidelines

### Code Quality
- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean, documented code

### Testing
- Test in Expo Go during development
- Use EAS Build for staging/production testing
- Test on multiple device sizes and orientations

### Performance
- Optimize rendering and state management
- Minimize bundle size
- Implement proper loading states

## Deployment

### Development
- Use Expo Go for rapid iteration
- Test on physical devices when possible

### Staging
- Generate EAS builds for testing
- Use TestFlight for iOS beta testing

### Production
- Deploy through App Store and Google Play Store
- Monitor performance and user feedback

## Contributing

1. Follow the established code style and patterns
2. Test thoroughly before submitting changes
3. Update documentation as needed
4. Ensure all features work on both iOS and Android

## License

[Add your license information here]

## Support

For questions or support, please contact [your contact information]. 