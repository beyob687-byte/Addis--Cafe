import React from 'react';

const Dish = ({ name, price }) => {
  return (
    <div className="dish-card">
      <div className="dish-info">
        <h3>{name}</h3>
        <p className="dish-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Dish;
