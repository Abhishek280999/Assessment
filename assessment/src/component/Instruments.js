import React from 'react'
import image2 from '../image/image2.jpg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

const Instruments = () => {
    return (
        <>
            <div className='flex flex-col  p-10'>
                <div>
                    <img src={image2} alt='' className='rounded-3xl h-[400px] w-[800px]' />
                </div>
                <div className='mt-9 ml-2'>
                    <h2 className='font-semibold text-3xl'>Music Instruments</h2>
                    <div className=' w-[160px] h-10 mt-4 bg-white  mb-2 rounded-l-full rounded-r-full'>
                        <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <span className='relative bottom-0 left-5 text-sm font-thin '>Learn About</span>
                    </div>
                </div>
                <div className='mt-2'>
                    <div className='mt-2'><AccessTimeIcon className='mr-2' />Track your parctice time</div>
                    <div className='mt-2'><StarIcon className='mr-2' />Rate your favorite</div>

                    <div className='mt-2'>About the course</div>
                    <p className='text-sm mt-2'>Learn the music notes theory to become a skilled musician. the course covers everything <br /> from basic to advanced techniqiues ,helpng you play any instrument with confidence. </p>
                </div>

                <div className='flex text-center mt-16 ml-6'>
                    <div className=' w-[300px] chat h-10 mt-4 bg-white ml-2 mb-2 rounded-l-full rounded-r-full'>
                        <span className='relative top-1 left-0 text-sm font-thin '>Leave a review</span>
                    </div>
                    <div className=' w-[300px] chat h-10 mt-4 bg-white ml-2 mb-2 rounded-l-full rounded-r-full'>
                        <span className='relative top-1 left-0 text-sm font-thin '>Contiune learning</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Instruments