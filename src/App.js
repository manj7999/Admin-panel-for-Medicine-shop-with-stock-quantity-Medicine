import React, { useState } from 'react';
import AdminPanel from './Components/AdminPanel'; 
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        <Cart />
        <AdminPanel />
      </div>
    </CartProvider>
  );
}

export default App;