import React from 'react';
import slider_1 from '../../assets/Sliders/slider-1.jpg'
import slider_2 from '../../assets/Sliders/slider-2.jpg'
import slider_3 from '../../assets/Sliders/slider-3.jpg'
import guitar_1 from '../../assets/Sliders/guitar-1.jpg'
import guitar_2 from '../../assets/Sliders/guitar-2.jpg'
import guitar_3 from '../../assets/Sliders/guitar-3.jpg'
import { motion } from "framer-motion"
const Slider = () => {
    return (
        <motion.div initial={{opacity:0 ,scale:0}}
        whileInView={{opacity:1 ,scale:1}}
        transition={{duration:0.2}}
        viewport={{once:true}}
        >
            <div className="carousel w-full h-[700px] md:mx-auto">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={slider_3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>

                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold w-full px-8 ">
                        <div className='flex justify-between items-center gap-10'>
                            <div className='px-8 w-1/2'>
                                <h1 className='text-6xl mb-10'><span className='text-yellow-400'>Unlock Your Musical Talent with</span> Hermonia</h1>
                                <p className='text-[15px] mb-10'>Embark on a harmonious journey of musical discovery at our esteemed music school. Unleash your creativity, refine your skills, and ignite your passion for music under the guidance of our expert instructors. From classical to contemporary, we offer a comprehensive curriculum tailored to nurture your unique talents. Join our vibrant community and experience the transformative power of music today!</p>
                                <button className='btn btn-warning'>See more</button>
                            </div>
                            <div className='flex border-2 rounded w-1/2 mr-10'>
                                <img src={guitar_1} className='h-80 w-[700px] ' alt="" />
                                <img src={guitar_2} className='h-80 w-[700px] ' alt="" />
                                <img src={guitar_3} className='h-80 w-[700px] ' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider_2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
                        Text Overlay for Slide 1
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider_1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
                        Text Overlay for Slide 1
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Slider;