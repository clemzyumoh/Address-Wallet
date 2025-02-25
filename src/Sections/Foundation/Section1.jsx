// import React, { useState } from "react";
import img from "../../assets/logobg.png";
// const FoundationRewards = () => {


import React, { useState } from "react";
import AnimateItem from "../../Components/AnimationItem";
import AnimatedText from "../../Components/AnimationText";



const FoundationRewards = () => {
  const [showMore, setShowMore] = useState(false);

  // Mock data for the 9 sections
  const sections = [
    {
      id: 1,
      icon: "/path-to-icon.png",
      project: "DEEP ROOTS ",
      progress: "20%",
      rewards: "$200",
    },
    {
      id: 2,
      icon: "/path-to-icon.png",
      project: "The Address",
      progress: "30%",
      rewards: "$300",
    },
    {
      id: 3,
      icon: "/path-to-icon.png",
      project: "TeleXcoin",
      progress: "40%",
      rewards: "$400",
    },
    {
      id: 4,
      icon: "/path-to-icon.png",
      project: "DEEP ASSETS",
      progress: "50%",
      rewards: "$500",
    },
    {
      id: 5,
      icon: "/path-to-icon.png",
      project: "SHARE VALUE",
      progress: "60%",
      rewards: "$600",
    },
    {
      id: 6,
      icon: "/path-to-icon.png",
      project: "InnoFi",
      progress: "70%",
      rewards: "$700",
    },
    {
      id: 7,
      icon: "/path-to-icon.png",
      project: "InnoLaunch",
      progress: "80%",
      rewards: "$800",
    },
    {
      id: 8,
      icon: "/path-to-icon.png",
      project: "Metafabric",
      progress: "90%",
      rewards: "$900",
    },
    {
      id: 9,
      icon: "/path-to-icon.png",
      project: "RootOpia",
      progress: "100%",
      rewards: "$1000",
    },
    {
      id: 10,
      icon: "/path-to-icon.png",
      project: "SaXophone",
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
    <section className="md:mb-20 w-full mt-16 mb-28 px-2 md:p-6 flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <AnimatedText
          text="Foundation  Rewards"
          animation="fade"
          as="h1"
          className="text-3xl font-bold text-center tracking-wider bg-gradient-to-l from-[#9C61C1] to-[#1E1164] dark:to-[#B0e6f8] bg-clip-text text-transparent"
        />
      </div>

      <AnimateItem delay={0.2} direction="left">
        {/* Card */}
        <div className="rounded-4xl bg-[#bfc7f8]    w-[90vw] md:px-8 px-4 md:w-[70vw] mt-3  lg:w-[60vw] flex flex-col items-center justify-center  shadow-lg py-10 md:p-6">
          {/* Card Header */}

          <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 px-3 mb- text-[10px] md:text-sm w-full font-bold text-gray-700 d">
            <div className="text-left">Projects</div>
            <div className="text-center">Progress</div>
            <div className="text-right ml-">Rewards</div>
          </div>

          {/* Sections */}

          <div className="space-y-4 w-full">
            {visibleSections.map((section) => (
              <div
                key={section.id}
                className="grid grid-cols-[2fr_1fr_1fr] gap-4 items-center mb-4 text-sm py-3 px-2 w-full rounded-2xl shadow-md bg-white dark:bg-gray-900">
                {/* Project - Icon and Name */}
                <div className="flex items-center space-x-2">
                  <img
                    src={img}
                    alt={section.project}
                    className="md:w-10 md:h-10 w-7 h-7 rounded-full"
                  />
                  <span className="text-gray-900 dark:text-gray-100 text-sm md:text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                    {section.project}
                  </span>
                </div>

                {/* Progress */}
                <div className="text-center">
                  <span className="block text-gray-600 dark:text-gray-400">
                    {section.progress}
                  </span>
                </div>

                {/* Rewards */}
                <div className="text-right">
                  <span className="font-bold text-[#3cba54]">
                    {section.rewards}
                  </span>
                </div>
              </div>
              // <AnimateItem delay={0.2} direction="top">

              // </AnimateItem>
            ))}
          </div>
          <div className="flex justify-center items-start w-full">
            {/* Show More / Show Less Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4  mx-5 hover:underline text-gray-700 ">
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </AnimateItem>
    </section>
  );
};

export default FoundationRewards;
