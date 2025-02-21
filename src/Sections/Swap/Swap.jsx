

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
import logo from "../../assets/logobg.png"
import NotificationSlider from "../../Components/NotificationSlider";
import BlurEffect from "../../Components/BlurEffect";

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
      className="md:p-6 p-2 mb-32 mt-8 lg:mt-20 w-full flex-col relative  flex items-center md:gap-10 lg:gap-10 justify-around rounded-lg   md:mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="flex justify-between mx-4 mb-12 w-full lg:hidden px-2 items-center">
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
              <FaCog className="hover:scale-110 md:text-2xl text-xl dark:text-[#f4dafb] text-[#d661e8] hover:rotate-90" />
            </NavLink>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-10 lg:flex-row flex-col">
        <div className="flex justify-between items-center w-full flex-col">
          <div className="w-full flex justify-center px-4 gap-3 items-center mb-5 font-bold flex-col">
            <div className="flex w-full justify-between items-center">
              <div className="">
                <h2>DRC/USDT </h2>
              </div>

              <div className="">
                <h2>
                  {" "}
                  24 HIGH <span className="ml-2">123,02</span>
                </h2>
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="">
                <h2>PRICE </h2>
              </div>

              <div className="">
                <h2>
                  {" "}
                  24 LOW
                  <span className="ml-2">103,11</span>
                </h2>
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="">
                <h2>% </h2>
              </div>

              <div className="">
                <h2>
                  {" "}
                  24 VOL <span className="ml-2">200,1 M</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="bg-black rounded-2xl">
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
    </motion.div>
  );
};

export default Swap;
