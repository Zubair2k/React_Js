import './styles.css';
import React from "react";
import Header from "./Header";
import Retailer1 from "./Retailer1";
import Retailer2 from "./Retailer2";
import Retailer3 from "./Retailer3";

export default function App() {
  return (
    <div className="App">
      <div className="Layout">
        <Header />
      </div>
      <div className="Retailer">
        <Retailer1 />
        <Retailer2 />
        <Retailer3 />
      </div>
    </div>
  );
}