import React from 'react'
import './Subtotal.css'
import Currencyformat from 'react-currency-format'
function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => {
          ;<>
            <p>
              Subtotoal (0 items):<strong>0</strong>
            </p>
            <small classNmae='subtotal_gift'>
              <input type='checkbox' />
              this order contains a gift
            </small>
          </>
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        dispayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  )
}

export default Subtotal
