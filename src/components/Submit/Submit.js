import React from 'react';
import './Submit.css';

const Submit = ({ totalPrice, submit, setCart }) => {
  const handleOnClick = () => {
    submit();
    setCart([]);
  };
  return (
    <div className="submit-container">
      <p className="totatl-price">Total price: {totalPrice()}</p>
      <button className="btn submit--btn" onClick={handleOnClick}>
        Submit
      </button>
    </div>
  );
};

export default Submit;
