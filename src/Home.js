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
            image='https://m.media-amazon.com/images/I/51kdFjyPRAL._AC_SY200_.jpg'
            rating={5}
          />
          <Product
            title='lean stop'
            price={(20, 99)}
            image='https://m.media-amazon.com/images/I/711FEcbdOXL._AC_SY200_.jpg'
            rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
            title='Mouse'
            price={(20, 99)}
            image='https://m.media-amazon.com/images/I/61945ePC31L._AC_SY200_.jpg'
            rating={5}
          />
          <Product
            title='lean stop'
            price={(20, 99)}
            image='https://m.media-amazon.com/images/I/617MWJTfVJL._CR0,0,1363,769_SR342,193_.png'
            rating={5}
          />
          <Product
            title='lean stop'
            price={(20, 99)}
            image='https://m.media-amazon.com/images/I/81BfYDO0kSL._AC_UY327_FMwebp_QL65_.jpg'
            rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
            title='lean stop'
            price={(20, 99)}
            image='https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default home
