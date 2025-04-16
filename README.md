# InsurTech Interactive Dashboard

This project is a React-based interactive dashboard visualizing market trends, technology adoption, risks, and investment opportunities within the InsurTech industry. It features multiple data sections and a mock AI-powered search for exploring insights.

Built for Stripes Venture Capital.

## Features

*   **Interactive Sections:** Explore 9 key areas of the InsurTech landscape:
    *   Market Dynamics
    *   Technology Adoption
    *   Emerging Risks
    *   Startup Ecosystem
    *   Distribution Channels
    *   Customer Experience
    *   Capital Flow
    *   Regulatory Landscape
    *   Investment Opportunities
*   **Data Visualization:** Utilizes various charts (Bar, Area, Radar) and tables to present data effectively.
*   **Mock AI Search:** A simulated AI search on the homepage provides generated insights based on queries.
*   **Modern UI:** Clean, responsive layout inspired by modern design principles.
*   **TypeScript:** Built with TypeScript for enhanced code quality and maintainability.

## Getting Started

### Prerequisites

*   Node.js (v16 or later recommended)
*   npm (usually comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/andeslee444/insurtech-dashboard-v2.git
    cd insurtech-dashboard-v2
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the application locally:

```bash
npm start
```

This will typically open the application in your default web browser at `http://localhost:3000`.

## Deployment

This application is configured for deployment to GitHub Pages.

1.  **Set Homepage:** Ensure the `homepage` field in `package.json` is set correctly to `https://andeslee444.github.io/insurtech-dashboard-v2/`.
2.  **Deploy:** Run the deployment script:
    ```bash
    npm run deploy
    ```
    This will build the application and push the contents of the `build` directory to the `gh-pages` branch on GitHub.
3.  **Configure GitHub Pages:** In your repository settings on GitHub, ensure the Pages source is set to deploy from the `gh-pages` branch.

*(Alternatively, a GitHub Actions workflow in `.github/workflows/deploy.yml` can automate this process on pushes to the main branch.)*

## Project Structure

See `Structure.md` for a detailed explanation of the project's directory layout. 