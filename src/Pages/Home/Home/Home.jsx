import React, { useState } from 'react';
import Slider from '../../../Component/Slider/Slider';
import Classes from '../classes/Classes';
import Teachers from '../Teachers/Teachers';
import ExtraSection from '../ExtraSection/ExtraSection';
import './Home.css';


const Home = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className={theme}>
             <button className='ml-6 mt-2'  onClick={toggleTheme}>
                {theme === 'light' ? <span className='bg-black text-white p-1 rounded-xl'>Dark</span> : <span className='bg-white text-black p-1 rounded-xl'>white</span>}
            </button>
            <Slider />
            <Classes />
            <Teachers />
            <ExtraSection />
        </div>
    );
};

export default Home;
