import React from 'react';
import '../styles/Button.css'
function Button({ type, onClick, label }) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;