import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from './Cards';
import Footer from './Footer';
import Service from './Service';
import Test_Service from './Test_Service';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Test_Service />
      <Footer />
    </>
  )
}

export default Home;