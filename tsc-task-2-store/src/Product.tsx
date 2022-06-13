import React, { useEffect, useState } from 'react';
import Data from './products.json'
import './App.css';

let arr1:any;
let data:any=[];
let d:any = [{product:"",price:0}];
let arrr = [{product:"",price:0}];
let count:number=0;
function Product() {

    const [pro,setPro]=useState<any>([{product:"",price:0}]);
    const [quan,setQuan]=useState<number>(0)
    const [cart,setCart]=useState<boolean>(false)
    const [check,setCheck] = useState(false)
    let a:any;
    const handleProduct=(e:any)=>{
        a = Data.items.filter((item)=>{return (item.product === e.target.value) });
        arrr=a;
        setPro(a)
        console.log(a)
        setCart(true)
        setCheck(ps=>!ps)
    }
    const handleQuantity=(e:any)=>{
       setQuan(e.target.value)
       console.log(a)
    }
  
    const handleCart=(e:any)=>{
        setCart(false) 
    }

    const handleAdd=()=>{
      //  arr1.push(arr1)
      console.log(a)
    //  d[count]=a
     console.log(count)
     
      arr1=[[<>
        <tr>
        <td>
            <select id="productlist" onChange={handleProduct}>
                <option disabled selected>Select the Item</option>
                {Data.items.map((item:any)=>
                    <><option value={item.product} >{item.product}</option></>
                )}
            </select>
        </td>
        <td>
            <select id="quantitylist" onChange={handleQuantity}>
                <option  disabled selected>Select the Quantity</option>
                {Data.items.map((item:any,index:any)=>
                    <><option value={index+1}>{index+1}</option></>
                )}
            </select>
        </td>
        <td>{arrr[0].price}</td>
        <td>{arrr[0].price * quan}</td>
        </tr></>],arr1];
       // console.log(check)
         setCheck(ps => !ps)
        data.push({product : pro[0].product,Quantity:quan,price:pro[0].price,Total:pro[0].price * quan})
        count++;
         console.log(data)
        
       
     // setCheck(ps=>!ps)

    }

  return (
    <div className="Product">
        <h1>Products</h1>
        <h5>Address : <span className='add'>92,Nehru Street,Anna Nagar,Chennai.</span></h5>
        <h5>Telephone : <span className='tel'>0424-2275757</span></h5>
        <div> 
        <div>
            <button className='addpro' onClick={handleAdd}>ADD PRODUCT</button>   
            <button className='submitlist'>SUBMIT</button>
            <button className='closelist'>CLOSE</button>
        </div>
        <table>
        <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total Price</th>
        </tr>
        {arr1 }
     </table>
        </div>
      
    </div>
)
}

export default Product;