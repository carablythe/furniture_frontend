import React from 'react';
import {useState, useEffect} from 'react'

const ShowItem = (props) => {
  const [product, setProduct] = useState([]);

  return (
     <div>
     TEST
       <img className="small" src={product.image} alt={product.name}> </img>
       <h3>{product.name}</h3>
       <div>${product.price}</div>
       <div>
        <button>Add to Cart</button>
       </div>
     </div>
 )
}

export default ShowItem
