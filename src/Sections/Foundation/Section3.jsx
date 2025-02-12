import React, { useState } from "react";
import img from "../../assets/logobg.png";


const Section3 = () => {
  const packages = [
    {
      amount: "1 Coin",
      name: "LEAF SEED",
      des: "Basic Foundation Membership, Rootopia Game",
    },
    {
      amount: "50 Coins",
      name: "TWIG SEED",
      des: "Early access to some project updates",
    },
    {
      amount: "100 Coins",
      name: "BRANCH SEED",
      des: "Small % boost in passive earnings",
    },
    {
      amount: "1,000 Coins",
      name: "TRUNK SEED",
      des: "Higher priority in whitelists & launchpad",
    },
    {
      amount: "5,000 Coins",
      name: "ROOT SEED",
      des: "Exclusive NFT or VIP access to Deep Roots events",
    },
    {
      amount: "10,000 Coins",
      name: "DEEP ROOT SEED",
      des: "Max benefits, highest rewards & premium ecosystem access",
    },
  ];

  const perks = [
    "1 Coin: Basic Foundation Membership, Rootopia Game",
    "50 Coins: Early access to some project updates",
    "100 Coins: Small % boost in passive earnings",
    "1,000 Coins: Higher priority in whitelists & launchpad",
    "5,000 Coins: Exclusive NFT or VIP access to Deep Roots events",
    "10,000 Coins: Max benefits, highest rewards & premium ecosystem access",
  ];

  return (
    <section className="p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 dark:text-gray-100 ">
        Seeding Packages
      </h2>

      {/* Seeding Packages */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-12 mb-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-[#040f4c] backdrop-blur-md  transition-opacity dark:bg-transparent  dark:shadow-[2px_2px_2px_#040F4C,-2px_-2px_2px_#040F4C] rounded-lg p-6 pt-16 flex flex-col justify-between">
            <div className="absolute top-[-40px] left-1/2  transform -translate-x-1/2 z-10">
              <img
                src={img}
                alt="{pkg.name}"
                className="w-20 h-20 rounded-full shadow-[2px_2px_5px_#ecb705,-2px_-2px_5px_#040f4c] dark:shadow-[2px_2px_2px_#040F4C,-2px_-2px_2px_#ecb705] "
              />
            </div>
            <div className="text-center mb-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-100">
                {pkg.name}
              </h3>
              <p className="text-gray-400 dark:text-gray-400">{pkg.des}</p>
            </div>
            <div className="text-center border-t border-[#ecb705]  pt-4 mt-4">
              <p className="text-xl font-bold text-gray-100 dark:text-gray-100">
                {pkg.amount} / month
              </p>
              <button className="my-6 bg-gradient-to-l from-[#081F3E] to-[#ECB705] text-white py-2 px-4 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

   
    </section>
  );
};

export default Section3;
