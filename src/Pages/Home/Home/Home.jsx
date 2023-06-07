import React from 'react';
import Slider from '../../../Component/Slider/Slider';
import Classes from '../classes/Classes';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Classes></Classes>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;