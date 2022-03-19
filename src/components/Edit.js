import React, { useState } from 'react'

const Edit = (props) => {
  let emptyReview = {...props.review}
  const [review, setReview] = useState(emptyReview)

  const handleChange = (event) => {
    setReview({ ...review, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(review)
  }

  return (
    <>
      <details>
        <summary>Edit Your Review</summary>
        <br />

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">User Name: </label>
          <input
            type="text"
            name="name"
            value={review.user}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="rating">Rating(0-5):</label>
          <input
            type="number"
            name="rating"
            value={review.rating}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="comment">Review/Comment(s): </label>
          <textarea
            name="comment"
            rows="4"
            cols="50"
            value={review.comment}
            onChange={handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
