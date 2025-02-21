import { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { LuChartColumnDecreasing } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";
import { LiaWalletSolid } from "react-icons/lia";
import { GoChevronDown } from "react-icons/go";
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
    <div className="w-full  px-2  lg:w-[40vw]">
      <div className="flex justify-between my-5  items-center mx-4">
        <div className="flex items-center gap-2">
          <FaCreditCard className="text-xl" />
          <span className="text-lg">Buy</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-[#f4dafb]  shadow text-[#d661e8]">
            <LuSettings2 className="text-xl" />
            <span className="">0.5%</span>
          </div>
          <IoIosLink className="text-xl" />
          <LuChartColumnDecreasing className="text-xl" />
        </div>
      </div>
      <div className="bg-gray-800  p-3 lg:m-5 rounded-md">
        {/* FROM Card */}
        <div className="relative w-full ">
          <div className=" bg-gray-900 text-white py-5 rounded-lg mb-6">
            <div className="flex justify-between mx-3 items-center  ">
              <p className="text-gray-400 dark:text-gray-300 font-semibold">
                From
              </p>
              <div className="flex items-center gap-2">
                <LiaWalletSolid className="text-xl" />
                <button
                  onClick={() => handleAmountChange(userBalances[fromCurrency])}
                  className="px-2 text-sm py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                  Max
                </button>
                <div className="flex items-center gap-2 py-1 px-2 text-sm  bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                  <span className="">50%</span>
                </div>
              </div>
            </div>

            <div className="flex text-white items-center py-4 px-3 rounded-2xl mt-8 bg-black w-full justify-between ">
              <div className=" bg-gray-800  rounded-2xl px-2 py-1">
                <select
                  value={fromCurrency}
                  onChange={(e) => {
                    setFromCurrency(e.target.value);
                    setAmount("");
                    setConvertedAmount("");
                  }}
                  className=" p-2 bg-transparent text-xl font-bold">
                  <option className="text-black" value="USDT">
                    USDT
                  </option>
                  <option className="text-black" value="USDC">
                    USDC
                  </option>
                </select>
              </div>

              <select
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className=" p-2 bg-transparent text-sm">
                <option className="text-black" value="">
                  Select Package
                </option>
                {packages[fromCurrency].map((pkg) => (
                  <option className="text-black" key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-xs mx-3 text-gray-200 mt-1">
              Balance: {userBalances[fromCurrency]} {fromCurrency}
            </p>
          </div>

          {/* Swap Icon (Rotates on Click) */}
          <div className="flex absolute top-4/9 md:left-2/4 left-2/5 justify-center my-2">
            <button
              onClick={reverseSwap}
              className={`p-3 bg-[#f4dafb]  rounded-full hover:bg-gray-300 transition-transform ${
                rotate ? "rotate-90" : "rotate-90"
              }`}>
              <GoArrowSwitch className="text-[#d661e8] text-3xl " />
            </button>
          </div>

          {/* TO Card */}
          <div className="bg-gray-900 text-white pt-5 rounded-lg">
            <div className="flex justify-between mx-4 mb-8 items-center">
              <p className="text-gray-400 dark:text-gray-300 font-semibold">
                To
              </p>
              <div className="flex items-center gap-2">
                <LiaWalletSolid className="text-xl" />
                <button
                  onClick={() => handleAmountChange(userBalances[fromCurrency])}
                  className="px-2 text-sm py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                  Max
                </button>
                <div className="flex items-center  py-1 px-2 text-sm bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                  <span className="">50%</span>
                </div>
              </div>
            </div>

            <div className="flex rounded-2xl py-5 px-4 gap-5 justify-between w-full bg-black items-center mt-2">
              <div className="w-[30vw]   bg-gray-800 rounded-2xl  text-xl p-3 ">
                <select className=" px-3 font-bold" disabled>
                  <option value="DRC">DRC</option>
                </select>
              </div>

              <input
                type="number"
                value={convertedAmount}
                className=" w-[30vw] p-2 bg-transparent text-sm font-bold"
                disabled
              />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <button
          className="w-full hover:scale-105  bg-gradient-to-bl to-[#f4dafb]  from-[#d8eafa] via-[#f4dafb]  hover:from-[#d8eafa] hover:to-[#f4dafb]  dark:text-[#d661e8]  font-bold p-2 rounded mt-5 transition"
          onClick={() =>
            alert(`Swapped ${amount} ${fromCurrency} to ${convertedAmount} DRC`)
          }>
          Continue
        </button>
      </div>
    </div>
  );
};

export default SwapCrypto;
