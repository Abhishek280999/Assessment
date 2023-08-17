import React from 'react';
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';
import img5 from '../image/img5.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const array = [img2, img3, img4, img5, img1];

const Community = () => {
  return (
  <>
    <div className='flex justify-between w-[870px]  '>
    <h3 className='ml-3'>Community</h3>
    <h3><KeyboardArrowLeftIcon/><KeyboardArrowRightIcon/></h3>
    </div>
    <div className='w-[85px] text-center text-[15px] h-7 align-middle absolute right-[420px] bottom-[-120px]  rounded-xl bg-white text-black '>+{array.length} more</div>
    <div className='flex '>
      {array.map((img, index) => (
        <div key={index} className=' p-2  '>
         <img className='w-[165px] h-28 rounded-3xl  ' src={img} alt='' />
        </div>
      ))}
    </div>
    </>
  );
};

export default Community;
