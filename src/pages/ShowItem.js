import React, {useState, useEffect} from 'react';
import axios from 'axios'
import AddToCart from './Cart'

const ShowItem = (props) => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getProducts = () => {
     axios.get('https://furnituredjango.herokuapp.com/api/furnitures').then(
       (response) => setProducts(response.data),
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

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <>
      <div className = "product" key = {product._id}>
      <h3>{product.name}</h3>
      <img className="small" src={product.image} alt={product.name}></img>
      <h5>Category: {product.category} </h5>
      <h5>Color: {product.color} </h5>
      <h5>Items left in stock: {product.quantity} </h5>
      <div>${product.price}</div>
      <div><button onClick={()=> AddToCart(product)}>Add to Cart</button></div>
      </div>
    </>
  )
}

export default ShowItem
