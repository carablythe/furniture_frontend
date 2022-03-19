import React, {useState, useEffect} from 'react';
import axios from 'axios'
import AddToCart from './Cart'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {Check, Exclamation, Plus, Dash} from 'react-bootstrap-icons'
import Add from '../components/Add'
import EditRating from '../components/EditRating'

const ShowItem = (props) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0)
  // const [reviews, setReviews] = useState([])
  // const [review, setReview] = useState([])
  const [newRating, setNewRating] = useState('');

  const { id } = useParams()

  const getProduct = () => {
     axios.get(`https://furnituredjango.herokuapp.com/api/furnitures/${id}`).then(
       (response) => setProduct(response.data),
       (error) => console.error(error))
       .catch((error) => console.error(error))
   }

  const handleIncrement = (event) => {
    setQuantity(quantity + 1)
    console.log(quantity);
  }
  const handleDecrement = (event) => {
    setQuantity(quantity - 1)
    console.log(quantity);
  }

  const handleNewRating = (event) => {
    setNewRating(event.target.value)
  }


  const handleEditRating = () => {
       axios
          .put(`https://furnituredjango.herokuapp.com/api/furnitures/${id}`,
                {
                  rating: newRating
                }
              ).then(()=> {
                    axios
                      .get('https://furnituredjango.herokuapp.com/api/furnitures')
                      .then((response) => {
                        setProduct(response.data);
                    })
                  })
              }


  const handleDeleteRating = () => {
        axios
            .delete(`https://furnituredjango.herokuapp.com/api/furnitures/${id}`,
                  {
                    rating: newRating
                  }
              ).then(()=> {
                  axios
                    .get('https://furnituredjango.herokuapp.com/api/furnitures')
                    .then((response) => {
                    setProduct(response.data);
                  })
                })
              }



// const handleUpdate = (editReview) => {
      // console.log(editReview)
              // axios
              //   .put('http://localhost:8000/api/reviews/' + editReview.id, editReview)
              //   .then((response) => {
              //     setReviews(
              //       reviews.map((review) => {
              //         return review.id !== editReview.id ? review : response.data

   // const getReviews = () => {
   //   axios.get('http://localhost:8000/api/reviews').then(
   //     (response) => setReviews(response.data),
   //     (error) => console.error(error))
   //     .catch((error) => console.error(error))
   // }
   //
   // const handleCreate = (addReview) => {
   //  axios
   //  .post('http://localhost:8000/api/reviews/', addReview)
   //  .then((response) => {
   //    console.log(response)
   //   // getPeople()
   //    setReviews([...reviews, response.data])
   //  })
   // }
   //
   // const handleDelete = (event, deletedReview) => {
   // axios
   //   .delete('http://localhost:8000/api/reviews/' + event.target.value)
   //   .then((response) => {
   //     setReviews(
   //       review.filter(x => x.id !== deletedReview.id)
   //     )
   //   })
   // }
   //

   //       })
   //     )
   //   })
   // }

  useEffect(() => {
    getProduct()
  }, [])

  // useEffect(() => {
  //   getReviews()
  // }, [])


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
                            <button id="add-cart" onClick={()=> AddToCart(product)}> Add to Cart</button>
                      </div>
                      <br/>
                      <br/>
                      <div className = "rating">
                        <h4>Current Customer Rating of this Product:</h4>
                        <br/>
                        <p>{product.rating}</p>
                        <br/>
                         <label htmlFor="rating">Rating(0-5):</label>
                         <input type ="number"
                          name="rating"
                          className= "editRating"
                          min="0" max="5"
                          defaultValue = {product.rating}  onChange={handleNewRating} />
                        <button className = "editButton"
                          onClick = { (event) => {handleEditRating()} }>Update Rating
                        </button>
                         <br/>
                         <button onClick={(event) => {handleDeleteRating(event, product)}} value={product.rating}>Disable Rating</button>
                      </div>

          </div>
      </div>
    </>
  )
}

export default ShowItem
