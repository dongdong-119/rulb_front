import React from 'react';
import '../App.js';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  
  function moveToAbount() {
    window.scrollTo({
      top: 1179,
      behavior: 'smooth'
    })
  }

  function moveToService() {
    window.scrollTo({
      top: 4370,
      behavior: 'smooth'
    })
  }

  return (
    <div className='hero-container'>
      <video src='/videos/main_2.mp4' autoPlay loop muted />    
      <h1>RULB</h1>
      
      {/* <p>how to protect my peopole with erasing their face.</p>
      <p>And how to observe the law with erasing</p> */}
      <p>딥러닝 기반 얼굴 인식 및 자동 블러처리 서비스</p>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={moveToAbount}
          >
            서비스 설명 보기
          </Button>

          <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={moveToService}
          >
            서비스 이용하기 <i className='far
            fa-solid fa-image' />
          </Button>
          
      </div>
      </div>
  )
}

export default HeroSection
