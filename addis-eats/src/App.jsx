import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Landing from './Landing';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Checkout from './Checkout';
import Login from './Login';
import NotFound from './NotFound';
import { RequireAuth } from './auth/RequireAuth';
import { AuthProvider } from './auth/AuthProvider';
import { CartProvider } from './cart/CartProvider';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="menu" element={<Menu />} />
              <Route path="menu/:id" element={<DishDetail />} />
              <Route path="login" element={<Login />} />
              <Route 
                path="checkout" 
                element={
                  <RequireAuth>
                    <Checkout />
                  </RequireAuth>
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
