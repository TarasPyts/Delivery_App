import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="heading">
        <Link to="/" className="link">
          Shops
        </Link>
      </div>
      <div className="heading shopping-cart">
        <Link to="/cart" className="link">
          Shopping Cart
        </Link>
      </div>
      <div className="heading history">History</div>
      <div className="heading coupons">Coupons</div>
    </div>
  );
};

export default Header;
