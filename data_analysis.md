# Mock Data Structure Analysis

This document analyzes the mock data structure requirements for each visualization component in the Stripes Venture Capital interactive website.

## 1. Market Dynamics & Growth

### Market Share Evolution Chart
- **Data Structure**: Time series data with quarterly market share percentages from 2015-2025
- **Dimensions**:
  - Time (quarters from 2015-2025)
  - Market share percentage (overall)
  - Market share by line of business (Commercial Property, Cyber, General Liability, Professional Lines, Flood)
- **Patterns**:
  - Starting at ~5% market share in 2015
  - Gradual increase through 2018 (5.2-6%)
  - Accelerated growth from 2019-2022 (reaching ~9%)
  - Moderate but continued growth in 2023-2025
  - Seasonal patterns (Q1 lower, Q3 higher)
- **Line-Specific Patterns**:
  - Commercial Property: 2-3x growth from 2018-2023
  - Cyber: 4-5x growth from baseline
  - General Liability: Steady but less dramatic growth
  - Professional Lines: Moderate growth with plateau in 2023
  - Flood: Exponential growth from small base

### Geographic Heat Map
- **Data Structure**: State-by-state data with penetration percentages and growth rates
- **Dimensions**:
  - State (all 50 US states)
  - E&S penetration percentage
  - Year-over-year change
  - Line of business breakdown
- **Patterns**:
  - Highest penetration (20-23%): Florida, Louisiana
  - High penetration (15-19%): California, Texas, New York
  - Medium penetration (10-14%): Coastal states, Nevada, Colorado
  - Low penetration (5-9%): Most other states
  - Lowest penetration (2-4%): Midwest states
- **Growth Patterns**:
  - Fastest growth: Western states (wildfire exposure)
  - Moderate growth: Gulf Coast, Eastern Seaboard
  - Slowest growth: Midwest, Northern states

## 2. Technology Adoption Landscape

### Technology Maturity Radar
- **Data Structure**: Multi-dimensional data showing adoption rates across insurance processes
- **Dimensions**:
  - Insurance process (Distribution, Policy Admin, Claims, Customer Service, Underwriting, Risk Modeling)
  - Technology category (API/Integration, Automation/RPA, Advanced Analytics, AI/ML, Blockchain)
  - Adoption percentage
  - Company size tier
- **Patterns**:
  - Distribution Technologies: 65-75% adoption
  - Policy Administration: 50-60% adoption
  - Claims Processing: 40-50% adoption
  - Customer Service: 35-45% adoption
  - Underwriting: 25-35% adoption
  - Risk Modeling: 15-25% adoption
- **Company Size Variation**:
  - Large Carriers: 1.5-2x higher adoption rates
  - Mid-Size Carriers: Average adoption rates
  - Small Carriers: 0.5-0.7x average adoption rates
- **Technology-Specific Patterns**:
  - API/Integration: 70-80% adoption
  - Automation/RPA: 60-70% adoption
  - Advanced Analytics: 40-50% adoption
  - AI/ML: 20-30% adoption
  - Blockchain: 5-10% adoption

### ROI Timeline Chart
- **Data Structure**: Technology investment data with payback periods and ROI metrics
- **Dimensions**:
  - Technology category
  - Payback period (months)
  - ROI percentage
  - Confidence intervals
  - Company size
- **Patterns**:
  - Distribution Platforms: 6-12 month payback, 150-300% ROI
  - Claims Automation: 12-18 month payback, 100-200% ROI
  - Customer Service AI: 12-24 month payback
  - Underwriting Tools: 18-30 month payback, 75-150% ROI
  - Core Systems: 24-48 month payback, 50-100% ROI
  - Advanced Risk Models: 18-36 month payback
- **Confidence Intervals**:
  - Established technologies: ±10%
  - Emerging technologies: ±30%

## 3. Emerging Risk Categories

### Opportunity Bubble Chart
- **Data Structure**: Risk category data with market size, growth rate, and technology penetration
- **Dimensions**:
  - Risk category
  - Market size ($B)
  - Growth rate (%)
  - Technology penetration (%)
  - Competitive intensity
- **Patterns**:
  - Cyber Liability: $8-10B, 25-30% growth, 40-50% tech penetration
  - Flood Insurance: $4-6B, 20-25% growth, 30-40% tech penetration
  - Renewable Energy: $1-2B, 35-40% growth, 20-30% tech penetration
  - Digital Asset Coverage: $0.5-1B, 40-50% growth, 30-40% tech penetration
  - ESG Liability: $1-2B, 30-35% growth, 10-20% tech penetration
  - Parametric Insurance: $1-2B, 25-30% growth, 50-60% tech penetration
  - Supply Chain: $3-4B, 15-20% growth, 15-25% tech penetration
  - Climate Adaptation: $1-2B, 25-30% growth, 10-20% tech penetration

### Underwriting Challenge Index
- **Data Structure**: Risk category data with challenge metrics on different dimensions
- **Dimensions**:
  - Risk category
  - Data availability challenge (1-10 scale)
  - Modeling complexity (1-10 scale)
  - Regulatory uncertainty (1-10 scale)
- **Patterns**:
  - Cyber: Data availability (7-8), Modeling complexity (8-9), Regulatory uncertainty (6-7)
  - Flood: Data availability (4-5), Modeling complexity (6-7), Regulatory uncertainty (4-5)
  - ESG: Data availability (8-9), Modeling complexity (7-8), Regulatory uncertainty (8-9)
  - Digital Assets: Data availability (9-10), Modeling complexity (7-8), Regulatory uncertainty (9-10)
  - Parametric: Data availability (3-4), Modeling complexity (3-4), Regulatory uncertainty (5-6)

## 4. InsurTech Startup Ecosystem

### Funding Flow Sankey
- **Data Structure**: Funding flow data between sources and recipients over time
- **Dimensions**:
  - Funding source (VC, PE, Strategic, Other)
  - Recipient category (Distribution, Full-Stack Carriers, Claims, Underwriting, Data & Analytics)
  - Time (quarters from 2020-2025)
  - Funding amount ($B)
  - Funding stage
- **Patterns**:
  - Funding Sources:
    - Venture Capital: 50-60% of total
    - Private Equity: 20-25% of total
    - Strategic Investors: 15-20% of total
    - Other: 5-10% of total
  - Recipient Categories:
    - Distribution: 30-35% of total
    - Full-Stack Carriers: 25-30% of total
    - Claims: 10-15% of total
    - Underwriting: 15-20% of total
    - Data & Analytics: 10-15% of total
  - Time Pattern:
    - 2020: $7-8B total funding
    - 2021: $15-16B total funding (peak)
    - 2022: $8-9B total funding
    - 2023: $6-7B total funding
    - 2024: $7-8B total funding (stabilization)
  - Stage Breakdown:
    - Early Stage: 30-35% in 2020, declining to 20-25% by 2024
    - Mid Stage: 40-45% consistent
    - Late Stage: 25-30% in 2020, increasing to 35-40% by 2024

### Profitability Journey
- **Data Structure**: Time series data tracking growth rate vs. combined ratio for public InsurTechs
- **Dimensions**:
  - Company
  - Time (quarters)
  - Growth rate (%)
  - Combined ratio (%)
  - Key milestones
- **Patterns**:
  - Journey Pattern:
    - Start: High growth (60-80%), poor combined ratio (110-120%)
    - Middle: Moderate growth (30-50%), improving combined ratio (100-110%)
    - Recent: Lower growth (15-30%), approaching profitability (95-105%)
    - Projected: Sustainable growth (10-20%), profitability (90-95%)
  - Company-Specific Patterns:
    - Full-Stack Carriers: Longer journey to profitability
    - MGA Models: Faster path to profitability
    - Technology Providers: Different metrics (revenue growth vs. margin)
  - Key Milestones:
    - IPO point
    - First quarter of positive EBITDA
    - First quarter of underwriting profit
    - Sustained profitability

## 5. Distribution Channel Evolution

### Channel Transition Flow
- **Data Structure**: Time series data showing premium distribution across channels
- **Dimensions**:
  - Time (years from 2015-2025)
  - Distribution channel
  - Premium volume
  - Line of business
- **Patterns**:
  - Channel Categories:
    - Traditional Retail Brokers: 50-55% in 2015, declining to 35-40% by 2025
    - Wholesale Brokers: 35-40% in 2015, increasing to 40-45% by 2020, then declining to 35-40% by 2025
    - Digital Platforms: 5-10% in 2015, increasing to 20-25% by 2025
    - Direct: 2-5% in 2015, increasing to 5-8% by 2025
  - Line-Specific Patterns:
    - Cyber: Highest digital platform share (30-35%)
    - Flood: High digital platform share (25-30%)
    - Complex Commercial: Lowest digital platform share (10-15%)
  - Growth Patterns:
    - Digital Platforms: 25-30% CAGR
    - Wholesale Brokers: 5-7% CAGR
    - Traditional Retail: 0-2% CAGR
    - Direct: 10-15% CAGR

### Digital Impact Metrics
- **Data Structure**: Efficiency metrics data by line of business and channel
- **Dimensions**:
  - Line of business
  - Quote time reduction (%)
  - Digital premium growth ($B)
  - Cost efficiency metrics
  - Time (years from 2020-2025)
- **Patterns**:
  - Quote Time Reduction:
    - Small Commercial: 70-80% reduction
    - Cyber: 60-70% reduction
    - Flood: 70-80% reduction
    - Professional Lines: 50-60% reduction
    - Complex Commercial: 30-40% reduction
  - Digital Premium Growth:
    - 2020: $2-3B
    - 2021: $4-5B
    - 2022: $6-7B
    - 2023: $8-9B
    - 2024: $10-12B
    - 2025: $14-16B
  - Cost Efficiency:
    - Acquisition Cost: 20-30% lower in digital channels
    - Processing Cost: 50-60% lower in digital channels
    - Servicing Cost: 40-50% lower in digital channels

## 6. Customer Experience Analysis

### NPS Trend Tracker
- **Data Structure**: Time series data tracking NPS scores by line of business and channel
- **Dimensions**:
  - Time (quarters from 2020-2025)
  - Line of business
  - Distribution channel
  - NPS score
- **Patterns**:
  - Overall NPS Pattern:
    - 2020: 25-30 (pre-hard market)
    - 2021: 15-20 (hard market impact)
    - 2022: 10-15 (hard market trough)
    - 2023: 20-25 (recovery begins)
    - 2024: 25-30 (continued recovery)
    - 2025: 30-35 (exceeding pre-hard market)
  - Line-Specific Patterns:
    - Professional Lines: Highest NPS (5-10 points above average)
    - Property: Lowest NPS during hard market (10-15 points below average)
    - Cyber: Steepest decline during hard market period
  - Channel Comparison:
    - Digital: 10-15 points higher than traditional
    - Wholesale: 5-10 points lower than retail
    - Direct: Highly variable by line

### Experience Gap Matrix
- **Data Structure**: Matrix data showing customer experience gaps across dimensions and segments
- **Dimensions**:
  - Experience dimension (Quote Process, Application/Binding, Policy Documents, Billing, Policy Service, Claims, Renewal)
  - Customer segment (Small Business, Mid-Market, Large Commercial, Specialized Industries)
  - Gap intensity (1-10 scale)
  - Line of business
- **Patterns**:
  - Gap Intensity:
    - Claims: 7-9 (largest gaps)
    - Application/Binding: 5-7
    - Policy Documents: 4-6
    - Renewal: 5-7
    - Other dimensions: 3-5
  - Line-Specific Patterns:
    - Property Claims: Largest gaps (8-9)
    - Cyber Service: Moderate gaps (5-6)
    - Professional Lines Application: Smaller gaps (3-4)

## 7. Capital Flow & Investment Returns

### Investment Source Timeline
- **Data Structure**: Time series data tracking capital flow by investor type
- **Dimensions**:
  - Time (years from 2015-2025)
  - Investment source (PE, Strategic, VC, Public Markets)
  - Investment amount ($B)
  - Valuation multiple
- **Patterns**:
  - Investment Sources:
    - Private Equity: 25-30% in 2015, increasing to 40-45% by 2025
    - Strategic Investors: 40-45% in 2015, decreasing to 30-35% by 2025
    - Venture Capital: 10-15% in 2015, increasing to 15-20% by 2021, then decreasing to 10-15% by 2025
    - Public Markets: 15-20% in 2015, decreasing to 10-15% by 2025
  - Investment Volume:
    - 2015-2018: Steady growth ($5-8B annually)
    - 2019-2022: Acceleration ($10-15B annually)
    - 2023-2025: Moderation ($8-12B annually)
  - Valuation Multiples:
    - 2015: 1.5-2.0x book value
    - 2021: 3.0-3.5x book value (peak)
    - 2025: 2.0-2.5x book value

### PE Influence Index
- **Data Structure**: Segment data showing PE ownership and valuation metrics
- **Dimensions**:
  - Segment (MGA, E&S Carriers, Technology Providers, Wholesale Distribution)
  - PE ownership percentage
  - Valuation premium
  - Investment horizon
- **Patterns**:
  - PE Ownership:
    - MGA Segment: 55-60% PE-owned
    - E&S Carriers: 35-40% PE-owned
    - Technology Providers: 50-55% PE-owned
    - Wholesale Distribution: 60-65% PE-owned
  - Valuation Premiums:
    - PE-Backed vs. Non-PE: 20-25% premium
    - Technology-Enabled vs. Traditional: 30-35% premium
    - Distribution vs. Risk-Bearing: 15-20% premium
  - Investment Horizon:
    - Initial Investment to First Add-On: 12-18 months
    - Total Hold Period: 4-6 years
    - Exit Multiple: 2.0-2.5x entry valuation

## 8. Regulatory Landscape

### Regulatory Flexibility Map
- **Data Structure**: State-by-state data with regulatory metrics
- **Dimensions**:
  - State (all 50 US states)
  - Regulatory flexibility score (1-10 scale)
  - Diligent search requirement category
  - Filing burden index (1-10 scale)
- **Patterns**:
  - Regulatory Flexibility Score:
    - High Flexibility (8-10): Wyoming, Delaware, Vermont
    - Medium-High (6-8): Texas, Florida, South Carolina
    - Medium (4-6): New York, California, Illinois
    - Low-Medium (2-4): Washington, Massachusetts, Connecticut
    - Low (1-2): California (certain lines)
  - Diligent Search Requirements:
    - No Requirement: 3-4 states
    - Limited Requirement: 10-12 states
    - Standard Requirement: 25-30 states
    - Strict Requirement: 8-10 states
  - Filing Burden Index:
    - High Burden (8-10): California, New York
    - Medium Burden (4-7): Most states
    - Low Burden (1-3): Wyoming, Delaware, Vermont

### Compliance Requirement Matrix
- **Data Structure**: Matrix data showing compliance requirements across states
- **Dimensions**:
  - State (all 50 US states plus DC)
  - Requirement category (Diligent Search, Premium Tax, Stamping Office, Affidavit Requirements, Export List, Industrial Insured Exemption)
  - Complexity score (1-5 scale)
- **Patterns**:
  - Complexity Score:
    - Diligent Search: Highest complexity (3-5)
    - Premium Tax: Medium complexity (2-4)
    - Other categories: Varying complexity (1-4)
  - Regional Patterns:
    - Western States: Higher complexity
    - Southeastern States: Medium complexity
    - Northeastern States: Higher complexity
    - Midwestern States: Lower complexity

## 9. Investment Opportunity Scorecard

### Opportunity Radar
- **Data Structure**: Multi-dimensional scoring data for investment opportunities
- **Dimensions**:
  - Investment opportunity category
  - Market size score (1-10 scale)
  - Growth potential score (1-10 scale)
  - Technology gap score (1-10 scale)
  - Competitive intensity score (1-10 scale, inverted)
  - Regulatory complexity score (1-10 scale, inverted)
- **Patterns**:
  - Opportunity Scores:
    - Cyber Underwriting Tools: High market size (8-9), high growth (8-9), large tech gap (7-8)
    - Flood Risk Modeling: Medium market size (6-7), high growth (8-9), large tech gap (7-8)
    - Claims Automation: High market size (8-9), medium growth (6-7), medium tech gap (5-6)
    - Digital Distribution: High market size (8-9), medium growth (6-7), small tech gap (3-4)
    - ESG Risk Assessment: Low market size (3-4), high growth (8-9), large tech gap (8-9)

### White Space Identifier
- **Data Structure**: Matrix data mapping market needs to technology solutions
- **Dimensions**:
  - Market need
  - Technology solution
  - Opportunity size
  - Competitive presence
- **Patterns**:
  - High Opportunity Areas:
    - Cyber risk quantification tools
    - ESG risk assessment platforms
    - Parametric insurance infrastructure
    - Climate risk modeling for non-CAT exposures
    - Digital asset coverage platforms
  - Medium Opportunity Areas:
    - Small commercial digital platforms
    - Claims automation for complex lines
    - Embedded insurance infrastructure
    - Specialty line API ecosystems
  - Low Opportunity Areas:
    - Personal lines distribution
    - Standard commercial lines platforms
    - Core systems replacement

## Data Relationships Between Sections

1. **Market Dynamics & Technology Adoption**:
   - Growth rates in specific lines correlate with technology adoption rates
   - G
(Content truncated due to size limit. Use line ranges to read in chunks)