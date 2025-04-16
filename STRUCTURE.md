# Project Structure

This document outlines the directory structure of the InsurTech Dashboard project.

```
/
├── public/             # Static assets (index.html, favicon, etc.)
├── src/
│   ├── App.css         # Global CSS styles
│   ├── App.tsx         # Main application component, handles routing
│   ├── index.css       # Base CSS (often from create-react-app)
│   ├── index.tsx       # Entry point of the React application
│   ├── react-app-env.d.ts # TypeScript declarations for create-react-app
│   ├── components/     # Reusable UI components
│   │   ├── common/     # General-purpose components (charts, tables, etc.)
│   │   │   ├── AreaChart.tsx
│   │   │   ├── BarChart.tsx
│   │   │   ├── ChartContainer.tsx
│   │   │   ├── DataTable.tsx
│   │   │   └── OpportunityRadar.tsx 
│   │   └── layout/     # Components defining the overall page structure
│   │       └── Layout.tsx
│   ├── data/           # Mock data source
│   │   └── mockData.ts
│   ├── pages/          # Top-level page components (e.g., homepage)
│   │   └── MainPage.tsx
│   └── sections/       # Components representing major dashboard sections
│       ├── CapitalFlowSection.tsx
│       ├── CustomerExperienceSection.tsx
│       ├── DistributionChannelSection.tsx
│       ├── EmergingRiskSection.tsx
│       ├── InvestmentOpportunitySection.tsx
│       ├── MarketDynamicsSection.tsx
│       ├── RegulatoryLandscapeSection.tsx
│       ├── StartupEcosystemSection.tsx
│       └── TechnologyAdoptionSection.tsx
├── .env                # (Optional) Environment variables
├── .gitignore          # Specifies intentionally untracked files
├── package.json        # Project metadata and dependencies
├── README.md           # Project overview and setup instructions
├── Structure.md        # This file: details on directory layout
├── TODO.md             # List of pending tasks and future improvements
├── Development_Notes.md # Notes on design choices and development process
└── tsconfig.json       # TypeScript compiler options
```

## Directory Explanations

*   **`src/components/common`**: Contains highly reusable UI elements like charts (`BarChart`, `AreaChart`), data display (`DataTable`), and specialized visualizations (`OpportunityRadar`). These components are designed to be generic and configurable.
*   **`src/components/layout`**: Holds components responsible for the overall page structure, primarily the main `Layout.tsx` which includes the sidebar and header.
*   **`src/data`**: Centralized location for mock data (`mockData.ts`). In a real application, this might be replaced or supplemented by API service calls.
*   **`src/pages`**: Contains components that represent distinct pages or views. Currently includes the `MainPage.tsx` which serves as the dashboard homepage/overview.
*   **`src/sections`**: Each file here represents a major thematic section of the dashboard displayed within the main layout when selected from the sidebar or homepage.
