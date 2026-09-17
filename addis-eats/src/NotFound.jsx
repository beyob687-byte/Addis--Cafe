import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', background: '#3498db', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
