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
import {Check, Exclamation, CartCheck, Search} from 'react-bootstrap-icons'
import AddToCart from "./Cart"
import ShowItem from "./ShowItem"
import {Link} from 'react-router-dom'

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState("")
  const [showCouches, setShowCouches] = useState(false);
  const [showTables, setShowTables] = useState(false);
  const [showChairs, setShowChairs] = useState(false);
  const [showStands, setShowStands] = useState(false);
  const [showDesks, setShowDesks] = useState(false);
  const [showDressers, setShowDressers] = useState(false);
  const [showBedFrames, setShowBedFrames] = useState(false);
  const [showHeadboards, setShowHeadboards] = useState(false);

  const revealCouches = () => {
    setShowCouches(true); setShowTables(false); setShowChairs(false);
    setShowStands(false); setShowDesks(false); setShowDressers(false);
    setShowBedFrames(false); setShowHeadboards(false);
  }

  const revealTables = () => {
    setShowCouches(false); setShowTables(true); setShowChairs(false);
    setShowStands(false); setShowDesks(false); setShowDressers(false);
    setShowBedFrames(false); setShowHeadboards(false);
  }

  const revealChairs = () => {
    setShowCouches(false); setShowTables(false); setShowChairs(true);
    setShowStands(false); setShowDesks(false); setShowDressers(false);
    setShowBedFrames(false); setShowHeadboards(false);
  }

  const revealStands = () => {
    setShowCouches(false); setShowTables(false); setShowChairs(false);
    setShowStands(true); setShowDesks(false); setShowDressers(false);
    setShowBedFrames(false); setShowHeadboards(false);
  }

  const revealDesks = () => {
    setShowCouches(false); setShowTables(false); setShowChairs(false);
    setShowStands(false); setShowDesks(true); setShowDressers(false);
    setShowBedFrames(false); setShowHeadboards(false);
  }

  const revealDressers = () => {
    setShowCouches(false); setShowTables(false); setShowChairs(false);
    setShowStands(false); setShowDesks(false); setShowDressers(true);
    setShowBedFrames(false); setShowHeadboards(false);
  }

  const revealBedFrames = () => {
    setShowCouches(false); setShowTables(false); setShowChairs(false);
    setShowStands(false); setShowDesks(false); setShowDressers(false);
    setShowBedFrames(true); setShowHeadboards(false);
  }

  const revealHeadboards = () => {
    setShowCouches(false); setShowTables(false); setShowChairs(false);
    setShowStands(false); setShowDesks(false); setShowDressers(false);
    setShowBedFrames(false); setShowHeadboards(true);
  }


  const getProducts = () => {
     axios.get('https://cozy-django.herokuapp.com/api/furnitures').then(
       (response) => setProducts(response.data),
       (error) => console.error(error))
       .catch((error) => console.error(error))
   }

   const AddToCart = (product) => {
    axios({
      method: 'post',
      url: '/api/carts',
      baseURL: 'https://cozy-django.herokuapp.com',
      data: {
        id: product.id,
        qty: 1,
        price: product.price,
        img: product.imgURL,
        user: 1,
        product: 1
      }
    })
    console.log(AddToCart())
   }

  useEffect(() => {
  getProducts()
 }, [])


return (
  <>
  <h1 className='products-heading'>Browse our Collection</h1>
  <div className='main-container'>
    <div className ="categories" onClick = {() => revealCouches()}><img src={couch}/><div className='overlay2'><h3>Couches</h3></div></div>
    <div className ="categories" onClick = {() => revealTables()}><img src={table}/><div className='overlay2'><h3>Tables</h3></div></div>
    <div className ="categories" onClick = {() => revealChairs()}><img src={chair}/><div className='overlay2'><h3>Chairs</h3></div></div>
    <div className ="categories" onClick = {() => revealStands()}><img src={stand}/><div className='overlay2'><h3>Stands</h3></div></div>
    <div className ="categories" onClick = {() => revealDesks()}><img src={desk}/><div className='overlay2'><h3>Desks</h3></div></div>
    <div className ="categories" onClick = {() => revealDressers()}><img src={dresser}/><div className='overlay2'><h3>Dressers</h3></div></div>
    <div className ="categories" onClick = {() => revealBedFrames()}><img src={bedFrame}/><div className='overlay2'><h3>Bed Frames</h3></div></div>
    <div className ="categories" onClick = {() => revealHeadboards()}><img src={headboard}/><div className='overlay2'><h3>Headboards</h3></div></div>
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
            <div className='container' key={product.id}>
            <Link to={`/${product.id}/`}>
              <div className='image-container'>
                <img src={product.imgURL}/>
              </div>
            </Link>
              <div className='contents'>
                <div className='contents-main'>
                  <Link to={`/${product.id}/`}>
                      <p className='contents-title'>{product.name}</p>
                  </Link>
                      <p>Color: {product.color}</p>
                      <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                      {product.availability ? <Check /> : <Exclamation/>}
                      </p>
                  </div>
                  <div className='contents-price'>
                      <p className='price'><b>${product.price}</b></p>

                      <button onClick={()=> AddToCart(product)}>
                    <CartCheck/></button>

                </div>
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
              <div className='container' key={product.id}>
                  <Link to={`/${product.id}/`}>
                    <div className='image-container'>
                      <img src={product.imgURL}/>
                    </div>
                  </Link>
                    <div className='contents'>
                      <div className='contents-main'>
                        <Link to={`/${product.id}/`}>
                            <p className='contents-title'>{product.name}</p>
                        </Link>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                        </div>
                        <div className='contents-price'>
                            <p className='price'><b>${product.price}</b></p>
                            <button onClick={()=> AddToCart(product)}>
                          <CartCheck/></button>

                      </div>
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
                <div className='container' key={product.id}>
                  <Link to={`/${product.id}/`}>
                    <div className='image-container'>
                      <img src={product.imgURL}/>
                    </div>
                  </Link>
                    <div className='contents'>
                      <div className='contents-main'>
                        <Link to={`/${product.id}/`}>
                            <p className='contents-title'>{product.name}</p>
                        </Link>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                        </div>
                        <div className='contents-price'>
                            <p className='price'><b>${product.price}</b></p>

                            <button onClick={()=> AddToCart(product)}>
                          <CartCheck/></button>

                      </div>
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
                  <div className='container' key={product.id}>
                  <Link to={`/${product.id}/`}>
                    <div className='image-container'>
                      <img src={product.imgURL}/>
                    </div>
                  </Link>
                    <div className='contents'>
                      <div className='contents-main'>
                        <Link to={`/${product.id}/`}>
                            <p className='contents-title'>{product.name}</p>
                        </Link>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                        </div>
                        <div className='contents-price'>
                            <p className='price'><b>${product.price}</b></p>

                            <button onClick={()=> AddToCart(product)}>
                          <CartCheck/></button>

                      </div>
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
                    <div className='container' key={product.id}>
                  <Link to={`/${product.id}/`}>
                    <div className='image-container'>
                      <img src={product.imgURL}/>
                    </div>
                  </Link>
                    <div className='contents'>
                      <div className='contents-main'>
                        <Link to={`/${product.id}/`}>
                            <p className='contents-title'>{product.name}</p>
                        </Link>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                        </div>
                        <div className='contents-price'>
                            <p className='price'><b>${product.price}</b></p>

                            <button onClick={()=> AddToCart(product)}>
                          <CartCheck/></button>

                      </div>
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
                    <div className='container' key={product.id}>
                  <Link to={`/${product.id}/`}>
                    <div className='image-container'>
                      <img src={product.imgURL}/>
                    </div>
                  </Link>
                    <div className='contents'>
                      <div className='contents-main'>
                        <Link to={`/${product.id}/`}>
                            <p className='contents-title'>{product.name}</p>
                        </Link>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                        </div>
                        <div className='contents-price'>
                            <p className='price'><b>${product.price}</b></p>

                            <button onClick={()=> AddToCart(product)}>
                          <CartCheck/></button>

                      </div>
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
                    <div className='container' key={product.id}>
                  <Link to={`/${product.id}/`}>
                    <div className='image-container'>
                      <img src={product.imgURL}/>
                    </div>
                  </Link>
                    <div className='contents'>
                      <div className='contents-main'>
                        <Link to={`/${product.id}/`}>
                            <p className='contents-title'>{product.name}</p>
                        </Link>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                        </div>
                        <div className='contents-price'>
                            <p className='price'><b>${product.price}</b></p>

                            <button onClick={()=> AddToCart(product)}>
                          <CartCheck/></button>

                      </div>
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
                    <div className='container' key={product.id}>
                  <Link to={`/${product.id}/`}>
                    <div className='image-container'>
                      <img src={product.imgURL}/>
                    </div>
                  </Link>
                    <div className='contents'>
                      <div className='contents-main'>
                        <Link to={`/${product.id}/`}>
                            <p className='contents-title'>{product.name}</p>
                        </Link>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                        </div>
                        <div className='contents-price'>
                            <p className='price'><b>${product.price}</b></p>

                            <button onClick={()=> AddToCart(product)}>
                          <CartCheck/></button>

                      </div>
                  </div>
              </div>
               )})
              }
         </>
        ): null
       }
  </div>
  <h3 className=' all'><span>All Products</span></h3>
      <div className='search-container'>
        <h5><Search/></h5>
        <input placeholder="Search" className="searchBar"
        onChange={event => setQuery(event.target.value)} />
      </div>
  <div className='category-contents'>
    {products.filter((product) => {
            if (product.name.includes(query)) {
              return product;
            } else if (
              product.name.toLowerCase().includes(query.toLowerCase()))
            {
              return product;
            }
            else if (
              product.color.includes(query))
            {
              return product;
            }
            else if (
              product.color.toLowerCase().includes(query.toLowerCase()))
            {
              return product;
            }
          })
          .map((product)=>{
      return(
        <div className='container' key={product.id}>
                  <Link to={`/${product.id}/`}>
                    <div className='image-container'>
                      <img src={product.imgURL}/>
                    </div>
                  </Link>
                    <div className='contents'>
                      <div className='contents-main'>
                        <Link to={`/${product.id}/`}>
                            <p className='contents-title'>{product.name}</p>
                        </Link>
                            <p>Color: {product.color}</p>
                            <p className='stock'> {product.availability ? 'In Stock'  : 'Out of Stock'}
                            {product.availability ? <Check /> : <Exclamation/>}
                            </p>
                        </div>
                        <div className='contents-price'>
                            <p className='price'><b>${product.price}</b></p>

                            <button onClick={()=> AddToCart(product)}>
                          <CartCheck/></button>

                      </div>
                  </div>
              </div>
            )
      })}
  </div>

</>
)}

export default Products
