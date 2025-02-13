// import React, { useState } from "react";
import img from "../../assets/logobg.png";
// const FoundationRewards = () => {
//   const [showMore, setShowMore] = useState(false);

//   // Mock data for the 9 sections
//   const sections = Array.from({ length: 9 }, (_, i) => ({
//     id: i + 1,
//     icon: "../../assets/logobg.png",
//     project: `Project ${i + 1}`,
//     progress: `${(i + 1) * 10}%`,
//     rewards: `$${(i + 1) * 100}`,
//   }));

//   // Toggle show more or less
//   const visibleSections = showMore ? sections : sections.slice(0, 5);

//   return (
//     <section className="p-6">
//       <h1 className="text-3xl w-full font-bold text-gray-900 dark:text-gray-100 mb-4">
//         Foundation Activation Rewards
//       </h1>

//       {/* Card */}
//       <div className="bg-white w-full dark:bg-gray-800 rounded-2xl shadow-lg p-6">
//         {/* Card Header */}
//         <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
//           <span className="font-semibold text-gray-700 dark:text-gray-300">
//             Projects
//           </span>
//           <span className="font-semibold text-gray-700 dark:text-gray-300">
//             Progress
//           </span>
//           <span className="font-semibold text-gray-700 dark:text-gray-300">
//             Rewards
//           </span>
//         </div>

//         {/* Sections */}
//         <div className=" w-full space-y-4">
//           {visibleSections.map((section) => (
//             <div
//               key={section.id}
//               className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
//               {/* Icon */}
//               <img
//                 src={img}
//                 alt={section.project}
//                 className="w-10 h-10 rounded-full"
//               />

//               {/* Project Info */}
//               <div className="flex-1 ml-4">
//                 <h3 className="font-semibold text-gray-900 dark:text-gray-100">
//                   {section.project}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   Progress: {section.progress}
//                 </p>
//               </div>

//               {/* Rewards */}
//               <span className="font-bold text-green-600 dark:text-green-400">
//                 {section.rewards}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Show More / Show Less Button */}
//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
//           {showMore ? "Show Less" : "Show More"}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default FoundationRewards;


import React, { useState } from "react";

const FoundationRewards = () => {
  const [showMore, setShowMore] = useState(false);

  // Mock data for the 9 sections
  const sections = [
    {
      id: 1,
      icon: "/path-to-icon.png",
      project: "DeepRoots",
      progress: "20%",
      rewards: "$200",
    },
    {
      id: 2,
      icon: "/path-to-icon.png",
      project: "Address Wallet",
      progress: "30%",
      rewards: "$300",
    },
    {
      id: 3,
      icon: "/path-to-icon.png",
      project: "TelexCoin ",
      progress: "40%",
      rewards: "$400",
    },
    {
      id: 4,
      icon: "/path-to-icon.png",
      project: "Rootopia GameFi",
      progress: "50%",
      rewards: "$500",
    },
    {
      id: 5,
      icon: "/path-to-icon.png",
      project: "Education ",
      progress: "60%",
      rewards: "$600",
    },
    {
      id: 6,
      icon: "/path-to-icon.png",
      project: "AI Project",
      progress: "70%",
      rewards: "$700",
    },
    {
      id: 7,
      icon: "/path-to-icon.png",
      project: "Offix AI",
      progress: "80%",
      rewards: "$800",
    },
    {
      id: 8,
      icon: "/path-to-icon.png",
      project: "Banana ",
      progress: "90%",
      rewards: "$900",
    },
    {
      id: 9,
      icon: "/path-to-icon.png",
      project: "Others",
      progress: "100%",
      rewards: "$1000",
    },
  ];

  // const sections = Array.from({ length: 9 }, (_, i) => ({
  //   id: i + 1,
  //   icon: "/path-to-icon.png",
  //   project: `Project ${i + 1}`,
  //   progress: `${(i + 1) * 10}%`,
  //   rewards: `$${(i + 1) * 100}`,
  // }));

  // Toggle show more or less
  const visibleSections = showMore ? sections : sections.slice(0, 5);

  return (
    <section className="md:p-6 my-14">
      <h1 className="text-3xl font-bold md:w-[70vw] w-full text-center text-gray-900 dark:text-gray-100 mb-8">
        Foundation Activation Rewards
      </h1>

      {/* Card */}
      <div className="bg-[#000026]  dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        {/* Card Header */}
        <div className="flex justify-between  items-center border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
          <span className="font-semibold text-gray-300">
            Projects
          </span>
          <span className="font-semibold ml-16 text-gray-300">
            Progress
          </span>
          <span className="font-semibold text-gray-300">
            Rewards
          </span>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {visibleSections.map((section) => (
            <div
              key={section.id}
              className="flex justify-between items-center bg-transparent border-b-2 border-gray-200  rounded-lg p-4">
              {/* Project - Icon and Name */}
              <div className="flex justify-center items-center ">
                <img
                  src={img}
                  alt={section.project}
                  className="w-10 h-10 rounded-full mr-2 shadow-[2px_2px_5px_#ecb705,-2px_-2px_5px_#040f4c] dark:shadow-[2px_2px_2px_#040F4C,-2px_-2px_2px_#ecb705]"
                />
                <span className="block text-gray-100 font-semibold">
                  {section.project}
                </span>
              </div>

              {/* Progress */}
              <div className="text-center">
                <span className="block text-gray-400">
                  {section.progress}
                </span>
              </div>

              {/* Rewards */}
              <span className="font-bold   text-[#3cba54]">
                {section.rewards}
              </span>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default FoundationRewards;
