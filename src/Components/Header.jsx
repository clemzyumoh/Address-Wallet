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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../Redux/settingSlice";
import {
  FaMoon,
  FaSun,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.settings);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4 shadow-md">
      {/* Large Screen: Search Bar */}

      <div className="hidden sm:flex items-center bg-white dark:bg-gray-700 p-2 rounded flex-1">
        <FaSearch className="text-gray-500 dark:text-gray-300 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-full text-black dark:text-white"
        />
      </div>

      {/* Mobile: User Icon on the Left */}
      <div className="block sm:hidden">
        <FaUser className="text-gray-500 dark:text-gray-300 md:mx-10 text-xl" />
      </div>

      {/* Large Screen: Dark Mode & User Icon on the Right */}
      <div className="hidden sm:flex items-center ml-20 space-x-4">
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-600">
          {darkMode ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
        <FaUser className="text-gray-500 dark:text-gray-300 text-xl" />
      </div>

      {/* Mobile: Menu Icon on the Right */}
      <div className="block sm:hidden">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-xl">
          {dropdownOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (h-screen but doesn't cover navbar) */}
      {dropdownOpen && (
        <div className="absolute left-0 right-0 top-14 h-screen bg-white dark:bg-gray-800 p-4 shadow-md z-50 sm:hidden flex flex-col justify-between pb-16">
          <div>
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
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}{" "}
              <span>Dark Mode</span>
            </button>
            <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaCog /> <span>Settings</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

