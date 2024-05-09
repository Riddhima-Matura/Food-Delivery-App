import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { assets } from '../../assets/assets'


function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             {/* <img src={assets.logo} alt=''/> */}
             <h1><i>Olive</i> Green</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus veritatis possimus eius. Similique ratione recusandae velit fugit rerum quas fugiat assumenda quibusdam impedit quasi, vero minima ducimus! Tenetur, illum?</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
             </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                  <Link to='/'><li>Home</li></Link>  
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-451-278-9032</li>
                    <li>Contact@Olive Green.com</li>
                </ul>

            </div>
           
        </div>
        <hr/>
            <p className='footer-copyright'>Copyright 2024 @ Olive Green.com - All Right Reserved</p>
            
      
    </div>
  )
}

export default Footer
