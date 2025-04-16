# Development Notes - Insurtech Dashboard (Condensed)

**Last Updated:** $(date +%Y-%m-%d)

## Core Goal & Project Overview

- **Objective:** Build a visually appealing, interactive Insurtech investment dashboard for Stripes Venture Capital investors.
- **Focus:** Displaying key E&S (Excess & Surplus) market trends, technology adoption, emerging risks, startup ecosystem insights, and investment opportunities.
- **Design Philosophy:** Prioritize Apple design principles (Clarity, Deference, Depth).
- **Technology Stack:** React, TypeScript, D3.js (or similar for charts), styled-components.
- **Deployment Target:** Static site build deployed to GitHub Pages.

## Current Status & Next Steps

- **Status:** Codebase refactoring largely complete (JS to TSX, standard project structure). Key data types and mock data integrated into `src/data/mockData.ts`. Core components and sections are in place. Local development environment setup issues have been addressed (`tsconfig.json` added, dependencies reinstalled). GitHub Pages deployment action is configured.
- **Immediate Next Steps:**
    1. Ensure `npm start` runs successfully without compilation errors.
    2. Verify GitHub Pages deployment status and address any issues.
    3. Begin implementing interactive chart logic using a library like D3.js or Recharts, replacing placeholders.
    4. Refine UI/UX elements based on Apple Design Principles and Masterplan.

## Key Technical Decisions

- **TypeScript:** Standardized on TypeScript (.tsx/.ts) for type safety, maintainability, and developer experience.
- **Project Structure:** Adopted a standard React structure (`src`, `components`, `data`, `sections`, `utils`, etc.). See `STRUCTURE.md` for details.
- **Styling:** Using `styled-components` for component-scoped styling.
- **State Management:** (Not explicitly defined yet, consider Zustand or Context API if needed).
- **Data:** Using mock data from `src/data/mockData.ts`. Type definitions are crucial.
- **Build/Deployment:** Using Create React App's build process (`npm run build`) for a static build deployable to GitHub Pages. `server.js` and `Dockerfile` are kept but not required for the current deployment target.

## Essential Context Files

- **`/Insurtech Masterplan.txt`:** High-level project vision, design philosophy, detailed specifications for each dashboard section and visualization. **Crucial reference for UI/UX and feature implementation.**
- **`/Insurtech DataContext.txt`:** Detailed guide on mock data structure, expected visual patterns, and research-based context for each data point/section. **Essential when working with data, charts, and visualizations.**
- **`/.cursor-rules.yaml`:** Defines rules for the AI assistant, including design guidelines, context referencing, and development note updates.
- **`/STRUCTURE.md`:** Defines the target file and directory layout.
- **`/TODO.md`:** Tracks the high-level task list for the project.

## Key AI Learnings & Improvements (To be Consolidated Periodically)

*   **Module Resolution:** Ensure correct relative paths (`./`) for local imports in `.tsx` files. Missing `tsconfig.json` was a key blocker for `npm start`. Clean dependency installs (`rm -rf node_modules package-lock.json && npm install`) can resolve stubborn issues.
*   **TypeScript Interfaces:** Carefully define and match interfaces in `mockData.ts` with component prop usage to avoid type errors (e.g., `MarketDynamicsDataPoint` vs. `MarketShare`).
*   **Duplicate Declarations:** Be mindful of potential duplicate variable/interface declarations, especially when merging data from different sources. Use linter output and tools like `reapply` to resolve.
*   **Styled-Components Types:** v6+ includes its own types; `@types/styled-components` is unnecessary and can cause conflicts.
*   **Cursor Rules:** Use specific file paths (`/Insurtech Masterplan.txt`) when referencing root-level files in rules. `/lint` command is not the way to get linter errors; they are usually in context.

## Cursor Rules Summary

- Reference this file (`DEVELOPMENT_NOTES.md`), `Masterplan`, and `DataContext` for context.
- Prioritize Apple Design Principles for UI.
- Prioritize functionality preservation.
- Update `DEVELOPMENT_NOTES.md` with learnings after coding attempts.
- Periodically consolidate these notes (new rule added).

*(This file should be updated regularly to reflect the current state and key learnings)*
