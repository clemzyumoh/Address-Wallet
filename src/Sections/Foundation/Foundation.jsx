// img from "../../assets/sec2.png"
//import Roadmap from "../../Components/Roadmap";
import FoundationRewards from "./Section1";
//import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import AnimatedText from "../../Components/AnimationText";
import { FaMicrophone } from "react-icons/fa";
import Section4 from "./Section4";

import AnimateItem from "../../Components/AnimationItem";
import banner from "../../assets/pink2.png";
import FoundationBenefits from "./Section2";

const Foundation = () => {
  return (
    <div className="md:p-6 lg:pb-3 md:pb-40 pb-32 flex  flex-col justify-center items-center dark:bg-gradient-to-bl dark:from-black dark:to-black dark:via-black bg-gradient-to-bl from-[#E8EBFF] to-white   via-[#EBF2FD] ">
      <div className="flex w-full px-2 justify-between mx-4 mb-3   items-center">
        <AnimatedText
          text="FOUNDATION"
          animation="fade"
          as="h1"
          className="font-bold md:ml-5  leading-[40px] tracking-wider  lg:text-end lg:mt-20 md:text-lg lg:leading-normal dark:frm-[#9b6afc] from-[#9C61C1]  dark:to-[#B0e6f8] to-[#1E1164]  bg-gradient-to-l bg-clip-text font-orbitron text-transparent"
        />
        <AnimatedText
          text="SEEDING"
          animation="fade"
          as="h1"
          className="font-bold md:ml-5  leading-[40px] tracking-wider  lg:text-end lg:mt-20 md:text-lg lg:leading-normal from-[#9C61C1]  dark:to-[#B0e6f8] to-[#1E1164]   bg-gradient-to-l bg-clip-text font-orbitron text-transparent"
        />
        <AnimatedText
          text="REFERRAL "
          animation="fade"
          as="h1"
          className="font-bold md:ml-5  leading-[40px] tracking-wider  lg:text-end lg:mt-20 md:text-lg lg:leading-normal bg-gradient-to-r from-[#9C61C1]  dark:to-[#B0e6f8] to-[#1E1164]  bg-clip-text font-orbitron text-transparent"
        />
        <div className="flex justify-center items-center lg:mt-20 ">
          <FaMicrophone className="text-xl hover:text-[#9b6afc] md:text-2xl hover:rotate-12 hover:scale-105" />
        </div>
      </div>

      {/* <div className="flex flex-col justify-center mt-3 items-center">
        <div
          className="w-[90vw] flex
         justify-center items-center shadow-2xl">
          <AnimateItem delay={0.2} direction="left">
            <img
              src={banner}
              alt="Membership"
              className="rounded-lg lg:w-[60vw] lg:h-[60vh]  w-full h-full "
            />
          </AnimateItem>
        </div>

        <button className=" my-2 text-neutral-900 px-2 w-[80vw]   py-2 text-center  font-bold hover:bg-gradient-to-l  rounded-2xl text-sm md:text-xl md:my-6  ">
          ACTIVATE FOUNDATION SEAT
        </button>
      </div> */}
      <div className="flex flex-col justify-center items-center mt-3 w-full lg:mt-8">
        <div className="w-full flex justify-center items-center ">
          <AnimateItem delay={0.2} direction="left">
            <img
              src={banner}
              alt="Membership"
              className="rounded-lg w-[90vw] lg:h-[80vh] lg:w-[60vw] h-auto"
            />
          </AnimateItem>
        </div>

        <button className="my-2  dark:text-neutral-900 hover:scale-105 hover:bg-none text-[#b0e6f8] hover:text-black dark:hover:text-[#b0e6f8] dark:hover:shadow-[2px_2px_2px_#b0e6f8,-2px_-2px_2px_#9c61c1] from-[#9C61C1]  cursor-pointer dark:to-[#B0e6f8] to-[#1E1164] hover:shadow-[2px_2px_2px_#1e1164,-2px_-2px_2px_#9c61c1] bg-gradient-to-bl md:px-7 md:py-4 text-center px-5 py-3 font-bold rounded-2xl text-sm md:text-xl md:my-6 border-none ">
          ACTIVATE FOUNDATION SEAT
        </button>
      </div>

      {/* <FoundationRewards /> */}
      {/* <FoundationBenefits />

      <Section4 />

      <Section3 /> */}
    </div>
  );
};

export default Foundation;
