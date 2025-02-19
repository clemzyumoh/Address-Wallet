// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../Redux/settingSlice";
// import { FaMoon, FaSun, FaSearch, FaUser } from "react-icons/fa";

// const Header = () => {
//   const dispatch = useDispatch();
//   const { darkMode } = useSelector((state) => state.settings);

//   return (
//     <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4 shadow-md">
//       {/* Search Bar */}
//       <div className="flex items-center bg-white dark:bg-gray-700 p-2 rounded">
//         <FaSearch className="text-gray-500 dark:text-gray-300 mr-2" />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="bg-transparent focus:outline-none w-full text-black dark:text-white"
//         />
//       </div>

//       {/* Dark Mode Toggle & User Icon */}
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={() => dispatch(toggleDarkMode())}
//           className="p-2 rounded-full bg-gray-200 dark:bg-gray-600">
//           {darkMode ? (
//             <FaSun className="text-yellow-500" />
//           ) : (
//             <FaMoon className="text-gray-800" />
//           )}
//         </button>
//         <FaUser className="text-gray-500 dark:text-gray-300 text-xl" />
//       </div>
//     </div>
//   );
// };

// export default Header;
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../Redux/settingSlice";
// import { FaMoon, FaSun, FaSearch, FaUser, FaBars, FaTimes, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";

// const Header = () => {
//   const dispatch = useDispatch();
//   const { darkMode } = useSelector((state) => state.settings);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4 shadow-md">
//       {/* Left: User Icon (Mobile) */}
//       <div className="block sm:hidden">
//         <FaUser className="text-gray-500 dark:text-gray-300 text-xl" />
//       </div>
      
//       {/* Middle: Search Bar */}
//       <div className="flex items-center bg-white dark:bg-gray-700 p-2 rounded flex-1 mx-4">
//         <FaSearch className="text-gray-500 dark:text-gray-300 mr-2" />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="bg-transparent focus:outline-none w-full text-black dark:text-white"
//         />
//       </div>

//       {/* Right: Menu Icon (Mobile) */}
//       <div className="block sm:hidden">
//         <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-xl">
//           {dropdownOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Right: User Icon (Desktop) */}
//       <div className="hidden sm:block">
//         <FaUser className="text-gray-500 dark:text-gray-300 text-xl" />
//       </div>

//       {/* Dropdown Menu (Mobile) */}
//       {dropdownOpen && (
//         <div className="absolute left-0 right-0 top-14 bg-white dark:bg-gray-800 p-4 rounded shadow-md z-50 sm:hidden">
//           <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             <FaUser /> <span>Profile</span>
//           </button>
//           <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             <FaBell /> <span>Notifications</span>
//           </button>
//           <button onClick={() => dispatch(toggleDarkMode())} className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />} <span>Dark Mode</span>
//           </button>
//           <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             <FaCog /> <span>Settings</span>
//           </button>
//           <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             <FaSignOutAlt /> <span>Logout</span>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
import { NavLink } from "react-router-dom";

import { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { toggleDarkMode } from "../Redux/settingSlice";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  Sun,
  Moon,

} from "lucide-react";
import { MdOutlineManageSearch } from "react-icons/md";
//import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  //const dispatch = useDispatch();
  //const { darkMode } = useSelector((state) => state.settings);
  const [dropdownOpen, setDropdownOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");
   const navigate = useNavigate();

   const handleSearch = (e) => {
     if (e.key === "Enter" && searchTerm.trim() !== "") {
       navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
     }
   };
  return (
    <motion.div className="hidden lg:flex fixed top-0 justify-between lg:justify-around items-center w-full z-40 lg:w-[80vw] bg-gray-300  dark:bg-[#000116] text-black dark:text-white p-4 ">
      {/* Large Screen: Search Bar */}
      <h1 className="font-bold text-3xl lg:block hidden text-[#040f4c] dark:text-gray-100 mr-5 lg:mr-52">
        Dashboard
      </h1>
      <div className="hidden lg:flex items-center bg-gray-500 dark:bg-gray-700 p-2 rounded flex-1">
        <FaSearch className="text-gray-400 dark:text-gray-300 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-full text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch} // 🔥 Triggers on Enter key
        />
      </div>

      {/* Mobile: User Icon on the Left */}
      <div className="block lg:hidden">
        <button className=" space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <NavLink to="/settings" className="flex items-center">
            <FaCog className="text-xl" />
          </NavLink>
        </button>
      </div>

      {/* Large Screen: Dark Mode & User Icon on the Right */}
      <motion.div className="hidden lg:flex items-center ml-20 space-x-4">
        {/* <button
          onClick={() => dispatch(toggleDarkMode())}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-600">
          {darkMode ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button> */}
        {/* Dark Mode Toggle */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setDarkMode(!darkMode)}
          className="w-[24px]">
          {darkMode ? (
            <Sun size={24} className="dark:text-[#E9771D]" />
          ) : (
            <Moon size={24} className="text-[#040f4c]" />
          )}
        </motion.button>
        <FaUser className="text-gray-500 dark:text-gray-300 text-xl" />
      </motion.div>

      {/* Mobile: Menu Icon on the Right */}
      <div className="hidden">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-xl">
          {dropdownOpen ? (
            <FaTimes className="text-xl  text-gray-950 dark:text-gray-100 md:text-3xl" />
          ) : (
            <FaBars className="md:text-3xl  text-gray-950 dark:text-gray-100 text-xl" />
          )}
        </button>
        <MdOutlineManageSearch className="text-xl text-gray-950 dark:text-gray-100 md:text-3xl" />
      </div>
      <div className="block lg:hidden">
        <MdOutlineManageSearch className="text-3xl text-gray-950 dark:text-gray-100 md:text-3xl" />
      </div>

      {/* Mobile Dropdown Menu (h-screen but doesn't cover navbar) */}
      {dropdownOpen && (
        <motion.div className="absolute left-0 right-0 top-14 h-screen bg-gray-100 dark:bg-gray-800 p-4 shadow-md z-50 lg:hidden flex flex-col justify-between pb-16">
          <motion.div>
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search for a project..."
                className="w-full p-3 pl-10 border rounded"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaUser /> <span>Profile</span>
            </button>
            <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaBell /> <span>Notifications</span>
            </button>
            {/* <button
              onClick={() => dispatch(toggleDarkMode())}
              className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}{" "}
              <span>Dark Mode</span>
            </button> */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: darkMode ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                setDarkMode(!darkMode);
                setDropdownOpen(!dropdownOpen);
              }}
              className="w-[24px]">
              {darkMode ? (
                <Sun size={24} className="dark:text-[#0085A8]" />
              ) : (
                <Moon size={24} className="text-[#1F1619]" />
              )}
            </motion.button>
            <button className=" space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <NavLink
                to="/settings"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                }}
                className="flex items-center">
                <FaCog className="mr-3" /> <span>Settings</span>
              </NavLink>
            </button>
          </motion.div>
          <button className="flex items-center space-x-2 p-2 w-full  hover:bg-gray-200 dark:hover:bg-gray-700">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;

