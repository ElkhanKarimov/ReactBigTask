

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { useSelector } from 'react-redux';

const Sidebar = ({ isOpen, toggleSidebar }) => { 
    const basket=useSelector(state=>state.basket.items)

    {basket ? basket.map((item)=>(
        <div key={item.id} className='product-div'>
           <div>
           <img src={item.image} alt="" className='product-image1'/>
           {/* <MdDelete className='delete-icon' onClick={()=>removeProduct(item.id)}></MdDelete> */}
           </div>
           <div>
           <p>{item.name}</p>
           <p>Price : {item.count} x {item.price} = {item.count*item.price}</p>
           </div>
        </div>  
      )):(<p>The basket is empty</p>)}
    return (
        <div>
            <div id="sideBar" className={`sidebar1 ${isOpen ? true : false}`}>
                <div className="x-images">
                    <div className="your-x">
                        <div>
                            <h3 className="your-cart">YOUR CART</h3>
                        </div>  
                        <div id='closeBar' onClick={toggleSidebar}><FontAwesomeIcon icon={faXmark} /></div>
                    </div>
                    <div className="cart-images">
                    </div>
                </div>
                <div className="total-button">
                    <div>
                        <p className="total-btn">Total: $0.00</p>
                    </div>
                    <div className="cart-buttons">
                        <button className="view-cart">VIEW CART</button>
                        <button className="view-cart">CHECK OUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
