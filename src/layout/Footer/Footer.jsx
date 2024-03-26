import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../../layout/Footer/Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer1'>
                <div className='help-box'>
                    <div className='maintexts-ftr'>Help</div>
                    <div className='help-box1'>
                        <a href="">Contact us</a>
                        <a href="">Account</a>
                        <a href="">Shipping</a>
                        <a href="">Returns</a>
                        <a href="">FAQ</a>
                    </div>
                </div>
                <div className='help-box'>
                    <div className='maintexts-ftr'>About</div>
                    <div className='help-box1'>
                        <a href="">About us</a>
                        <a href="">Press</a>
                        <a href="">Careers</a>
                        <a href="">Team</a>
                        <a href="">FAQ</a>
                    </div>
                </div>
                <div className='shop-box'>
                    <div className='maintexts-ftr'>Shop</div>
                    <div className='help-box1'>
                        <a href="">Store</a>
                        <a href="">Gift Cards</a>
                        <a href="">Student Discount</a>
                    </div>
                </div>
                <div className='join-box'>
                    <div className='maintexts-ftr'>Join our list and receive exclusives</div>
                    <div className='join-box1'><input className='input'
                     type="email" placeholder='Email addres' />
                        <button className='subscribe'>SUBSCRIBE</button></div>
                </div>
            </div>
            <div className='footer2'>
                <p className='p-ftr'>Copyright ©2024 All rights reserved | This template is made
                     with <FontAwesomeIcon className='heart' icon={faHeart} /> by
                      <a href="" className='color'> Colorlib</a></p>
            </div>
        </div>
    )
}

export default Footer