import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SectionIntro from '../styles/SectionIntro'
import { dataService } from './servicesData';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

 

const Wrapper = styled(SectionIntro)`
p{
  font-family: 'Playfair Display', serif;
  position: relative;
 
h2{
 
  font-weight: 700;
}

`

const parentVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      when: 'beforeChildren',
      staggerChildren: .5,
      duration:1,
    }
  }
}
const childVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      duration:1,
    }
  }
}

export default function Services() {
  const [item, setItem] = useState(dataService)
  const controls = useAnimation()
  const [ ref, inView] = useInView()
  useEffect(() =>{
    if(inView){
       controls.start('visible')
    }
  }, [controls, inView])
  return (

     
<Wrapper id="section-part" name='section-part'>
    <motion.div ref={ref} variants={parentVariants} initial='hidden' animate={controls} className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="service-head text-center">
            <h2>EXPERTISE</h2>
            <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
          </div>
        </div>
      </div>
    
      <div className="row">
        {item.map((service, index) =>{
          const {image, title, description} = service
          return(
            <motion.div variants={childVariants} className="col-lg-4" key={index}>
            <div className="service-text text-center">
              <img src={image} alt="icon" className="img-fluid" />
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </motion.div>
          )
        })}
       
      </div>
    </motion.div>
  </Wrapper>

     
   
  )
}
