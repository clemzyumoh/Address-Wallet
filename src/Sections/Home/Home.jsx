


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
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
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
  //const activeTab = useSelector((state) => state.home.activeTab);
  const dispatch = useDispatch();

  // State for wallet selection & balance visibility
  const [selectedWallet, setSelectedWallet] = useState("Main Wallet");
  const [showBalance, setShowBalance] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("CRYPTO"); // Default active tab
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
    <div className=" mb-28  flex flex-col items-center justify-center w-full relative dark:bg-gradient-to-bl dark:from-black dark:to-black dark:via-black bg-gradient-to-bl from-[#E8EBFF] to-white   via-[#EBF2FD] lg:mt-16 ">
      <div className="z-0 text-lg">
        <BlurEffect
          color="#F4DAFB"
          className="w-32 h-32 absolute top-0 lg:top-20 hidden dark:hidden   bg-[#F4DAFB] blur-[00px]  md:blur-[400px] md:dark:blur-[400px] dark:blur-[500px] rounded-full"
        />
      </div>
      <div className="z-0 text-lg">
        <BlurEffect
          color="#D8eafa"
          className="w-72 h-72 absolute top- lg:top-20 hidden   bg-[#D8eafa] blur-[500px]  md:blur-[400px] md:dark:blur-[400px] dark:blur-[600px] rounded-full"
        />
      </div>
      <div className="flex justify-between lg:hidden w-full px-2 items-center">
        <button className="  p-2  rounded-full bg-transparent">
          <NavLink to="/settings" className="flex items-center">
            <FaCog className="hover:scale-110 md:text-3xl text-2xl text- hover:rotate-90" />
          </NavLink>
        </button>
        <h1 className="">Home</h1>
        <div className="p-2  rounded-full ">
          <MdOutlineManageSearch className="text-3xl hover:scale-110 md:text-3xl  hover:rotate-12" />
        </div>
      </div>
      <div className="flex items-center dark:border-2 border-neutral-500 w-[90vw] shadow dark:border-[#B0E6F8]/80 justify-between   rounded-2xl pl-3 px-2  py-1 lg:hidden mt-2  ">
        <div className="flex justify-center items-center gap-3">
          <FaSearch className="mr-2 text-2xl text-neutral-700" />
          <input
            type="text"
            className="w-full p- bg-transparent  focus:outline-none"
            placeholder="Search crypto for networks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch} // ✅ Works when pressing Enter
          />
        </div>
        <button
          className="ml-2 px-2 py-1 bg-[#E8EBFF] dark:bg-transparent dark:text-[#b0e6f8] shadow  hover:scale-105   rounded-lg"
          onClick={searchCrypto} // ✅ Works when clicking the button
        >
          Search
        </button>
      </div>

      {/* Wallet Card */}
      <div className=" mb-8  relative mt-6 md:p-6 lg:w-[60vw] px-3  flex justify-between  items-center flex-col w-full ">
        {/* Wallet Selector */}
        <div className="flex w-full justify-between">
          <div className="flex w-full j items-center">
            <select
              className=" p-2  hover:scale-105 font-bold  flex  rounded-md focus:outline-none"
              value={selectedWallet}
              onChange={(e) => setSelectedWallet(e.target.value)}>
              <option>Main Wallet</option>
              <option>Wallet 2</option>
              <option>Wallet 3</option>
              <option>Wallet 4</option>
            </select>
          </div>
          <div className="flex justify-center items-center md:text-2xl text-xl md:gap-6 lg:ml-[550px] md:ml-96 ml-24 gap-2 w-full">
            <FaRegCopy className="hover:scale-110 hover:rotate-12" />
            <RiQrScan2Line className="hover:scale-110 hover:rotate-12" />
            <button onClick={() => navigate("/notifications")}>
              <IoIosNotifications className="hover:scale-110 hover:rotate-12" />
            </button>
          </div>
        </div>

        {/* Balance Section */}
        <div className="flex justify-start w-full  items-center md:my-10 ml-6">
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
        <div className="flex justify-between w-full  items-center  mt-5 px-2">
          <div className="flex flex-col items-center  hover:scale-110 ">
            <div className="flex justify-center items-center p-3 mb-2  shadow dark:-2 dark:border-[#B0E6F8] bg-[#E8EBFF] dark:bg-transparent rounded-full ">
              <FaPaperPlane className="text-xl  md:text-2xl " />
            </div>{" "}
            <span className="text-sm ">Send</span>
          </div>
          <button className="flex flex-col items-center  hover:scale-110 ">
            <div className="flex justify-center items-center p-3 mb-2 shadow dark:brder-2 dark:border-[#B0E6F8] bg-[#E8EBFF] dark:bg-transparent rounded-full ">
              <FaDownload className="text-xl md:text-2xl " />
            </div>{" "}
            <span className="text-sm">Receive</span>
          </button>
          <button className="flex flex-col items-center  hover:scale-110 ">
            <div className="flex justify-center items-center p-3 mb-2 shadow dark:-2 dark:border-[#B0E6F8] bg-[#E8EBFF] dark:bg-transparent rounded-full ">
              <FaCreditCard className="text-xl md:text-2xl  " />
            </div>{" "}
            <span className="text-sm">Buy</span>
          </button>
          <button className="flex flex-col items-center  hover:scale-110 ">
            <div className="flex justify-center items-center p-3 mb-2 shadow dark:boder-2 dark:border-[#B0E6F8] bg-[#E8EBFF] dark:bg-transparent rounded-full ">
              <BsCashCoin className="text-xl md:text-2xl  " />
            </div>{" "}
            <span className="text-sm">Sell</span>
          </button>
          <button className="flex flex-col items-center hover:scale-110 ">
            <div className="flex justify-center items-center p-3 dar dark:border-[#B0E6F8] mb-2 shadow bg-[#E8EBFF] dark:bg-transparent rounded-full ">
              <FaHistory className="text-xl md:text-2xl  " />
            </div>{" "}
            <span className="text-sm">History</span>
          </button>
        </div>
        <div className="z-0 text-lg">
          <BlurEffect
            color="#D8EAFA"
            className="w-72 h-72 absolute dark:hidden bottom-0 left-16 md:dark:blur-[200px] lg:right-5 lg:bottom-0 dark:blur[400px]   bg-[#D8EAFA] md:blur-[100px] blur-[300px] rounded-full"
          />
        </div>
        <div className="z-0 text-lg">
          <BlurEffect
            color="#D661E8"
            className="w-72 h-72 absolute bottom-0 lg:top-20 left-16 hidden   bg-[#D661E8] blur-[500px]  md:blur-[400px] md:dark:blur-[400px] dark:blur-[600px] rounded-full"
          />
        </div>
      </div>
      <div>
        <NotificationSlider />
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-2 md:space-x-4  font-bold w-full justify-between mb-4">
        <div className="z-0 text-lg">
          <BlurEffect
            color="#D8EAFA"
            className="w-72 h-72 absolute bottom-0 dark:hidden left-16 md:dark:blur-[350px] lg:right-5 lg:bottom-0 dark:blur[200px]   bg-[#D8EAFA] md:blur-[100px] blur-[300px] rounded-full"
          />
        </div>
        {["CRYPTO", "ASSET", "NFT"].map((tab) => (
          <button
            key={tab}
            className={`px-8 py-3 w-full rounded ${
              activeTab === tab
                ? " text-black dark:text-[#B0E6F8] cursor-pointer"
                : " text-neutral-400 cursor-pointer "
            }`}
            onClick={() => dispatch(setActiveTab(tab))}>
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className=" md:p-4 rounded    text-black dark:text-white lg:w-[70vw] w-full">
        {activeTab === "CRYPTO" && <Crypto />}
        {activeTab === "ASSET" && <Asset />}
        {activeTab === "NFT" && <NFT />}
      </div>
      <a href="/#" className="">
        <h2 className="font-bold text-2xl text-transparent dark:to-[#f4dafb] from-[#CA98D9] via to-[#26282E] bg-clip-text bg-gradient-to-l dark:from-[#B0E6F8] md:text-3xl text-center my-16">
          ADD & MANAGE CRYPTO
        </h2>
      </a>
    </div>
  );
};

export default Home;
