
import { Disclosure } from '@headlessui/react'
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


const navigation = [
  { name: 'Music Lesson', href: '#', current: true },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" bg-gray-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
             
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                <div className="hidden ml-0 sm:block">
                  <div className="flex  mt-2 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-black' : 'text-gray-300  hover:text-white',
                          ' px-3 py-2  font-bold text-3xl'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="relative mt-3 left-[250px] rounded-md  shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  pl-3">
                      <span className="text-gray-500 sm:text-sm">{<SearchIcon />}</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full border-black  rounded-l-full rounded-r-full border py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search for songs or music notes"
                    />

                  </div>
                  
                </div>
                <div className='absolute right-[10px]  mt-4'>
                    {<MusicNoteIcon className='mr-2'/>}
                    {<MusicVideoIcon className='mr-2'/>}
                    {<ChatBubbleOutlineIcon/>}
                  </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
