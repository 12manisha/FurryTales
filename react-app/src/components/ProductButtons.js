// ProductButtons.js

import React from 'react';
import "./ProductButtons.css";

function ProductButtons({ onClickHandler, value, title, selected }) {
  return (
    <button 
      className={`product-button ${selected ? 'selected' : ''}`} 
      onClick={onClickHandler} 
      value={value}
    >
      {title}
    </button>
  );
}

export default ProductButtons;
