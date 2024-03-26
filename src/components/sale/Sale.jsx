import React from 'react'
import './Sale.css'

const Sale = () => {
    return (
        <div className='sale-page'>
            <div className='sale-container'>
                <div className='sale-box'>
                    <div><p className='limited'>Limited Offers 20% OFF</p></div>
                    <div className='weekdeal'>
                    <div className='week'>Week Deal</div>
                    <div>Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit.
                         Omnis consequatur optio exercitationem
                          quo hic atque ullam, quaerat 
                          consectetur eligendi temporibus.</div>
                    <div><button className='shop-now'>SHOP NOW</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale