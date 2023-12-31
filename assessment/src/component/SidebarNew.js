
import { motion } from "framer-motion";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import Item from "./Item";
import { useState } from "react";
function SidebarNew() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar2
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "4rem",
      transition: {
        delay: 0.4,
      },
    },
  };

 
  return (
    <div className="applications">
      <motion.div
        data-Open={!open}
        variants={sideContainerVariants}
        initial={`${!open}`}
        animate={`${!open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${!open}`}
          animate={`${!open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.898)",
              backdropFilter: "blur(1px)",
              WebkitBackdropFilter: "blur(1px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              color: "black",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon "
          >
            {/* <TocRounded /> */}
            <div className="div">
              <img className="img"
                src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg"
                alt="profile_img"
              />
              <div>
                <span> {<Item name="Music Theroy" />}</span>
                <p> <Item name="musicleaner@muxicme " /></p>
              </div>
            </div>
          </motion.div>
          <div className="groups">

            <div className="group">


              <Item icon={<DashboardIcon />} name="Practices" />
              <Item icon={<AccountBalanceIcon />} name="Courses" />
              <Item icon={<VerifiedIcon />} name="Prograss" />
              <Item icon={<PeopleIcon />} name="Instructors" />
              <Item icon={<AudioFileIcon />} name="Music Notes" />
            </div>

          </div>
         
          <div className="groups relative top-[400px]  ">
          <div className="border-t border-white pt-4"></div>
          <div className="group">
            <Item icon={<SettingsIcon />} name="Settings" />
            <Item icon={<LoginIcon />} name="Sign Out" />
          </div>
        </div>
        </motion.div>
       
      </motion.div>
    </div>
  );
}

export default SidebarNew;
