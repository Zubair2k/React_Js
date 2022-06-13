import React from 'react';
import './App.css';

function Header() {
  return (
    <div className="Header">
        <h1>Wholesale Shop</h1>
        <div className='headerbtn'>
            <button className='retail1'>Retailer1</button>
            <button className='retail2'>Retailer2</button>
            <button className='retail3'>Retailer3</button>
        </div>
    </div>
  );
}

export default Header;
