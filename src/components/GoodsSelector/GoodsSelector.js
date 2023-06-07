import React from 'react';
import './GoodsSelector.css';
import { shopData } from '../shopData';

const GoodsSelector = ({ selectedShop, handleAddToCart }) => {
  const goods = shopData[selectedShop] || [];

  return (
    <div className="goods-selector">
      {!selectedShop && (
        <p className="no-shop-selected">Please select a shop</p>
      )}
      {goods.map((item, index) => (
        <div className="burger-container" key={index}>
          <img src={item.image} alt="food_image" className="burgerimage" />
          <div className="details">
            <p className="description">{item.description}</p>
            <p className="price">{item.price} грн.</p>
          </div>
          <button className="btn" onClick={() => handleAddToCart(item)}>
            add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default GoodsSelector;
