# Stripes VC Insurtech Interactive Dashboard

This project provides an interactive dashboard for venture capital investors analyzing the insurtech market. It includes market analysis across nine key sections, featuring interactive visualizations based on mock data.

## Project Status

Currently undergoing refactoring for improved organization and maintainability, with the goal of deploying as a static website on GitHub Pages.

See `STRUCTURE.md` for the target file layout and `TODO.md` for ongoing tasks.

## Development Setup

1.  **Prerequisites:**
    *   Node.js (v14.0.0 or higher recommended - check `package.json` engines)
    *   npm (usually included with Node.js) or yarn

2.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

4.  **Run the development server:**
    ```bash
    npm start
    # or
    # yarn start
    ```
    This will usually open the application in your default browser at `http://localhost:3000`.

## Building for Production

To create an optimized static build suitable for deployment:

```bash
npm run build
# or
# yarn build
```

This command generates a `build/` directory containing the static assets.

## Deployment (GitHub Pages)

This project is intended to be deployed as a static site using GitHub Pages.

**Method 1: Using `gh-pages` branch (Manual or Automated)**

1.  Ensure the build output is in the `build/` directory (`npm run build`).
2.  Use a tool like `gh-pages` (`npm install --save-dev gh-pages`) to push the contents of the `build/` directory to the `gh-pages` branch.
    *   Add a script to `package.json`:
        ```json
        "scripts": {
          // ... other scripts
          "deploy": "gh-pages -d build"
        }
        ```
    *   Run `npm run deploy`.
3.  Configure your repository's GitHub Pages settings to deploy from the `gh-pages` branch.

**Method 2: Deploying from `main` branch `/docs` folder (Manual)**

1.  Modify the build output directory in your build configuration (if using Create React App, this might involve ejecting or using configuration overrides) to be `/docs` instead of `/build`.
2.  Alternatively, manually copy the contents of the `build/` directory into a `/docs` directory in the root of your project and commit it.
3.  Configure your repository's GitHub Pages settings to deploy from the `main` branch and the `/docs` folder.

**Method 3: GitHub Actions (Recommended)**

1.  Create a workflow file (e.g., `.github/workflows/deploy.yml`) that triggers on pushes to the `main` branch.
2.  The workflow should check out the code, install dependencies, run the build (`npm run build`), and then use an action (like `peaceiris/actions-gh-pages`) to deploy the contents of the `build/` directory to the `gh-pages` branch.
3.  Configure your repository's GitHub Pages settings to deploy from the `gh-pages` branch.

See the official GitHub Pages documentation for more details.

## Key Technologies

*   React
*   TypeScript
*   Redux Toolkit
*   React Router
*   Styled Components
*   D3.js
*   Recharts 