import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Community from './component/Community';
import MobileChat from './component/MobileChat';

function App() {
  return (
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

  );

}

export default App;

