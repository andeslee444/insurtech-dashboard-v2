import React, { useState } from 'react';
import { 
  HiOutlineChartPie, 
  HiOutlineChip, 
  HiOutlineExclamationCircle,
  HiOutlineSparkles,
  HiOutlineArrowsExpand,
  HiOutlineUserGroup, 
  HiOutlineCurrencyDollar,
  HiOutlineScale,
  HiOutlineLightBulb,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCog,
  HiOutlineSearch
} from 'react-icons/hi';
import { IconBaseProps } from 'react-icons';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (section: string) => void;
  activeSection: string;
}

// Define the section type with proper icon typing
interface SidebarSection {
  id: string;
  name: string;
  icon: React.FC<IconBaseProps>;
}

export const sections: SidebarSection[] = [
  // Simplified IDs for clarity
  { id: 'market', name: 'Market Dynamics', icon: HiOutlineChartPie as React.FC<IconBaseProps> }, 
  { id: 'tech', name: 'Tech Adoption', icon: HiOutlineChip as React.FC<IconBaseProps> },
  { id: 'risk', name: 'Emerging Risks', icon: HiOutlineExclamationCircle as React.FC<IconBaseProps> },
  { id: 'startup', name: 'Startup Ecosystem', icon: HiOutlineSparkles as React.FC<IconBaseProps> },
  { id: 'distribution', name: 'Distribution Channels', icon: HiOutlineArrowsExpand as React.FC<IconBaseProps> },
  { id: 'cx', name: 'Customer Experience', icon: HiOutlineUserGroup as React.FC<IconBaseProps> },
  { id: 'capital', name: 'Capital Flow', icon: HiOutlineCurrencyDollar as React.FC<IconBaseProps> },
  { id: 'regulatory', name: 'Regulatory Landscape', icon: HiOutlineScale as React.FC<IconBaseProps> },
  { id: 'opportunity', name: 'Investment Opportunities', icon: HiOutlineLightBulb as React.FC<IconBaseProps> },
];

// Consistent Styling Variables
export const colors = {
  primary: '#0A84FF', // Apple Blue
  background: '#1C1C1E', // Near Black
  sidebarBg: '#2C2C2E', // Dark Grey
  headerBg: '#1C1C1E', // Match Background or #2C2C2E
  border: '#3A3A3C', // Medium Grey
  textPrimary: '#F5F5F7', // Off White
  textSecondary: '#8E8E93', // Light Grey
  textActive: '#FFFFFF',
  hoverBg: '#3A3A3C',
};

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, activeSection }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Function to handle navigation, potentially back home
  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <div className="layout" style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: colors.background,
      color: colors.textPrimary,
    }}>
      {/* --- Sidebar --- */}
      <aside className="layout-sidebar" style={{
        width: isSidebarCollapsed ? '70px' : '250px', // Slightly wider collapsed state for icons
        backgroundColor: colors.sidebarBg,
        borderRight: `1px solid ${colors.border}`,
        padding: '10px 0', // Reduced vertical padding
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Smoother transition
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0, // Prevent sidebar from shrinking too much
      }}>
        {/* Logo Area (can be simplified if needed) */}
        <div style={{
          padding: '15px 20px', // Consistent padding
          display: 'flex',
          alignItems: 'center',
          justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
          marginBottom: '10px',
          overflow: 'hidden' // Hide text during collapse
        }}>
          {/* Make Logo clickable to navigate home */}
          <button 
            onClick={() => handleNavigate('home')}
            style={{
              background: 'none', 
              border: 'none', 
              padding: 0, 
              cursor: 'pointer', 
              display: 'flex',
              alignItems: 'center'
            }}
            title="Go to Homepage"
          >
            {/* Simple Logo Placeholder */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <rect width="32" height="32" rx="6" fill={colors.primary} />
                <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {!isSidebarCollapsed && (
            <span style={{
              marginLeft: '12px', 
              fontSize: '17px', 
              fontWeight: 600, 
              color: colors.textPrimary,
              whiteSpace: 'nowrap' 
            }}>
              Stripes VC
            </span>
          )}
        </div>

        {/* Navigation Links */}
        <nav style={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 10px' }}>
            {sections.map(section => (
              <li key={section.id} style={{ marginBottom: '4px' }}>
                <button 
                  onClick={() => onNavigate(section.id)} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    padding: '10px 15px',
                    border: 'none',
                    background: activeSection === section.id ? colors.primary : 'transparent',
                    color: activeSection === section.id ? colors.textActive : colors.textPrimary,
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderRadius: '6px', // Softer corners
                    fontSize: '14px',
                    fontWeight: activeSection === section.id ? 500 : 400,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
                  }}
                  title={section.name}
                  onMouseEnter={(e) => { 
                    if (activeSection !== section.id) {
                      e.currentTarget.style.backgroundColor = colors.hoverBg;
                      e.currentTarget.style.transform = 'translateX(2px)';
                    }
                  }}
                  onMouseLeave={(e) => { 
                    if (activeSection !== section.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  {/* Use component directly with type casting */}
                  {React.createElement(section.icon, { 
                    style: { 
                      width: '20px', 
                      height: '20px', 
                      marginRight: '12px', 
                      opacity: activeSection === section.id ? 1 : 0.7,
                      strokeWidth: 1.5
                    }
                  })}
                  {!isSidebarCollapsed && section.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Collapse Button */}
        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
          style={{
            background: 'none',
            border: 'none',
            color: colors.textSecondary,
            cursor: 'pointer',
            padding: '15px 20px',
            marginTop: '10px',
            borderTop: `1px solid ${colors.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
            transition: 'color 0.2s ease',
          }}
          title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          onMouseEnter={(e) => { e.currentTarget.style.color = colors.textPrimary; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = colors.textSecondary; }}
        >
          {isSidebarCollapsed ? (
            /* Cast to FC */
            React.createElement(HiOutlineChevronRight as React.FC<IconBaseProps>, { 
              style: { 
                width: '20px', 
                height: '20px',
                transition: 'transform 0.2s ease'
              }
            })
          ) : (
            <>
              {/* Cast to FC */}
              {React.createElement(HiOutlineChevronLeft as React.FC<IconBaseProps>, { 
                style: { 
                  width: '20px', 
                  height: '20px', 
                  marginRight: '8px',
                  transition: 'transform 0.2s ease'
                }
              })}
              <span>Collapse</span>
            </>
          )}
        </button>
      </aside>

      {/* --- Main Content Area --- */}
      <div className="layout-main" style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.background,
      }}>
        {/* Header */}
        <header className="layout-header" style={{
          padding: '0 24px', // Consistent padding
          height: '64px', // Defined height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${colors.border}`,
          backgroundColor: colors.headerBg, // Use variable
          flexShrink: 0,
        }}>
          {/* Active Section Title or Default */}
          <h1 style={{ fontSize: '20px', fontWeight: 600, color: colors.textPrimary, margin: 0 }}>
            {activeSection === 'home' 
              ? 'Dashboard Overview' 
              : sections.find(s => s.id === activeSection)?.name || 'Dashboard'}
          </h1>
          
          {/* Placeholder for Global Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="search" 
                placeholder="Search..."
                style={{
                  width: '100%',
                  height: '36px',
                  padding: '8px 8px 8px 36px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: colors.sidebarBg,
                  color: colors.textPrimary,
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'background-color 0.2s ease',
                }} 
              />
              {/* Cast to FC */}
              {React.createElement(HiOutlineSearch as React.FC<IconBaseProps>, { 
                style: { 
                  position: 'absolute', 
                  left: '10px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  width: '18px', 
                  height: '18px', 
                  color: colors.textSecondary 
                }
              })}
            </div>
            {/* Add filter buttons/icons here later */}
            <button 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: colors.textSecondary, 
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease, background-color 0.2s ease'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.color = colors.textPrimary;
                e.currentTarget.style.backgroundColor = 'rgba(58, 58, 60, 0.4)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.color = colors.textSecondary;
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              title="Settings"
            >
              {/* Cast to FC */}
              {React.createElement(HiOutlineCog as React.FC<IconBaseProps>, { style: { width: '22px', height: '22px' } })}
            </button>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="layout-content" style={{
          padding: '24px', // Consistent padding
          flexGrow: 1,
          overflowY: 'auto', // Allow content scrolling
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
