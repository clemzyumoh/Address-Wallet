import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import img from "../assets/logobg.png";

const assets = [
  {
    name: "Deeproots",
    image: img,
    price: "$27,000",
    piece: "30 DRT",
    usd: "$13,500",
  },
  {
    name: "TelexCoin",
    image: img,
    price: "$1,800",
    piece: "2 TC",
    usd: "$3,600",
  },
  { name: "Banana", image: img, price: "$230", piece: "10 BNB", usd: "$2,300" },
  { name: "XRP", image: img, price: "$0.50", piece: "500 XRP", usd: "$250" },
  { name: "Solana", image: img, price: "$20", piece: "50 SOL", usd: "$1,000" },
];

const AssetSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleAssets = showAll ? assets : assets.slice(0, 3);

  return (
      <section className="md:p-6 px-2 md:mb-20 mb-32 pb-10
    ">
      <h2 className="text-3xl md:text-4xl md:text-left text-center my-10 font-bold text-gray-900  dark:text-gray-100">
        Asset Holdings
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-between items-center text-gray-500 font-semibold mb-2">
          <p>Crypto</p>
          <p>Price</p>
          <p>Assets</p>
        </div>
        {visibleAssets.map((asset, index) => (
          <div
            key={index}
            className="flex justify-between  items-center bg-white md:p-4 p-2 rounded-lg dark:bg-gray-800">
            <div className="flex items-center md:space-x-4 space-x-2">
              <img
                src={asset.image}
                alt={asset.name}
                className="w-10 h-10 rounded-full shadow-[2px_2px_5px_#ecb705,-2px_-2px_5px_#040f4c] dark:shadow-[2px_2px_2px_#040F4C,-2px_-2px_2px_#ecb705]"
              />
              <div>
                <p className="text-gray-900 font-bold dark:text-gray-100">
                  {asset.name}
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-gray-900 font-semibold dark:text-gray-100">
                {asset.price}
              </p>
            </div>

            <div className="">
              <p className="text-gray-900 font-semibold dark:text-gray-100">
                {asset.usd}
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                {asset.piece}
              </p>
            </div>
          </div>
        ))}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-green-600 hover:underline flex items-center justify-center">
          {showAll ? "Show Less" : "Show More"}
          {showAll ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
    </section>
  );
};

export default AssetSection;
