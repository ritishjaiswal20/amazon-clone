import React from 'react'
import './Home.css'
import Product from './Product'
function home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home_image'
          src='https://m.media-amazon.com/images/I/61iWc33r+aL._SX1500_.jpg'
        ></img>
        <div className='home_row'>
          <Product
            title='lean stop'
            price={(20, 99)}
            image='https://m.media-amazon.com/images/I/81BfYDO0kSL._AC_UY327_FMwebp_QL65_.jpg'
            rating={5}
          />
          <Product />
        </div>
        <div className='home_row'>
          <Product />
          <Product />
          <Product />
        </div>
        <div className='home_row'>
          <Product />
        </div>
      </div>
    </div>
  )
}

export default home
