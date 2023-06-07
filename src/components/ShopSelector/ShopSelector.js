import React from 'react';
import './ShopSelector.css';

const ShopSelector = ({ handleShopClick, selectedShop }) => {
  const shops = [
    'Mc Donalds',
    'KFC',
    'Lviv Croissants',
    'Big Burger',
    'Donatello',
  ];

  const handleClick = (shopName) => {
    handleShopClick(shopName);
  };

  return (
    <div className="shop-selector">
      <p className="title item">Shops:</p>
      {shops.map((shop) => (
        <div
          key={shop}
          className={`shop item ${selectedShop === shop ? 'selected' : ''}`}
          onClick={() => handleClick(shop)}
        >
          {shop}
        </div>
      ))}
    </div>
  );
};

export default ShopSelector;
