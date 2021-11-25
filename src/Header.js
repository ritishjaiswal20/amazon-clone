import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
function Header() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png'
        />
      </Link>
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
        <Link to='/checkout'>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
