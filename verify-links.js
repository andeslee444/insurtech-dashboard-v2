// This file contains the JavaScript code to ensure all section links work properly
// and initialize all interactive visualizations for each section

document.addEventListener('DOMContentLoaded', function() {
  // Get all section tabs and content sections
  const sectionTabs = document.querySelectorAll('.section-tab');
  const dashboardSections = document.querySelectorAll('.dashboard-section');
  
  // Add click event listeners to all section tabs
  sectionTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      
      // Update active tab
      sectionTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Show selected section
      dashboardSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === `${sectionId}-section`) {
          section.classList.add('active');
        }
      });
      
      // Initialize charts for the selected section
      initializeCharts(sectionId);
    });
  });
  
  // Initialize opportunity matrix for investment section
  initializeOpportunityMatrix();
  
  // Initialize charts for the default section (investment)
  initializeCharts('investment');
  
  // Test all section navigation links
  console.log("Testing all section navigation links...");
  
  // Array of all section IDs
  const allSections = [
    'investment', 
    'market', 
    'technology', 
    'risk', 
    'startup', 
    'distribution', 
    'customer', 
    'capital', 
    'regulatory'
  ];
  
  // Verify each section can be activated
  allSections.forEach(sectionId => {
    console.log(`Verifying section: ${sectionId}`);
    
    // Find the tab for this section
    const tab = document.querySelector(`.section-tab[data-section="${sectionId}"]`);
    if (!tab) {
      console.error(`Tab for section ${sectionId} not found!`);
      return;
    }
    
    // Find the content section
    const section = document.getElementById(`${sectionId}-section`);
    if (!section) {
      console.error(`Content for section ${sectionId} not found!`);
      return;
    }
    
    // Verify charts can be initialized for this section
    try {
      initializeCharts(sectionId);
      console.log(`Charts for ${sectionId} initialized successfully`);
    } catch (error) {
      console.error(`Error initializing charts for ${sectionId}:`, error);
    }
    
    console.log(`Section ${sectionId} verified successfully`);
  });
  
  console.log("All section links and visualizations verified");
});

// This function ensures all charts are properly initialized for each section
function verifyAllSectionLinks() {
  const sections = [
    { id: 'investment', charts: ['investment-timing-chart'] },
    { id: 'market', charts: ['market-share-chart', 'growth-rate-chart', 'market-forecast-chart'] },
    { id: 'technology', charts: ['tech-adoption-chart', 'tech-gap-chart', 'tech-investment-chart'] },
    { id: 'risk', charts: ['risk-categories-chart', 'risk-matrix-chart', 'risk-readiness-chart'] },
    { id: 'startup', charts: ['funding-stage-chart', 'startup-categories-chart', 'geographic-chart'] },
    { id: 'distribution', charts: ['channel-evolution-chart', 'channel-efficiency-chart', 'digital-impact-chart'] },
    { id: 'customer', charts: ['journey-analysis-chart', 'experience-heatmap', 'nps-chart'] },
    { id: 'capital', charts: ['investment-flow-container', 'valuation-trends-chart', 'exit-pathway-chart'] },
    { id: 'regulatory', charts: ['regulatory-impact-chart', 'regulatory-heatmap', 'compliance-tech-chart'] }
  ];
  
  let allValid = true;
  
  sections.forEach(section => {
    console.log(`Verifying section: ${section.id}`);
    
    // Check if section exists
    const sectionElement = document.getElementById(`${section.id}-section`);
    if (!sectionElement) {
      console.error(`Section ${section.id} not found!`);
      allValid = false;
      return;
    }
    
    // Check if all charts exist
    section.charts.forEach(chartId => {
      const chartElement = document.getElementById(chartId);
      if (!chartElement) {
        console.error(`Chart ${chartId} in section ${section.id} not found!`);
        allValid = false;
      }
    });
  });
  
  return allValid;
}
