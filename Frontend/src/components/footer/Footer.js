import React from 'react'
import './footer.css'
// import 

const Footer = () => {

const year=new Date().getFullYear()
console.log(year)

  return (
    <footer>
        <div className='footer_container'>
            <div className='footer_details_one'>
                <h3>Get to Know US</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon cares</p>
            </div>
            <div className='footer_details_one'>
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            
            </div>
            <div className='footer_details_one forres'>
            <h3>Make Money with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className='footer_details_one forres'>
            <h3>Make Money with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
        <div className='lastdetails'>
            <img src ='./amazon_PNG25.png' alt='amazonpic'/>
            <p>Conditions of Use & Sale  &nbsp;&nbsp;&nbsp; Privacy Notice&nbsp;&nbsp;&nbsp;       Interest-Based Ads  &nbsp;&nbsp;&nbsp;     @ 1996-{year}, Amazon.com,inc. or its Affiliates</p>
        </div>
    </footer>
  )
}

export default Footer