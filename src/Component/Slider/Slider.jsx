import React from 'react';
import slider_1 from '../../assets/Sliders/slider-1.jpg'
import slider_2 from '../../assets/Sliders/slider-2.jpg'
import slider_3 from '../../assets/Sliders/slider-3.jpg'
const Slider = () => {
    return (
        <div>
            <div className="carousel w-[1200px] h-[600px] md:mx-[150px] ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={slider_1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>

                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
                        Text Overlay for Slide 1
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider_2} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
                        Text Overlay for Slide 1
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider_3} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
                        Text Overlay for Slide 1
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;