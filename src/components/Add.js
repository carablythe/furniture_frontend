import React, { useState, useEffect} from 'react'

const Add = (props) => {
  let emptyReview = { name: '', rating:'', comment: '' }
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
      <h3>Please tell us what you think of this Product:</h3>
      <br />
      <form onSubmit = {handleSubmit}>
        <label htmlFor="product">Product Name: </label>
        <input type="text" name="product"
        value= {review.product} onChange={handleChange}/>
        <br />
        <label htmlFor="name">Your Name: </label>
        <input type="text" name="name"
         value={review.user} onChange={handleChange}/>
        <br />
        <label htmlFor="rating">Rating(0 through 5: 0 being the lowest, 5 being the highest): </label>
        <input type="number" name="rating" min="0" max="5"
        value={review.rating} onChange={handleChange}/>
        <br />
        <label htmlFor="comment">Review/Comment(s): </label>
        <textarea name="comment" rows="4" cols="50"
         value={review.comment} onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
