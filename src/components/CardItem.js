import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    
    <>
      <li className='cards__item'>
        <div className='cards__item__info'>
          <h1>{props.title}</h1>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
        <figure className='cards__item__pic-wrap'>
          <img
            className='cards__item__img'
            alt='Travel Image'
            src={props.src}
          />
        </figure>
      </li>
    </>
  );
}

export default CardItem;