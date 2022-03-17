import React, {useState, useEffect} from 'react';
// import ShowItem from './ShowItem'
import axios from 'axios'

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [showCouches, setShowCouches] = useState(false);
  const [showTables, setShowTables] = useState(false);
  const [showChairs, setShowChairs] = useState(false);
  const [showStands, setShowStands] = useState(false);
  const [showDesks, setShowDesks] = useState(false);

  const getProducts = () => {
     axios.get('https://furnituredjango.herokuapp.com/api/furnitures').then(
       (response) => setProducts(response.data),
       (error) => console.error(error))
       .catch((error) => console.error(error))
   }


  useEffect(() => {
  getProducts()
 }, [])


return (
  <>
  <h1>Browse our Collection</h1>
  <div>
    <div className ="categories" onClick = {() => setShowCouches(!showCouches)}><h3>Couches</h3></div>
    { showCouches ? (
      <ul>
        {products.filter((product, index) => {
          if (product.category.includes('Couch')) {
            return product;
          } else if (
            product.category.includes('couch')
          ){
            return product;
          }
        }).map((product, index) => {
          return(
            <li>
             <a href = './ShowItem'>{product.name}</a>
           </li>
         )})
         }
      </ul>
      ): null
    }
  </div>
  <div>
    <div className ="categories" onClick = {() => setShowTables(!showTables)}><h3>Tables</h3></div>
      { showTables ? (
        <ul>
          {products.filter((product, index) => {
            if (product.category.includes('Table')) {
              return product;
            } else if (
              product.category.includes('table')
            ){
              return product;
            }
          }).map((product, index) => {
            return(
              <li>
               <a href = './ShowItem'>{product.name}</a>
             </li>
           )})
           }
        </ul>
        ): null
      }
  </div>
  <div>
      <div className ="categories" onClick = {() => setShowChairs(!showChairs)}><h3>Chairs</h3></div>
        { showChairs ? (
          <ul>
            {products.filter((product, index) => {
              if (product.category.includes('Chair')) {
                return product;
              } else if (
                product.category.includes('chair')
              ){
                return product;
              }
            }).map((product, index) => {
              return(
                <li>
                 <a href = './ShowItem'>{product.name}</a>
               </li>
             )})
             }
          </ul>
          ): null
        }
   </div>
   <div>
      <div className ="categories" onClick = {() => setShowStands(!showStands)}><h3>Stands</h3></div>
          { showStands ? (
            <ul>
              {products.filter((product, index) => {
                if (product.category.includes('Stand')) {
                  return product;
                } else if (
                  product.category.includes('stand')
                ){
                  return product;
                }
              }).map((product, index) => {
                return(
                  <li>
                   <a href = './ShowItem'>{product.name}</a>
                 </li>
               )})
               }
            </ul>
            ): null
          }
    </div>
    <div>
        <div className ="categories" onClick = {() => setShowDesks(!showDesks)}><h3>Desks</h3></div>
            { showDesks ? (
              <ul>
                {products.filter((product, index) => {
                  if (product.category.includes('Desk')) {
                    return product;
                  } else if (
                    product.category.includes('desk')
                  ){
                    return product;
                  }
                }).map((product, index) => {
                  return(
                    <li>
                     <a href = './ShowItem'>{product.name}</a>
                   </li>
                 )})
                 }
              </ul>
              ): null
            }
    </div>
  </>
)}

export default Products
