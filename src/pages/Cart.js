import React from 'react';
import {useState, useEffect} from 'react'

const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]);

  return (
    <aside className= "block col-1">
      <h2> Cart Items</h2>
      <div>{
        cartItems.length === 0 &&
        <div> Cart is Empty</div>
      }
      </div>
      <Cart cartItems={cartItems}></Cart>
    </aside>
  )
}

export default Cart
