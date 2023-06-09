import React from 'react';


function CardItem(props) {
  return (
    
    <>
      <li className='cards__item'>
        <div className='cards__item__info'>
          <h2 style={props.style}>{props.title}</h2>
          <h5 className='cards__item__text'>{props.text}</h5>
          <p>{props.addition_text}</p>
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