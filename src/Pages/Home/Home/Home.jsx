import React, { useEffect, useState } from 'react';
import Slider from '../../../Component/Slider/Slider';
import Classes from '../classes/Classes';
import Teachers from '../Teachers/Teachers';
import ExtraSection from '../ExtraSection/ExtraSection';
import './Home.css';
import SchoolGallery from '../SchoolGallery/SchoolGallery';


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
                {theme === 'light' ? <span className='bg-black text-white p-1 rounded-xl'>Dark</span> : <span className='bg-white text-black p-1 rounded-xl'>white</span>}
            </button>
            <Slider />
            <Classes />
            <Teachers />
            <ExtraSection />
            <SchoolGallery></SchoolGallery>
        </div>
    );
};

export default Home;
