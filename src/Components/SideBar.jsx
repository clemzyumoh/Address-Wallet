// import { NavLink } from "react-router-dom";
// import { FaCog, FaSignOutAlt } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <div className="w-64 min-h-screen hidden md:block bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-6">
//       {/* Logo */}
//       <h1 className="text-2xl font-bold  mb-6">Deeproots</h1>

//       {/* Navigation Links */}
//       <nav className="space-y-4">
//         <NavLink
//           to="/"
//           className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
//           Home
//         </NavLink>
//         <NavLink
//           to="/swap"
//           className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
//           Swap
//         </NavLink>
//         <NavLink
//           to="/foundation"
//           className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
//           Foundation
//         </NavLink>
//         <NavLink
//           to="/launchpad"
//           className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
//           Launchpad
//         </NavLink>
//         <NavLink
//           to="/discover"
//           className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
//           Discover
//         </NavLink>
//       </nav>

//       {/* Bottom Section */}
//       <div className="absolute bottom-6 left-6 space-y-4">
//         <NavLink
//           to="/settings"
//           className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
//           <FaCog /> <span>Settings</span>
//         </NavLink>
//         <button className="flex items-center space-x-2 p-2 rounded hover:bg-red-500 dark:hover:bg-red-700">
//           <FaSignOutAlt /> <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import { NavLink } from "react-router-dom";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaVoteYea } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 rounded-2xl mr-8 hidden lg:block dark:bg-transparent fixed left-0 top-0 h-screen  text-black dark:text-white p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-[#040f4c] dark:text-gray-100 mb-6">
        Deeproots
      </h1>

      {/* Navigation Links */}
      <nav className="space-y-8 font-bold ">
        {[
          { to: "/", label: "Home" },
          { to: "/swap", label: "Swap" },
          { to: "/foundation", label: "Foundation" },
          { to: "/launchpad", label: "InnoFi" },
          { to: "/discover", label: "RootOpia" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block p-2 rounded transition ${
                isActive
                  ? " hover:scale-105 text-[#d661e8]"
                  : " hover:scale-105  text-neutral-900 dark:text-gray-100 "
              }`
            }>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-6 left-6 font-bold space-y-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-2 py-4 px-8 rounded transition ${
              isActive
                ? " hover:scale-105   text-[#d661e8]   "
                : " bg-transparent text-neutral-900 dark:text-neutral-300 "
            }`
          }>
          <FaCog /> <span>Settings</span>
        </NavLink>
        <button className="flex items-center space-x-2 py-4 px-8 rounded text-neutral-900 dark:text-gray-100  hover:scale-105 ">
          <FaSignOutAlt /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
