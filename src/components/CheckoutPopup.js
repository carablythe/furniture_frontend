import React from 'react'
import './CheckoutPopup.css'
import Cart from '../pages/Cart.js'

const CheckoutPopup = (props) => {

  return (props.trigger) ? (
    <div className= "checkoutPopup">
      <div className= "checkoutPopup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
        { props.children }
      </div>
    </div>
  ): "";
}

export default CheckoutPopup
