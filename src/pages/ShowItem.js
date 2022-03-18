import React, {useState, useEffect} from 'react';
import axios from 'axios'
import AddToCart from './Cart'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {Check, Exclamation, Plus, Dash} from 'react-bootstrap-icons'

const ShowItem = (props) => {
  const [product, setProduct] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0)

  const { id } = useParams()

  const getProduct = () => {
     axios.get(`https://furnituredjango.herokuapp.com/api/furnitures/${id}`).then(
       (response) => setProduct(response.data),
       (error) => console.error(error))
       .catch((error) => console.error(error))
   }


  // const handleDelete = (event, deletedProduct) => {
  //  axios
  //   .delete('https://furnituredjango.herokuapp.com/api/furnitures/' + event.target.value)
  //   .then((response) => {
  //     setProducts(
  //       products.filter(x => x.id !== deletedProduct.id)
  //     )
  // //   })
  // //  }
  //       <button onClick={(event) => {handleDelete(event, product)}} value={product.id}>X</button>

  const handleIncrement = (event) => {
    setQuantity(quantity + 1)
    console.log(quantity);
  }
  const handleDecrement = (event) => {
    setQuantity(quantity - 1)
    console.log(quantity);
  }

  useEffect(() => {
    getProduct()
  }, [])


  return (
    <>
          <div className='container2'>
              <div className='image-container2'>
                  <img src={product.img}/>
              </div>
                    <div className='contents2'>
                      <div className='contents-main2'>
                            <a href={product._id} className='contents-title'>{product.name}</a>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} 
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                            <div className='quantity'>
                            <button onClick={handleIncrement}><Plus/></button>
                            <div>{product.quantity > 0 ? quantity : ''} </div>
                            <button onClick={handleDecrement}><Dash/></button>
                            </div>
                            <p className='price'><b>${product.price}</b></p>
                            <button id="add-cart" onClick={()=> AddToCart(product)}>
                          Add to Cart</button>
                      </div>
              
      </div>
      </div>
    </>
  )
}
{/* <h3>{title.name}</h3>
      <img className="small" src={product.image} alt={product.name}></img>
      <h5>Category: {product.category} </h5>
      <h5>Color: {product.color} </h5>
      <h5>Items left in stock: {product.quantity} </h5>
      <div>${product.price}</div>
      <div><button onClick={()=> AddToCart(product)}>Add to Cart</button></div> */}

export default ShowItem
