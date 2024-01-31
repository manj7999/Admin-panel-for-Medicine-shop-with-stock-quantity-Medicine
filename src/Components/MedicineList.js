import React, { useState, useEffect } from 'react';
import './style.css';
// import { useCart } from './CartContext';

const MedicineList = ({ medicines, onAddToCart }) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.name}</td>
              <td>{medicine.description}</td>
              <td>{medicine.price}</td>
              <td>{medicine.stockQuantity}</td>
              <td>
                {medicine.stockQuantity > 0 ? (
                     <button onClick={() => onAddToCart(medicine)}>Add to Cart</button>
                ) : (
                    <span>Out of Stock</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineList;