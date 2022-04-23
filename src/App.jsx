import React from 'react'
import Layout from './components/layout/Layout'
import About from './sections/About'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Promo from './sections/Promo'
import Services from './sections/Services'
import Teams from './sections/Teams'
import FeaturedTeams from './sections/FeaturedTeams'
import Contact from './sections/Contact'
import ScrollBottom from './components/ScrollBottom'
import GlobalStyle from './styles/GlobalStyle'


// import "../node_modules/slick-carousel/slick/slick.css"; 
// import "../node_modules/slick-carousel/slick/slick-theme.css";



export default function App() {
  return (
      <>
         <Layout>
            <GlobalStyle />
            <Home />
            <About />
            <Promo />
            <Services />
            <Teams />
            <Projects />
            <FeaturedTeams />
            <Contact />
            <ScrollBottom />

         </Layout>
      </>
  )
}
