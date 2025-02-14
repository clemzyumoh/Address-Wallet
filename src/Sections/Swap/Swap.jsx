// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaArrowDown } from "react-icons/fa";

// const Swap = () => {
//   const [fromCurrency, setFromCurrency] = useState("BTC");
//   const [toCurrency, setToCurrency] = useState("ETH");
//   const [amount, setAmount] = useState("");
//   const [convertedAmount, setConvertedAmount] = useState("");

//   const handleSwap = () => {
//     // Swap logic placeholder (you will later integrate an API for real prices)
//     setConvertedAmount((amount * 0.05).toFixed(4)); // Example conversion rate
//   };

//   return (
//     <motion.div
//       className="p-6 bg-white mx-5 mt-10 rounded-lg dark:bg-gray-800 max-w-md md:mx-auto"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}>
//       <h2 className="text-xl font-semibold mb-4">Swap Crypto</h2>

//       {/* From Currency Input */}
//       <div className="mb-4">
//         <label className="block text-gray-700">From</label>
//         <select
//           value={fromCurrency}
//           onChange={(e) => setFromCurrency(e.target.value)}
//           className="w-full p-2 border rounded">
//           <option value="BTC">Bitcoin (BTC)</option>
//           <option value="ETH">Ethereum (ETH)</option>
//           <option value="USDT">Tether (USDT)</option>
//         </select>
//       </div>

//       {/* Swap Icon */}
//       <div className="flex justify-center my-2">
//         <FaArrowDown className="text-gray-500 text-2xl" />
//       </div>

//       {/* To Currency Input */}
//       <div className="mb-4">
//         <label className="block text-gray-700">To</label>
//         <select
//           value={toCurrency}
//           onChange={(e) => setToCurrency(e.target.value)}
//           className="w-full p-2 border rounded">
//           <option value="BTC">Bitcoin (BTC)</option>
//           <option value="ETH">Ethereum (ETH)</option>
//           <option value="USDT">Tether (USDT)</option>
//         </select>
//       </div>

//       {/* Amount Input */}
//       <div className="mb-4">
//         <label className="block text-gray-700">Amount</label>
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full p-2 border rounded"
//           placeholder="Enter amount"
//         />
//       </div>

//       {/* Converted Amount Display */}
//       {convertedAmount && (
//         <p className="text-green-600 text-sm mb-4">
//           Estimated: {convertedAmount} {toCurrency}
//         </p>
//       )}

//       {/* Swap Button */}
//       <button
//         className="w-full hover:scale-105  text-neutral-900  bg-neutral-300 font-bold  p-2 rounded transition"
//         onClick={handleSwap}>
//         Swap
//       </button>
//     </motion.div>
//   );
// };

// export default Swap;

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
  const totalSupply = 26200000;
  const allocations = [
    { name: "Distributed Over 25years", value: 16000000, color: "#3cba54" },
    { name: "Seeding & Rewards", value: 4000000, color: "#F4c20d" },
    { name: "Vesting 2-4 years team", value: 4000000, color: "#4885ed" },
    { name: "3 Exchange Listing 2026", value: 1000000, color: "#900ea7" },
    { name: "Foundation Rewards", value: 1200000, color: "#db3236" },
  ];

  return (
    <motion.div
      className="p-6 bg-white mb-32 mt-20 w-full flex-col md:flex-row flex items-center gap-28 justify-around rounded-lg dark:bg-gray-800  md:mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-10">Swap Crypto</h2>

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

      <div className="w-full">
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
        <div className="mt-4">
          {allocations.map((allocation, index) => (
            <div key={index} className="flex items-center mb-2">
              <span
                className="inline-block w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: allocation.color }}></span>
              <span className="text-gray-700 dark:text-gray-300">
                {allocation.name}:
              </span>
              <span className="ml-auto text-gray-900 dark:text-gray-100 font-semibold">
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
