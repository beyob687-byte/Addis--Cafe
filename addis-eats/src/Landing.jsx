import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h2>Welcome to Addis Eats</h2>
      <p>Discover the best authentic Ethiopian cuisine.</p>
      <Link to="/menu" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', background: '#3498db', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        View Menu
      </Link>
    </div>
  );
};

export default Landing;
