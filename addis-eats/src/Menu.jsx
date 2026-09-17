import React, { useState } from 'react';
import Dish from './Dish';
import CategoryBar from './CategoryBar';
import OrderForm from './OrderForm';
import { menuData, categories } from './data';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [orderTotal, setOrderTotal] = useState(0);

  const filteredDishes = menuData.filter((dish) => {
    if (selectedCategory === 'All') return true;
    return dish.category === selectedCategory;
  });

  const handleAddToCart = (price) => {
    setOrderTotal((prev) => prev + price);
  };

  return (
    <main className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      
      <CategoryBar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelect={setSelectedCategory} 
      />

      {filteredDishes.length === 0 ? (
        <div className="empty-state">
          <p>No items available in this category.</p>
        </div>
      ) : (
        <div className="dishes-grid">
          {filteredDishes.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              isSpicy={dish.isSpicy}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}

      <div className="order-summary" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h3>Total Order: {orderTotal} ETB</h3>
      </div>

      <OrderForm />
    </main>
  );
};

export default Menu;
