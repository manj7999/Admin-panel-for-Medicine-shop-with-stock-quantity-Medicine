import React, { useState } from 'react';

const MedicineForm = ({ onAddMedicine }) => {
  const [medicine, setMedicine] = useState({
    name: '',
    description: '',
    price: '',
    stockQuantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleAdd = () => {
    if (medicine.name && medicine.price && medicine.stockQuantity) {
      onAddMedicine(medicine);
      setMedicine({
        name: '',
        description: '',
        price: '',
        stockQuantity: '',
      });
    }
  };

  return (
    <div>
      <label>
        Medicine name:
        <input type="text" name="name" value={medicine.name} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={medicine.description} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={medicine.price} onChange={handleInputChange} />
      </label>
      <label>
        Stock Quantity:
        <input
          type="text"
          name="stockQuantity"
          value={medicine.stockQuantity}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleAdd}>Add Medicine</button>
    </div>
  );
};

export default MedicineForm;

