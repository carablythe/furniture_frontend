import React, {useState, useEffect} from 'react';
import axios from 'axios'
import AddToCart from './Cart'
import Add from '../components/Add'
import Edit from '../components/Edit'

const ShowItem = (props) => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [reviews, setReviews] = useState([])
  const [review, setReview] = useState([])

  const getProducts = () => {
     axios.get('https://furnituredjango.herokuapp.com/api/furnitures').then(
       (response) => setProducts(response.data),
       (error) => console.error(error))
       .catch((error) => console.error(error))
   }


   const getReviews = () => {
     axios.get('http://localhost:8000/api/reviews').then(
       (response) => setReviews(response.data),
       (error) => console.error(error))
       .catch((error) => console.error(error))
   }

   const handleCreate = (addReview) => {
    axios
    .post('http://localhost:8000/api/reviews', addReview)
    .then((response) => {
      console.log(response)
     // getPeople()
      setReviews([...reviews, response.data])
    })
   }

   const handleDelete = (event, deletedReview) => {
   axios
     .delete('http://localhost:8000/api/reviews/' + event.target.value)
     .then((response) => {
       setReviews(
         review.filter(x => x.id !== deletedReview.id)
       )
     })
   }

   const handleUpdate = (editReview) => {
   console.log(editReview)
   axios
     .put('http://localhost:8000/api/reviews/' + editReview.id, editReview)
     .then((response) => {
       setReviews(
         reviews.map((review) => {
           return review.id !== editReview.id ? review : response.data
         })
       )
     })
   }

   useEffect(() => {
     getReviews()
   }, [])


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
      <div className = "product" key = {product._id}>
      <h3>{product.name}</h3>
      <img className="small" src={product.image} alt={product.name}></img>
      <h5>Category: {product.category} </h5>
      <h5>Color: {product.color} </h5>
      <h5>Items left in stock: {product.quantity} </h5>
      <div>${product.price}</div>

     <h1>Customer Reviews</h1>
     <Add handleCreate = {handleCreate}/>
     <div className = "reviews">
      {reviews.map((review) => {
       return (
        <div className = "review" key = {review.id}>
        <h4>Name of Rater: {review.name} </h4>
        <h5>Rating (0-5): {review.rating} </h5>
        <Edit handleUpdate={handleUpdate} review = {review}/>
        <button onClick={(event) => {handleDelete(event,review)}} value={review.id}>Delete Review</button>
        </div>
       )
     })}
     <div><button onClick={()=> AddToCart(product)}>Add to Cart</button></div>
     </div>
    </div>
  )
}


export default ShowItem
