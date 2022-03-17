
import {useEffect, useState} from 'react'
import {Carousel} from 'react-bootstrap'
import firstSlide from '../images/slide1.jpg'
import secondSlide from '../images/slide2.jpg'
import thirdSlide from '../images/slide3.jpg'
import detailOne from '../images/black-couch.jpg'
import detailTwo from '../images/kitchen-table.jpg'
import detailThree from '../images/brown-leather-chair.jpg'
import { Truck, Flower1, Telephone, Globe } from 'react-bootstrap-icons'
import axios from 'axios'
const HomePage = () => {
//     const [furniture, setFurniture] = useState([])
// const getFurniture = () => {
//     axios.get('http://furnituredjango.herokuapp.com/api/furnitures')
//     .then((response)=>{
//         console.log(response.data)
//     })
// }


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
    <div className="shipping-section">
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
    </div>
    <div>

    </div>
        
</>

 )

}

export default HomePage