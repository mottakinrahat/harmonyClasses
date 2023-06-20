import React from 'react';
import Title from '../../Component/Title/Title';
import piano from '../../assets/blog/piano.jpg'
import kids from '../../assets/blog/kids.jpg'
import violin from '../../assets/blog/violin.jpg'

const LatestNews = () => {
    return (
        <div className='mt-20'>
            <Title title={'Latest Blogs'}></Title>
            <div className='grid md:grid-cols-3 justify-between text-center ml-20 items-center mt-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={piano} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">
                            International piano festivals
                        </h2>
                        <p>
                            Hermonia Music School recently hosted a captivating Piano Festival that left audiences awe-inspired. Renowned pianists from around the world showcased their exceptional talent, delivering breathtaking performances that transported listeners into a world of musical magic. </p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={kids} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">
                            Hermonia Kids week
                        </h2>
                        <p>
                            Celebrate the vibrant talent of our young prodigies at the Hermonia Kids Week Festival! Experience a week filled with captivating performances, joyful melodies, and delightful surprises, as our talented children showcase their passion for music in a celebration that will warm your heart.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={violin} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">
                            Festival of violins
                        </h2>
                        <p>Be mesmerized by the enchanting melodies of the violin at the Hermonia Music School's prestigious Violin Festival. Immerse yourself in the world of virtuosic performances as talented musicians gather to showcase their mastery of this timeless instrument.</p>
                    </div>
                </div>
                =
            </div>
        </div>
    );
};

export default LatestNews;