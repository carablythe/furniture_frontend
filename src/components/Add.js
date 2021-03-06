import React, { useState, useEffect} from 'react'
import ShowItem from  '../pages/ShowItem'

const Add = (props) => {
  let emptyReview = { product: '', rating:'', comment: '' }
  const [review, setReview] = useState(emptyReview)

  const handleChange = (event) => {
    setReview({...review, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(review);
  }

  return (
    <>
      <h3>Please tell us what you think of this product!</h3>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="product">Please type Product ID  <u> {props.id} </u> : </label>
        <input type="number" name="product"
        min="0" max="99"
        placeholder ={props.id} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="rating">Rating(0 - 5 : 0 lowest, 5 highest): </label>
        <input type="number" name="rating" min="0" max="5"
        value={review.rating} onChange={handleChange}/>
        <br />
        <div className='comment-section'>
          <label htmlFor="comment">Comment: </label>
          <textarea name="comment" rows="4" cols="50"
         value={review.comment} onChange={handleChange}/>
           <input type="submit"/>
        </div>
      </form>
    </>
  )
}

export default Add


// <label htmlFor="user">User: </label>
// <input type="text" name="user" min="1"
// value= {review.user} onChange={handleChange}/>
// <br />
