import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { useCartStore } from './cart/cartStore';

const DishDetail = () => {
  const { id } = useParams();
  const { data: dishes, loading, error } = useFetch('/dishes.json');
  
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const count = useCartStore((state) => {
    const item = state.items.find(i => i.id === parseInt(id, 10));
    return item ? item.quantity : 0;
  });

  if (loading) return <p style={{ padding: '2rem', textAlign: 'center' }}>Loading dish...</p>;
  if (error) return <p style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  const dish = dishes?.find(d => d.id === parseInt(id, 10));

  if (!dish) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h2>Dish Not Found</h2>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <Link to="/menu" style={{ display: 'inline-block', marginBottom: '1rem', color: '#3498db' }}>&larr; Back to Menu</Link>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '2rem' }}>
        <h2>{dish.name} {dish.isSpicy && '🌶️'}</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>{dish.category}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{dish.price} ETB</p>
        
        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => addItem(dish)}
            style={{ padding: '0.75rem 1.5rem', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Add to Cart
          </button>
          {count > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{count} in cart</span>
              <button 
                onClick={() => removeItem(dish)}
                style={{ padding: '0.5rem 1rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Remove One
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
