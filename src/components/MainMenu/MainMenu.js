import React from 'react';
import ShopSelector from '../ShopSelector/ShopSelector';
import GoodsSelector from '../GoodsSelector/GoodsSelector';
import './MainMenu.css';

const MainMenu = ({ setCart, selectedShop, setSelectedShop }) => {
  const handleShopClick = (shopName) => {
    if (selectedShop === shopName) {
      return;
    }

    setSelectedShop(shopName);
    setCart([]);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.description === item.description
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.description === item.description
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="item-selector">
      <ShopSelector
        handleShopClick={handleShopClick}
        selectedShop={selectedShop}
      />

      <GoodsSelector
        selectedShop={selectedShop}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default MainMenu;
