import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import img from '../image/img1.jpg'
const MobileChat = () => {
    return (
        <div className='p-6 absolute right-1 '>
            <div className="h-[680px] p-1 chat w-[340px] border border-gray-400 rounded-2xl bg-white flex flex-col">
                {/* Chat Header */}
                <div className="bg-white font-extrabold text-black p-4 border-b border-gray-500 ">
                    <h1 className="text-xl font-semibold">Music Chat </h1>
                </div>


                <div className='flex mt-3'>
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className=' mt-1'>
                        <div className='flex justify-between'>
                            <div className='mt-1  text-[10px] ml-4 '>Adam Smith</div>
                            <div className='text-[10px]'>9:28 AM</div>
                        </div>
                        <div className='w-full h-8 border border-gray-300 ml-3 bg-gray-300 rounded-l-full text-[13px] rounded-r-full p-1 mt-1'>I need help with music notes</div>
                    </div>
                </div>


                <div className='flex mt-2'>
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className=' mt-1'>
                        <div className='flex justify-between'>
                            <div className='mt-1  text-[10px] ml-4 '>Emily</div>
                            <div className='text-[10px]'>9:29 AM</div>
                        </div>
                        <div className='w-[250px] h-12 border text-[13px] border-gray-300 ml-3 bg-gray-300 rounded-l-full rounded-r-full p-1 mt-1 pl-3'>Is music theroy different for each instrument?</div>
                    </div>
                </div>



                <div className='flex mt-2'>
                    {/* <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                    <div className=' mt-1 ml-16'>
                        <div className='flex justify-between'>
                            <div className='mt-1  text-[10px] ml-4 '></div>
                            <div className='text-[10px]'>You</div>
                        </div>
                        <div className='w-[250px] h-12 border text-[13px] border-gray-300 ml-3 bg-gray-300 rounded-l-full rounded-r-full p-1 mt-1 pl-3'>Is music theroy different for each instrument?</div>
                    </div>
                </div>


                <div className='flex mt-2'>
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className=' mt-1'>
                        <div className='flex justify-between'>
                            <div className='mt-1  text-[10px] ml-4 '>Adam Smith</div>
                            <div className='text-[10px]'></div>
                        </div>
                        <div className='w-full h-8 border border-gray-300 ml-3 bg-gray-300 rounded-l-full text-[13px] rounded-r-full p-1 mt-1'>haha</div>
                    </div>
                </div>

                <div className='flex mt-2'>
                    {/* <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                    <div className=' mt-1 ml-12'>
                        <div className='flex justify-between'>
                            <div className='mt-1  text-[10px] ml-4 '></div>
                            <div className='text-[10px] relative bottom-4'>9:32 AM</div>
                        </div>
                        <div className='w-[250px] h-8 relative bottom-4 border text-[13px]  border-gray-300 ml-3 bg-gray-300 rounded-l-full rounded-r-full p-1 mt-1 pl-3'>But i hadto tuny my</div>
                    </div>
                </div>


                <div className='flex mt-2'>
                    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className=' mt-1'>
                        <div className='flex justify-between'>
                            <div className='mt-1  text-[10px] ml-4 '>Music theory</div>
                            <div className='text-[10px] relative top-1 left-3'>Beginner</div>
                        </div>
                        <div className='w-full h-8 border border-gray-300 ml-3 bg-gray-300 rounded-l-full text-[13px] rounded-r-full p-1 mt-1'>Learn the basics</div>
                    </div>
                </div>


                <div className='flex mt-3'>
                    {/* <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                    <div className=' mt-1 ml-28'>
                        <div className='flex justify-between'>
                            <div className='mt-1  text-[10px] ml-4 '></div>
                            <div className='text-[10px] relative bottom-4'>Music theory</div>
                        </div>
                        <div className='w-[200px] h-12 relative bottom-4 border text-[13px]  border-gray-300 ml-3 bg-gray-300 rounded-l-full rounded-r-full p-1 mt-1 pl-3'>Unerstand Music notes</div>
                    </div>
                </div>


                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="flex flex-col space-y-2">
                    </div>
                </div>


                <div className="bg-white p-4 border-t-2">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 border rounded-lg p-2   border-black mr-2 rounded-l-full rounded-r-full"
                        />
                        <button >
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileChat;
