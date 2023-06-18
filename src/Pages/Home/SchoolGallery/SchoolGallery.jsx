import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import gallery1 from '../../../../src/assets/gallery/school-1.jpg'
import gallery2 from '../../../../src/assets/gallery/school-2.jpg'
import gallery3 from '../../../../src/assets/gallery/school-3.jpg'
import gallery4 from '../../../../src/assets/gallery/school-4.jpg'
import gallery5 from '../../../../src/assets/gallery/school-5.jpg'
import gallery6 from '../../../../src/assets/gallery/school-6.jpg'
import gallery7 from '../../../../src/assets/gallery/school-7.jpg'
import gallery8 from '../../../../src/assets/gallery/school-8.jpg'
import gallery9 from '../../../../src/assets/gallery/school-9.jpg'
import gallery10 from '../../../../src/assets/gallery/school-10.jpg'
import gallery11 from '../../../../src/assets/gallery/school-11.jpg'
import gallery12 from '../../../../src/assets/gallery/school-12.jpg'
import gallery13 from '../../../../src/assets/gallery/school-13.jpg'
import gallery14 from '../../../../src/assets/gallery/school-14.jpg'
import Title from "../../../Component/Title/Title"



const SchoolGallery = () => {
    const images = [
        `${gallery1}`,
        `${gallery5}`,
        `${gallery3}`,
        `${gallery4}`,
        `${gallery6}`,
        `${gallery7}`,
        `${gallery9}`,
        `${gallery8}`,
        `${gallery10}`,
        `${gallery11}`,
        `${gallery12}`,
        `${gallery13}`,
        `${gallery14}`,
    ]
    return (

        <div className="mt-20">
            <Title title={'Music School Gallery'} className='mb-4' ></Title>
           <div className="mt-10 p-[20px]" >
           <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="20px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
           </div>
        </div>

    );
};

export default SchoolGallery;