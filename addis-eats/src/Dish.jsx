import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Dish = ({ name, price, currency = 'ETB', isSpicy, onAddToCart }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(prev => prev + 1);
    onAddToCart(price);
  };

  return (
    <Card>
      <div className="dish-info">
        <h3 className="dish-name">
          {name} {Boolean(isSpicy) && <span className="spicy-badge">🌶️</span>}
        </h3>
        <p className="dish-price">
          {price} {currency}
        </p>
        <div className="dish-actions">
          <button onClick={handleAdd}>Add ({count})</button>
        </div>
      </div>
    </Card>
  );
};

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  isSpicy: PropTypes.bool,
  onAddToCart: PropTypes.func.isRequired,
};

export default Dish;
