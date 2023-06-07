import React from 'react';
import './ShoppingCart.css';
import PersonDetails from '../PersonDetails/PersonDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import Submit from '../Submit/Submit';

const ShoppingCart = ({
  cart,
  setCart,
  totalPrice,
  submit,
  setName,
  setEmail,
  setPhone,
  setAddress,
}) => {
  return (
    <div className="cart-container">
      <PersonDetails
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setAddress={setAddress}
      />
      <OrderDetails cart={cart} setCart={setCart} />
      <div className="submit">
        <Submit setCart={setCart} totalPrice={totalPrice} submit={submit} />
      </div>
    </div>
  );
};

export default ShoppingCart;
