# Project Structure

This document outlines the organization of the Stripes VC Insurtech Dashboard project, providing an overview of key directories and files.

## Root Directory

```
/
├── .github/                 # GitHub Actions workflows
├── public/                  # Static assets
├── src/                     # Source code
├── .gitignore               # Git ignore rules
├── package.json             # Project dependencies and scripts
├── README.md                # Project overview
├── DEVELOPMENT_NOTES.md     # Development process documentation
├── todo.md                  # Task tracking
└── STRUCTURE.md             # This file
```

## Source Code (`/src`)

```
src/
├── App.tsx                  # Main application component
├── index.tsx                # Application entry point
│
├── components/              # Reusable components
│   ├── common/              # Shared UI components
│   │   ├── AreaChart.tsx    # Area chart visualization
│   │   ├── BarChart.tsx     # Bar chart visualization
│   │   ├── ChartContainer.tsx # Container for chart components
│   │   ├── DataTable.tsx    # Data table component
│   │   ├── RadarChart.tsx   # Radar chart visualization
│   │   └── ...
│   │
│   └── layout/              # Layout components
│       └── Layout.tsx       # Main application layout
│
├── data/                    # Data and types
│   └── mockData.ts          # Mock data for development
│
└── sections/                # Dashboard section components
    ├── MarketDynamicsSection.tsx
    ├── TechnologyAdoptionSection.tsx
    ├── EmergingRiskSection.tsx
    ├── StartupEcosystemSection.tsx
    ├── DistributionChannelSection.tsx
    ├── CustomerExperienceSection.tsx
    ├── CapitalFlowSection.tsx
    ├── RegulatoryLandscapeSection.tsx
    └── InvestmentOpportunitySection.tsx
```

## Component Structure

Each section component follows a similar structure:

```typescript
// Imports
import React, { useState, useEffect } from 'react';
import { relevantData } from '../data/mockData';
import ChartComponent from '../components/common/ChartComponent';

// Component definition
const SectionComponent: React.FC = () => {
  // State management
  const [state, setState] = useState(initialValue);
  
  // Data processing
  const processedData = relevantData.map(item => ({
    // Transform data for visualization
  }));
  
  // Side effects
  useEffect(() => {
    // Handle animations, data loading, etc.
  }, [dependencies]);
  
  // Render
  return (
    <div className="section-container">
      <ChartComponent data={processedData} />
      {/* Additional section content */}
    </div>
  );
};

export default SectionComponent;
```

## Styling Approach

The project uses inline styles with consistent design variables defined in ChartContainer.tsx:

```typescript
// Example of color variables
export const colors = {
  primary: '#0A84FF',     // Apple Blue
  green: '#30D158',       // Apple Green
  orange: '#FF9F0A',      // Apple Orange
  purple: '#5E5CE6',      // Apple Purple
  // ... other colors
};
```

## Type Definitions

Key type definitions are located in mockData.ts:

```typescript
// Example type definition
export interface MarketShareDataPoint {
  year: number;
  traditional: number;
  insurtech: number;
}

// Usage in component
const data: MarketShareDataPoint[] = marketShareData;
```