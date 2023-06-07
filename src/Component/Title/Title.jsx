import React from 'react';

const Title = ({title,desc}) => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold '>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default Title;