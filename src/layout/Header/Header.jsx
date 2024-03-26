
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../../layout/Header/Header.css';
import { Link } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../components/sidebar/Sidebar';
import { useSelector } from 'react-redux';

const Header = () => {
    const basket = useSelector(state => state.basket.items)

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <header>
                <nav className='elxan'>
                    <div className='main-part'>
                        <div>
                            <a className="navbar-brand">P R O D U C T .</a>
                        </div>
                        <div className="menuLinks">
                            <ul className="menuLinks">
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/'>NEW</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/men'>MEN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/women' >WOMEN</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/accessories'>ACCESSORIES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/jewelry'>JEWELRY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/contact'>CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='navbar-icons'>
                            <span className="navbar-text">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <FontAwesomeIcon icon={faUser} />
                                <FontAwesomeIcon icon={faCartShopping} onClick={toggleSidebar} />
                                <span className='count-box'>0</span>
                            </span>
                        </div>
                    </div>
                </nav>
            </header>
            <div>
                <div id="sideBar" className={sidebarOpen ? "sidebar1 open" : "sidebar1"}>
                    <div className="x-images">
                        <div className="your-x">
                            <div>
                                <h3 className="your-cart">YOUR CART</h3>
                            </div>
                            <div id='closeBar' onClick={toggleSidebar}><FontAwesomeIcon icon={faXmark} /></div>
                        </div>
                        <div className="cart-images">
                            {basket ? basket.map((item) => (
                                <div key={item.id} className='product-div'>
                                    <div>
                                        <img src={item.image} alt="" className='product-image1' />
                                        {/* <MdDelete className='delete-icon' onClick={()=>removeProduct(item.id)}></MdDelete> */}
                                    </div>
                                    <div>
                                        <p className='p-info'>{item.info}</p>
                                        <p>Price : {item.price}</p>
                                    </div>
                                </div>
                            )) : (<p>The basket is empty</p>)}
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
        </div>
    )
}

export default Header;
