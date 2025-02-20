

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

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

  return (
    <motion.div
      className="md:p-6 p-2 bg-white mb-32 mt-8 lg:mt-20 w-full flex-col lg:flex-row flex items-center md:gap-10 lg:gap-10 justify-around rounded-lg dark:bg-gray-800  md:mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="w-full shadow-2xl p-10 lg:w-[50vw]">
        <h2 className="text-xl font-semibold lg:mb-20 mb-10">Swap Crypto</h2>

        {/* From Currency Input */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-2 border dark:text-neutral-200 rounded">
            <option value="BTC" className="dark:text-neutral-900">
              Bitcoin (BTC)
            </option>
            <option value="ETH" className="dark:text-neutral-900">
              Ethereum (ETH)
            </option>
            <option value="USDT" className="dark:text-neutral-900">
              Tether (USDT)
            </option>
          </select>
        </div>

        {/* Swap Icon */}
        <div className="flex justify-center my-2">
          <FaArrowDown className="text-gray-500 text-2xl" />
        </div>

        {/* To Currency Input */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-2 border rounded">
            <option value="BTC" className="dark:text-neutral-900">
              Bitcoin (BTC)
            </option>
            <option value="ETH" className="dark:text-neutral-900">
              Ethereum (ETH)
            </option>
            <option value="USDT" className="dark:text-neutral-900">
              Tether (USDT)
            </option>
          </select>
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter amount"
          />
        </div>

        {/* Converted Amount Display */}
        {convertedAmount && (
          <p className="text-green-600 text-sm mb-4">
            Estimated: {convertedAmount} {toCurrency}
          </p>
        )}

        {/* Swap Button */}
        <button
          className="w-full hover:scale-105 text-neutral-900 bg-neutral-300 font-bold p-2 rounded transition"
          onClick={handleSwap}>
          Swap
        </button>
      </div>

      <div className="w-full md:mb-20">
        {/* Token Allocation Section */}
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
        </div>

        {/* Allocation Details */}
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
      </div>
    </motion.div>
  );
};

export default Swap;
