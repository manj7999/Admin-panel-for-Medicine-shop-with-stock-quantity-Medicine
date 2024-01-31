import React from 'react';
import { useCart } from './CartContext'; 

const Cart = () => {
  const { cart } = useCart(); 

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
