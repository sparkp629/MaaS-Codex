# Specification: Mindshare Analytics SaaS Platform (MaaS)

## 1. Vision & Goals

Create a specialized agency platform for deep tech and defense startups to build strategic media presence before/after fundraising.

- **Focus:** Niche audit, KOL discovery, Multi-channel campaigns (X, LinkedIn, YouTube, etc.).
- **User Experience:** "Discover" first, Login later.

## 2. Core Features

### Onboarding

- **Flow:** 7 questions in 4 steps.
- **Logic:** Answers directly populate the dashboard data.
- **Persistence:** UI remains consistent post-onboarding.

### Dashboard

- **Visuals:** Non-classic analytics. No standard boring tables. Use cards, intuitive blocks, and readable charts.
- **Data Points:** KOL Intelligence, Intelligence feed, ROI tracking.

## 3. Technical Stack

- **Auth:** Mocked by default (transition to Supabase).
- **Storage:** Supabase (Survey results, API extractions).
- **Channels:** X, LinkedIn, YouTube (Shorts/Longs), Twitch, Insta, Reddit, Telegram, Discord, Substack.

## 4. Open Questions / Clarifications

- [ ] Logic for X login "Discover" mode vs full Auth.
- [ ] Specific mapping of survey answers to dashboard blocks.
