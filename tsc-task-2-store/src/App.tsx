import React from 'react';
import Header from "./Header"
import Retailer1 from "./Retailer1"
import Retailer2 from "./Retailer2"
import Retailer3 from "./Retailer3"
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <div className='Layout'>
        <Header/>
        <div className='Retailer'>
          <Retailer1/>
          <Retailer2/>
          <Retailer3/>
        </div>
        <Product/>
      </div>
    </div>
  );
}

export default App;
