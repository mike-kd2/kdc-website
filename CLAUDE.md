# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI consultancy website for "klauser designs & coaching" targeting Swiss SMEs. The site is in German and will be hosted on Vercel at klauserdesigns.ch.

## Tech Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Package Manager**: pnpm
- **Hosting**: Vercel

## Development Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start development server
pnpm build            # Production build
pnpm lint             # Run ESLint
pnpm start            # Start production server
```

## Workflow Requirements

### Visual Verification with Playwright
Before reporting any UI changes as complete, always verify visually using the Playwright MCP server:
1. Take a screenshot of the affected page/component
2. Verify the changes render correctly
3. Check responsive behavior if applicable

### Code Quality with ESLint MCP Server
Before completing any code changes:
1. Use the ESLint MCP server to check the modified files for issues
2. Fix all ESLint errors before marking work as done
3. Address warnings when reasonable

### Git Version Control
All changes must be committed to GitHub:
1. **NEVER commit secrets, API keys, passwords, or sensitive credentials** - Always verify files before committing
2. After completing a task or feature, create a git commit with a descriptive message
3. Include a Co-Authored-By line in commit messages: `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`
4. Follow the repository's existing commit message style
5. Push changes to the remote repository at https://github.com/mike-kd2/kdc-website when appropriate
6. If a user requests to commit files containing secrets (e.g., .env files), warn them and refuse

## Architecture

The project follows a standard Next.js structure:

```
src/
├── components/
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Hero, Services, Process, CTA sections
│   ├── ui/           # Reusable UI components (Button, Card, Badge, Input)
│   └── animations/   # Framer Motion animation wrappers
├── pages/            # Next.js pages (index, services, about, projects, contact)
├── styles/           # Global CSS and Tailwind config
├── lib/              # Constants, utilities
└── public/           # Static assets (images, icons)
```

## Design System

### Colors
- Primary: Deep Teal (#0A4D4E), Bright Teal (#1A7A7A)
- Accent: Amber (#F59E0B), Warm Orange (#EA580C)
- Neutrals: Charcoal (#1F2937), Slate (#475569), Light Gray (#E2E8F0)

### Typography
- Headings: Inter, SF Pro Display
- Body: Inter, Segoe UI
- Code: JetBrains Mono, Fira Code

### Spacing
Base unit: 4px. Scale: xs(4), sm(8), md(16), lg(24), xl(32), 2xl(48), 3xl(64), 4xl(96)

## Key Integrations

- **Calendar booking**: TidyCal at `https://tidycal.com/klauserdesignscoaching/discovery-call`
- **Contact email**: michael@klauserdesigns.ch
- **Email sending**: Maileroo (API key provided via environment variable)
- **Analytics**: Plausible (privacy-friendly)

## Business Context

The website showcases AI consulting services:
- AI Prompt Engineering (video & image)
- Low/mid-level application development
- AI integration consulting for SMEs
- Junior software development

Primary conversion goal: Discovery Call bookings via TidyCal.
