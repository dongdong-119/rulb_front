import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
  return (
    <>
      <li className='cards__items'>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img alt='Travle Image' className='cards__item__img' />
          </figure>
          
        </Link>
      </li>
    </>

  )
}

export default CardItem
