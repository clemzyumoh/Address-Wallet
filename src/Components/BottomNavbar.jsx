// import { Link } from "react-router-dom";
// import { FiHome, FiShuffle, FiLayers, FiZap, FiCompass } from "react-icons/fi";

// const BottomNavbar = () => {
//   return (
//     <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 flex justify-around md:hidden">
//       <Link to="/" className="flex flex-col items-center">
//         <FiHome className="text-xl" />
//         <span className="text-xs">Home</span>
//       </Link>
//       <Link to="/swap" className="flex flex-col items-center">
//         <FiShuffle className="text-xl" />
//         <span className="text-xs">Swap</span>
//       </Link>
//       <Link to="/foundation" className="flex flex-col items-center">
//         <FiLayers className="text-xl" />
//         <span className="text-xs">Foundation</span>
//       </Link>
//       <Link to="/launchpad" className="flex flex-col items-center">
//         <FiZap className="text-xl" />
//         <span className="text-xs">Launchpad</span>
//       </Link>
//       <Link to="/discover" className="flex flex-col items-center">
//         <FiCompass className="text-xl" />
//         <span className="text-xs">Discover</span>
//       </Link>
//     </nav>
//   );
// };

// export default BottomNavbar;

import { NavLink } from "react-router-dom";
import { FiHome, FiShuffle, FiLayers, FiZap, FiCompass } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 bg-gray-200 border border-[#040f4c] dark:bg-[#181c33] shadow-lg p-2 gap-4 pb-6 flex justify-around lg:hidden">
      {[
        {
          to: "/",
          label: "Home",
          icon: <FiHome className="text-xl " />,
        },
        {
          to: "/swap",
          label: "Swap",
          icon: <FiShuffle className="text-xl " />,
        },
        {
          to: "/foundation",
          label: "Foundation",
          icon: <FiLayers className="text-xl" />,
        },
        {
          to: "/launchpad",
          label: "Launchpad",
          icon: <FiZap className="text-xl " />,
        },
        {
          to: "/discover",
          label: "RootOpia",
          icon: <IoGameControllerOutline className="text-xl " />,
        },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded transition ${
              isActive
                ? " hover:scale-110  text-green-400 dark:text-green-400"
                : " hover:scale-105 dark:text-neutral-300 "
            }`
          }>
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavbar;
