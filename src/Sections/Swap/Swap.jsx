import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Swap = () => {
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("ETH");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const handleSwap = () => {
    // Swap logic placeholder (you will later integrate an API for real prices)
    setConvertedAmount((amount * 0.05).toFixed(4)); // Example conversion rate
  };

  return (
    <motion.div
      className="p-6 bg-white mx-5 rounded-lg dark:bg-gray-800 dark:shadow-[#24aebb] shadow-[2px_2px_2px_#24aebb] max-w-md md:mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <h2 className="text-xl font-semibold mb-4">Swap Crypto</h2>

      {/* From Currency Input */}
      <div className="mb-4">
        <label className="block text-gray-700">From</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-full p-2 border rounded">
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="USDT">Tether (USDT)</option>
        </select>
      </div>

      {/* Swap Icon */}
      <div className="flex justify-center my-2">
        <FaArrowDown className="text-gray-500 text-2xl" />
      </div>

      {/* To Currency Input */}
      <div className="mb-4">
        <label className="block text-gray-700">To</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-full p-2 border rounded">
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="USDT">Tether (USDT)</option>
        </select>
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Amount</label>
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
        className="w-full hover:scale-105 text-neutral-700  shadow-[2px_2px_2px_#24aebb] hover:shadow-[2px_2px_2px_#24aebb,-2px_-2px_2px_#24aebb] bg-transparent font-bold dark:text-neutral-300 p-2 rounded transition"
        onClick={handleSwap}>
        Swap
      </button>
    </motion.div>
  );
};

export default Swap;
