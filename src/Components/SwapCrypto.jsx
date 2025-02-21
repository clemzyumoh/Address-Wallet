import { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";

const SwapCrypto = () => {
  const [fromCurrency, setFromCurrency] = useState("USDT");
  const [toCurrency, setToCurrency] = useState("DRC");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isReversed, setIsReversed] = useState(false);
  const [rotate, setRotate] = useState(false);

  // User Balances
  const userBalances = {
    USDT: 500,
    USDC: 1000,
  };

  // Conversion Rates
  const conversionRates = {
    USDT: 1 / 500, // 1 DRC = 500 USDT
    USDC: 1 / 600, // 1 DRC = 600 USDC
  };

  // Packages for Selection
  const packages = {
    USDT: [100, 200, 300, 400, 500],
    USDC: [120, 240, 360, 480, 600],
  };

  // Handle Amount Change & Live Conversion
  const handleAmountChange = (value) => {
    setAmount(value);
    setConvertedAmount(value * conversionRates[fromCurrency]);
  };

  // Handle Swap Reversal
  const reverseSwap = () => {
    setIsReversed(!isReversed);
    setRotate(!rotate);
    setFromCurrency(fromCurrency === "USDT" ? "USDC" : "USDT");
    setAmount("");
    setConvertedAmount("");
  };

  return (
    <div className="w-full py-8 px-8 lg:w-[50vw]">
      <h2 className="text-xl font-semibold lg:mb-10 mb-5">Swap Token</h2>

      {/* FROM Card */}
      <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300 font-semibold">From</p>
          <button
            onClick={() => handleAmountChange(userBalances[fromCurrency])}
            className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
            Max
          </button>
        </div>

        <div className="flex items-center mt-2">
          <select
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.target.value);
              setAmount("");
              setConvertedAmount("");
            }}
            className="w-1/3 p-2 bg-transparent text-xl font-bold">
            <option className="text-black" value="USDT">USDT</option>
            <option className="text-black" value="USDC">USDC</option>
          </select>

          <select
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="w-2/3 p-2 bg-transparent text-xl  font-bold">
            <option className="text-black" value="">Select Package</option>
            {packages[fromCurrency].map((pkg) => (
              <option className="text-black" key={pkg} value={pkg}>
                {pkg}
              </option>
            ))}
          </select>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Balance: {userBalances[fromCurrency]} {fromCurrency}
        </p>
      </div>

      {/* Swap Icon (Rotates on Click) */}
      <div className="flex justify-center my-2">
        <button
          onClick={reverseSwap}
          className={`p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-transform ${
            rotate ? "rotate-90" : "rotate-90"
          }`}>
          <GoArrowSwitch className="text-gray-500 text-3xl " />
        </button>
      </div>

      {/* TO Card */}
      <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300 font-semibold">To</p>
        </div>

        <div className="flex items-center mt-2">
          <select
            className="w-1/3 p-2 bg-transparent text-xl mr-8 font-bold"
            disabled>
            <option value="DRC">DRC</option>
          </select>

          <input
            type="number"
            value={convertedAmount}
            className="w-2/3 p-2 bg-transparent text-xl font-bold"
            disabled
          />
        </div>
      </div>

      {/* Swap Button */}
      <button
        className="w-full hover:scale-105 text-neutral-900 bg-neutral-300 font-bold p-2 rounded mt-5 transition"
        onClick={() =>
          alert(`Swapped ${amount} ${fromCurrency} to ${convertedAmount} DRC`)
        }>
        Swap
      </button>
    </div>
  );
};

export default SwapCrypto;
