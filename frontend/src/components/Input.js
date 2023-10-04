// Input.js
import React from 'react';
import '../styles/Input.css'
function Input({ type, id, name, value, onChange, label }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
