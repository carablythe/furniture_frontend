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
      <form onSubmit = {handleSubmit}>
        <label htmlFor="name">Your Name: </label>
        <input type="text" name="name"
         value={review.name} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="rating">Rating(0 through 5: 0 being the lowest, 5 being the highest): </label>
        <input type="number" name="rating"
        value={review.rating} onChange={handleChange}/>
        <br />
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
