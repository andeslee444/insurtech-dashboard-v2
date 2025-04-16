# Development Notes

This file tracks the refactoring process, decisions made, and context for the AI assistant working on the Stripes VC Insurtech Dashboard.

**Goal:** Refactor the codebase for better organization, maintainability, and prepare for deployment to GitHub Pages.

**Date:** $(date +%Y-%m-%d)

**Log:**

*   Moved initial files (`index.html`, `App.tsx`, `index.tsx`, `index.css`) to `public/` and `src/`.
*   Created standard subdirectories within `src/` (`components`, `data`, `sections`, etc.) and within `src/components/` (`charts`, `common`, `layout`, `interactive`).
*   Moved `mockData.ts` to `src/data/`.
*   Moved `*Section.js` files to `src/sections/`.
*   Moved `*.tsx` components into categorized `src/components/` subdirectories.
*   Fixed imports in `src/App.tsx`.
    *   Identified missing `opportunityData` export from `src/data/mockData.ts`.
    *   Copied `opportunityData` definition and `Opportunity` interface from `mockData.js` into `src/data/mockData.ts`.
*   Checked imports for `src/components/layout/Layout.tsx` and `src/components/layout/SectionContainer.tsx` (no changes needed).
*   Attempted to update imports for `src/components/common/InvestmentOpportunityScorecard.tsx`.
    *   Noticed `gapAnalysis.ts` was missing.
    *   Recreated `src/utils/gapAnalysis.ts` with basic `getTopOpportunities` function.
    *   Updated import paths in `InvestmentOpportunityScorecard.tsx`.
    *   Corrected `opp.growthPotentialScore` to `opp.growthPotential`.
    *   Refactored row rendering to use `styled-components` for `:hover` style.
    *   Uninstalled `@types/styled-components` because `styled-components` v6 includes its own types.

**Current Status:** Finished fixing imports and related issues in `src/components/common/InvestmentOpportunityScorecard.tsx`. Proceeding to check imports in other components within `src/components/common/`.

**Next Steps (Immediate):**

1.  Check imports for `src/components/common/OpportunityRadar.tsx`.
2.  Continue checking/fixing imports for remaining components in `src/components/common/`, then `charts/`, `interactive/`.
3.  Update imports in `src/sections/*.js` files (and rename to `.tsx`).

**Key Decisions Made:**

*   Targeting GitHub Pages for deployment (implies static site build).
*   Adopt a standard React/TypeScript project structure (`src`, `public`, `components`, etc.).
*   Standardize on TypeScript (`.tsx` for components, `.ts` for logic/data).
*   Plan to remove likely unnecessary files (`server.js`, `Dockerfile`) after confirmation.
*   Plan to remove duplicate files (`App.js`, `index.js`, `mockData.js`).
*   Plan to remove temporary files (`pasted_content*.txt`).

**Context for AI:**

*   Refer to `STRUCTURE.md` for the target file layout.
*   Refer to `TODO.md` for the task list.
*   The primary goal is a clean, well-structured static React application deployable to GitHub Pages.
*   Be mindful of updating import paths when moving files.
*   Confirm necessity before deleting potentially important files like `server.js` or `.md` documentation files.

## Refactoring `StartupEcosystemSection`

-   **Data Migration:** Copied `startupFundingData` and `startupCategoryData` from `mockData.js` to `src/data/mockData.ts`.
-   **Typing:** Added TypeScript interfaces (`StartupFunding`, `StartupCategory`) for the migrated data in `src/data/mockData.ts`.
-   **File Conversion:** Renamed `src/sections/StartupEcosystemSection.js` to `src/sections/StartupEcosystemSection.tsx`.
-   **Component Typing:** Added `React.FC` type annotation to the `StartupEcosystemSection` component.

## Addressing Linter Errors in `mockData.ts`

-   Identified an unterminated comment (`// Policy Administratio`) causing syntax errors. Removed the comment.
-   Identified duplicate declarations of `marketShareData`. 
    - Defined a new interface `MarketDynamicsDataPoint` for the detailed dataset.
    - Attempted to remove the first, simpler `marketShareData` declaration and apply the new interface to the second declaration.
    - Initial attempts to edit the file failed to remove the duplicate.
    - Successfully removed the duplicate declaration using the reapply functionality.
    - Linter errors related to `marketShareData` redeclaration are now resolved.

## Cursor Rules Configuration

-   Created `.cursor-rules.yaml` in the project root.
-   Added rules to:
    -   Reference `development_notes.md` for context before commands and update it afterwards.
    -   Prioritize Apple design principles (Clarity, Deference, Depth) for UI/visual changes.
    -   Prioritize preserving functionality and the overall project goal.
    -   Update `development_notes.md` with AI learnings after coding attempts.
    -   Reference `/Insurtech Masterplan.txt` for high-level project context.
    -   Reference `/Insurtech DataContext.txt` for mock data details when implementing charts/visualizations.

## Refactoring `TechnologyAdoptionSection`

-   Renamed `src/sections/TechnologyAdoptionSection.js` to `src/sections/TechnologyAdoptionSection.tsx`.
-   Added `React.FC` type annotation to the `TechnologyAdoptionSection` component.
-   Fixed component body restoration issue (`Expression expected` error).
-   Identified missing `technologyGapData` in `src/data/mockData.ts` via linter error.
-   Defined `TechnologyGap` interface and added `technologyGapData` array to `src/data/mockData.ts`.
-   Resolved import error in `TechnologyAdoptionSection.tsx`.
-   Identified property mismatch between `TechnologyAdoption` interface/data in `mockData.ts` and usage in `TechnologyAdoptionSection.tsx`.
-   Corrected the `TechnologyAdoption` interface and data in `mockData.ts` to match component usage.
-   Resolved TypeScript errors in `TechnologyAdoptionSection.tsx`.

## Next Steps

-   Address any remaining linter errors in the project.
-   Confirm necessity and potentially remove files: `server.js`, `Dockerfile`.
-   Remove duplicate JS files: `App.js`, `index.js`, `mockData.js`.
-   Remove temporary files: `pasted_content*.txt`.
-   Ensure all components and sections are successfully refactored to `.tsx` (Completed).
-   Verify imports across all components (Completed for sections and components).

## AI Learnings & Improvements

-   The internal command `/lint` is not the correct way to retrieve project-wide linter errors via available tools. Linter errors are typically provided in the user message context (`<linter_errors>`). If not present, assume no errors are currently detected by the linter. 

## File Cleanup

-   Reviewed duplicate JS files (`index.js`, `App.js`, `mockData.js`). Confirmed redundant and deleted.
-   Reviewed `server.js` and `Dockerfile`. Decided to keep them based on future feature requirements (SSR, Auth, Backend API).
-   Deleted temporary files: `pasted_content.txt`, `pasted_content_2.txt`.

## Deployment Strategy Considerations (`server.js`, `Dockerfile`)

-   `server.js` (Node.js server) would be required for:
    -   Server-Side Rendering (SSR) (e.g., with Next.js).
    -   Hosting a backend API layer within the same project.
    -   Custom server-level routing, proxying, or authentication.
-   `Dockerfile` would be required for:
    -   Deploying the application as a container (e.g., using Docker, Kubernetes, ECS, GKE).
    -   Ensuring consistent build/run environments across machines.
-   **Hosting on Own Website (e.g., VPS):**
    -   *Static Serving (like GitHub Pages):* Neither file is needed. Serve build output with Nginx/Apache.
    -   *Running Node.js Server (SSR/API):* `server.js` needed. `Dockerfile` optional (for containerizing the Node app).
    -   *Using Containers:* `Dockerfile` needed. `server.js` potentially needed inside the container.
-   **Current Goal (Static GitHub Pages):** Neither file is required.

## Rationale for TypeScript Adoption

-   Decision made early in refactoring to standardize on TypeScript (.tsx/.ts).
-   **Primary Benefits:**
    -   **Type Safety:** Catch errors during development via static typing and interfaces (e.g., caught `technologyAdoptionData` mismatch).
    -   **Maintainability/Readability:** Types serve as documentation, clarifying data structures and function signatures.
    -   **Developer Experience:** Improved autocompletion, refactoring, and error checking in IDEs.
    -   **Scalability:** Better complexity management for larger applications.
-   **Goal:** Create a more robust, maintainable, and developer-friendly codebase for the dashboard.

## Structure Review (`STRUCTURE.md` vs. Current)

-   Compared current `src/` directory structure to `STRUCTURE.md`.
-   Core files (`App.tsx`, `index.tsx`, `index.css`) and directories (`components`, `data`, `sections`, `store`, `types`, `utils`) align with the target.
-   Identified and deleted extraneous file: `src/development_notes.md`. Confirmed the root `development_notes.md` is the correct one referenced by cursor rules.

## Deployment Strategy Considerations (`server.js`, `Dockerfile`)

-   `server.js` (Node.js server) would be required for:
    -   Server-Side Rendering (SSR) (e.g., with Next.js).
    -   Hosting a backend API layer within the same project.
    -   Custom server-level routing, proxying, or authentication.
-   `Dockerfile` would be required for:
    -   Deploying the application as a container (e.g., using Docker, Kubernetes, ECS, GKE).
    -   Ensuring consistent build/run environments across machines.
-   **Hosting on Own Website (e.g., VPS):**
    -   *Static Serving (like GitHub Pages):* Neither file is needed. Serve build output with Nginx/Apache.
    -   *Running Node.js Server (SSR/API):* `server.js` needed. `Dockerfile` optional (for containerizing the Node app).
    -   *Using Containers:* `Dockerfile` needed. `server.js` potentially needed inside the container.
-   **Current Goal (Static GitHub Pages):** Neither file is required.

## Git Setup

-   `git status` revealed existing Git repository with unrelated history/changes (Meal Minder, Visa Fintech) on branch `temp-main`.
-   Recommendation: Remove existing `.git` directory and re-initialize Git for a clean history specific to this project before pushing to `insurtech-dashboard-v2`.
-   **Action:** Waiting for user confirmation to remove `.git` and re-initialize. 