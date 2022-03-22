import React from 'react';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import {Check, Exclamation, Plus, Dash, CartX, ArrowRight, Trash} from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
import CheckoutPopup from '../components/CheckoutPopup'


const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]); useParams()
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1); useParams()
    const [showEdit, setShowEdit] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);

    const getCartItems = () => {
       axios.get('https://cozy-django.herokuapp.com/api/carts').then(
         (response) => setCartItems(response.data),
         (error) => console.error(error))
         .catch((error) => console.error(error))
     }


    const Total = (sum) => {
      sum = 0;
      for(let i = 0; i < cartItems.length; i++)
      sum += cartItems[i].price * cartItems[i].orderQuantity
      return sum
      }


   const deleteProduct = (product) => {
    axios.delete(`https://cozy-django.herokuapp.com/api/carts/${product.id}`).then(
    ()=>{ axios.get('https://cozy-django.herokuapp.com/api/carts').then((response)=> {
      setCartItems(response.data)
    })}
    )
   }

  const addOrderQuantity = () => {
    for (let i = 0; i < cartItems.length; i++){
      axios.put('https://cozy-django.herokuapp.com/api/carts/' + cartItems[i].id,
      {
        id: cartItems[i].id,
        price: cartItems[i].price,
        orderQuantity: cartItems[i].orderQuantity + 1,
        quantity: cartItems[i].quantity,
        availability: cartItems[i].availability,
        color: cartItems[i].color,
        category: cartItems[i].category,
        name: cartItems[i].name,
        imgURL: cartItems[i].imgURL,
      }).then(
      axios.get('https://cozy-django.herokuapp.com/api/carts').then((response)=> {
        setCartItems(response.data)
      })
    )}
  }
  const subOrderQuantity = () => {
    for (let i = 0; i < cartItems.length; i++){
    
      axios.put('https://cozy-django.herokuapp.com/api/carts/' + cartItems[i].id,
      {
        id: cartItems[i].id,
        price: cartItems[i].price,
        orderQuantity: cartItems[i].orderQuantity - 1,
        quantity: cartItems[i].quantity,
        availability: cartItems[i].availability,
        color: cartItems[i].color,
        category: cartItems[i].category,
        name: cartItems[i].name,
        imgURL: cartItems[i].imgURL,
      }).then(
      axios.get('https://cozy-django.herokuapp.com/api/carts').then((response)=> {
        setCartItems(response.data)
      })
    )}
  }

    const handleIncrement = (name) => {
      setCartItems(cartItems =>
        cartItems.map((product)=>
        name === product.name ? {...product, orderQuantity: product.orderQuantity + 
          (product.orderQuantity < 10 ? 1:0 )} : product)
      )
    }

    const handleDecrement = (name) => {
      setCartItems(cartItems =>
        cartItems.map((product)=>
        name === product.name ? {...product, orderQuantity: product.orderQuantity - 
          (product.orderQuantity > 1  ? 1:0 ) } : product)
      )
    }

    const Products = () => {
      let sum = 0
      for(let i = 0; i < cartItems.length; i++){
        sum += cartItems[i].orderQuantity 
      }
      return sum
    }


    const ClearCart = () => {
      for (let i = 0; i < cartItems.length; i++){
        let name = cartItems[i].name
        axios.put('https://cozy-django.herokuapp.com/api/carts/' + cartItems[i].id,
        {
          id: cartItems[i].id,
          qty: cartItems[i].quantity,
          price: cartItems[i].price,
          orderQuantity: quantity,
          quantity: cartItems[i].quantity - quantity,
          availability: cartItems[i].availability,
          color: cartItems[i].color,
          category: cartItems[i].category,
          name: cartItems[i].name,
          imgURL: cartItems[i].imgURL,
        }).then(
        axios.get('https://cozy-django.herokuapp.com/api/carts').then((response)=> {
          setCartItems(response.data)
        })
      )}
     setButtonPopup(true)
    }


  useEffect(() => {
  getCartItems()
  }, [])


  return (
    <>
    <div className= "cart-heading">
      <h2 className='cart-title'>Cart Items</h2>
      <p>{!cartItems.length ? "" : <a className='shop-button' href="/products">Continue Shopping</a>}
      </p>   </div>
      {!cartItems.length ?
      <div className='empty-container'>
        <div className='cart-empty'>
        <CartX/> Cart is Empty <CartX/>
        </div>
        <CheckoutPopup trigger={buttonPopup} setTrigger= {setButtonPopup}>
          <h3>Thank you for your order! </h3> <h5>Please check your inbox for the order confirmation and delivery details. We hope you enjoy your purchase!</h5>
        </CheckoutPopup>
     </div>
    :
     <div className='cart-and-total'>
       <div className='cart-items'>
     {cartItems.map((product)=>{
      return(
        <div className='container3'>
        <div className='image-container2'>
            <img src={product.imgURL}/>
        </div>
              <div className='contents2'>
                <div className='contents-main2' key={product.id}>
                  <div className='cart-contents'>
                      <p href={product._id} className='contents-title'>{product.name}</p>
                      <p>Color: {product.color}</p>
                      <p>Store Quantity: {product.quantity}</p>
                      <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                      {product.availability ? <Check /> : <Exclamation/>}
                      </p>
                      <div className='quantity'>
                      <button onClick={() => handleIncrement(product.name)}><Plus/></button>
                      <div>{product.orderQuantity}</div>
                      <button onClick={() => handleDecrement(product.name)}><Dash/></button>
                      </div>
                      <p className='price'><b>${product.price}</b></p>
                      </div>
                      <div id='button-container'>
                      <button onClick={(event)=>{deleteProduct(product)}}>Remove<Trash /></button>
                      </div>
                  </div>
              </div>
        </div>
     )})}
     </div>
      <div className='checkout-summary'>
            <h3>Order Summary:</h3>
            <div className="order-details">
              <p> {Products()} {cartItems.length > 1 ? "PRODUCTS" : 'PRODUCT'}</p>
              <p>Product total ${Total()}</p>
              <p>Delivery FREE</p>
              <p className='total'>Total ${Total()}</p>
            </div>
            <p>By placing this order you agree to the Delivery Terms</p>
            <button className='checkout' onClick={() => {
                ClearCart() ; setCartItems([])
             }}  >Checkout <ArrowRight/></button>
            <CheckoutPopup trigger={buttonPopup} setTrigger= {setButtonPopup}>
              <h3>Thank you for your order! </h3> <h5>Please check your inbox for the order confirmation and delivery details. We hope you enjoy your purchase!</h5>
            </CheckoutPopup>
       </div>
     </div>
     }
   </>
  )
}
export default Cart
