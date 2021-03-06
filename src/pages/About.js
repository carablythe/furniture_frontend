import React, {useState, useEffect} from 'react';
import photo from '../images/living-room.jpg'
import { Linkedin, Github } from 'react-bootstrap-icons';
const About = () =>{
    useEffect(()=>{

    }, [])
    return(
        <>
        <h1 className='trending-title about-title'><span>About Cozy Furniture</span></h1>
        <div className='about-container'>
            <div className='info-container' id='about-info'>
            <p>Cozy Furniture was established in 2022 by three remarkable women. It is an ecommerce furniture
                platform that sells custom made furniture to separate from the rest. Designs are created with the
                people in mind. The goal is to create unique designs per customer recommendation. Everyday
                people are encouraged to share their ideas to help us create special designs that the average
                furniture does not provide.</p>
            <p>The goal is to create unique and custom pieces from the thoughts and ideas of people from
                 around the world. <b className='info-container'>Ever have any unique and creative ideas
                 to bring your home together?
                 <a className="" href="/#contact">Share here..</a> </b>
            </p>
            </div>
            <div className='about-image-container'>
                <img src={photo}/>
            </div>
        </div>
        <h1 className='trending-title creator-title'><span>Creators</span></h1>
        <div className='creators-container'>
            <div className='creator-container'>
                <div className="creator-image-conatiner">
                    <img src="https://i.imgur.com/Ug6Byng.jpg"/>
                </div>
                <div className='links'>
                    <a target="_blank" href='https://www.linkedin.com/in/victoria-qn-le/'><Linkedin /></a>
                     <a target="_blank" href='https://github.com/Victoria-Q-Le'><Github /></a>
                </div>
            </div>
            <div className='creator-container'>
                <div className="creator-image-conatiner">
                    <img src="https://i.imgur.com/0yxREnc.png"/>
                </div>
                <div className='links'>
                    <a target="_blank" href='https://www.linkedin.com/in/carablythephillips/'><Linkedin /></a>
                     <a target="_blank" href='https://github.com/carablythe'><Github /></a>
                </div>
            </div>
            <div className='creator-container'>
                <div className="creator-image-conatiner">
                    <img src="https://i.imgur.com/NOLOZYc.jpg"/>
                </div>
                <div className='links'>
                    <a target="_blank" href='https://www.linkedin.com/in/heather-mielke/'><Linkedin /></a>
                     <a target="_blank" href='https://github.com/Heather-Mielke'><Github /></a>
                </div>
            </div>
        </div>

        </>
    )
}

export default About
