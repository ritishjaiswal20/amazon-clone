import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
function Header() {
  return (
    <div className='header'>
      <img
        className='header_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png'
      />
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>hello guest</span>
          <span className='header_optionLinecTwo'>signin</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>retuens</span>
          <span className='header_optionLinecTwo'>orders</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLinecTwo'>prine</span>
        </div>

        <div className='header_optionBasket'>
          <ShoppingBasketIcon />
          <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
