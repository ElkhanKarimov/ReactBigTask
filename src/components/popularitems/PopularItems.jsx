import React from 'react'
import './PopularItems.css'
import Don from '../../images/Don.jpg'
import Sleeve from '../../images/Sleeve.jpg'
import Watch from '../../images/Watch.jpg'
import Shoe2 from '../../images/Shoe2.jpg'
import Kid from '../../images/Kid.jpg'
import Shoe1 from '../../images/Shoe1.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularItems = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="slider-container">
                <div className='popular'>Popular Items</div>
                <Slider {...settings}>
                    <div className='first-product'>
                        <div className='new'>NEW</div>
                        <div><img className='product-img' src={Don} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Kiko Linen Slip Dress, Brown</div>
                            <div><p className='ptext'>£69.00</p></div>
                        </div>
                    </div>
                    <div className='first-product'>
                        <div className='sale'>SALE</div>
                        <div><img className='product-img' src={Sleeve} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Sleeve Dress, White</div>
                            <div><p className='ptext'><span className='spantext'>£99.00</span> — £69.00</p></div>
                        </div>
                    </div>
                    <div>
                        <div><img className='product-img' src={Watch} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Hodina Watch</div>
                            <div><p className='ptext'>£29.00</p></div>
                        </div>
                    </div>
                    <div>
                        <div><img className='product-img' src={Shoe2} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Triangle Low White-Black</div>
                            <div><p className='ptext'>£29.00</p></div>
                        </div>
                    </div>
                    <div className='first-product'>
                        <div className='sale'>SALE</div>
                        <div><img className='product-img' src={Kid} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Kid Dress, White</div>
                            <div><p className='ptext'><span className='spantext'>£99.00</span> — £69.00</p></div>
                        </div>
                    </div>
                    <div className='first-product'>
                        <div className='sale'>SALE</div>
                        <div><img className='product-img' src={Shoe1} alt="" /></div>
                        <div className='product-texts'>
                            <div className='maintext'>Lady Shoes, Brown</div>
                            <div><p className='ptext'><span className='spantext'>£99.00</span> — £69.00</p></div>
                        </div>
                    </div>

                </Slider>
            </div>

        </div>
    )
}


export default PopularItems