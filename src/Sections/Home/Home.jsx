// import { useSelector, useDispatch } from "react-redux";
// import { setActiveTab } from "../../Redux/homeSlice";
// import Asset from "./Asset";
// import Crypto from "./Crypto";
// import NFT from "./NFT";

// const Home = () => {
//   const activeTab = useSelector((state) => state.home.activeTab);
//   const dispatch = useDispatch();

//   return (
//     <div className="p-4">
//       <div className="flex space-x-4 mb-4">
//         {["Asset", "Crypto", "NFT"].map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => dispatch(setActiveTab(tab))}>
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="border p-4 rounded bg-white shadow">
//         {activeTab === "Asset" && <Asset />}
//         {activeTab === "Crypto" && <Crypto />}
//         {activeTab === "NFT" && <NFT />}
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../Redux/homeSlice";

import {
  FaEye,
  FaEyeSlash,
  FaPaperPlane,
  FaDownload,
  FaShoppingCart,
  FaMoneyBill,
  FaHistory,
} from "react-icons/fa";
import Asset from "./Asset";
import Crypto from "./Crypto";
import NFT from "./NFT";
import { IoIosNotifications } from "react-icons/io";
import { RiQrScan2Line } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NotificationSlide from "../../Components/notSlide";
import { motion } from "framer-motion";
import { FaBell, FaTimes } from "react-icons/fa";
const Home = ({darkMode, setDarkMode}) => {
  const activeTab = useSelector((state) => state.home.activeTab);
  const dispatch = useDispatch();

  // State for wallet selection & balance visibility
  const [selectedWallet, setSelectedWallet] = useState("Main Wallet");
  const [showBalance, setShowBalance] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

    const [showNotifications, setShowNotifications] = useState(false);
    const notifications = [
      "New transaction received",
      "Price alert: Bitcoin up 5%",
      "System update scheduled",
    ];
  // const handleSearch = () => {
  //   if (searchTerm.trim() !== "") {
  //     navigate(`/search?query=${searchTerm}`);
  //   }
  //  const handleSearch = () => {
  //    if (searchTerm.trim() !== "") {
  //      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  //    }
  //  };
    const handleSearch = (e) => {
      if (e.key === "Enter" && searchTerm.trim() !== "") {
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      }
    };
  return (
    <div className="dark:bg-[#0B090D]  md:px-3 mx-2 ">
      {/* <div className="flex items-center border-b pb-2 w-full mt-12 max-w-md mx-auto">
        <FaSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          className="w-full p-2 bg-transparent focus:outline-none"
          placeholder="Search all crypto across networks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
          Search
        </button>
      </div> */}
      {/* <div className="flex items-center mt-12
       border-b pb-2 w-full max-w-md mx-auto">
        <FaSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          className="w-full p-2 bg-transparent focus:outline-none"
          placeholder="Search all crypto across networks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
          Search
        </button>
      </div> */}
      <div className="flex items-center border-2 border-neutral-400 rounded-2xl pl-6 p-3 w-full lg:hidden mt-12 max-w-md mx-auto">
        <FaSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          className="w-full p-2 bg-transparent focus:outline-none"
          placeholder="Search all crypto across networks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch} // 🔥 Triggers on Enter key
        />
      </div>
      {/* Wallet Card */}
      <div className=" mb-8   mt-10 md:p-6 p-4 rounded-lg ">
        {/* Wallet Selector */}
        <div className="flex justify-between items-center">
          <select
            className=" p-2 bg-gray-200 dark:bg-gray-700  text-black dark:text-white rounded-md focus:outline-none"
            value={selectedWallet}
            onChange={(e) => setSelectedWallet(e.target.value)}>
            <option>Main Wallet</option>
            <option>Wallet 2</option>
            <option>Wallet 3</option>
            <option>Wallet 4</option>
          </select>
          <div className="flex justify-center items-center md:text-2xl text-neutral-800 dark:text-neutral-300 text-xl md:gap-6 gap-4">
            <FaRegCopy className="hover:scale-110 hover:rotate-12" />
            <RiQrScan2Line className="hover:scale-110 hover:rotate-12" />
            <button onClick={() => navigate("/notifications")}>
              <IoIosNotifications className="hover:scale-110 hover:rotate-12" />
            </button>
          </div>
        </div>

        {/* Balance Section */}
        <div className="flex justify-start  items-center md:my-10 my-4">
          <span className="text-2xl font-bold mr-5 dark:text-white">
            {showBalance ? "0.00$" : "••••"}
          </span>
          <button onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? (
              <FaEyeSlash className="text-gray-500 dark:text-neutral-200" />
            ) : (
              <FaEye className="text-gray-500 dark:text-neutral-200" />
            )}
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex justify-between mt-4">
          <button className="flex flex-col items-center hover:scale-110 text-gray-700 dark:text-white">
            <FaPaperPlane className="text-2xl mb-1" />{" "}
            <span className="text-sm">Send</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 text-gray-700 dark:text-white">
            <FaDownload className="text-2xl mb-1" />{" "}
            <span className="text-sm">Receive</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 text-gray-700 dark:text-white">
            <FaRegCreditCard className="text-2xl mb-1" />{" "}
            <span className="text-sm">Buy</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 text-gray-700 dark:text-white">
            <BsCashCoin className="text-2xl mb-1" />{" "}
            <span className="text-sm">Sell</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 text-gray-700 dark:text-white">
            <FaHistory className="text-2xl mb-1" />{" "}
            <span className="text-sm">History</span>
          </button>
        </div>
      </div>
      <div>
        <section className="p-4   my-12 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Recent Notifications</h2>
          <ul className="">
            {notifications.slice(0, 3).map((notif, index) => (
              <li
                key={index}
                className="p-2 border-2 gap-3 rounded-2xl flex mb-5 items-center">
                <FaBell className="mr-2 dark:text-yellow-500" />
                <span>{notif}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowNotifications(true)}
            className="mt-2 text-green-400 underline">
            View All
          </button>
        </section>
        {showNotifications && (
          <NotificationSlide
            notifications={notifications}
            onClose={() => setShowNotifications(false)}
          />
        )}
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-2 md:space-x-4 font-bold mb-4">
        {["Asset", "Crypto", "NFT"].map((tab) => (
          <button
            key={tab}
            className={`px-8 py-3 rounded ${
              activeTab === tab
                ? " hover:scale-105  text-white bg-green-500  hover:bg-green-600"
                : "bg-gray-200 hover:scale-105 text-neutral-700 hover:border-2 hover:bg-transparent dark:hover:text-neutral-200 hover:border-green-500 "
            }`}
            onClick={() => dispatch(setActiveTab(tab))}>
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className=" md:p-4 rounded bg-gray-300  dark:bg-[#0B090D] text-black dark:text-white">
        {activeTab === "Asset" && <Asset />}
        {activeTab === "Crypto" && <Crypto />}
        {activeTab === "NFT" && <NFT />}
      </div>
    </div>
  );
};

export default Home;
