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

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen hidden md:block bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-6">Deeproots</h1>

      {/* Navigation Links */}
      <nav className="space-y-4">
        {[
          { to: "/", label: "Home" },
          { to: "/swap", label: "Swap" },
          { to: "/foundation", label: "Foundation" },
          { to: "/launchpad", label: "Launchpad" },
          { to: "/discover", label: "Discover" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block p-2 rounded transition ${
                isActive
                  ? "bg-blue-500 text-white dark:bg-blue-700"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`
            }>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-6 left-6 space-y-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded transition ${
              isActive
                ? "bg-blue-500 text-white dark:bg-blue-700"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`
          }>
          <FaCog /> <span>Settings</span>
        </NavLink>
        <button className="flex items-center space-x-2 p-2 rounded hover:bg-red-500 dark:hover:bg-red-700">
          <FaSignOutAlt /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
