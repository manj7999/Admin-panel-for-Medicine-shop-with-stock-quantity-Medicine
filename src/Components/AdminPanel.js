import React, { useState, useContext } from 'react';
import MedicineForm from './MedicineForm';
import MedicineList from './MedicineList';
import { CartProvider, useCart } from './CartContext';

const AdminPanel = () => {
  const [medicines, setMedicines] = useState([]);
  const { addToCart } = useCart(); 

  const handleAddMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <MedicineForm onAddMedicine={handleAddMedicine} />
      <hr />
      <h2>Medicine List</h2>
      <MedicineList medicines={medicines} onAddToCart={addToCart} />
    </div>
  );
};

export default AdminPanel;
