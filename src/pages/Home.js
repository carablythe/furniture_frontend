
import {Carousel} from 'react-bootstrap'
import firstSlide from '../images/slide1.jpg'
import secondSlide from '../images/slide2.jpg'
import thirdSlide from '../images/slide3.jpg'
import detailOne from '../images/black-couch.jpg'
import detailTwo from '../images/kitchen-table.jpg'
import detailThree from '../images/brown-leather-chair.jpg'
import { Truck, Flower1, Telephone, Globe } from 'react-bootstrap-icons'
const HomePage = () => {
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
            <p>Couch</p>
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
            <p>Fast Free Shipping</p>
        </div>
        <div className='info-container'>
            <Flower1 />
            <p>Unique Style for You</p>
        </div>
        <div className='info-container'>
            <Telephone />
            <p>Customer Support Line</p>
        </div>
        <div className='info-container'>
            <Globe />
            <p>Customer Online Support</p>
        </div>
    </div>
        
</>

 )

}

export default HomePage