import React, {useState, useEffect} from 'react';
// import ShowItem from './ShowItem'
import axios from 'axios'
import couch from '../images/2black-couch-2.jpg'
import table from '../images/white-wood-table.jpg'
import chair from '../images/2white-fabric-chair.jpg'
import stand from '../images/wood-stand.jpg'
import desk from '../images/3white-gold-desk.jpg'
import dresser from '../images/6-drawer-dresser.jpg'
import bedFrame from '../images/3soft-pink-bedframe.jpg'
import headboard from '../images/3tuffed-cream-headboard.jpg'
import {Check, Exclamation} from 'react-bootstrap-icons'



const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [showCouches, setShowCouches] = useState(false);
  const [showTables, setShowTables] = useState(false);
  const [showChairs, setShowChairs] = useState(false);
  const [showStands, setShowStands] = useState(false);
  const [showDesks, setShowDesks] = useState(false);
  const [showDressers, setShowDressers] = useState(false);
  const [showBedFrames, setShowBedFrames] = useState(false);
  const [showHeadboards, setShowHeadboards] = useState(false);

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
  <h1 className='products-heading'>Browse our Collection</h1>
  <div className='main-container'>
    <div className ="categories" onClick = {() => setShowCouches(!showCouches)}><img src={couch}/><div className='overlay2'><h3>Couches</h3></div></div>
    <div className ="categories" onClick = {() => setShowTables(!showTables)}><img src={table}/><div className='overlay2'><h3>Tables</h3></div></div>
    <div className ="categories" onClick = {() => setShowChairs(!showChairs)}><img src={chair}/><div className='overlay2'><h3>Chairs</h3></div></div>
    <div className ="categories" onClick = {() => setShowStands(!showStands)}><img src={stand}/><div className='overlay2'><h3>Stands</h3></div></div>
    <div className ="categories" onClick = {() => setShowDesks(!showDesks)}><img src={desk}/><div className='overlay2'><h3>Desks</h3></div></div>
    <div className ="categories" onClick = {() => setShowDressers(!showDressers)}><img src={dresser}/><div className='overlay2'><h3>Dressers</h3></div></div>
    <div className ="categories" onClick = {() => setShowBedFrames(!showBedFrames)}><img src={bedFrame}/><div className='overlay2'><h3>Bed Frames</h3></div></div>
    <div className ="categories" onClick = {() => setShowHeadboards(!showHeadboards)}><img src={headboard}/><div className='overlay2'><h3>Headboards</h3></div></div>
  </div>
  <div className='category-contents'>
    { showCouches ? (
     <>
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
            <div className='container'>
              <a href = './ShowItem'>{product.name}</a>
                <div className='image-container'>
                  <img/>
                </div>
                <div className='contents'>
                    <p className='price'><b>${product.price}</b></p>
                    <p>Color: {product.color}</p>
                    <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                </div>
           </div>
         )})
         }
      </>
      ): null
    }
  </div>
  <div className='category-contents'>
      { showTables ? (
        <>
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
              <div className='container'>
              <a href = './ShowItem'>{product.name}</a>
                <div className='image-container'>
                  <img/>
                </div>
                <div className='contents'>
                    <p className='price'><b>${product.price}</b></p>
                    <p>Color: {product.color}</p>
                    <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                </div>
           </div>
           )})
           }
        </>
        ): null
      }
  </div>
  <div className='category-contents'>
      { showChairs ? (
        <>
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
                <div className='container'>
                  <a href = './ShowItem'>{product.name}</a>
                <div className='image-container'>
                  <img/>
                </div>
                <div className='contents'>
                    <p className='price'><b>${product.price}</b></p>
                    <p>Color: {product.color}</p>
                    <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                </div>
           </div>
             )})
            }
        </>
        ): null 
      }
  </div>
  <div className='category-contents'>
      { showStands ? (
          <>
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
                  <div className='container'>
                    <a href = './ShowItem'>{product.name}</a>
                  <div className='image-container'>
                   <img/>
                  </div>
                  <div className='contents'>
                    <p className='price'><b>${product.price}</b></p>
                    <p>Color: {product.color}</p>
                    <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                </div>
           </div>
               )})
               }
          </>
          ): null
      }
  </div>
  <div className='category-contents'>
      { showDesks ? (
          <>
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
                    <div className='container'>
                     <a href = './ShowItem'>{product.name}</a>
                    <div className='image-container'>
                      <img/>
                    </div>
                    <div className='contents'>
                      <p className='price'><b>${product.price}</b></p>
                      <p>Color: {product.color}</p>
                      <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                  </div>
             </div>
                )})
               }
          </>
         ): null
      }
  </div>
  <div className='category-contents'>
      { showDressers ? (
          <>
              {products.filter((product, index) => {
                 if (product.category.includes('Dresser')) {
                  return product;
                } else if (
                  product.category.includes('dresser')
                ){
                  return product;
                }
                }).map((product, index) => {
                  return(
                    <div className='container'>
                      <a href = './ShowItem'>{product.name}</a>
                    <div className='image-container'>
                      <img/>
                     </div>
                     <div className='contents'>
                        <p className='price'><b>${product.price}</b></p>
                        <p>Color: {product.color}</p>
                        <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                     </div>
                  </div>
                 )})
              }
          </>
         ): null
       }
 </div>
 <div className='category-contents'>
       { showBedFrames ? (
          <>
              {products.filter((product, index) => {
                if (product.category.includes('Bed Frame')) {
                  return product;
                } else if (
                  product.category.includes('bed frame')
                ){
                  return product;
                }
                }).map((product, index) => {
                  return(
                    <div className='container'>
                      <a href = './ShowItem'>{product.name}</a>
                    <div className='image-container'>
                      <img/>
                    </div>
                    <div className='contents'>
                      <p className='price'><b>${product.price}</b></p>
                      <p>Color: {product.color}</p>
                      <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                  </div>
             </div>
               )})
              }
          </>
         ): null
        }
  </div>
  <div className='category-contents'>
       { showHeadboards ? (
          <>
             {products.filter((product, index) => {
                if (product.category.includes('Headboard')) {
                   return product;
                } else if (
                  product.category.includes('headboard')
                ){
                  return product;
                }
                }).map((product, index) => {
                  return(
                    <div className='container'>
                      <a href = './ShowItem'>{product.name}</a>
                    <div className='image-container'>
                      <img/>
                    </div>
                    <div className='contents'>
                       <p className='price'><b>${product.price}</b></p>
                       <p>Color: {product.color}</p>
                       <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                    </div>
                 </div>
               )})
              }
         </>
        ): null
       }
  </div>
  <h3 className=' all'><span>All Products</span></h3>
  <div className='category-contents'>
    {products.map((product)=>{
      return(
        <div className='container'>
                      <a href = './ShowItem'>{product.name}</a>
                    <div className='image-container'>
                      <img/>
                    </div>
                    <div className='contents'>
                       <p className='price'><b>${product.price}</b></p>
                       <p>Color: {product.color}</p>
                       <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'} {product.availability ? <Check /> : <Exclamation/>}</p>
                    </div>
                 </div>
      )
    })}
  </div>
</>
)}

export default Products
