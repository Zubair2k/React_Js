import React from 'react';
import './App.css';

function Retailer1() {
  return (
    <div className="Retailer1">
        <h1>Retailer1</h1>
        <h5>Address : <span className='add'>92,Nehru Street,Anna Nagar,Chennai.</span></h5>
        <h5>Telephone : <span className='tel'>0424-2275757</span></h5>
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
            </tr>
            <tr>
                <td>January</td>
                <td>$100</td>
                <td>January</td>
                <td>$100</td>
            </tr>
        </table>
    </div>
  );
}

export default Retailer1;
