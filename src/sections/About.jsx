import React from 'react'
import styled from 'styled-components';
import SectionIntro from '../styles/SectionIntro';
import Zoom from 'react-reveal/Zoom';
import { motion } from "framer-motion"



const Wrapper = styled(SectionIntro)`
a{
  border: 1px solid #00e0d0;
  color: #00e0d0;
  padding: 16px 30px;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
  &:hover {
    color: #000;
    background: #00e0d0;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5) inset, 0px 0px 1px transparent;
  }
 
}

  @media screen and (max-width: 992px) { 
   
    .navbar-light .navbar-nav .nav-link {
        
        text-align: center;
    }
    .navbar-nav {
        
        background: #f0eaed61;
    }
    .navbar-light .navbar-toggler {
      
        background: #ffffff;
    }
    .banner-text {
        
        padding-top: 130px;
        padding-bottom: 150px;
    }
    .about-text h2 {
        
        text-align: center;
        padding-top: 20px;
    }
    .about-text p {
       
        padding-bottom: 20px;
    }
    .about-text a {
        
        width: 100%;
        text-align: center;
    }
    #video-part {
       
        padding: 100px 0;
    }
    .service-text {
        padding-top: 30px;
    }
    .team-bottom-text a {
       
        width: 100%;
        display: block;
    }
    .project-btn a {
       
        width: 100%;
    }
    .team-arrow-left {
        top: 80% !important;
        left: 20% !important;
    }
    .team-arrow-right {
        top: 80% !important;
        right: 21% !important;
    }
    .contact-left a {
        
        width: 100%;
        text-align: center;
    }
    .contact-left h3, .contact-right h3 {
        text-align: center;
        padding-top: 30px;
    }
    .footer-top-text {
        
        text-align: center;
    }
    .footer-top-left img {
        
        margin-left: -193px;
    }
    .footer-top-left p {
       
        margin-left: -100px;
    }
    .footer-top-middle h4, .footer-top-right h4 {
        padding-top: 29px;
    }
    .footer-top-right{
        margin: 0px -85px 0px 200px;
    }
    .footer-top-middle p {
       
        padding: 0px 20px 0px 0px;
    }
    .footer-top-right ul {
        padding: 0;
        margin: 10px -89px 0px -40px;
       
    }
    .center {
        text-align: center;
        display: inline-block;
       
    }
    .center-btn {
        
        margin: -35px -55px 0px 213px;
    }
 }


`

export default function About() {
  return (
    <Wrapper id="about-part" name='about-part'>
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="about-img text-center">
            <Zoom  duration={3000}  left>
            <img
              src="./img/big-logo.png"
              alt="image not found"
              className="img-fluid"
            />

            </Zoom>
          </div>
        </div>
        <div className="col-lg-7">
          <motion.div className="about-text"
            initial={{
              x:-100,
              opacity:0
            }}
             animate={{
               x:0,
               opacity:1,
             }}
             transition={{
               duration:2,
               easings: 'easeInOut'

             }}
          
          >
            <h2>OUR STORY</h2>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              vel velit auctor aliquet. Aenean sollicitudin, lorem quis
              bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus
            </p>
            <p>
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
              auctor a ornare odio. Sed non mauris vitae erat consequat auctor
              eu in elit. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
            <a href="#">LEARN MORE</a>
          </motion.div>
        </div>
      </div>
    </div>
  </Wrapper>
  )
}
