import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Fade from "react-reveal/Fade"


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

          <Fade bottom duration={2500}>
            <ul className='cards__items' style={{fontSize: '55px', textAlign: 'left', fontWeight: 'bolder', backgroundImage: 'linear-gradient(40deg, rgba(2,0,36,1) 0%, rgba(333,9,94,1) 39%, rgba(0,212,255,1) 100%)', backgroundClip: 'text', color: 'transparent', WebkitBackgroundClip: 'text'}}>
              <CardItem
                title={["소중한", <br />, "사람들을", <br />, "지워서", <br />, "지키는 법" ]}
                src='images/img-9.jpg'
                text='서비스 간단 설명 - 1'
              />
            </ul>
          </Fade>
          
          <Fade bottom duration={2500}>
            <ul className='cards__items' style={{fontSize: '55px', textAlign: 'left', fontWeight: 'bolder', backgroundImage: 'linear-gradient(660deg, rgba(2,0,36,1) 0%, rgba(43,73,80,1) 26%, rgba(67,94,120,1) 45%, rgba(51,70,128,1) 56%, rgba(79,108,154,1) 68%, rgba(0,212,255,1) 82%)', backgroundClip: 'text', color: 'transparent', WebkitBackgroundClip: 'text'}}>
              <CardItem
                title={["지워서", <br />, "{지키는}", <br />, "法"]}
                src='images/img-2.jpg'
                text='서비스 간단 설명 - 2'
                path='/services'
              />
            </ul>
          </Fade>
          
          <Fade bottom duration={2400}>
            <ul className='cards__items' style={{fontSize: '50px', textAlign: 'left', fontWeight: 'bolder', backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)', backgroundClip: 'text', color: 'transparent', WebkitBackgroundClip: 'text'}}>
              <CardItem
                title={["초상권 침해", <br />, "걱정을", <br />, "지울 수 있는", <br />, "방법까지"]}
                src='images/img-4.jpg'
                text='DESCRIPTION 2'
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