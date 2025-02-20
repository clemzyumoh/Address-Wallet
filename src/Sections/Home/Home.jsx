


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
import { useSearchParams } from "react-router-dom";
import { MdOutlineManageSearch } from "react-icons/md";
import BlurEffect from "../../Components/BlurEffect";

import { FaCog } from "react-icons/fa";
import HorizontalSlider from "../../Components/HorizontalSlider";
import { Puzzle } from "lucide-react";
import PuzzleBox from "../../Components/Puzzle";
import NotificationSlider from "../../Components/NotificationSlider";

const Home = ({darkMode, setDarkMode}) => {
  const activeTab = useSelector((state) => state.home.activeTab);
  const dispatch = useDispatch();

  // State for wallet selection & balance visibility
  const [selectedWallet, setSelectedWallet] = useState("Main Wallet");
  const [showBalance, setShowBalance] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

    const [showNotifications, setShowNotifications] = useState(false);
    const notificatio = [
      "New transaction received",
      "Price alert: Bitcoin up 5%",
      "System update scheduled",
  ];
  const [searchParams, setSearchParams] = useSearchParams();

 
      const searchCrypto = () => {
        if (searchTerm.trim() !== "") {
          navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
      };

      const handleSearch = (e) => {
        if (e.key === "Enter") {
          searchCrypto(); // ✅ Triggers search on Enter
        }
  };
 
    
  return (
    <div className=" mb-28 md:px-3 relative  lg:mt-16 px-6 ">
      <div className="z-0 text-lg">
        <BlurEffect
          color="#D661E8"
          className="w-72 h-72 absolute top- lg:top-20 right-16    bg-[#D661E8] blur-[500px]  md:blur-[400px] md:dark:blur-[400px] dark:blur-[600px] rounded-full"
        />
      </div>
      <div className="flex justify-between lg:hidden mt-8 px-2 items-center">
        <button className="  p-2  rounded-full bg-transparent">
          <NavLink to="/settings" className="flex items-center">
            <FaCog className="hover:scale-110 md:text-3xl text-2xl text- hover:rotate-90" />
          </NavLink>
        </button>
        <div className="p-2  rounded-full ">
          <MdOutlineManageSearch className="text-3xl hover:scale-110 md:text-3xl  hover:rotate-12" />
        </div>
      </div>
      <div className="flex items-center border-2 border-[#F4DAFB] mx-3 rounded-2xl pl-6 px-3 w-full py-2 lg:hidden mt-12  ">
        <FaSearch className="mr-2 text-2xl text-neutral-700" />
        <input
          type="text"
          className="w-full p-2 bg-transparent  focus:outline-none"
          placeholder="Search crypto for networks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch} // ✅ Works when pressing Enter
        />
        <button
          className="ml-2 px-4 py-2 bg-[#f4dafb]   text-[#d661e8] rounded-lg"
          onClick={searchCrypto} // ✅ Works when clicking the button
        >
          Search
        </button>
      </div>

      {/* Wallet Card */}
      <div className=" mb-8   mt-10 md:p-6 p-4 rounded-lg ">
        {/* Wallet Selector */}
        <div className="flex justify-between  items-center">
          <select
            className=" p-2 bg-[#f4dafb]   text-[#d661e8]  rounded-md focus:outline-none"
            value={selectedWallet}
            onChange={(e) => setSelectedWallet(e.target.value)}>
            <option>Main Wallet</option>
            <option>Wallet 2</option>
            <option>Wallet 3</option>
            <option>Wallet 4</option>
          </select>
          <div className="flex justify-center items-center md:text-2xl text-xl md:gap-6 gap-4">
            <FaRegCopy className="hover:scale-110 hover:rotate-12" />
            <RiQrScan2Line className="hover:scale-110 hover:rotate-12" />
            <button onClick={() => navigate("/notifications")}>
              <IoIosNotifications className="hover:scale-110 hover:rotate-12" />
            </button>
          </div>
        </div>

        {/* Balance Section */}
        <div className="flex justify-start mt-8 items-center md:my-10 my-4">
          <span className="text-2xl font-bold mr-5 text-neutral-500 dark:text-white">
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
        <div className="flex justify-between  mt-10">
          <button className="flex flex-col items-center   hover:scale-110 ">
            <FaPaperPlane className="text-2xl  mb-1" />{" "}
            <span className="text-sm ">Send</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 ">
            <FaDownload className="text-2xl mb-1" />{" "}
            <span className="text-sm">Receive</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 ">
            <FaRegCreditCard className="text-2xl mb-1" />{" "}
            <span className="text-sm">Buy</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 ">
            <BsCashCoin className="text-2xl mb-1" />{" "}
            <span className="text-sm">Sell</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 ">
            <FaHistory className="text-2xl mb-1" />{" "}
            <span className="text-sm">History</span>
          </button>
        </div>
      </div>
      <div>
        <NotificationSlider />
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-2 md:space-x-4  font-bold w-full justify-between mb-4">
        <div className="z-0 text-lg">
          <BlurEffect
            color="#D661E8"
            className="w-72 h-72 absolute bottom-0 left-16 md:dark:blur-[400px] lg:right-5 lg:bottom-0 dark:blur[600px]   bg-[#D661E8] md:blur-[300px] blur-[450px] rounded-full"
          />
        </div>
        {["CRYPTO", "ASSET", "NFT"].map((tab) => (
          <button
            key={tab}
            className={`px-8 py-3 rounded ${
              activeTab === tab
                ? " text-[#d661e8] cursor-pointer"
                : " text-neutral-400 cursor-pointer "
            }`}
            onClick={() => dispatch(setActiveTab(tab))}>
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className=" md:p-4 rounded    text-black dark:text-white">
        {activeTab === "CRYPTO" && <Crypto />}
        {activeTab === "ASSET" && <Asset />}
        {activeTab === "NFT" && <NFT />}
      </div>
      <a href="/#" className="">
        <h2 className="font-bold text-2xl text-transparent dark:to-[#f4dafb] from-[#d661e8] via-[#d661e8] to-black bg-clip-text bg-gradient-to-l dark:from-[#A06CC7] md:text-3xl text-center my-16">
          ADD & MANAGE CRYPTO
        </h2>
      </a>
    </div>
  );
};

export default Home;
