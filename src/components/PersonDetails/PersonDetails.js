import React from 'react';
import './PersonDetails.css';

const PersonDetails = ({ setName, setEmail, setPhone, setAddress }) => {
  return (
    <div className="person-container">
      <div className="map">map</div>
      <div className="section">
        <p>Name</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="section">
        <p>Email</p>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="section">
        <p>Phone</p>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="section">
        <p>Address</p>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
      </div>
    </div>
  );
};

export default PersonDetails;
