import React from 'react';
import Title from '../../../Component/Title/Title';
import backImage from '../../../assets/bgImage/guitar.jpg'
import addImage from '../../../assets/bgImage/bgImageAdd.jpg';
import { motion } from "framer-motion";
const ExtraSection = () => {
    return (
        <motion.div initial={{opacity:0 ,scale:0,y:200}}
        whileInView={{opacity:1 ,scale:1,y:0}}
        transition={{duration:0.2}}
        viewport={{once:true}}>
            <div className='mt-10'>
                <Title title={'About Our School'}></Title>
                <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${backImage})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className='flex justify-between items-center gap-20 px-10'>
                        <div className="flex flex-col mt-20 justify-center items-start container mx-auto h-full w-1/2 relative z-10">
                            <h1 className="text-4xl font-bold text-yellow-400 mb-4">Harmonious Heights: Journey to Musical Mastery at Our Prestigious Music School</h1>
                            <p className="text-white mb-6">Discover your true musical potential at Harmonious Heights, a prestigious music school committed to fostering artistic excellence. With a diverse and accomplished faculty, we provide expert instruction tailored to each student's unique needs and aspirations. Our state-of-the-art facilities offer an immersive learning environment where students can explore an extensive range of musical genres and instruments. Join our vibrant community of passionate musicians and embark on a transformative journey towards mastering your craft at Harmonious Heights.</p>
                            <button className="px-6 py-2 bg-yellow-500 text-black rounded hover:bg-blue-600">See more</button>
                        </div>
                        <div className=' w-1/2  mt-[80px]  mx-auto  relative z-10'><img className='w-[500px]' src={addImage} alt="" /></div>

                    </div>


                </div>
            </div>

            <div className="flex flex-row bg-yellow-500 p-4">
                <div className="flex-1 text-center">
                    <h2 className="text-white text-5xl  font-bold">27</h2>
                    <p className="text-white">Professional Teachers</p>
                </div>
                <div className="flex-1 text-center">
                    <h2 className="text-white text-5xl font-bold">54</h2>
                    <p className="text-white">Learning Groups</p>
                </div>
                <div className="flex-1 text-center">
                    <h2 className="text-white text-5xl font-bold">590</h2>
                    <p className="text-white">Happy Students</p>
                </div>
                <div className="flex-1 text-center">
                    <h2 className="text-white text-5xl font-bold">UP TO 20</h2>
                    <p className="text-white">Music Classes</p>
                </div>
            </div>

        </motion.div>
    );
};

export default ExtraSection;