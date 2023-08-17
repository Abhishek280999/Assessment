import React from 'react'
import pic from '.././image/image.jpg'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Home = () => {
    return (
        <>
            <div>
                <div className='w-[95%] h-[570px] p-2 mt-2 ml-5 rounded-lg border border-gray-300 '>
                    <h1 className='font-bold text-2xl'>Music Basics</h1>
                    <img className=' object-cover  h-[520px]  w-[100%] p-5 rounded-[50px]' src={pic} alt='' />
                    <div className="absolute inset-0 flex items-center top-[450px] left-[280px]">
                        <div className="text-white text-2xl w-[820px]  rounded-b-3xl font-semibold  bg-white bg-opacity-40 ">
                            <div className='flex justify-center  '>
                                <div className='text-black w-12 h-12 m-4 rounded-full  border border-white bg-white '> <PlayCircleIcon className='m-3  ' /></div>
                                <div className='text-black w-12 h-12 m-4 rounded-full  border border-white bg-white '> <VolumeOffIcon className='m-3  ' /></div>
                                <div className='text-black w-12 h-12 m-4 rounded-full  border border-white bg-white '> <WhatsAppIcon className='m-3  ' /></div>
                                <div className='text-black w-12 h-12 m-4 rounded-full  border border-white bg-white '> <MoreVertIcon className='m-3  ' /></div>
                                <div className='text-black w-12 h-12 m-4 rounded-full  border border-white bg-white '> <CallEndIcon className='m-3  ' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <h6 className='opacity-50'><FiberManualRecordIcon className='text-lg' /> 50 Lesson Available</h6>
                        <h6 className='opacity-50'>Ends in 45 min.</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home