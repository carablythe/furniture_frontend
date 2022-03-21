import React, { useEffect, useState } from 'react'
import './CheckoutPopup.css'
import Cart from '../pages/Cart.js'
import axios from 'axios'

const CheckoutPopup = (props) => {
const [cartItems, setCartItems] = useState([])

const getCartItems = () => {
  axios.get('https://cozy-django.herokuapp.com/api/carts').then((response)=>{
    setCartItems(response.data)
  })
}

  const emptyCart = () =>{
    props.setTrigger(false)
    for (let i = 0; i < cartItems.length; i++){
    axios.delete('https://cozy-django.herokuapp.com/api/carts/' + cartItems[i].id).then(
      axios.get('https://cozy-django.herokuapp.com/api/carts').then((response)=>{
        setCartItems(response.data)
      })
    )}
    window.location.reload()
  }


useEffect(()=>{
  getCartItems()
}, [])

  return (props.trigger) ? (
    <div className= "checkoutPopup">
      <div className= "checkoutPopup-inner">
        <button className="close-btn" onClick={() => emptyCart()}>close</button>
        { props.children }
      </div>
    </div>
  ): "";
}

export default CheckoutPopup
