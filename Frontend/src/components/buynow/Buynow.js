import React from 'react'
import './buynow.css'
import { Divider } from '@mui/material'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'

const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        <div className='left_buy'>
        <h1>Shopping Cart</h1>
        <p>Select all item</p>
        <span className='leftbuyprice'>Price</span>
        <Divider/>
          <div className='item_containert'>
            <img src='https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70' alt=''/>
            <div className='item_details'>
              <h3>Mobile Sense 500 </h3>
              <h3>Smart watch</h3>
              <h3 className='diffrentprice'>₹4049.00</h3>
              <p className='unusuall'>Usually dispatched in 8 days.</p>
              <p>Eligible for FREE Shipping</p>
              <img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png' alt='logo'/>
              <Option/>
            </div>
            <h3 className='item_price'>₹4049.00</h3>
          </div>
          <Divider/>
          <Subtotal/>
        </div>
      <Right/>
      </div>
      

    </div>
  )
}

export default Buynow