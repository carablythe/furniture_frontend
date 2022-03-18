import React from 'react';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {CartX} from 'react-bootstrap-icons'


const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([]);

    const getProducts = () => {
       axios.get('https://furnituredjango.herokuapp.com/api/furnitures').then(
         (response) => setProducts(response.data),
         (error) => console.error(error))
         .catch((error) => console.error(error))
     }
    //
    // const getCartProducts = (cart) => {
    //     axios.post('https://furnituredjango.herokuapp.com/api/furnitures', {cart}).then(
    //       (response => response.data))
    //  }


    const AddToCart = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
          if(exist) {
              setCartItems(
                 cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
                 );
          } else {
                setCartItems([...cartItems,{...product, qty: 1}])
                }
          }

    const RemoveFromCart = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
            if(exist.qty === 1) {
                setCartItems(
                  cartItems.filter((x) => x.id !== product.id));
            } else {
                setCartItems(
                  cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
                )}
          }

    const TotalPrice = cartItems.reduce((a,c,) => a + c.price * c.qty, 0)

    useEffect(() => {
       getProducts()
    }, [])

  return (
    <aside className= "block">
      <h2 className='cart-title'>Cart Items</h2>
      <div className='empty-container'> {
        cartItems.length === 0 &&
        <div className='cart-empty'>
        <CartX/> Cart is Empty <CartX/>
        </div>
        }
     </div>
     {cartItems.map((item) => (
       <div key = {item.id} className = "row">
       <div>{item.name}</div>
       <div>
       <button className="add" onClick={() => AddToCart(item)} >
       +
       </button>
       <button className="remove" onClick={() => RemoveFromCart(item)} >
       -
       </button>
       </div>
       <div>
       {item.qty} x ${item.price.toFixed(2)}
      </div>
      </div>
    ))}
    {cartItems.length !== 0 && (
      <>
      <hr></hr>
      <div className="row">
        <div> Total Price </div>
        <div> ${TotalPrice.toFixed(2)} </div>
      </div>
         <button onClick={() => alert('Thank you for your purchase!')}>Checkout</button>
      </>
     )}
   </aside>
  )
}

export default Cart
