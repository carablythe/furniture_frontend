import React from 'react';
import {useState, useEffect} from 'react'
import {CartX} from 'react-bootstrap-icons'

const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]);

  return (
    <aside className= "block">
      <h2 className='cart-title'> Cart Items</h2>
      <div className='empty-container'>{
        cartItems.length === 0 ?
        <div className='cart-empty'><CartX/> Cart is Empty <CartX/></div> 
        :
      <>
       <div cartItems={cartItems}></div>
        <button>Checkout</button>
      </>
     
    }
     </div>
    </aside>
  )
}

export default Cart
