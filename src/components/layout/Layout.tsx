import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header" style={{
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #3A3A3C'
      }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#0A84FF" />
            <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ marginLeft: '12px', fontSize: '18px', fontWeight: 600, color: '#F5F5F7' }}>
            Stripes VC
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: '#F5F5F7', textDecoration: 'none', fontSize: '14px' }}>Dashboard</a>
          <a href="#" style={{ color: '#8E8E93', textDecoration: 'none', fontSize: '14px' }}>Analytics</a>
          <a href="#" style={{ color: '#8E8E93', textDecoration: 'none', fontSize: '14px' }}>Reports</a>
          <a href="#" style={{ color: '#8E8E93', textDecoration: 'none', fontSize: '14px' }}>Settings</a>
        </nav>
      </header>
      <div className="layout-content" style={{ minHeight: 'calc(100vh - 64px)' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
