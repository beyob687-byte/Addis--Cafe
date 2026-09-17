import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryBar from './CategoryBar';
import DishList from './DishList';
import { useFetch } from './hooks/useFetch';
import { categories } from './data';

const Menu = () => {
  const { data: dishes, loading, error } = useFetch('/dishes.json');
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const [searchTerm, setSearchTerm] = useState('');
  
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleCategorySelect = (category) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredDishes = useMemo(() => {
    if (!dishes) return [];
    if (selectedCategory === 'All') return dishes;
    return dishes.filter(dish => dish.category === selectedCategory);
  }, [dishes, selectedCategory]);

  if (loading && (!dishes || dishes.length === 0)) {
    return (
      <main className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <div className="loading-state">
          <p>Loading menu...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <div className="error-state" style={{ color: 'red' }}>
          <p>Error: {error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="menu-container">
      <h2 className="menu-title">Our Menu</h2>
      
      <div className="search-container" style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <input
          type="text"
          ref={searchInputRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search dishes..."
          style={{ padding: '0.5rem', width: '80%', maxWidth: '400px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <CategoryBar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelect={handleCategorySelect} 
      />

      <DishList 
        dishes={filteredDishes} 
        searchTerm={searchTerm} 
      />
    </main>
  );
};

export default Menu;
