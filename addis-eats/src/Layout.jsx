import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1 }}>
        {/* Child routes render here */}
        <Outlet />
      </div>
      <footer style={{ textAlign: 'center', padding: '1rem', background: '#f5f5f5', marginTop: '2rem' }}>
        <p>&copy; 2024 Addis Eats. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
