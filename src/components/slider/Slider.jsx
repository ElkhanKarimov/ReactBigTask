import React from 'react'
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slider1} class="d-block w-100" alt="..." />
                        <div className='slider-texts'>
                            <div className='texts'>
                                <div className='text1'>The New Way To Display</div>
                                <div className='text2'>Product by<span className='colorlib'> Colorlib</span></div>
                            </div>
                            <div className='button'><button className='explore'>EXPLORE NOW</button></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slider2} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider