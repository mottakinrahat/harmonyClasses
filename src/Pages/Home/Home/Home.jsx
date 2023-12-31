import React, { useEffect, useState } from 'react';
import Slider from '../../../Component/Slider/Slider';
import Classes from '../classes/Classes';
import Teachers from '../Teachers/Teachers';
import ExtraSection from '../ExtraSection/ExtraSection';
import './Home.css';
import SchoolGallery from '../SchoolGallery/SchoolGallery';
import MusicGroups from '../../Instructor/MusicGroups/MusicGroups';
import LatestNews from '../../LatestNews/LatestNews';


const Home = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);


    return (
        <div className={theme}>
            <button className='ml-6 mt-2' onClick={toggleTheme}>
            </button>
            <Slider />
            <Classes />
            <Teachers />
            <ExtraSection />
            <SchoolGallery></SchoolGallery>
            <MusicGroups></MusicGroups>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;
