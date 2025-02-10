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

const Home = ({darkMode, setDarkMode}) => {
  const activeTab = useSelector((state) => state.home.activeTab);
  const dispatch = useDispatch();

  // State for wallet selection & balance visibility
  const [selectedWallet, setSelectedWallet] = useState("Main Wallet");
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="dark:bg-[#0B090D] px-3 md:mr-8">
      {/* Wallet Card */}
      <div className="bg-gray-100 mb-8 dark:bg-gray-800  dark:shadow-[#24aebb] shadow-[2px_2px_2px_#24aebb] p-6 rounded-lg ">
        {/* Wallet Selector */}
        <select
          className=" p-2 bg-gray-200 dark:bg-gray-700  text-black dark:text-white rounded-md focus:outline-none"
          value={selectedWallet}
          onChange={(e) => setSelectedWallet(e.target.value)}>
          <option>Main Wallet</option>
          <option>Wallet 2</option>
          <option>Wallet 3</option>
          <option>Wallet 4</option>
        </select>

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
            <FaShoppingCart className="text-2xl mb-1" />{" "}
            <span className="text-sm">Buy</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 text-gray-700 dark:text-white">
            <FaMoneyBill className="text-2xl mb-1" />{" "}
            <span className="text-sm">Sell</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 text-gray-700 dark:text-white">
            <FaHistory className="text-2xl mb-1" />{" "}
            <span className="text-sm">History</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 font-bold mb-4">
        {["Asset", "Crypto", "NFT"].map((tab) => (
          <button
            key={tab}
            className={`px-8 py-3 rounded ${
              activeTab === tab
                ? "bg-[#24AEBB] hover:scale-105 hover:bg-[#1E7E8E] text-white dark:bg-[#149FB2]  dark:hover:bg-[#1E7E8E]"
                : "bg-gray-200 hover:scale-105 text-neutral-700  shadow-[2px_2px_2px_#24aebb] hover:shadow-[2px_2px_2px_#24aebb,-2px_-2px_2px_#24aebb]"
            }`}
            onClick={() => dispatch(setActiveTab(tab))}>
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className=" p-4 rounded bg-gray-300  dark:bg-[#0B090D] text-black dark:text-white">
        {activeTab === "Asset" && <Asset />}
        {activeTab === "Crypto" && <Crypto />}
        {activeTab === "NFT" && <NFT />}
      </div>
    </div>
  );
};

export default Home;
