import React from 'react'
import './Product.css'
function Product(title, image, price, rating) {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .map(rating)
            .fill()
            .map((_, i) => (
              <p>* </p>
            ))}
        </div>
      </div>
      <img src='https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/kitchenbaupccc/xcm_banners_bau_pc_cc_379x304_379x304_in-en._SY304_CB643325611_.jpg'></img>
      <button>Add to basket</button>
    </div>
  )
}

export default Product
