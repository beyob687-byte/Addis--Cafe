import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import { CartContext } from './cart/CartProvider';

const Dish = ({ dish, currency = 'ETB' }) => {
  const { name, price, isSpicy, id } = dish;
  const { dispatch, items } = useContext(CartContext);

  const cartItem = items.find(item => item.id === dish.id);
  const count = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', payload: dish });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: dish });
  };

  return (
    <Card>
      <div className="dish-info">
        <h3 className="dish-name">
          <Link to={`/menu/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {name}
          </Link>
          {' '}{Boolean(isSpicy) && <span className="spicy-badge">🌶️</span>}
        </h3>
        <p className="dish-price">
          {price} {currency}
        </p>
        <div className="dish-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={handleAdd}>Add</button>
          {count > 0 && (
            <>
              <span>({count})</span>
              <button onClick={handleRemove}>Remove</button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isSpicy: PropTypes.bool,
  }).isRequired,
  currency: PropTypes.string,
};

export default Dish;
