import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Fade from "react-reveal/Fade";


function Cards() {

  
  return (
    <div className='cards'>
      
      <Fade bottom>
      <h1>지워서 지키는 법</h1>
      </Fade>
      <Fade bottom>
      <br/>
      <h4>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</h4>
      <br/>
      <h4>ㅁㅁㅁㅁㅁㅁㅁ</h4>
      <h4>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</h4>
      <br/>
      <h4>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</h4>
      </Fade>
      
      
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <Fade bottom duration={2400}>
            <ul className='cards__items'>
              <CardItem
                title={["소중한", <br />, "사람들을", <br />, "지워서 지키는 ", <br />, <strong>법 </strong>]}
                src='images/img-9.jpg'
                text='서비스 간단 설명 - 1'
                path='/services'
              />
            </ul>
          </Fade>
          
          <Fade top duration={2400}>
            <ul className='cards__items'>
              <CardItem
                title={["지워서 지키는", <br />, "法"]}
                src='images/img-2.jpg'
                text='서비스 간단 설명 - 2'
                path='/services'
              />
            </ul>
          </Fade>
          
          <Fade bottom duration={2400}>
            <ul className='cards__items'>
              <CardItem
                src='images/img-4.jpg'
                text='DESCRIPTION 2'
                path='/services'
              />
            </ul>
          </Fade>

          <Fade bottom duration={2400}>
            <ul className='cards__items'>
              <CardItem
                src='images/img-5.jpg'
                text='DESCRIPTION 3'
                path='/services'
              />
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Cards;