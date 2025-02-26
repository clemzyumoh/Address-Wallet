import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import AnimatedText from "../../Components/AnimationText";
import AnimateItem from "../../Components/AnimationItem";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import SwapCrypto from "../../Components/SwapCrypto";
import TradingStats from "../../Components/TradingStat";
import CryptoLiveChart from "../../Components/TradingStat";
//import img from "../../assets/Rectangle 11.png"
import img from "../../assets/Graph.png";
import logo from "../../assets/logobg.png";
import NotificationSlider from "../../Components/NotificationSlider";
import BlurEffect from "../../Components/BlurEffect";
import { GiChart } from "react-icons/gi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { LiaWalletSolid } from "react-icons/lia";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoIosQrScanner } from "react-icons/io";
import { RiSettingsLine } from "react-icons/ri";
import { BsArrow90DegLeft } from "react-icons/bs";
import { BsArrow90DegRight } from "react-icons/bs";
import { LuChartNoAxesColumn } from "react-icons/lu";
import fx from "../../assets/fx.png";
import fx1 from "../../assets/fx1.png";
import TokenAllocation from "../../Components/TokenAllocation";
import TokenAllocationDashboard from "../../Components/TokenAllocation";
import TokenAllocation3D from "../../Components/TokenAllocation";
import Dashboard from "../../Components/DashBoard";
import TokenAlloca from "../../Components/DashBoard";
import TokenDashboard from "../../Components/DashBoard";
import TokenlocationDashboard from "../../Components/DashBoard";

const Swap = () => {
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("ETH");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const handleSwap = () => {
    // Swap logic placeholder (you will later integrate an API for real prices)
    setConvertedAmount((amount * 0.05).toFixed(4)); // Example conversion rate
  };

  // Token Allocation Data
  const totalSupply = 100000000;
  const allocations = [
    { name: "Distributed Over 41years", value: 60000000, color: "#3cba54" },
    { name: "Vesting 3-5 years team", value: 20000000, color: "#4885ed" },
    { name: "Development $ Innovation", value: 8000000, color: "#F4c20d" },
    { name: "Seed & Private Rounds", value: 4000000, color: "#14B8A6" },
    { name: "Marketing & Partnership", value: 3000000, color: "#F97316" },

    {
      name: "Ecosystem Growth(Grants,Hackathons)",
      value: 2000000,
      color: "#95ed48",
    },
    { name: "Exchange Listing (2026)", value: 1000000, color: "#6366F1" },

    { name: "Foundation Rewards", value: 1000000, color: "#db3236" },
    { name: "One year ICO", value: 500000, color: "#6a0ea7" },
    { name: "GameFi & Education Rewards", value: 500000, color: "#EC4899" },
  ];
  const navigate = useNavigate();

  return (
    <motion.div
      className="md:p-6 p-2 mb-32  lg:mt-20 w-full flex-col relative dark:bg-gradient-to-bl dark:from-black dark:to-black dark:via-black bg-gradient-to-bl from-[#E8EBFF] to-white   via-[#EBF2FD]  flex items-center md:gap-10 lg:gap-10 justify-around rounded-lg   md:mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <h2 className="font-bold text-2xl text-transparent mt-4 dark:to-[#f4dafb] from-[#CA98D9] via to-[#26282E] bg-clip-text bg-gradient-to-l dark:from-[#B0E6F8] md:text-3xl text-center">
        SWAP
      </h2>
      <div className="flex absolute top-1 justify-between mx-4 mb- w-full lg:hidden px-2 items-center">
        <div className=" w-10 h-10">
          <img src={logo} alt="" className="" />
        </div>
        <div className="z-0 text-lg">
          <BlurEffect
            color="#DCEDF7"
            className="w-72 h-50 absolute top-0 lg:top-20 right-0 dark:hidden   bg-[#DCEDF7] blur-[200px]  md:blur-[400px] md:dark:blur-[400px] dark:blur-[600px] rounded-full"
          />
        </div>
        <div className="z-0 text-lg">
          <BlurEffect
            color="#DCEDF7"
            className="w-72 h-72 absolute top-[500px] lg:top-20 right-0 dark:hidden   bg-[#DCEDF7] blur-[300px]  md:blur-[400px] md:dark:blur-[400px] dark:blur-[600px] rounded-full"
          />
        </div>

        <div className="flex justify-center items-center lg:hidden gap-4">
          <button className="  p-2 w-full rounded-full ">
            <NavLink to="/settings" className="flex items-center">
              <FaCog className="hover:scale-110 md:text-2xl text-xl  hover:rotate-90" />
            </NavLink>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-[90vw] md:w-full gap-1 lg:flex-row flex-col">
        <div className="flex items-center justify-center  lg:w-full flex-col gap-2">
          <div className="flex justify-between items-center w-full bg-white dark:bg-transparent shadow rounded-2xl py-3 flex-col">
            <div className="flex justify-between w-full mb-2 px-2 items-center">
              <div className="flex items-center gap-5 bg-[#EBF2FD] shadow dark:bg-gray-900 py-2 px-3  rounded-lg">
                <span className="text-[12px]">DRC/USDT</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#EBF2FD] dark:bg-gray-900 text-[12px]  shadow py-2 px-3  rounded-lg gap-3">
                  <span className="">Chart</span>
                  <HiArrowTrendingUp className="text-sm"/>
                </div>
                <div className="flex items-center bg-[#EBF2FD] text-[12px] shadow dark:bg-gray-900 py-2 px-3  rounded-lg gap-3">
                  <span className="">Trade</span>
                  <GiChart className="text-sm" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center px-4 gap-3 items-center mb-5 text-sm flex-col">
              <div className="flex w-full text-sm justify-between items-center">
                <div className="">
                  <h2>DRC/USDT </h2>
                </div>

                <div className=" flex items-center gap-2">
                  <h2 className="text-gray-500 "> 24 HIGH</h2>
                  <span className="ml-2">123,02</span>
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="">
                  <h2>PRICE </h2>
                </div>

                <div className="flex items-center gap-2">
                  <h2 className="text-gray-500"> 24 LOW</h2>
                  <span className="ml-2">103,11</span>
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="">
                  <h2>% </h2>
                </div>

                <div className="flex gap-2 items-center">
                  <h2 className="text-gray-500"> 24 VOL</h2>
                  <span className="ml-2">200,1 M</span>
                </div>
              </div>
            </div>

            <div className="flex items-center  px-3 justify-between w-full">
              <div className="flex text-md items-center gap-3">
                <p>15m</p>
                <LuChartNoAxesColumn />
                <img src={fx} alt="" className="w-5 h-5 dark:hidden" />
                <img src={fx1} alt="" className="w-5 h-5 dark:flex hidden" />
              </div>
              <div className="flex items-center text-md gap-3">
                <BsArrow90DegLeft />
                <BsArrow90DegRight />
              </div>
              <div className="flex  text-md items-center gap-3">
                <RiSettingsLine />
                <IoIosQrScanner />
                <MdOutlinePhotoCamera />
              </div>
            </div>
          </div>
          <div className="bg-black  rounded-2xl">
            <img src={img} alt="" className="" />
          </div>
        </div>
        <SwapCrypto />
      </div>

      <NotificationSlider />

      {/*<div className="w-full md:mb-20">
        {/* Token Allocation Section *
        <h2 className="text-xl font-semibold my-6">Token Allocation</h2>
        <div className="flex relative justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={allocations}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={50}
                label>
                {allocations.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-28 flex justify-center items-center text-lg font-bold">
            <span>{totalSupply.toLocaleString()}</span>
          </div>
        </div>*/}

      {/* Allocation Details *
        <div className="mt-4 text-sm md:text-xl">
          {allocations.map((allocation, index) => (
            <div
              key={index}
              className="flex items-center  justify-between mb-2">
              <div className="flex justify-center items-center">
                <span
                  className="inline-block w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: allocation.color }}></span>
                <span className="text-gray-700 dark:text-gray-300">
                  {allocation.name}:
                </span>
              </div>
              <span className=" text-gray-900 dark:text-gray-100 md:font-semibold">
                {allocation.value.toLocaleString()} (
                {((allocation.value / totalSupply) * 100).toFixed(2)}%)
              </span>
            </div>
          ))}
        </div>
      </div>*/}
      <TokenAllocation />
    </motion.div>
  );
};

export default Swap;
