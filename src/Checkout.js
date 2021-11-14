import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/banner_PC_1FINAL.jpg'
        />
        <div>
          <h2 className='checkout_title'>Your shopping brand </h2>
          {/*basketicon*/}
          {/*basketicon*/}
          {/*basketicon*/}
          {/*basketicon*/}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default checkout
