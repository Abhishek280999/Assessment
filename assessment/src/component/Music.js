import React, { useState } from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import pic1 from '../image/pic1.jpg';
import pic2 from '../image/pic2.jpg';
import pic3 from '../image/pic3.jpg';
import pic4 from '../image/pic4.jpg';

import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BookIcon from '@mui/icons-material/Book';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const array = [
    {
        name: "Latest News",
        Image: pic1,
        h4: "Discover the latest updates",
        h6: "Stay up to date with the music world",
        icon: <OnDeviceTrainingIcon />,
        prograss: "70%"
    },
    {
        name: "Music Practice Tips",
        Image: pic2,
        h4: "Improve Your Skills",
        h6: "Enhance your music abilities",
        icon: <LightbulbIcon />,
        prograss: "50%"
    },
    {
        name: "Music Instruments Guide",
        Image: pic3,
        h4: "Discover different instruments",
        h6: "Explore their unique sounds",
        icon: <BookIcon />,
        prograss: "80%"
    },
    {
        name: "Music Note Memorization",
        Image: pic4,
        h4: "Master music notes",
        h6: "Track your progress",
        icon: <BookmarkIcon />,
        prograss: "60%"
    },
];

const Music = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleDivClick = (index) => {
      setActiveIndex(index);
    };
    return (
        <>
            <div className='flex bg-white justify-between mb-5'>
                <div className='mt-12 ml-7 text-4xl font-semibold'>Music Theories</div>
                <div className='mt-12 ml-7 text-lg mr-2 font-semibold'>
                    <span className='w-36 h-36 rounded-3xl p-4 bg-black mr-2 text-white'>
                        <MusicNoteIcon />
                    </span>
                    Learn the
                </div>
            </div>
            {array.map((item, index) => (
                <div key={index}>
                    <div className='p-3'>
                        <div className='flex border border-white chat rounded-3xl'>
                            <div className='w-52 ml-3 p-2'>
                                <img src={item.Image} alt='' className='rounded-3xl h-36' />
                            </div>
                            <div className='mt-7'>
                                <div className='flex justify-between'>
                                    <h4 className='font-bold ml-6'>
                                        {item.name}
                                        <br />
                                        <span className='font-thin'>{item.h4}</span>
                                    </h4>
                                    <span>{item.icon}</span>
                                </div>
                                <div className='relative pt-1 ml-6'>
                                    <div className='overflow-hidden h-2 mb-1 text-xs flex rounded w-[350px] bg-gray-200'>
                                        <div style={{ width: item.prograss }} className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400'></div>
                                    </div>
                                    <span className='text-[13px]'>{item.h6}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Music;
