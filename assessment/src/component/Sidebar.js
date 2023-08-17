
import { motion } from "framer-motion";
import {
  DashboardRounded,
} from "@material-ui/icons";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import Item from "../component/Item";
import { useState } from "react";
function Sidebar() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
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

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };
  return (
    <div className="App">
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.898)",
              backdropFilter: "blur(1px)",
              WebkitBackdropFilter: "blur(1px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              color : "black",
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


              <Item icon={<DashboardRounded />} name="Practices" />
              <Item icon={<AccountBalanceIcon />} name="Courses" />
              <Item icon={<VerifiedIcon />} name="Prograss" />
              <Item icon={<PeopleIcon />} name="Instructors" />
              <Item icon={<AudioFileIcon />} name="Music Notes" />


            </div>
          </div>
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="group "
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgb(255, 255, 255)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(1.5px)",
              WebkitBackdropFilter: "blur(1.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer",
            }}
          >

          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
