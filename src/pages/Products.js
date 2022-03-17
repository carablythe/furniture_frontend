import React from 'react';
import {useState, useEffect} from 'react';
import ShowItem from './ShowItem'

const Products = (props) => {
  const [products, setProducts] = useState([]);

  return (
   <main className="block col-2">
     <h2> Browse our Collection </h2>
     <div className="row">
      {products.map((product) => (
       <ShowItem key ={product.id} product ={product}></ShowItem>
      ))}
     </div>
   </main>
 )
}

export default Products
