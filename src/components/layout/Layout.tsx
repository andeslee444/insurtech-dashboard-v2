import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate?: (section: string) => void;
  activeSection?: string;
}

// Define consistent styling variables
const colors = {
  primary: '#0A84FF', // Apple Blue
  background: '#1C1C1E', // Near Black
  sidebarBg: '#2C2C2E', // Dark Grey
  headerBg: '#1C1C1E', // Match Background
  border: '#3A3A3C', // Medium Grey
  textPrimary: '#F5F5F7', // Off White
  textSecondary: '#8E8E93', // Light Grey
  textActive: '#FFFFFF'
};

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, activeSection }) => {
  return (
    <div className="layout" style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: colors.background,
      color: colors.textPrimary,
    }}>
      <div className="layout-main" style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.background,
      }}>
        {/* Header */}
        <header className="layout-header" style={{
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${colors.border}`,
          backgroundColor: colors.headerBg,
          flexShrink: 0,
        }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill={colors.primary} />
              <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ marginLeft: '12px', fontSize: '18px', fontWeight: 600, color: colors.textPrimary }}>
              Stripes VC
            </span>
          </div>
          
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: colors.textPrimary, textDecoration: 'none', fontSize: '14px' }}>Dashboard</a>
            <a href="#" style={{ color: colors.textSecondary, textDecoration: 'none', fontSize: '14px' }}>Analytics</a>
            <a href="#" style={{ color: colors.textSecondary, textDecoration: 'none', fontSize: '14px' }}>Reports</a>
            <a href="#" style={{ color: colors.textSecondary, textDecoration: 'none', fontSize: '14px' }}>Settings</a>
          </nav>
        </header>
        
        {/* Page Content */}
        <main className="layout-content" style={{
          padding: '24px',
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