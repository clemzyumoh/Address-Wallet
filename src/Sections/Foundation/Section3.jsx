import React, { useState } from "react";
import img from "../../assets/logobg.png";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";


const Section3 = () => {
  // const packages = [
  //   {
  //     amount: "1 Coin",
  //     name: "LEAF SEED",
  //     des: "Basic Foundation Membership, Rootopia Game",
  //     btnColor: 
  //   },
  //   {
  //     amount: "50 Coins",
  //     name: "TWIG SEED",
  //     des: "Early access to some project updates",
  //   },
  //   {
  //     amount: "100 Coins",
  //     name: "BRANCH SEED",
  //     des: "Small % boost in passive earnings",
  //   },
  //   {
  //     amount: "1,000 Coins",
  //     name: "TRUNK SEED",
  //     des: "Higher priority in whitelists & launchpad",
  //   },
  //   {
  //     amount: "5,000 Coins",
  //     name: "ROOT SEED",
  //     des: "Exclusive NFT or VIP access to Deep Roots events",
  //   },
  //   {
  //     amount: "10,000 Coins",
  //     name: "DEEP ROOT SEED",
  //     des: "Max benefits, highest rewards & premium ecosystem access",
  //   },
  // ];
const packages = [
  {
    amount: "1 Coin",
    name: "LEAF SEED",
    borderColor: "border-green-500",

    des: "Basic Foundation Membership, Rootopia Game",
    btnColor: "bg-green-500 hover:bg-green-600",
    features: [
      { text: "Foundation Membership, Rootopia", status: true },
      { text: " Project updates", status: true },
      { text: "Small % boost in passive earnings", status: false },
      { text: " whitelists & launchpad", status: false },
      {
        text: "VIP access to Deep Roots events",
        status: false,
      },
      {
        text: "Benefits,Rewards & Ecosystem access",
        status: false,
      },
    ],
  },
  {
    amount: "50 Coins",
    borderColor: "border-blue-500",

    name: "TWIG SEED",
    des: "Early access to some project updates",
    btnColor: "bg-blue-500 hover:bg-blue-600",
    features: [
      { text: "Foundation Membership, Rootopia", status: true },
      { text: " Project updates", status: true },
      { text: "Small % boost in passive earnings", status: false },
      { text: " whitelists & launchpad", status: false },
      {
        text: "VIP access to Deep Roots events",
        status: false,
      },
      {
        text: "Benefits,Rewards & Ecosystem access",
        status: false,
      },
    ],
  },
  {
    amount: "100 Coins",
    name: "BRANCH SEED",
    borderColor: "border-yellow-500",

    des: "Small % boost in passive earnings",
    btnColor: "bg-yellow-500 hover:bg-yellow-600",
    features: [
      { text: "Foundation Membership, Rootopia", status: true },
      { text: " Project updates", status: true },
      { text: "Small % boost in passive earnings", status: true },
      { text: " whitelists & launchpad", status: false },
      {
        text: "VIP access to Deep Roots events",
        status: false,
      },
      {
        text: "Benefits,Rewards & Ecosystem access",
        status: false,
      },
    ],
  },
  {
    amount: "1,000 Coins",
    name: "TRUNK SEED",
    des: "Higher priority in whitelists & launchpad",
    btnColor: "bg-orange-500 hover:bg-orange-600",
    borderColor: "border-orange-500",
    features: [
      { text: "Foundation Membership, Rootopia", status: true },
      { text: " Project updates", status: true },
      { text: "Small % boost in passive earnings", status: true },
      { text: " whitelists & launchpad", status: true },
      {
        text: "VIP access to Deep Roots events",
        status: false,
      },
      {
        text: "Benefits,Rewards & Ecosystem access",
        status: false,
      },
    ],
  },
  {
    amount: "5,000 Coins",
    name: "ROOT SEED",
    borderColor: "border-red-500",

    des: "Exclusive NFT or VIP access to Deep Roots events",
    btnColor: "bg-red-500 hover:bg-red-600",
    features: [
      { text: "Foundation Membership, Rootopia", status: true },
      { text: " Project updates", status: true },
      { text: "Small % boost in passive earnings", status: true },
      { text: " whitelists & launchpad", status: true },
      {
        text: "VIP access to Deep Roots events",
        status: true,
      },
      {
        text: "Benefits,Rewards & Ecosystem access",
        status: false,
      },
    ],
  },
  {
    amount: "10,000 Coins",
    name: "DEEP ROOT SEED",
    des: "Max benefits, highest rewards & premium ecosystem access",
    borderColor: "border-purple-500",

    btnColor: "bg-purple-500 hover:bg-purple-600",
    features: [
      { text: "Foundation Membership, Rootopia", status: true },
      { text: " Project updates", status: true },
      { text: "Small % boost in passive earnings", status: true },
      { text: " whitelists & launchpad", status: true },
      {
        text: "VIP access to Deep Roots events",
        status: true,
      },
      {
        text: "Benefits,Rewards & Ecosystem access",
        status: true,
      },
    ],
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
            className={`relative bg-gray-200  rounded-lg ${pkg.borderColor} flex flex-col border-t-8 border-b-8 border- justify-between`}>
            <div className="absolute top-[120px] left-1/2  transform -translate-x-1/2 z-10">
              <img
                src={img}
                alt="{pkg.name}"
                className="w-20 h-20 rounded-full shadow-[2px_2px_5px_#ecb705,-2px_-2px_5px_#040f4c] dark:shadow-[2px_2px_2px_#040F4C,-2px_-2px_2px_#ecb705] "
              />
            </div>
            <div
              
              className={`flex justify-center ${pkg.btnColor} w-full pb-14 flex-col items-center`}>
              <div
                className={`font-bold text-center py-3 px-5 flex justify-center items-center  text-gray-900  dark:text-gray-900`}>
                <p className="text-xl font-bold text-gray-900  dark:text-gray-900">
                  {pkg.name}
                </p>
              </div>
              <div>
                <p
                  className={`text-4xl font-bold text-gray-900  dark:text-gray-900`}>
                  {pkg.amount}
                </p>
              </div>
            </div>
            <div className="text-center   pt-4 mt-4">
              {/* Features */}
              <ul className="space-y-2 m-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-900">
                    {feature.status ? (
                      <IoMdCheckmark className="text-green-500 text-2xl mr-2" />
                    ) : (
                      <FaXmark className="text-red-500 text-2xl mr-2" />
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`my-6 ${pkg.btnColor} text-white py-2 px-4 rounded-lg`}>
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
