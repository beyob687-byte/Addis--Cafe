import React from 'react';
import { useCartStore } from './cart/cartStore';

const CartBadge = () => {
  const totalCount = useCartStore((state) => 
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  if (totalCount === 0) return null;

  return (
    <span style={{ background: '#e74c3c', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '12px', marginLeft: '0.5rem', fontSize: '0.9rem' }}>
      {totalCount}
    </span>
  );
};

export default CartBadge;
