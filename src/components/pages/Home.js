import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from './Cards';
import Footer from './Footer';
import Service from './Service';



function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Service />
      <Footer />
      
    </>
  )
}

export default Home;