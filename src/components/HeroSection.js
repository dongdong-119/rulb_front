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
            서비스 설명 보기
          </Button>
          <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            서비스 이용하기 <i className='far
            fa-solid fa-image' />
          </Button>
      </div>
      </div>
  )
}

export default HeroSection
