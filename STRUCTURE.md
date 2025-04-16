# Project Structure Documentation

This document outlines the target file and directory structure for the Stripes VC Insurtech Dashboard project after refactoring.

```
.
├── .github/            # GitHub specific files (e.g., Actions workflows)
│   └── workflows/
│       └── deploy.yml    # Optional: CI/CD workflow for GitHub Pages
├── .gitignore          # Specifies intentionally untracked files
├── DEVELOPMENT_NOTES.md # Tracks refactoring progress and decisions
├── package.json        # Project metadata and dependencies
├── public/             # Static assets served directly
│   ├── favicon.ico     # Favicon (example, add if needed)
│   ├── index.html      # Main HTML entry point
│   └── manifest.json   # Web app manifest (example, add if needed)
│   └── robots.txt      # Instructions for web crawlers (example, add if needed)
├── README.md           # Project overview, setup, and deployment guide
├── STRUCTURE.md        # This file: documentation of the structure
├── src/                # Main application source code
│   ├── App.tsx           # Root application component, routing setup
│   ├── index.css         # Global CSS styles or entry point for CSS modules/libraries
│   ├── index.tsx         # Application entry point (renders App to DOM)
│   ├── components/       # Reusable UI components, organized by feature or type
│   │   ├── charts/         # Specific chart components (AreaChart, BarChart, etc.)
│   │   ├── common/         # General-purpose UI elements (Button, Tooltip, Tabs, Modal, etc.)
│   │   ├── layout/         # Structural components (Layout, Header, Footer, SectionContainer)
│   │   └── interactive/    # Components for user interaction (Filter, SliderFilter, PillSelector)
│   ├── data/             # Mock data, data fetching hooks, or data utilities
│   │   └── mockData.ts     # Main mock data definitions
│   ├── sections/         # Components representing the major dashboard sections/pages
│   │   ├── CapitalFlowSection.tsx
│   │   ├── CustomerExperienceSection.tsx
│   │   ├── DistributionChannelSection.tsx
│   │   ├── EmergingRiskSection.tsx
│   │   ├── InvestmentOpportunitySection.tsx
│   │   ├── MarketDynamicsSection.tsx
│   │   ├── RegulatoryLandscapeSection.tsx
│   │   ├── StartupEcosystemSection.tsx
│   │   └── TechnologyAdoptionSection.tsx
│   ├── store/            # Redux state management configuration
│   │   ├── index.ts        # Store configuration (configureStore)
│   │   └── slices/         # Redux slices for different state parts (optional sub-folder)
│   ├── types/            # Shared TypeScript type definitions
│   │   └── index.ts        # Main export file for types or individual type files
│   └── utils/            # Utility functions (e.g., formatting, calculations)
├── TODO.md             # List of development tasks
└── tsconfig.json       # TypeScript compiler configuration
```

## Notes:

*   The `public/` directory contains static files that are not processed by Webpack (except `index.html` which gets variables injected). Use this for assets like favicons, manifest files, etc.
*   The `src/` directory contains all the dynamic code and assets that are part of the React application build.
*   Component organization within `src/components/` can be adapted based on complexity (e.g., grouping by feature vs. type).
*   Section components in `src/sections/` represent the primary content areas corresponding to the nine market analysis topics.
*   This structure aims for clarity, maintainability, and follows common practices in the React/TypeScript ecosystem. 