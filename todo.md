# Project TODO List

This list tracks remaining tasks for the Stripes VC Insurtech Dashboard.

## Phase 1: Refactoring & Cleanup (Current Focus)

- [ ] **Refactor File Structure:** Move all files into the new directory structure defined in `STRUCTURE.md`.
    - [ ] Move `index.html` to `public/`.
    - [ ] Move core files (`App.tsx`, `index.tsx`, `index.css`) to `src/`.
    - [ ] Move components to `src/components/*`.
    - [ ] Move section files to `src/sections/`.
    - [ ] Move data files to `src/data/`.
    - [ ] Move/Create `src/store/`, `src/types/`, `src/utils/` as needed.
- [ ] **Update Imports:** Adjust all `import` statements across the codebase to reflect new file locations after moving.
- [ ] **Standardize File Types:**
    - [ ] Convert all `.js` components (especially in `src/sections/`) to `.tsx`.
    - [ ] Ensure consistent use of `.ts` for non-component logic.
- [ ] **Cleanup Unused/Duplicate Files:**
    - [ ] Delete `App.js`.
    - [ ] Delete `index.js`.
    - [ ] Delete `index.ts` (unless used for specific types export later).
    - [ ] Delete `mockData.js`.
    - [ ] Delete `pasted_content.txt`, `pasted_content_2.txt`.
    - [ ] Review `server.js` - Confirm if necessary for GitHub Pages deployment. Delete if not.
    - [ ] Review `Dockerfile` - Confirm if necessary. Delete if not targeting Docker deployment.
    - [ ] Review `verify-links.js` - Determine if still needed/useful.
    - [ ] Review `.md` files (`data_analysis.md`, `deployment.md`, `documentation.md`, `website_architecture.md`) - Consolidate, update, or remove redundant info.
- [ ] **Verify Build & Functionality:**
    - [ ] Ensure `npm start` works without errors after refactoring.
    - [ ] Ensure `npm run build` completes successfully.
    - [ ] Perform basic functional testing in the browser.

## Phase 2: Deployment Preparation

- [ ] **Configure GitHub Pages:** Set up the repository settings for GitHub Pages deployment (e.g., deploy from `gh-pages` branch or `main` branch `/docs` folder).
- [ ] **Setup Deployment Workflow (Optional but Recommended):** Create a GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically build and deploy the site on pushes to the `main` branch.
- [ ] **Test Deployment:** Deploy the site to GitHub Pages and verify it works correctly.

## Phase 3: Enhancements & Maintenance (Future)

- [ ] **Improve Testing:**
    - [ ] Add unit tests for critical components and utility functions.
    - [ ] Consider integration tests for user flows.
- [ ] **Optimize Performance:** Analyze bundle size and runtime performance, implement optimizations if needed.
- [ ] **Enhance Accessibility:** Review and improve accessibility (ARIA attributes, keyboard navigation, color contrast).
- [ ] **Refine Documentation:** Update `README.md` and other documentation based on the final state.

## Original TODOs (Review/Integrate/Discard)

*(Copied from original `todo.md` - review if still relevant or covered above)*
- [ ] Review provided documents
- [ ] Clarify requirements with user
- [ ] Analyze mock data structure
  - [ ] Extract data patterns for each visualization
  - [ ] Identify data relationships between sections
  - [ ] Define data models for mock data generation
- [ ] Design website architecture
  - [ ] Define component structure (Superseded by refactoring)
  - [ ] Plan data flow (Review with Redux setup)
  - [ ] Select libraries for visualization (Done)
  - [ ] Create responsive layout design (Verify/Improve)
- [ ] Develop frontend interface
  - [ ] Set up React project (Done)
  - [ ] Implement layout and navigation (Verify/Refine)
  - [ ] Create reusable UI components (Done, now organizing)
  - [ ] Implement global filtering system (Verify/Refine)
- [ ] Implement data visualization components
  - [ ] Generate mock data based on patterns (Done, using `mockData.ts`)
  - [ ] Implement all nine section visualizations (Done, now organizing)
  - [ ] Add interactivity to visualizations (Verify/Refine)
  - [ ] Implement insight cards (Done, now organizing)
- [ ] Integrate gap analysis functionality
  - [ ] Implement opportunity scoring (Verify/Refine)
  - [ ] Create investment gap identification algorithms (Verify/Refine)
  - [ ] Add VC/PE specific analysis features (Verify/Refine)
- [ ] Test and deploy website
  - [ ] Test responsiveness and functionality (Covered in new TODOs)
  - [ ] Optimize performance (Covered in new TODOs)
  - [ ] Deploy to production (Covered in new TODOs)
- [ ] Document features and usage
  - [ ] Create comprehensive user guide (Consider adding to README or separate doc)
  - [ ] Document key features and functionality (Covered partially in README, review needs)
  - [ ] Include deployment instructions (Covered in README)

# TODO List

This file tracks pending tasks, potential improvements, and ideas for the InsurTech Dashboard project.

## High Priority

-   [ ] **Adopt Scalable Styling:** Strategically migrate inline styles (`style={{...}}`) to a dedicated solution (CSS Modules or Styled Components preferred). (CTO Rec. #1)
-   [ ] **Implement Testing:** Introduce Jest & React Testing Library. Start with unit tests for common components/utils and basic integration tests. (CTO Rec. #2)
-   [ ] **Refine State Management:** Evaluate if current state handling is sufficient. Consider Context API or Zustand/Redux if complexity increases (e.g., for global filters or shared state beyond `App.tsx`). Remove unused Redux dependencies if not needed. (CTO Rec. #3)
-   [ ] **Verify GitHub Pages Deployment:** After merge/commit, double-check the deployed GitHub Pages site (`https://andeslee444.github.io/insurtech-dashboard-v2/`) to ensure all paths, links, and assets work correctly.

## Medium Priority

-   [ ] **Performance Optimization:**
    -   [ ] Implement code splitting (`React.lazy`/`Suspense`) for section components in `App.tsx`. (CTO Rec. #4a)
    -   [ ] Profile and apply memoization (`React.memo`, `useCallback`, `useMemo`) where needed, especially for charts. (CTO Rec. #4b)
    -   [ ] Analyze bundle size (`source-map-explorer`). (CTO Rec. #4c)
-   [ ] **Abstract Data Handling:** Create custom hooks (`use[Section]Data`) to abstract data access, preparing for potential API integration. (CTO Rec. #5)
-   [ ] **Fix ESLint Warnings:** Address all "defined but never used" warnings reported during `npm start`. (CTO Rec. #6a)
-   [ ] **Improve Code Quality:** Enforce stricter linting/formatting rules (ESLint/Prettier). Utilize more advanced TypeScript features where beneficial. (CTO Rec. #6b)
-   [ ] **Improve Accessibility (a11y):** Audit charts and interactive elements for ARIA compliance, keyboard navigation, and color contrast. (CTO Rec. #7)
-   [ ] **Replace Placeholder Icons:** Update `Layout.tsx` and `MainPage.tsx` to use specific, meaningful icons for each section from `react-icons/hi` or similar.

## Low Priority / Ideas

-   [ ] **Dependency Review:** Periodically review and update dependencies, remove unused ones. (CTO Rec. #8)
-   [ ] **Implement Real AI Search (Optional):** Replace mock AI search with a real backend integration.
-   [ ] **User Authentication:** Add login if needed.
-   [ ] **Data Persistence:** Connect to a real DB/API.
-   [ ] **Theme Customization:** Add light/dark mode toggle.
-   [ ] **More Chart Types:** Add scatter plots, heatmaps, etc.
-   [ ] **Enhanced Filtering/Sorting:** Improve table/chart filtering.
-   [ ] **Component Documentation:** Add JSDoc/TSDoc for complex shared components.
