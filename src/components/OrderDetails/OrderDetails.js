import React from 'react';
import './OrderDetails.css';

const OrderDetails = ({ cart, setCart }) => {
  const handleQuantityChange = (item, increment) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) => {
        if (cartItem.description === item.description) {
          const newQuantity = cartItem.quantity + increment;
          return {
            ...cartItem,
            quantity: newQuantity >= 0 ? newQuantity : 0,
          };
        }
        return cartItem;
      });
      return updatedCart;
    });
  };

  const handleDeleteItem = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.description !== item.description)
    );
  };

  return (
    <div className="order-container">
      {cart.map((item, index) => (
        <div className="item-container" key={index}>
          <img src={item.image} alt="food_image" className="food-image" />
          <div className="details">
            <p className="description">{item.description}</p>
            <button className="btn" onClick={() => handleDeleteItem(item)}>
              remove
            </button>
            <p className="price">{item.price * item.quantity} грн.</p>
            <div className="quantity">
              <input type="number" value={item.quantity} readOnly />
              <div className="arrow-container">
                <button
                  className="arrow"
                  onClick={() => handleQuantityChange(item, 1)}
                >
                  &#8679;
                </button>
                <button
                  className="arrow"
                  onClick={() => handleQuantityChange(item, -1)}
                >
                  &#8681;
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
