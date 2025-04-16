// Type Definitions for Market Dynamics Data
export interface MarketShare {
  year: number;
  traditional: number;
  insurtech: number;
}

export interface GrowthRate {
  category: string;
  rate: number;
}

// Interface for the detailed Market Dynamics & Growth data
export interface MarketDynamicsDataPoint {
  time: string;
  marketShare: number;
  lineOfBusiness: string;
  marketShareByLine: number;
  growth: number;
  volume: number;
}

// Mock data for Market Dynamics section (Copied from mockData.js)

export const growthRateData: GrowthRate[] = [
  { category: 'Cyber Insurance', rate: 28.5 },
  { category: 'Climate Risk', rate: 24.2 },
  { category: 'ESG Compliance', rate: 22.8 },
  { category: 'Parametric Insurance', rate: 19.5 },
  { category: 'SMB Digital', rate: 18.3 },
  { category: 'On-Demand Coverage', rate: 17.6 },
  { category: 'Embedded Insurance', rate: 16.9 },
  { category: 'AI Underwriting', rate: 15.8 },
];

// Mock data for Market Dynamics & Growth section
export const marketShareData: MarketDynamicsDataPoint[] = [
  // 2015 data (starting at ~5%)
  { time: '2015-Q1', marketShare: 4.8, lineOfBusiness: 'Overall', marketShareByLine: 4.8, growth: 0, volume: 5.2 },
  { time: '2015-Q2', marketShare: 5.0, lineOfBusiness: 'Overall', marketShareByLine: 5.0, growth: 0, volume: 5.4 },
  { time: '2015-Q3', marketShare: 5.2, lineOfBusiness: 'Overall', marketShareByLine: 5.2, growth: 0, volume: 5.6 },
  { time: '2015-Q4', marketShare: 5.1, lineOfBusiness: 'Overall', marketShareByLine: 5.1, growth: 0, volume: 5.5 },
  
  // 2016 data
  { time: '2016-Q1', marketShare: 5.0, lineOfBusiness: 'Overall', marketShareByLine: 5.0, growth: 4.2, volume: 5.4 },
  { time: '2016-Q2', marketShare: 5.2, lineOfBusiness: 'Overall', marketShareByLine: 5.2, growth: 4.0, volume: 5.6 },
  { time: '2016-Q3', marketShare: 5.4, lineOfBusiness: 'Overall', marketShareByLine: 5.4, growth: 3.8, volume: 5.8 },
  { time: '2016-Q4', marketShare: 5.3, lineOfBusiness: 'Overall', marketShareByLine: 5.3, growth: 3.9, volume: 5.7 },
  
  // 2017 data
  { time: '2017-Q1', marketShare: 5.2, lineOfBusiness: 'Overall', marketShareByLine: 5.2, growth: 4.0, volume: 5.6 },
  { time: '2017-Q2', marketShare: 5.4, lineOfBusiness: 'Overall', marketShareByLine: 5.4, growth: 3.8, volume: 5.8 },
  { time: '2017-Q3', marketShare: 5.6, lineOfBusiness: 'Overall', marketShareByLine: 5.6, growth: 3.7, volume: 6.0 },
  { time: '2017-Q4', marketShare: 5.5, lineOfBusiness: 'Overall', marketShareByLine: 5.5, growth: 3.8, volume: 5.9 },
  
  // 2018 data (gradual increase to 5.2-6%)
  { time: '2018-Q1', marketShare: 5.4, lineOfBusiness: 'Overall', marketShareByLine: 5.4, growth: 3.8, volume: 5.8 },
  { time: '2018-Q2', marketShare: 5.6, lineOfBusiness: 'Overall', marketShareByLine: 5.6, growth: 3.7, volume: 6.0 },
  { time: '2018-Q3', marketShare: 5.8, lineOfBusiness: 'Overall', marketShareByLine: 5.8, growth: 3.6, volume: 6.2 },
  { time: '2018-Q4', marketShare: 5.7, lineOfBusiness: 'Overall', marketShareByLine: 5.7, growth: 3.6, volume: 6.1 },
  
  // 2019 data (accelerated growth begins)
  { time: '2019-Q1', marketShare: 5.9, lineOfBusiness: 'Overall', marketShareByLine: 5.9, growth: 9.3, volume: 6.3 },
  { time: '2019-Q2', marketShare: 6.2, lineOfBusiness: 'Overall', marketShareByLine: 6.2, growth: 10.7, volume: 6.6 },
  { time: '2019-Q3', marketShare: 6.5, lineOfBusiness: 'Overall', marketShareByLine: 6.5, growth: 12.1, volume: 7.0 },
  { time: '2019-Q4', marketShare: 6.4, lineOfBusiness: 'Overall', marketShareByLine: 6.4, growth: 12.3, volume: 6.9 },
  
  // 2020 data
  { time: '2020-Q1', marketShare: 6.6, lineOfBusiness: 'Overall', marketShareByLine: 6.6, growth: 11.9, volume: 7.1 },
  { time: '2020-Q2', marketShare: 6.9, lineOfBusiness: 'Overall', marketShareByLine: 6.9, growth: 11.3, volume: 7.4 },
  { time: '2020-Q3', marketShare: 7.2, lineOfBusiness: 'Overall', marketShareByLine: 7.2, growth: 10.8, volume: 7.7 },
  { time: '2020-Q4', marketShare: 7.1, lineOfBusiness: 'Overall', marketShareByLine: 7.1, growth: 10.9, volume: 7.6 },
  
  // 2021 data
  { time: '2021-Q1', marketShare: 7.3, lineOfBusiness: 'Overall', marketShareByLine: 7.3, growth: 10.6, volume: 7.8 },
  { time: '2021-Q2', marketShare: 7.6, lineOfBusiness: 'Overall', marketShareByLine: 7.6, growth: 10.1, volume: 8.2 },
  { time: '2021-Q3', marketShare: 7.9, lineOfBusiness: 'Overall', marketShareByLine: 7.9, growth: 9.7, volume: 8.5 },
  { time: '2021-Q4', marketShare: 7.8, lineOfBusiness: 'Overall', marketShareByLine: 7.8, growth: 9.9, volume: 8.4 },
  
  // 2022 data (reaching ~9%)
  { time: '2022-Q1', marketShare: 8.0, lineOfBusiness: 'Overall', marketShareByLine: 8.0, growth: 9.6, volume: 8.6 },
  { time: '2022-Q2', marketShare: 8.3, lineOfBusiness: 'Overall', marketShareByLine: 8.3, growth: 9.2, volume: 8.9 },
  { time: '2022-Q3', marketShare: 8.6, lineOfBusiness: 'Overall', marketShareByLine: 8.6, growth: 8.9, volume: 9.2 },
  { time: '2022-Q4', marketShare: 8.5, lineOfBusiness: 'Overall', marketShareByLine: 8.5, growth: 9.0, volume: 9.1 },
  
  // 2023 data (moderate but continued growth)
  { time: '2023-Q1', marketShare: 8.6, lineOfBusiness: 'Overall', marketShareByLine: 8.6, growth: 7.5, volume: 9.2 },
  { time: '2023-Q2', marketShare: 8.8, lineOfBusiness: 'Overall', marketShareByLine: 8.8, growth: 6.0, volume: 9.4 },
  { time: '2023-Q3', marketShare: 9.0, lineOfBusiness: 'Overall', marketShareByLine: 9.0, growth: 4.7, volume: 9.7 },
  { time: '2023-Q4', marketShare: 8.9, lineOfBusiness: 'Overall', marketShareByLine: 8.9, growth: 4.7, volume: 9.6 },
  
  // 2024 data
  { time: '2024-Q1', marketShare: 9.0, lineOfBusiness: 'Overall', marketShareByLine: 9.0, growth: 4.7, volume: 9.7 },
  { time: '2024-Q2', marketShare: 9.1, lineOfBusiness: 'Overall', marketShareByLine: 9.1, growth: 3.4, volume: 9.8 },
  { time: '2024-Q3', marketShare: 9.2, lineOfBusiness: 'Overall', marketShareByLine: 9.2, growth: 2.2, volume: 9.9 },
  { time: '2024-Q4', marketShare: 9.1, lineOfBusiness: 'Overall', marketShareByLine: 9.1, growth: 2.2, volume: 9.8 },
  
  // 2025 data
  { time: '2025-Q1', marketShare: 9.2, lineOfBusiness: 'Overall', marketShareByLine: 9.2, growth: 2.2, volume: 9.9 },
  { time: '2025-Q2', marketShare: 9.3, lineOfBusiness: 'Overall', marketShareByLine: 9.3, growth: 2.2, volume: 10.0 },
  { time: '2025-Q3', marketShare: 9.4, lineOfBusiness: 'Overall', marketShareByLine: 9.4, growth: 2.2, volume: 10.1 },
  { time: '2025-Q4', marketShare: 9.3, lineOfBusiness: 'Overall', marketShareByLine: 9.3, growth: 2.2, volume: 10.0 },
];

// Line-specific data
export const lineSpecificData = [
  // Commercial Property (2-3x growth from 2018-2023)
  { time: '2018-Q1', marketShare: 6.2, lineOfBusiness: 'Commercial Property', marketShareByLine: 6.2, growth: 5.0, volume: 3.1 },
  { time: '2019-Q1', marketShare: 7.5, lineOfBusiness: 'Commercial Property', marketShareByLine: 7.5, growth: 21.0, volume: 3.8 },
  { time: '2020-Q1', marketShare: 9.8, lineOfBusiness: 'Commercial Property', marketShareByLine: 9.8, growth: 30.7, volume: 4.9 },
  { time: '2021-Q1', marketShare: 12.5, lineOfBusiness: 'Commercial Property', marketShareByLine: 12.5, growth: 27.6, volume: 6.3 },
  { time: '2022-Q1', marketShare: 15.2, lineOfBusiness: 'Commercial Property', marketShareByLine: 15.2, growth: 21.6, volume: 7.6 },
  { time: '2023-Q1', marketShare: 17.1, lineOfBusiness: 'Commercial Property', marketShareByLine: 17.1, growth: 12.5, volume: 8.6 },
  { time: '2024-Q1', marketShare: 18.2, lineOfBusiness: 'Commercial Property', marketShareByLine: 18.2, growth: 6.4, volume: 9.1 },
  { time: '2025-Q1', marketShare: 18.8, lineOfBusiness: 'Commercial Property', marketShareByLine: 18.8, growth: 3.3, volume: 9.4 },
  
  // Cyber (4-5x growth from baseline)
  { time: '2018-Q1', marketShare: 3.8, lineOfBusiness: 'Cyber', marketShareByLine: 3.8, growth: 12.0, volume: 0.8 },
  { time: '2019-Q1', marketShare: 5.2, lineOfBusiness: 'Cyber', marketShareByLine: 5.2, growth: 36.8, volume: 1.1 },
  { time: '2020-Q1', marketShare: 7.8, lineOfBusiness: 'Cyber', marketShareByLine: 7.8, growth: 50.0, volume: 1.7 },
  { time: '2021-Q1', marketShare: 11.7, lineOfBusiness: 'Cyber', marketShareByLine: 11.7, growth: 50.0, volume: 2.5 },
  { time: '2022-Q1', marketShare: 15.6, lineOfBusiness: 'Cyber', marketShareByLine: 15.6, growth: 33.3, volume: 3.4 },
  { time: '2023-Q1', marketShare: 17.9, lineOfBusiness: 'Cyber', marketShareByLine: 17.9, growth: 14.7, volume: 3.9 },
  { time: '2024-Q1', marketShare: 19.3, lineOfBusiness: 'Cyber', marketShareByLine: 19.3, growth: 7.8, volume: 4.2 },
  { time: '2025-Q1', marketShare: 20.1, lineOfBusiness: 'Cyber', marketShareByLine: 20.1, growth: 4.1, volume: 4.4 },
  
  // General Liability (steady but less dramatic growth)
  { time: '2018-Q1', marketShare: 5.1, lineOfBusiness: 'General Liability', marketShareByLine: 5.1, growth: 2.0, volume: 4.1 },
  { time: '2019-Q1', marketShare: 5.4, lineOfBusiness: 'General Liability', marketShareByLine: 5.4, growth: 5.9, volume: 4.3 },
  { time: '2020-Q1', marketShare: 5.8, lineOfBusiness: 'General Liability', marketShareByLine: 5.8, growth: 7.4, volume: 4.6 },
  { time: '2021-Q1', marketShare: 6.3, lineOfBusiness: 'General Liability', marketShareByLine: 6.3, growth: 8.6, volume: 5.0 },
  { time: '2022-Q1', marketShare: 6.8, lineOfBusiness: 'General Liability', marketShareByLine: 6.8, growth: 7.9, volume: 5.4 },
  { time: '2023-Q1', marketShare: 7.2, lineOfBusiness: 'General Liability', marketShareByLine: 7.2, growth: 5.9, volume: 5.8 },
  { time: '2024-Q1', marketShare: 7.5, lineOfBusiness: 'General Liability', marketShareByLine: 7.5, growth: 4.2, volume: 6.0 },
  { time: '2025-Q1', marketShare: 7.7, lineOfBusiness: 'General Liability', marketShareByLine: 7.7, growth: 2.7, volume: 6.2 },
  
  // Professional Lines (moderate growth with plateau in 2023)
  { time: '2018-Q1', marketShare: 4.9, lineOfBusiness: 'Professional Lines', marketShareByLine: 4.9, growth: 2.1, volume: 2.5 },
  { time: '2019-Q1', marketShare: 5.3, lineOfBusiness: 'Professional Lines', marketShareByLine: 5.3, growth: 8.2, volume: 2.7 },
  { time: '2020-Q1', marketShare: 5.9, lineOfBusiness: 'Professional Lines', marketShareByLine: 5.9, growth: 11.3, volume: 3.0 },
  { time: '2021-Q1', marketShare: 6.7, lineOfBusiness: 'Professional Lines', marketShareByLine: 6.7, growth: 13.6, volume: 3.4 },
  { time: '2022-Q1', marketShare: 7.5, lineOfBusiness: 'Professional Lines', marketShareByLine: 7.5, growth: 11.9, volume: 3.8 },
  { time: '2023-Q1', marketShare: 8.0, lineOfBusiness: 'Professional Lines', marketShareByLine: 8.0, growth: 6.7, volume: 4.0 },
  { time: '2024-Q1', marketShare: 8.1, lineOfBusiness: 'Professional Lines', marketShareByLine: 8.1, growth: 1.3, volume: 4.1 },
  { time: '2025-Q1', marketShare: 8.2, lineOfBusiness: 'Professional Lines', marketShareByLine: 8.2, growth: 1.2, volume: 4.1 },
  
  // Flood (exponential growth from small base)
  { time: '2018-Q1', marketShare: 2.1, lineOfBusiness: 'Flood', marketShareByLine: 2.1, growth: 5.0, volume: 0.3 },
  { time: '2019-Q1', marketShare: 2.5, lineOfBusiness: 'Flood', marketShareByLine: 2.5, growth: 19.0, volume: 0.4 },
  { time: '2020-Q1', marketShare: 3.3, lineOfBusiness: 'Flood', marketShareByLine: 3.3, growth: 32.0, volume: 0.5 },
  { time: '2021-Q1', marketShare: 4.6, lineOfBusiness: 'Flood', marketShareByLine: 4.6, growth: 39.4, volume: 0.7 },
  { time: '2022-Q1', marketShare: 6.4, lineOfBusiness: 'Flood', marketShareByLine: 6.4, growth: 39.1, volume: 1.0 },
  { time: '2023-Q1', marketShare: 8.3, lineOfBusiness: 'Flood', marketShareByLine: 8.3, growth: 29.7, volume: 1.3 },
  { time: '2024-Q1', marketShare: 10.0, lineOfBusiness: 'Flood', marketShareByLine: 10.0, growth: 20.5, volume: 1.5 },
  { time: '2025-Q1', marketShare: 11.2, lineOfBusiness: 'Flood', marketShareByLine: 11.2, growth: 12.0, volume: 1.7 },
];

// Geographic data
export const geographicData = [
  // Highest penetration (20-23%): Florida, Louisiana
  { state: 'FL', stateName: 'Florida', penetration: 22.5, growth: 3.2, lineBreakdown: { 'Commercial Property': 28.4, 'Cyber': 18.2, 'General Liability': 19.8, 'Professional Lines': 17.5, 'Flood': 35.6 } },
  { state: 'LA', stateName: 'Louisiana', penetration: 21.8, growth: 2.8, lineBreakdown: { 'Commercial Property': 27.3, 'Cyber': 17.5, 'General Liability': 19.2, 'Professional Lines': 16.8, 'Flood': 34.2 } },
  
  // High penetration (15-19%): California, Texas, New York
  { state: 'CA', stateName: 'California', penetration: 18.7, growth: 4.5, lineBreakdown: { 'Commercial Property': 23.5, 'Cyber': 21.2, 'General Liability': 16.4, 'Professional Lines': 19.8, 'Flood': 12.5 } },
  { state: 'TX', stateName: 'Texas', penetration: 17.2, growth: 3.8, lineBreakdown: { 'Commercial Property': 21.6, 'Cyber': 18.5, 'General Liability': 15.3, 'Professional Lines': 16.4, 'Flood': 18.7 } },
  { state: 'NY', stateName: 'New York', penetration: 16.5, growth: 3.2, lineBreakdown: { 'Commercial Property': 19.8, 'Cyber': 20.3, 'General Liability': 14.7, 'Professional Lines': 18.2, 'Flood': 10.2 } },
  
  // Medium penetration (10-14%): Coastal states, Nevada, Colorado
  { state: 'NJ', stateName: 'New Jersey', penetration: 14.2, growth: 2.8, lineBreakdown: { 'Commercial Property': 17.5, 'Cyber': 16.8, 'General Liability': 12.5, 'Professional Lines': 15.3, 'Flood': 12.8 } },
  { state: 'SC', stateName: 'South Carolina', penetration: 13.5, growth: 2.5, lineBreakdown: { 'Commercial Property': 16.8, 'Cyber': 14.2, 'General Liability': 11.8, 'Professional Lines': 12.5, 'Flood': 18.5 } },
  { state: 'NV', stateName: 'Nevada', penetration: 12.8, growth: 3.5, lineBreakdown: { 'Commercial Property': 15.3, 'Cyber': 15.6, 'General Liability': 10.5, 'Professional Lines': 14.2, 'Flood': 8.5 } },
  { state: 'CO', stateName: 'Colorado', penetration: 11.5, growth: 4.2, lineBreakdown: { 'Commercial Property': 14.2, 'Cyber': 14.8, 'General Liability': 9.8, 'Professional Lines': 13.5, 'Flood': 7.2 } },
  { state: 'NC', stateName: 'North Carolina', penetration: 10.8, growth: 2.2, lineBreakdown: { 'Commercial Property': 13.5, 'Cyber': 12.5, 'General Liability': 9.2, 'Professional Lines': 10.8, 'Flood': 10.5 } },
  
  // Low penetration (5-9%): Most other states
  { state: 'IL', stateName: 'Illinois', penetration: 8.5, growth: 1.8, lineBreakdown: { 'Commercial Property': 10.5, 'Cyber': 11.2, 'General Liability': 7.5, 'Professional Lines': 9.8, 'Flood': 4.2 } },
  { state: 'PA', stateName: 'Pennsylvania', penetration: 7.8, growth: 1.5, lineBreakdown: { 'Commercial Property': 9.8, 'Cyber': 10.5, 'General Liability': 6.8, 'Professional Lines': 8.5, 'Flood': 3.8 } },
  { state: 'OH', stateName: 'Ohio', penetration: 6.5, growth: 1.2, lineBreakdown: { 'Commercial Property': 8.2, 'Cyber': 9.5, 'General Liability': 5.8, 'Professional Lines': 7.2, 'Flood': 2.5 } },
  { state: 'MI', stateName: 'Michigan', penetration: 5.8, growth: 1.0, lineBreakdown: { 'Commercial Property': 7.5, 'Cyber': 8.2, 'General Liability': 5.2, 'Professional Lines': 6.5, 'Flood': 2.2 } },
  
  // Lowest penetration (2-4%): Midwest states
  { state: 'IA', stateName: 'Iowa', penetration: 3.8, growth: 0.8, lineBreakdown: { 'Commercial Property': 4.8, 'Cyber': 5.5, 'General Liability': 3.5, 'Professional Lines': 4.2, 'Flood': 1.8 } },
  { state: 'NE', stateName: 'Nebraska', penetration: 3.2, growth: 0.7, lineBreakdown: { 'Commercial Property': 4.2, 'Cyber': 4.8, 'General Liability': 3.0, 'Professional Lines': 3.8, 'Flood': 1.5 } },
  { state: 'KS', stateName: 'Kansas', penetration: 2.8, growth: 0.6, lineBreakdown: { 'Commercial Property': 3.8, 'Cyber': 4.2, 'General Liability': 2.5, 'Professional Lines': 3.2, 'Flood': 1.2 } },
  { state: 'ND', stateName: 'North Dakota', penetration: 2.5, growth: 0.5, lineBreakdown: { 'Commercial Property': 3.2, 'Cyber': 3.8, 'General Liability': 2.2, 'Professional Lines': 2.8, 'Flood': 1.0 } },
];

// Type Definitions for Startup Ecosystem Data
export interface StartupFunding {
  stage: string;
  count: number;
  avgDeal: number;
  totalFunding: number;
}

export interface StartupCategory {
  category: string;
  count: number;
  funding: number;
  growth: number;
}

// Mock data for InsurTech Startup Ecosystem section
export const startupFundingData: StartupFunding[] = [
  { stage: 'Seed', count: 145, avgDeal: 2.5, totalFunding: 362.5 },
  { stage: 'Series A', count: 78, avgDeal: 8.5, totalFunding: 663.0 },
  { stage: 'Series B', count: 42, avgDeal: 25.0, totalFunding: 1050.0 },
  { stage: 'Series C', count: 18, avgDeal: 65.0, totalFunding: 1170.0 },
  { stage: 'Series D+', count: 8, avgDeal: 120.0, totalFunding: 960.0 },
];

export const startupCategoryData: StartupCategory[] = [
  { category: 'Underwriting & Risk', count: 85, funding: 1250.5, growth: 32.5 },
  { category: 'Claims Management', count: 62, funding: 980.2, growth: 28.3 },
  { category: 'Distribution', count: 58, funding: 850.8, growth: 24.5 },
  { category: 'Policy Management', count: 45, funding: 620.5, growth: 18.7 },
  { category: 'Data & Analytics', count: 72, funding: 1050.3, growth: 35.2 },
  { category: 'Customer Engagement', count: 38, funding: 480.6, growth: 22.8 },
  { category: 'IoT & Telematics', count: 32, funding: 520.4, growth: 26.5 },
  { category: 'Embedded Insurance', count: 28, funding: 420.8, growth: 38.5 },
];

// Define interface for Technology Adoption data
export interface TechnologyAdoption {
  technology: string;
  adoption: number;
  growth: number;
  investment: number;
}

// Technology Adoption data (Corrected data structure)
export const technologyAdoptionData: TechnologyAdoption[] = [
  { technology: 'AI/ML', adoption: 42, growth: 8.5, investment: 3.2 },
  { technology: 'Blockchain', adoption: 18, growth: 12.3, investment: 1.8 },
  { technology: 'IoT', adoption: 35, growth: 7.2, investment: 2.5 },
  { technology: 'Cloud Computing', adoption: 68, growth: 5.1, investment: 4.1 },
  { technology: 'API Integration', adoption: 52, growth: 6.8, investment: 2.9 },
  { technology: 'RPA', adoption: 28, growth: 9.7, investment: 1.5 },
  { technology: 'Predictive Analytics', adoption: 45, growth: 7.9, investment: 3.0 },
  { technology: 'Digital Twins', adoption: 12, growth: 15.2, investment: 0.9 },
];

// Type Definition for Technology Gap data
export interface TechnologyGap {
  category: string;
  current: number;
  potential: number;
  gap: number;
}

// Mock data for Technology Gap section
export const technologyGapData: TechnologyGap[] = [
  { category: 'Claims Processing', current: 65, potential: 95, gap: 30 },
  { category: 'Underwriting', current: 55, potential: 90, gap: 35 },
  { category: 'Risk Assessment', current: 60, potential: 92, gap: 32 },
  { category: 'Customer Onboarding', current: 70, potential: 95, gap: 25 },
  { category: 'Policy Management', current: 68, potential: 90, gap: 22 },
  { category: 'Fraud Detection', current: 72, potential: 98, gap: 26 },
  { category: 'Customer Service', current: 58, potential: 88, gap: 30 },
  { category: 'Pricing Optimization', current: 62, potential: 94, gap: 32 },
];

// Type Definitions
export interface Opportunity {
  category: string;
  marketSize: number;
  growthPotential: number;
  technologyGapScore: number;
  competitiveIntensityScore: number;
  regulatoryComplexityScore: number;
  overallScore: number;
  marketNeed: string;
  marketSizeScore: number;
  description: string;
  stage: string;
  recommendedInvestment: string;
  exitPathway: string;
}

// Mock data for Investment Opportunity Scorecard section
export const opportunityData: Opportunity[] = [
  {
    category: 'Cyber Underwriting Tools',
    marketSize: 8.5,
    growthPotential: 8.8,
    technologyGapScore: 7.5,
    competitiveIntensityScore: 6.5,
    regulatoryComplexityScore: 7.2,
    overallScore: 8.2,
    marketNeed: 'Advanced tools for assessing and pricing cyber risk',
    marketSizeScore: 8.5,
    description: 'Platforms that leverage AI and data analytics to accurately assess and price cyber risks',
    stage: 'Growth',
    recommendedInvestment: 'Series B/C',
    exitPathway: 'Strategic Acquisition'
  },
  {
    category: 'Climate Risk Modeling',
    marketSize: 6.5,
    growthPotential: 8.5,
    technologyGapScore: 8.2,
    competitiveIntensityScore: 5.8,
    regulatoryComplexityScore: 6.5,
    overallScore: 7.8,
    marketNeed: 'Predictive models for climate-related insurance risks',
    marketSizeScore: 6.5,
    description: 'Advanced modeling tools that predict and price climate-related risks for insurers',
    stage: 'Early Growth',
    recommendedInvestment: 'Series A/B',
    exitPathway: 'Strategic Acquisition'
  },
  {
    category: 'ESG Risk Assessment',
    marketSize: 5.2,
    growthPotential: 8.5,
    technologyGapScore: 8.5,
    competitiveIntensityScore: 5.5,
    regulatoryComplexityScore: 7.5,
    overallScore: 7.2,
    marketNeed: 'Tools to measure and price ESG-related risks',
    marketSizeScore: 5.2,
    description: 'Platforms that help insurers assess and price risks related to environmental, social, and governance factors',
    stage: 'Early',
    recommendedInvestment: 'Seed/Series A',
    exitPathway: 'PE Acquisition'
  },
  {
    category: 'Embedded Insurance APIs',
    marketSize: 7.8,
    growthPotential: 9.0,
    technologyGapScore: 7.2,
    competitiveIntensityScore: 7.0,
    regulatoryComplexityScore: 6.8,
    overallScore: 7.6,
    marketNeed: 'Infrastructure for embedding insurance into digital platforms',
    marketSizeScore: 7.8,
    description: 'API platforms that enable seamless integration of insurance products into third-party digital experiences',
    stage: 'Growth',
    recommendedInvestment: 'Series B/C',
    exitPathway: 'IPO'
  },
  {
    category: 'Claims Automation',
    marketSize: 9.2,
    growthPotential: 8.2,
    technologyGapScore: 6.8,
    competitiveIntensityScore: 7.5,
    regulatoryComplexityScore: 6.5,
    overallScore: 8.0,
    marketNeed: 'AI-driven platforms for efficient claims processing',
    marketSizeScore: 9.2,
    description: 'End-to-end platforms using AI/ML for faster and more accurate insurance claims processing',
    stage: 'Mature',
    recommendedInvestment: 'Series C/D',
    exitPathway: 'IPO/Strategic Acquisition'
  },
  {
    category: 'Parametric Insurance Platforms',
    marketSize: 4.5,
    growthPotential: 9.2,
    technologyGapScore: 7.8,
    competitiveIntensityScore: 6.2,
    regulatoryComplexityScore: 7.0,
    overallScore: 7.5,
    marketNeed: 'Platforms for creating and managing parametric insurance products',
    marketSizeScore: 4.5,
    description: 'Technology enabling event-triggered payouts based on predefined parameters, particularly for climate and nat-cat risks',
    stage: 'Early Growth',
    recommendedInvestment: 'Series A/B',
    exitPathway: 'Strategic Acquisition'
  }
];

// Type Definitions for Capital Flow Data
export interface InvestmentFlow {
  source: string;
  target: string;
  value: number;
}

export interface ValuationTrend {
  category: string;
  seed: number;
  seriesA: number;
  seriesB: number;
  seriesC: number;
}

// Mock data for Capital Flow section (Copied from mockData.js)
export const investmentFlowData: InvestmentFlow[] = [
  { source: 'VC Firms', target: 'Underwriting Tech', value: 850 },
  { source: 'VC Firms', target: 'Claims Tech', value: 620 },
  { source: 'VC Firms', target: 'Distribution Tech', value: 580 },
  { source: 'VC Firms', target: 'Data Analytics', value: 750 },
  { source: 'PE Firms', target: 'Underwriting Tech', value: 420 },
  { source: 'PE Firms', target: 'Claims Tech', value: 380 },
  { source: 'PE Firms', target: 'Distribution Tech', value: 350 },
  { source: 'PE Firms', target: 'Data Analytics', value: 480 },
  { source: 'Corporate VC', target: 'Underwriting Tech', value: 320 },
  { source: 'Corporate VC', target: 'Claims Tech', value: 280 },
  { source: 'Corporate VC', target: 'Distribution Tech', value: 250 },
  { source: 'Corporate VC', target: 'Data Analytics', value: 350 },
  { source: 'Underwriting Tech', target: 'Early Stage', value: 650 },
  { source: 'Underwriting Tech', target: 'Growth Stage', value: 940 },
  { source: 'Claims Tech', target: 'Early Stage', value: 480 },
  { source: 'Claims Tech', target: 'Growth Stage', value: 800 },
  { source: 'Distribution Tech', target: 'Early Stage', value: 420 },
  { source: 'Distribution Tech', target: 'Growth Stage', value: 760 },
  { source: 'Data Analytics', target: 'Early Stage', value: 580 },
  { source: 'Data Analytics', target: 'Growth Stage', value: 1000 },
];

export const valuationTrendsData: ValuationTrend[] = [
  { category: 'Underwriting AI', seed: 12, seriesA: 45, seriesB: 120, seriesC: 280 },
  { category: 'Claims Automation', seed: 10, seriesA: 38, seriesB: 95, seriesC: 220 },
  { category: 'Digital Distribution', seed: 8, seriesA: 32, seriesB: 85, seriesC: 180 },
  { category: 'Risk Analytics', seed: 15, seriesA: 52, seriesB: 135, seriesC: 320 },
  { category: 'Embedded Platforms', seed: 18, seriesA: 65, seriesB: 150, seriesC: 350 },
  { category: 'Cyber Solutions', seed: 20, seriesA: 72, seriesB: 165, seriesC: 380 },
];

// Type Definitions for Customer Experience Data
export interface CustomerJourneyStage {
  stage: string;
  traditional: number;
  insurtech: number;
  gap: number;
}

export interface PainPoint {
  painPoint: string;
  severity: number;
  solutionMaturity: number;
  opportunity: number;
}

// Mock data for Customer Experience Analysis section (Copied from mockData.js)
export const customerJourneyData: CustomerJourneyStage[] = [
  { stage: 'Awareness', traditional: 6.2, insurtech: 8.5, gap: 2.3 },
  { stage: 'Consideration', traditional: 5.8, insurtech: 8.2, gap: 2.4 },
  { stage: 'Purchase', traditional: 5.5, insurtech: 8.7, gap: 3.2 },
  { stage: 'Onboarding', traditional: 6.0, insurtech: 8.8, gap: 2.8 },
  { stage: 'Service', traditional: 6.5, insurtech: 8.3, gap: 1.8 },
  { stage: 'Claims', traditional: 5.2, insurtech: 8.0, gap: 2.8 },
  { stage: 'Renewal', traditional: 6.8, insurtech: 8.5, gap: 1.7 },
];

export const painPointsData: PainPoint[] = [
  { painPoint: 'Complex Documentation', severity: 8.5, solutionMaturity: 6.2, opportunity: 8.2 },
  { painPoint: 'Slow Claims Processing', severity: 9.2, solutionMaturity: 7.0, opportunity: 8.5 },
  { painPoint: 'Pricing Transparency', severity: 8.0, solutionMaturity: 5.5, opportunity: 8.8 },
  { painPoint: 'Policy Customization', severity: 7.5, solutionMaturity: 6.0, opportunity: 7.8 },
  { painPoint: 'Communication Gaps', severity: 7.8, solutionMaturity: 6.5, opportunity: 7.5 },
  { painPoint: 'Digital Access', severity: 8.2, solutionMaturity: 7.5, opportunity: 7.2 },
  { painPoint: 'Risk Assessment', severity: 7.0, solutionMaturity: 6.8, opportunity: 6.5 },
  { painPoint: 'Customer Support', severity: 8.5, solutionMaturity: 7.2, opportunity: 7.8 },
];

// Type Definitions for Distribution Channel Data
export interface ChannelShare {
  year: number;
  direct: number;
  broker: number;
  agent: number;
  embedded: number;
}

export interface ChannelEfficiency {
  channel: string;
  cac: number;
  conversionRate: number;
  ltv: number;
  efficiency: number;
}

// Mock data for Distribution Channel Evolution section (Copied from mockData.js)
export const channelShareData: ChannelShare[] = [
  { year: 2020, direct: 18, broker: 45, agent: 32, embedded: 5 },
  { year: 2021, direct: 22, broker: 42, agent: 28, embedded: 8 },
  { year: 2022, direct: 26, broker: 40, agent: 24, embedded: 10 },
  { year: 2023, direct: 30, broker: 38, agent: 20, embedded: 12 },
  { year: 2024, direct: 33, broker: 36, agent: 18, embedded: 13 },
  { year: 2025, direct: 35, broker: 35, agent: 15, embedded: 15 },
];

export const channelEfficiencyData: ChannelEfficiency[] = [
  { channel: 'Direct Digital', cac: 280, conversionRate: 3.2, ltv: 1850, efficiency: 6.6 },
  { channel: 'Broker Network', cac: 520, conversionRate: 8.5, ltv: 3200, efficiency: 6.2 },
  { channel: 'Agent Force', cac: 420, conversionRate: 7.2, ltv: 2800, efficiency: 6.7 },
  { channel: 'Embedded/API', cac: 180, conversionRate: 2.8, ltv: 1500, efficiency: 8.3 },
  { channel: 'Partnerships', cac: 350, conversionRate: 5.5, ltv: 2500, efficiency: 7.1 },
  { channel: 'Aggregators', cac: 250, conversionRate: 3.8, ltv: 1650, efficiency: 6.6 },
];

// Type Definitions for Emerging Risk Data
export interface EmergingRisk {
  category: string;
  severity: number;
  readiness: number;
  opportunity: number;
}

export interface RiskMatrixItem {
  risk: string;
  frequency: number;
  impact: number;
  category: string;
}

// Mock data for Emerging Risk Categories section (Copied from mockData.js)
export const emergingRisksData: EmergingRisk[] = [
  { category: 'Cyber Threats', severity: 9.2, readiness: 6.5, opportunity: 8.8 },
  { category: 'Climate Change', severity: 8.7, readiness: 5.8, opportunity: 8.5 },
  { category: 'Supply Chain Disruption', severity: 8.3, readiness: 6.2, opportunity: 7.9 },
  { category: 'Pandemic/Health', severity: 8.5, readiness: 6.8, opportunity: 7.6 },
  { category: 'Regulatory Changes', severity: 7.8, readiness: 7.2, opportunity: 7.2 },
  { category: 'Reputation/ESG', severity: 7.5, readiness: 6.0, opportunity: 8.1 },
  { category: 'Political Instability', severity: 7.2, readiness: 5.5, opportunity: 6.8 },
  { category: 'Technological Disruption', severity: 8.0, readiness: 5.9, opportunity: 8.4 },
];

export const riskMatrixData: RiskMatrixItem[] = [
  { risk: 'Ransomware', frequency: 8.5, impact: 9.2, category: 'Cyber' },
  { risk: 'Data Breach', frequency: 7.8, impact: 8.5, category: 'Cyber' },
  { risk: 'Cloud Outage', frequency: 6.5, impact: 8.8, category: 'Technology' },
  { risk: 'Extreme Weather', frequency: 7.2, impact: 8.7, category: 'Climate' },
  { risk: 'Regulatory Fine', frequency: 5.8, impact: 7.5, category: 'Compliance' },
  { risk: 'Supply Chain Failure', frequency: 6.2, impact: 8.3, category: 'Operational' },
  { risk: 'Pandemic Disruption', frequency: 4.5, impact: 9.5, category: 'Health' },
  { risk: 'Reputation Damage', frequency: 5.5, impact: 8.2, category: 'ESG' },
  { risk: 'IP Theft', frequency: 6.8, impact: 7.8, category: 'Cyber' },
  { risk: 'Political Unrest', frequency: 5.2, impact: 7.2, category: 'Geopolitical' },
  { risk: 'AI Ethics Violation', frequency: 5.8, impact: 7.5, category: 'Technology' },
  { risk: 'Talent Shortage', frequency: 7.5, impact: 6.8, category: 'Operational' },
];

// Type Definitions for Regulatory Landscape Data
export interface RegulatoryImpact {
  regulation: string;
  complexity: number;
  compliance: number;
  opportunity: number;
}

export interface RegulatoryHeatmap {
  region: string;
  dataPrivacy: number;
  consumerProtection: number;
  capitalRequirements: number;
  esgReporting: number;
  cyberSecurity: number;
  aiGovernance: number;
}

// Mock data for Regulatory Landscape section (Copied from mockData.js)
export const regulatoryImpactData: RegulatoryImpact[] = [
  { regulation: 'Data Privacy', complexity: 8.5, compliance: 6.2, opportunity: 8.0 },
  { regulation: 'Consumer Protection', complexity: 7.8, compliance: 6.8, opportunity: 7.5 },
  { regulation: 'Capital Requirements', complexity: 8.2, compliance: 7.5, opportunity: 6.8 },
  { regulation: 'ESG Reporting', complexity: 7.5, compliance: 5.5, opportunity: 8.5 },
  { regulation: 'Cyber Security', complexity: 8.8, compliance: 6.5, opportunity: 8.2 },
  { regulation: 'AI Governance', complexity: 8.0, compliance: 5.8, opportunity: 8.8 },
  { regulation: 'Open Insurance', complexity: 7.2, compliance: 6.0, opportunity: 8.5 },
  { regulation: 'Climate Risk', complexity: 7.8, compliance: 5.2, opportunity: 8.7 },
];

export const regulatoryHeatmapData: RegulatoryHeatmap[] = [
  { region: 'North America', dataPrivacy: 8.5, consumerProtection: 8.2, capitalRequirements: 7.5, esgReporting: 6.8, cyberSecurity: 8.8, aiGovernance: 7.2 },
  { region: 'Europe', dataPrivacy: 9.2, consumerProtection: 8.5, capitalRequirements: 8.2, esgReporting: 8.5, cyberSecurity: 8.5, aiGovernance: 8.0 },
  { region: 'Asia Pacific', dataPrivacy: 7.8, consumerProtection: 7.5, capitalRequirements: 8.0, esgReporting: 7.2, cyberSecurity: 8.2, aiGovernance: 7.5 },
  { region: 'Latin America', dataPrivacy: 7.0, consumerProtection: 7.2, capitalRequirements: 7.0, esgReporting: 6.5, cyberSecurity: 7.5, aiGovernance: 6.8 },
  { region: 'Middle East', dataPrivacy: 6.8, consumerProtection: 6.5, capitalRequirements: 7.8, esgReporting: 6.2, cyberSecurity: 7.8, aiGovernance: 6.5 },
  { region: 'Africa', dataPrivacy: 6.2, consumerProtection: 6.0, capitalRequirements: 6.5, esgReporting: 5.8, cyberSecurity: 7.0, aiGovernance: 6.0 },
];

// NOTE: Add any other missing data exports here if needed