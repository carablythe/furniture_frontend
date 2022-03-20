import React from 'react';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Check, Exclamation, Plus, Dash, CartX, ArrowRight} from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'


const Cart = (props) => {
    const [cartItems, setCartItems] = useState([]);
    
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1)

 


    const getCartItems = () => {
       axios.get('https://cozy-django.herokuapp.com/api/carts').then(
         (response) => setCartItems(response.data),
         (error) => console.error(error))
         .catch((error) => console.error(error))
         
     }

    

    const Total = (sum) => {
      sum = 0;
      for(let i = 0; i < cartItems.length; i++)
      sum += cartItems[i].price
      return sum
      }
    
   const deleteProduct = (product) => {
    axios.delete(`https://cozy-django.herokuapp.com/api/carts/${product.id}`).then(
    ()=>{ axios.get('https://cozy-django.herokuapp.com/api/carts').then((response)=> {
      setCartItems(response.data)
    })}
    )
   }
    
    // const getCartProducts = (cart) => {
    //     axios.post('https://furnituredjango.herokuapp.com/api/furnitures', {cart}).then(
    //       (response => response.data))
    //  }


    // const AddToCart = (product) => {
    //     const exist = cartItems.find((x) => x.id === product.id);
    //       if(exist) {
    //           setCartItems(
    //              cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
    //              );
    //       } else {
    //             setCartItems([...cartItems,{...product, qty: 1}])
    //             }
    //       }

    // const RemoveFromCart = (product) => {
    //     const exist = cartItems.find((x) => x.id === product.id);
    //         if(exist.qty === 1) {
    //             setCartItems(
    //               cartItems.filter((x) => x.id !== product.id));
    //         } else {
    //             setCartItems(
    //               cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
    //             )}
    //       }

    // const TotalPrice = cartItems.reduce((a,c,) => a + c.price * c.qty, 0)

    useEffect(() => {
       getCartItems()
       
    }, [])

    const handleIncrement = (order_quantity, item) => {
      console.log(item);
       let quantity = item.orderQuanity + 1
      console.log(quantity);
    }
    const handleDecrement = (order_quantity) => {
      setCartItems(cartItems =>
        cartItems.map((product)=>
        order_quantity === product.id ? {...product, orderQuanity: product.orderQuanity - 1 } : product
        )
        )
    }
console.log(cartItems)
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
                      <p>Store Quantity {product.quantity}</p>
                      <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} 
                      {product.availability ? <Check /> : <Exclamation/>}
                      </p>
                      <div className='quantity'>
                      <button ><Plus/></button>
                      <div>{product.orderQuantity}</div>
                      <button onClick={() => handleDecrement(product.name, product)}><Dash/></button>
                      </div>
                      <p className='price'><b>${product.price}</b></p>
                      </div>
                      <div id='button-container'>
                      <button>Edit</button> 
                      <button onClick={(event)=>{deleteProduct(product)}}>Delete</button>
                      </div>  
                </div>
              </div>
             
                  
        </div>
     )})}
     </div>
      <div className='checkout-summary'>
                      <h3>Order Summary:</h3>
                      <div className="order-details">
                        <p> {cartItems.length} {cartItems.length > 1 ? "PRODUCTS" : 'PRODUCT'}</p>
                        <p>Product total ${Total()}</p>
                        <p>Delivery FREE</p>
                        <p className='total'>Total ${Total()}</p>
                      </div>
                      <p>By placing this order you agree to the Delivery Terms</p>
                          <button className='checkout'>Checkout <ArrowRight/></button>
                  </div>
     </div>
     }
   </>
  )

}
export default Cart
