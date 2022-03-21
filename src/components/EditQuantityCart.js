// import React, { useState } from 'react'
//
// const EditQuantityCart = (props) => {
//   let orderQuantity = {...props.orderQuantity}
//   const [cartItems, setCartItems] = useState(['']);
//
//
//   const handleQuantityChange = (event) => {
//     setOrderQuantity({ ...orderQuantity, [event.target.name]: event.target.value })
//   }
//
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     props.editOrderQuantity()
//   }
//
//
//   return (
//     <>
//       <details>
//         <summary>Edit Your Review</summary>
//         <br/>
//         <br/>
//         <label htmlFor="orderQuantity"> testing </label>
//         <form className= "editQuantity"
//            onSubmit = {props.editOrderQuantity}>
//          <input type="number"
//          name="orderQuantity"
//          min="0" max="99"
//          placeholder = {cartItems.orderQuantity}
//          onChange = {handleQuantityChange} />
//          <input type="submit"/>
//         </form>
//       </details>
//     </>
//   )
// }
//
// export default EditQuantityCart
//
//
//
// // unused in return above:
// //
// //
// //         <form onSubmit={handleSubmit}>
// //           <label htmlFor="name">Customer Name: </label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={review.user}
// //             onChange={handleChange}
// //           />
