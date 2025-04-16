import React, { useState, useEffect } from 'react';
import { sections, colors } from '../components/layout/Layout'; // Import shared data
import { HiOutlineSearch, HiOutlineX, HiOutlineLightBulb, HiOutlineChartBar, HiOutlineSparkles } from 'react-icons/hi';
import { IconBaseProps } from 'react-icons';
import * as mockData from '../data/mockData';

interface MainPageProps {
  onNavigate: (sectionId: string) => void;
}

interface AISearchResult {
  type: 'insight' | 'data' | 'suggestion';
  title: string;
  content: string;
  section: string;
  confidence: number;
  source?: string;
}

const MainPage: React.FC<MainPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{section: string; field: string; value: string}[]>([]);
  const [aiResults, setAiResults] = useState<AISearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);
  const [searchStage, setSearchStage] = useState<string>('');

  // Function to handle AI search
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setShowResults(false);
      return;
    }
    
    // Show searching state
    setIsSearching(true);
    setSearchComplete(false);
    setShowResults(true);
    
    // Simulate AI processing stages
    setTimeout(() => setSearchStage('Analyzing query context...'), 400);
    setTimeout(() => setSearchStage('Searching through datasets...'), 1200);
    setTimeout(() => setSearchStage('Generating insights...'), 2000);
    
    // Simulate search delay for AI processing
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const regularResults: {section: string; field: string; value: string}[] = [];
      const aiSearchResults: AISearchResult[] = [];
      
      // First collect standard search results
      Object.entries(mockData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          const sectionName = getSectionName(key);
          
          value.forEach((item) => {
            Object.entries(item).forEach(([field, fieldValue]) => {
              if (
                (typeof fieldValue === 'string' && 
                fieldValue.toLowerCase().includes(query)) ||
                ((typeof fieldValue === 'number' || typeof fieldValue === 'boolean') && 
                String(fieldValue).toLowerCase().includes(query))
              ) {
                regularResults.push({
                  section: sectionName,
                  field: field,
                  value: String(fieldValue)
                });
              }
            });
          });
        }
      });
      
      // Now generate mock AI insights based on the search query
      generateAIResults(query, regularResults, aiSearchResults);
      
      setSearchResults(regularResults);
      setAiResults(aiSearchResults);
      setIsSearching(false);
      setSearchComplete(true);
      setSearchStage('');
    }, 2800);
  };

  // Generate mock AI insights based on search and regular results
  // Simulates AI analysis by creating structured insights based on keywords
  // and incorporating actual findings from the standard search.
  const generateAIResults = (
    query: string, 
    regularResults: {section: string; field: string; value: string}[],
    aiResults: AISearchResult[]
  ) => {
    // Add a primary insight based on the query topic
    if (query.includes('ai') || query.includes('ml') || query.includes('artificial intelligence')) {
      aiResults.push({
        type: 'insight',
        title: 'AI Adoption Trend Analysis',
        content: 'Based on current data, AI adoption in the insurance sector is growing at 16.5% annually, with largest growth in underwriting and claims processing. Companies investing in AI show 23% higher operational efficiency.',
        section: 'Technology Adoption',
        confidence: 0.92
      });
    } else if (query.includes('fund') || query.includes('investment') || query.includes('capital')) {
      aiResults.push({
        type: 'insight',
        title: 'Investment Pattern Analysis',
        content: 'Series B funding represents the highest concentration of capital ($850M total) despite fewer deals, indicating investor preference for proven growth-stage insurtech companies.',
        section: 'Startup Ecosystem',
        confidence: 0.89
      });
    } else if (query.includes('risk') || query.includes('compliance') || query.includes('regulation')) {
      aiResults.push({
        type: 'insight',
        title: 'Regulatory Impact Assessment',
        content: 'New data privacy regulations in 2023 are creating both compliance challenges and market opportunities. Companies with robust data governance show 35% faster product approval rates.',
        section: 'Regulatory Landscape',
        confidence: 0.91
      });
    } else {
      // Generic insight if no specific pattern is recognized
      aiResults.push({
        type: 'insight',
        title: 'Strategic Market Opportunity',
        content: `Analysis of the "${query}" space suggests potential for innovation at the intersection of technology and customer experience, with 42% of incumbents reporting gaps in their current solutions.`,
        section: 'Market Dynamics',
        confidence: 0.85
      });
    }
    
    // Add data point results based on actual search findings
    if (regularResults.length > 0) {
      const topResult = regularResults[0];
      aiResults.push({
        type: 'data',
        title: `${topResult.field} Metrics`,
        content: `The ${topResult.field} value of ${topResult.value} ranks above average in the ${topResult.section} category, suggesting a potential focus area for strategic initiatives.`,
        section: topResult.section,
        confidence: 0.88,
        source: 'Dashboard Analytics'
      });
    }
    
    // Add a suggestion for further exploration
    const relatedSections = sections
      .filter(s => !aiResults.some(r => r.section.toLowerCase().includes(s.name.toLowerCase())))
      .slice(0, 2);
      
    if (relatedSections.length > 0) {
      aiResults.push({
        type: 'suggestion',
        title: 'Recommended Exploration',
        content: `To expand your analysis on "${query}", consider exploring the ${relatedSections.map(s => s.name).join(' and ')} sections for complementary insights and data.`,
        section: relatedSections[0].name,
        confidence: 0.78
      });
    }
  };

  // Helper to get readable section name from mockData key
  const getSectionName = (key: string): string => {
    // Convert mockData keys (e.g., technologyAdoptionData) to readable section names
    if (key.includes('technology')) return 'Technology Adoption';
    if (key.includes('geo')) return 'Market Dynamics';
    if (key.includes('risk')) return 'Emerging Risks';
    if (key.includes('startup')) return 'Startup Ecosystem';
    if (key.includes('distribution')) return 'Distribution Channels';
    if (key.includes('experience')) return 'Customer Experience';
    if (key.includes('flow') || key.includes('investment')) return 'Capital Flow';
    if (key.includes('regulatory')) return 'Regulatory Landscape';
    if (key.includes('opportunity')) return 'Investment Opportunities';
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  // Find relevant section ID for navigation based on a section name string
  const getSectionId = (sectionName: string): string => {
    const section = sections.find(s => 
      s.name.toLowerCase().includes(sectionName.toLowerCase()) || 
      sectionName.toLowerCase().includes(s.name.toLowerCase())
    );
    return section?.id || 'home';
  };

  // Clear search state and hide results panel
  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
    setSearchComplete(false);
    setIsSearching(false);
  };

  // Get icon for result type
  const getResultIcon = (type: string) => {
    switch (type) {
      case 'insight':
        return React.createElement(HiOutlineLightBulb as React.FC<IconBaseProps>, { 
          size: 20, 
          style: { color: colors.primary } 
        });
      case 'data':
        return React.createElement(HiOutlineChartBar as React.FC<IconBaseProps>, { 
          size: 20, 
          style: { color: '#FF9500' } 
        });
      case 'suggestion':
        return React.createElement(HiOutlineSparkles as React.FC<IconBaseProps>, { 
          size: 20, 
          style: { color: '#32D74B' } 
        });
      default:
        return React.createElement(HiOutlineSearch as React.FC<IconBaseProps>, { 
          size: 20, 
          style: { color: colors.textSecondary } 
        });
    }
  };
  
  // Get confidence badge color
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return '#32D74B';
    if (confidence >= 0.8) return '#FF9F0A';
    return '#FF453A';
  };

  return (
    <div className="main-page animate-in" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '32px', 
        fontWeight: 700, 
        marginBottom: '30px',
        color: colors.textPrimary
      }}>
        InsurTech Dashboard AI Search
      </h1>

      {/* Search Bar with Button */}
      <div style={{ 
        position: 'relative', 
        maxWidth: '600px', 
        margin: '0 auto',
        marginBottom: showResults ? '5px' : '40px'
      }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ position: 'relative', flexGrow: 1 }}>
            <input 
              type="search" 
              placeholder="Ask anything about insurance tech trends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              style={{
                width: '100%',
                height: '44px',
                padding: '10px 15px 10px 45px',
                borderRadius: '10px 0 0 10px',
                border: `1px solid ${colors.border}`,
                borderRight: 'none',
                backgroundColor: colors.sidebarBg,
                color: colors.textPrimary,
                fontSize: '15px',
                outline: 'none',
                transition: 'background-color 0.2s ease, border-color 0.2s ease',
              }} 
            />
            {React.createElement(HiOutlineSearch as React.FC<IconBaseProps>, { 
              style: { 
                position: 'absolute', 
                left: '15px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                width: '20px', 
                height: '20px', 
                color: colors.textSecondary 
              }
            })}
            {searchQuery && (
              <button
                onClick={clearSearch}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: colors.textSecondary,
                  padding: '5px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {React.createElement(HiOutlineX as React.FC<IconBaseProps>, { size: 16 })}
              </button>
            )}
          </div>
          <button 
            onClick={handleSearch}
            style={{
              backgroundColor: colors.primary,
              color: 'white',
              border: 'none',
              padding: '0 20px',
              borderRadius: '0 10px 10px 0',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'background-color 0.2s ease',
              height: '44px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0071E3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary;
            }}
          >
            Search
          </button>
        </div>
        
        {/* AI Search Results */}
        {showResults && (
          <div style={{
            backgroundColor: colors.sidebarBg,
            border: `1px solid ${colors.border}`,
            borderRadius: '10px',
            marginTop: '10px',
            padding: '15px',
            maxHeight: '500px',
            overflowY: 'auto',
            marginBottom: '20px'
          }}>
            {/* Loading State */}
            {isSearching && (
              <div style={{ padding: '20px 10px' }}>
                <div style={{ 
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: colors.primary,
                    animation: 'pulse 1s infinite ease-in-out',
                    animationDelay: '0s'
                  }}></div>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: colors.primary,
                    animation: 'pulse 1s infinite ease-in-out',
                    animationDelay: '0.25s'
                  }}></div>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: colors.primary,
                    animation: 'pulse 1s infinite ease-in-out',
                    animationDelay: '0.5s'
                  }}></div>
                </div>
                
                <div style={{ 
                  color: colors.textPrimary, 
                  textAlign: 'center',
                  fontWeight: 500,
                  marginBottom: '8px'
                }}>
                  AI Assistant is analyzing data...
                </div>
                
                <div style={{ 
                  color: colors.textSecondary, 
                  fontSize: '14px',
                  textAlign: 'center'
                }}>
                  {searchStage}
                </div>
                
                <style>
                  {`
                    @keyframes pulse {
                      0% { transform: scale(0.8); opacity: 0.5; }
                      50% { transform: scale(1.2); opacity: 1; }
                      100% { transform: scale(0.8); opacity: 0.5; }
                    }
                  `}
                </style>
              </div>
            )}
            
            {/* AI Results Header */}
            {searchComplete && (
              <>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '15px',
                  padding: '0 5px',
                  borderBottom: `1px solid ${colors.border}`,
                  paddingBottom: '12px'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', color: colors.textPrimary }}>
                      AI Analysis Results
                    </h3>
                    <div style={{ fontSize: '13px', color: colors.textSecondary }}>
                      Insights generated from your query "{searchQuery}"
                    </div>
                  </div>
                  <button
                    onClick={clearSearch}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: colors.textSecondary,
                      cursor: 'pointer',
                      fontSize: '13px',
                    }}
                  >
                    Clear
                  </button>
                </div>
                
                {/* AI Enhanced Results */}
                {aiResults.length > 0 && (
                  <div style={{ marginBottom: '20px' }}>
                    {aiResults.map((result, index) => (
                      <div 
                        key={`ai-${index}`}
                        style={{
                          padding: '15px',
                          borderRadius: '8px',
                          marginBottom: '12px',
                          backgroundColor: 'rgba(40, 40, 45, 0.5)',
                          border: `1px solid ${colors.border}`,
                          cursor: 'pointer',
                          position: 'relative',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                        }}
                        onClick={() => onNavigate(getSectionId(result.section))}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(50, 50, 55, 0.8)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(40, 40, 45, 0.5)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                        }}
                      >
                        {/* Confidence Badge */}
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          fontSize: '12px',
                          padding: '3px 8px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(0, 0, 0, 0.2)',
                          color: getConfidenceColor(result.confidence),
                          fontWeight: 600
                        }}>
                          {Math.round(result.confidence * 100)}% confidence
                        </div>
                        
                        {/* Header */}
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          marginBottom: '10px',
                          gap: '10px'
                        }}>
                          {getResultIcon(result.type)}
                          <div style={{ 
                            fontWeight: 600, 
                            fontSize: '16px', 
                            color: colors.textPrimary 
                          }}>
                            {result.title}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div style={{ 
                          marginLeft: '30px', 
                          color: colors.textPrimary,
                          fontSize: '14px',
                          lineHeight: '1.5'
                        }}>
                          {result.content}
                        </div>
                        
                        {/* Footer */}
                        <div style={{ 
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '12px',
                          marginLeft: '30px',
                          fontSize: '13px',
                          color: colors.textSecondary
                        }}>
                          <div>
                            <span style={{ 
                              color: colors.primary, 
                              fontWeight: 500 
                            }}>
                              {result.section}
                            </span> section
                          </div>
                          {result.source && (
                            <div>Source: {result.source}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Original Search Results */}
                {searchResults.length > 0 && (
                  <div>
                    <h4 style={{ 
                      margin: '0 0 10px 0', 
                      fontSize: '14px', 
                      color: colors.textSecondary,
                      fontWeight: 500,
                      padding: '0 5px'
                    }}>
                      {searchResults.length} matching data points
                    </h4>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                      gap: '10px',
                      maxHeight: '250px',
                      overflowY: 'auto',
                      padding: '5px'
                    }}>
                      {searchResults.slice(0, 12).map((result, index) => (
                        <div 
                          key={`data-${index}`}
                          style={{
                            padding: '10px',
                            borderRadius: '6px',
                            backgroundColor: colors.hoverBg,
                            fontSize: '13px',
                            cursor: 'pointer'
                          }}
                          onClick={() => onNavigate(getSectionId(result.section))}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(94, 92, 230, 0.15)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = colors.hoverBg;
                          }}
                        >
                          <div style={{ fontWeight: 500, color: colors.primary, marginBottom: '3px' }}>
                            {result.field}
                          </div>
                          <div style={{ color: colors.textPrimary, marginBottom: '5px' }}>
                            {result.value}
                          </div>
                          <div style={{ fontSize: '11px', color: colors.textSecondary }}>
                            {result.section}
                          </div>
                        </div>
                      ))}
                    </div>
                    {searchResults.length > 12 && (
                      <div style={{ 
                        textAlign: 'center', 
                        padding: '8px', 
                        color: colors.textSecondary,
                        fontSize: '13px',
                        marginTop: '10px'
                      }}>
                        {searchResults.length - 12} more data points available
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Section Links Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px',
        marginTop: showResults ? '20px' : '0'
      }}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '20px',
              background: colors.sidebarBg,
              border: `1px solid ${colors.border}`,
              borderRadius: '12px',
              textAlign: 'left',
              cursor: 'pointer',
              color: colors.textPrimary,
              transition: 'transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.backgroundColor = colors.hoverBg;
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = colors.sidebarBg;
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            }}
          >
            {React.createElement(section.icon, { 
              style: { 
                width: '24px', 
                height: '24px', 
                marginRight: '15px', 
                color: colors.primary,
                flexShrink: 0,
                strokeWidth: 1.5
              }
            })}
            <span style={{ fontSize: '16px', fontWeight: 500 }}>{section.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainPage; 