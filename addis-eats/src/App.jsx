import React from 'react';
import Header from './Header';
import Dish from './Dish';
import './index.css';

const dishes = [
  { id: 1, name: 'Doro Wat', price: 15.99 },
  { id: 2, name: 'Kitfo', price: 18.50 },
  { id: 3, name: 'Beyaynetu', price: 14.00 },
  { id: 4, name: 'Shiro', price: 12.50 },
];

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <Dish key={dish.id} name={dish.name} price={dish.price} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
