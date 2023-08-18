
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import SidebarNew from './component/SidebarNew';
import Home from './component/Home';
import Community from './component/Community';
import MobileChat from './component/MobileChat';
import Music from './component/Music';
import Instruments from './component/Instruments';

function App() {
  return (
    // Page One 
    <>
      <div className='flex w-[100%]' >
        <div className=' w-[16%] '>
          <Sidebar />
        </div>
        <div className=' w-[60%] ' >
          <Navbar />
          <div>
            <Home />
            <div className='mt-10'>
              <Community />
            </div>
          </div>
        </div>
        <div className='w-[24%] bg-gray-100'>
          <MobileChat />
        </div>
      </div>



      <div className='mt-40'>
        <div className='flex w-[100%]' >
          <div className=' w-[5%] mr-2 relative top-0 '>
            <SidebarNew />
          </div>
          <div className='w-[45%] mr-5 rounded-xl'>
            <Music/>
          </div>
          <div className='w-[55%] bg-gray-100  rounded-xl' >
          <Instruments/>
          </div>
        </div>
      </div>
    </>
  );

}

export default App;

