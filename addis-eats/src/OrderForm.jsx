import React, { useState } from 'react';

const OrderForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isPhoneValid = /^(09|07)\d{8}$/.test(formData.phone);
  const isValid = formData.name.trim() !== '' && formData.area.trim() !== '' && isPhoneValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`Order submitted for ${formData.name}!`);
      if (onSubmitSuccess) onSubmitSuccess();
      setFormData({ name: '', phone: '', area: '' });
    }
  };

  return (
    <div className="order-form-container" style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Delivery Details</h3>
      <form onSubmit={handleSubmit} className="order-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem' }}
          />
        </div>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="phone">TeleBirr Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="09... or 07..."
            required
            style={{ padding: '0.5rem' }}
          />
          {formData.phone && !isPhoneValid && (
            <span className="error-text" style={{ color: 'red', fontSize: '0.875rem' }}>
              Must be 10 digits starting with 09 or 07.
            </span>
          )}
        </div>
        <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="area">Delivery Area:</label>
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem' }}
          />
        </div>
        <button type="submit" disabled={!isValid} className="submit-btn" style={{ padding: '0.5rem 1rem', cursor: isValid ? 'pointer' : 'not-allowed' }}>
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
