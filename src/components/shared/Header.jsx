import React, { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'


export default function Header() {
  const elm = useRef()
  const handelScroll =(e) =>{
     const scrollValue = window.scrollY
     if(scrollValue >= 600){
       elm.current.classList.add('nav-bg')
       document.querySelector('.scrollToTop').classList.add('visible')
     }else{
      elm.current.classList.remove('nav-bg')
       document.querySelector('.scrollToTop').classList.remove('visible')
     }

  }
  useEffect(() =>{
    window.addEventListener('scroll', handelScroll)
    return () =>{
      window.removeEventListener('scroll', handelScroll)
    }
  }, [])
  return (
              <div>
              <nav className="navbar navbar-expand-lg navbar-light sticky-top" ref={elm}>
          <div className="container ms">
          <a className="navbar-brand" href="#">
          <img src='img/main-logo.png' alt='main-logo' className='img-fluid' />
          </a>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " activeClass='active' aria-current="page" to="banner-part" spy={true} smooth={true}>HOME</Link>
            </li>
            <li className="nav-item">
             
              <Link className="nav-link " activeClass='active' aria-current="page" to="about-part" spy={true} smooth={true}>ABOUT</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link " activeClass='active' aria-current="page" to="video-part" spy={true} smooth={true}>VIDEO</Link>
            </li>
            <li className="nav-item">
           
              <Link className="nav-link " activeClass='active' aria-current="page" to="section-part" spy={true} smooth={true}>EXPERTISE</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link " activeClass='active' aria-current="page" to="team" spy={true} smooth={true}>TEAMS</Link>
            </li>
            <li className="nav-item">
             
              <Link className="nav-link " activeClass='active' aria-current="page" to="project" spy={true} smooth={true}>WORKS</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link " activeClass='active' aria-current="page" to="team-two" spy={true} smooth={true}>PEOPLE SAY</Link>
            </li>
            <li className="nav-item">
            
              <Link className="nav-link " activeClass='active' aria-current="page" to="contact" spy={true} smooth={true}>CONTACT</Link>
            </li>
          </ul>
          </div>
          </div>
          </nav>
          </div>
  )
}
