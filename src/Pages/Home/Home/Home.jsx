import React from 'react';
import Slider from '../../../Component/Slider/Slider';
import Classes from '../classes/Classes';
import Teachers from '../Teachers/Teachers';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Classes></Classes>
            <Teachers></Teachers>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;