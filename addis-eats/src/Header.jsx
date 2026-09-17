import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from './cart/CartProvider';

const Header = () => {
  const { totalCount } = useContext(CartContext);

  const navStyle = ({ isActive }) => ({
    marginRight: '1rem',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#e74c3c' : '#333'
  });

  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#fff', borderBottom: '1px solid #eee' }}>
      <div>
        <h1>Addis Eats</h1>
        <p>Authentic Ethiopian Cuisine</p>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/" style={navStyle}>Home</NavLink>
        <NavLink to="/menu" style={navStyle}>Menu</NavLink>
        <NavLink to="/checkout" style={navStyle}>
          Checkout ({totalCount})
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
