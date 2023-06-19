import React from 'react';
import Title from '../../../Component/Title/Title';
import child from '../../../assets/group/child.jpg'
import teen from '../../../assets/group/teen.jpg'
import adult from '../../../assets/group/adult.jpg'
import privateS from '../../../assets/group/private.jpg'


const MusicGroups = () => {
    return (
        <div>
            <section className='mt-20'>
               <Title title={'Music Group'}></Title>
                <div className='mt-10 md:flex justify-between items-center gap-5 px-20'>
                    <div className='flex flex-col justify-between items-center'><img src={child} className='h-60 border rounded-full' alt="" /> <h2 className='text-2xl  font-bold'>Child Group</h2></div>
                    <div className='flex flex-col justify-between items-center'><img src={teen} className='h-60 border  rounded-full' alt="" /> <h2 className='text-2xl font-bold'>Teen Group</h2></div>
                    <div className='flex flex-col justify-between items-center'><img src={adult} className='h-60 border  rounded-full' alt="" /> <h2 className='text-2xl font-bold'>Adult Group</h2></div>
                    <div className='flex flex-col justify-between items-center'><img src={privateS} className='h-60 border  rounded-full' alt="" /> <h2 className='text-2xl  font-bold'>Private Group</h2></div>

                </div>
            </section >
        </div>
    );
};

export default MusicGroups;