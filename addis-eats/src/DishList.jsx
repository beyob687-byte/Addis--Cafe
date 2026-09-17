import React from 'react';
import PropTypes from 'prop-types';
import Dish from './Dish';

const DishList = ({ dishes, searchTerm }) => {
  const filteredDishes = dishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredDishes.length === 0) {
    return (
      <div className="empty-state">
        <p>No dishes match your search.</p>
      </div>
    );
  }

  return (
    <div className="dishes-grid">
      {filteredDishes.map((dish) => (
        <Dish
          key={dish.id}
          dish={dish}
        />
      ))}
    </div>
  );
};

DishList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    isSpicy: PropTypes.bool
  })).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default DishList;
