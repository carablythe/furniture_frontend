
import {useEffect, useState} from 'react'
import {Carousel} from 'react-bootstrap'
import firstSlide from '../images/slide1.jpg'
import secondSlide from '../images/slide2.jpg'
import thirdSlide from '../images/slide3.jpg'
import detailOne from '../images/black-couch.jpg'
import detailTwo from '../images/kitchen-table.jpg'
import detailThree from '../images/brown-leather-chair.jpg'
import emailSec from '../images/extra3.jpg'
import contact from '../images/contact1.jpg'
import { Truck, Flower1, Telephone, Globe, Facebook, Linkedin, Twitter, Instagram, Check, Exclamation, CartCheck} from 'react-bootstrap-icons'
import axios from 'axios'
import {Link} from 'react-router-dom'

const HomePage = () => {
    const [trendingFurniture, setTrendingFurniture] = useState([])

const getTrendingFurniture = () => {
    axios.get('https://cozy-django.herokuapp.com/api/furnitures')
    .then((response)=>{
        setTrendingFurniture(response.data)
    })
}

const AddToCart = (product) => {
    axios({
      method: 'post',
      url: '/api/carts',
      baseURL: 'https://cozy-django.herokuapp.com',
      data: {
        user: null,
        img: null,
        imgURL: product.imgURL,
        price: product.price,
        orderQuantity: 1,
        quantity: product.quantity,
        availability: product.availability,
        color: product.color,
        category: product.category,
        name: product.name
      }
    })
    console.log(AddToCart())
   }


useEffect(()=>{
    getTrendingFurniture()
}, [])

    return(
 <>
    <Carousel fade nextLabel={null} prevLabel={null} indicatorLabels={[1,2,3]}  >
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={firstSlide}
             alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={secondSlide}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={thirdSlide}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
    <div className='detail-container'>
        <div className='detail-image-container'>
            <img src={detailOne}/>
            <div className='overlay'>
            <p>Couches</p>
            </div>
        </div>
        <div className='detail-image-container'>
            <img src={detailTwo}/>
            <div className='overlay'>
            <p>Tables</p>
            </div>
        </div>
        <div className='detail-image-container'>
            <img src={detailThree}/>
            <div className='overlay'>
            <p>Chairs</p>
            </div>
        </div>
    </div>
    <section className="shipping-section">
        <div className='info-container'>
            <Truck />
            <h4>Fast Free Shipping</h4>
            <p>Get your product in as soon as 2 days!</p>
        </div>
        <div className='info-container'>
            <Flower1 />
            <h4>Unique Style for You</h4>
            <p>Custom designs to give you home a unique look.</p>
        </div>
        <div className='info-container'>
            <Telephone />
            <h4>Customer Support Line</h4>
            <p>24/7 Customer Hotline for all services.</p>
        </div>
        <div className='info-container last'>
            <Globe />
            <h4>Customer Online Support</h4>
            <p>24/7 Online Customer Chat with real people!</p>
        </div>
    </section>
        <h2 className='trending-title'><span>Trending Products</span></h2>
    <section className='main-container'>
        <div className='trending-container'>
        {trendingFurniture.slice(25,31).map((product)=>{
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
    </section>
    <section className='discount-section'>
        <img src={emailSec}/>
        <div className='deal-section'>
            <p className='deal-title'>Get <span>$50</span> Discount On Your First Order!</p>
            <p className='signup-info'>Sign up for your email offer.</p>
            <div className='email-sign'>
                <input type='text' placeholder='Email Address'/>
                <button>Send</button>
            </div>
        </div>
    </section>
    <section id='contact' className='contact-section'>
        <div>
            <img src={contact}/>
        </div>
        <div className='form-container'>
            <form className='contact-form'>
                <h4>Send Us an Email:</h4>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email Address'/>
                <input type='text' placeholder='Subject'/>
                <textarea placeholder='Message..'></textarea>
                <button className='submit'>Send</button>
            </form>
        </div>
    </section>
    <footer>
        <div className='icons'>
            <p><Facebook/></p>
            <p><Twitter/></p>
            <p><Linkedin/></p>
            <p><Instagram/></p>
        </div>
        <div className='sec'>
            <p>Privacy Policy</p>
            <p>Terms/Conditions</p>
            <p>Information</p>
            <p>More Info</p>
        </div>
        <div className='sec'>
            <p>Account</p>
            <p>More Info</p>
            <p>Shipping</p>
            <p>Security</p>
        </div>
    </footer>

</>

 )

}

export default HomePage
