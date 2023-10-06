import React from 'react';

const Title = ({title,desc}) => {
    return (
        <div className='text-center mb-8 mt-8'>
            <h2 className='text-3xl font-bold text-yellow-500 '>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default Title;