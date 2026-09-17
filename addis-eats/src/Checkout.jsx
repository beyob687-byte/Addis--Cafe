import React, { useContext } from 'react';
import OrderForm from './OrderForm';
import { CartContext } from './cart/CartProvider';

const Checkout = () => {
  const { totalPrice, items } = useContext(CartContext);

  return (
    <div className="checkout-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Checkout</h2>
      
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ marginBottom: '2rem' }}>
            <h3>Order Summary</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {items.map(item => (
                <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                  <span>{item.quantity}x {item.name}</span>
                  <span>{item.price * item.quantity} ETB</span>
                </li>
              ))}
            </ul>
            <h4 style={{ textAlign: 'right', marginTop: '1rem' }}>Total: {totalPrice} ETB</h4>
          </div>
          <OrderForm />
        </>
      )}
    </div>
  );
};

export default Checkout;
