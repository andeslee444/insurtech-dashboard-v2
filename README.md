# Stripes VC Insurtech Dashboard

An interactive analytics dashboard for venture capital investment in the insurtech sector, built with React and TypeScript. This dashboard visualizes market trends, technology adoption, investment opportunities, and startup ecosystem data to facilitate data-driven investment decisions.

**Live Demo:** [View Demo](https://andeslee444.github.io/insurtech-dashboard-v2/)

![Dashboard Preview](public/dashboard-preview.png)

## Features

- **Interactive Visualizations**: Dynamic charts and graphs that respond to user interactions
- **Multi-dimensional Analysis**: Nine specialized analytics sections covering different aspects of the insurtech market
- **Apple-Inspired Design**: Clean, intuitive UI following Apple Design Principles
- **Responsive Layout**: Optimized for various screen sizes

## Dashboard Sections

1. **Market Dynamics**: Market share evolution and geographical distribution
2. **Technology Adoption**: Technology adoption rates, growth trends, and investment analysis
3. **Emerging Risks**: Risk severity and trend analysis
4. **Startup Ecosystem**: Funding by stage and category analysis
5. **Distribution Channels**: Channel effectiveness and efficiency metrics
6. **Customer Experience**: Traditional vs. insurtech customer journey comparison
7. **Capital Flow**: Investment sources and destination analysis
8. **Regulatory Landscape**: Regulatory impact assessment
9. **Investment Opportunities**: Opportunity radar and scoring system

## Tech Stack

- **Framework**: React
- **Language**: TypeScript
- **Styling**: Inline styles with consistent design variables
- **Charts**: Custom chart components with D3.js integration
- **Icons**: react-icons (Heroicons)

## Development Setup

1. **Prerequisites**:
   - Node.js (v16+)
   - npm or yarn

2. **Installation**:
   ```bash
   # Clone the repository
   git clone https://github.com/andeslee444/insurtech-dashboard-v2.git
   
   # Navigate to the directory
   cd insurtech-dashboard-v2
   
   # Install dependencies
   npm install
   ```

3. **Running the Development Server**:
   ```bash
   npm start
   ```

4. **Building for Production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── components/             # Reusable UI components
│   ├── common/             # Shared components (charts, tables)
│   └── layout/             # Layout components
├── data/                   # Mock data and types
│   └── mockData.ts         # Data structures for visualizations
└── sections/               # Dashboard section components
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from Apple's Human Interface Guidelines
- Data modeling based on real insurtech market trends