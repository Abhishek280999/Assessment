import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Community from './component/Community';

function App() {
  return (
    <div className='flex w-[100%]' >
      <div className=' w-[16%]'>
        <Sidebar />
      </div>
      <div className=' w-[84%]' >
        <Navbar />
        <div>
          <Home/>
          <div className='mt-16'>
          <Community/>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;

