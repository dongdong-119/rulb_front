import React from 'react'
import '../App.js';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />    
      <h1>지워서 지키는 법</h1>
      <p>how to protect my peopole with erasing their face.</p>
      <p>And how to observe the law with erasing</p>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            WATCH TRAILER <i className='far
            fa-play-circle' />
          </Button>
      </div>
      </div>
  )
}

export default HeroSection
