import React from 'react'
import './Checkout.css'
function checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg'
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
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  )
}

export default checkout
