import React, {useState, useEffect} from 'react';
import axios from 'axios'
import AddToCart from './Cart'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {Check, Exclamation, Plus, Dash} from 'react-bootstrap-icons'
import Add from '../components/Add'
import Edit from '../components/Edit'

const ShowItem = (props) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0)
  const [reviews, setReviews] = useState([])
  const [review, setReview] = useState([])
  // const [newRating, setNewRating] = useState('');

  const { id } = useParams()

  const getProduct = () => {
     axios.get(`https://cozy-django.herokuapp.com/api/furnitures/${id}`).then(
       (response) => setProduct(response.data),
       (error) => console.error(error))
       .catch((error) => console.error(error))
   }

   const AddToCart = (product) => {
    axios({
      method: 'post',
      url: '/api/carts',
      baseURL: 'https://cozy-django.herokuapp.com',
      data: {
        id: product.id,
        qty: 1,
        price: product.price,
        img: product.imgURL,
        user: 1,
        product: 1
      }
    })
    console.log(AddToCart())
   }
  

  const handleIncrement = (event) => {
    setQuantity(quantity + 1)
    console.log(quantity);
    }

   const handleDecrement = (event) => {
    setQuantity(quantity - 1)
    console.log(quantity);
    }



   const getReviews = () => {
     axios.get('https://cozy-django.herokuapp.com/api/reviews').then(
       (response) => setReviews(response.data),
       (error) => console.error(error))
       .catch((error) => console.error(error))
   }

   const handleCreate = (addReview) => {
    axios
    .post('https://cozy-django.herokuapp.com/api/reviews', addReview)
    .then((response) => {
      console.log(response)
      setReviews([...reviews, response.data])
    })
   }

   const handleUpdate = (editReview) => {
       console.log(editReview)
               axios
                 .put('https://cozy-django.herokuapp.com/api/reviews/' + editReview.id, editReview)
                 .then((response) => {
                   setReviews(
                     reviews.map((review) => {
                       return review.id !== editReview.id ? review : response.data
                     }
                   ))
           }   )
     }

   const handleDelete = (event, deletedReview) => {
   axios
     .delete('https://cozy-django.herokuapp.com/api/reviews/' + event.target.value)
     .then((response) => {
       setReviews(
         reviews.filter(x => x.id !== deletedReview.id)
       )
     })
   }


  useEffect(() => {
    getProduct()
  }, [])

  useEffect(() => {
    getReviews()
  }, [])




  return (
    <>
          <div className='container4'>
            <div className="title-and-img">
                <p className='contents-title'><b>{product.name}</b></p>
              <div className='image-container3'>
                  <img src={product.imgURL}/>
              </div>
              </div>
                    
      <div className='contents3'>
            <div className='contents-main3'>
      
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
               <button id="add-cart" onClick={()=> AddToCart(product)}> Add to Cart</button>
            </div>
          </div>
       </div>
                          <br/>
                         <br/>
                      <div className='reviews-container'>
                      <h4 className='trending-title'><span>Customer Reviews :</span></h4>
                       <br/>
                       <div className = "reviews">
                        {reviews.filter((review) => {
                          if (product.id === review.product) {
                            return reviews
                          }
                        }).
                          map((review) => {
                         return (
                          <div className = "review" key = {review.id}>
                          <h5>Posted by Anonymous {review.user}: </h5>
                          <h5><b>Rating:</b> {review.rating} /5</h5>
                          <h5><b>Comment:</b> {review.comment} </h5>
                          <br/>
                          <Edit handleUpdate={handleUpdate} review = {review}/>
                          <br/>
                          <button onClick={(event) => {handleDelete(event, review)}} value={review.id}>Delete Your Review</button>
                              <br/>
                                  <br/>
                          ------------------------------

                         </div>
                              )
                         })}
                        <br/>
                         <div><Add handleCreate = {handleCreate}/></div>
                      </div>
                      </div>
         
      </>
    )
 }

 export default ShowItem



// unused in ShowItem function above (before return) :

// const handleNewRating = (event) => {
//   setNewRating(event.target.value)
// }

//
// const handleEditRating = (event) => {
//      axios
//         .put(`https://furnituredjango.herokuapp.com/api/furnitures/${id}`,
//               {
//                 price: newRating
//               }
//             ).then(()=> {
//                   axios
//                     .get('https://furnituredjango.herokuapp.com/api/furnitures')
//                     .then((response) => {
//                       setProduct(response.data);
//                   })
//                 })
//             }

//
// const handleDeleteRating = () => {
//       axios
//           .delete(`https://furnituredjango.herokuapp.com/api/furnitures/${id}`,
//                 {
//                   rating: newRating
//                 }
//             ).then(()=> {
//                 axios
//                   .get('https://furnituredjango.herokuapp.com/api/furnitures')
//                   .then((response) => {
//                   setProduct(response.data);
//                 })
//               })
//             }


 // unused in return above:

 // <h4>Current Customer Rating of this Product:</h4>
 // <br/>
 // <p>{product.price}</p>
 // <br/>
 //  <label htmlFor="rating">Rating(0-5):</label>
 //  <input type ="number"
 //   name="rating"
 //   className= "editRating"
 //   defaultValue = {product.price}  onChange={handleNewRating} />
 // <button className = "editButton"
 //   onClick = { (rating) => {handleEditRating()} }>Update Rating
 // </button>
