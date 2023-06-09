import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import Header from './components/Header/Header';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const orderId = uuidv4();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const totalPrice = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.quantity * item.price;
    });
    return sum;
  };

  const submit = () => {
    const orderData = {
      id: orderId,
      items: cart
        .filter((item) => item.quantity > 0)
        .map((item) => ({
          description: item.description,
          price: item.price,
          quantity: item.quantity,
        })),
      totalPrice: totalPrice(),
      name,
      email,
      phone,
      address,
    };
    console.log(orderData);
    localStorage.setItem('order', JSON.stringify(orderData));
  };

  const retrieveOrderFromLocalStorage = () => {
    const orderData = localStorage.getItem('order');
    if (orderData) {
      const parsedOrderData = JSON.parse(orderData);
      const { items, totalPrice, name, email, phone, address } =
        parsedOrderData;
      setCart(items);
      setName(name);
      setEmail(email);
      setPhone(phone);
      setAddress(address);
    }
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MainMenu
                setCart={setCart}
                selectedShop={selectedShop}
                setSelectedShop={setSelectedShop}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                setCart={setCart}
                totalPrice={totalPrice}
                submit={submit}
                setName={setName}
                setEmail={setEmail}
                setPhone={setPhone}
                address={address}
                setAddress={setAddress}
                selectedShop={selectedShop}
              />
            }
          />
        </Routes>
        <button onClick={retrieveOrderFromLocalStorage}>Retrieve Order</button>
      </div>
    </Router>
  );
}

export default App;
