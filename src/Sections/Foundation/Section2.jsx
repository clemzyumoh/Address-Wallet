import { motion } from "framer-motion";
import banner from "../../assets/Designer 6.jpeg";
import { FaPlus } from "react-icons/fa";
//import { TiEquals } from "react-icons/ti";
import { FaLongArrowAltUp } from "react-icons/fa";
const MembershipSection = () => {
  return (
    <div className=" w-full bg-[#040F4C]  p-6 md:p-10 rounded-2xl shadow-md dark:shadow-[#F9DF87] border dark:border-gray-700">
      {/* Left Side - Text */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="text-center flex justify-center items-center flex-col gap-4 md:text-left max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <h2 className="text-5xl md:text-3xl font-bold text-gray-100">
            Active Membership
          </h2>
          <FaLongArrowAltUp className="w-6 h-8 text-neutral-300" />
          <p className="mt-4 text-lg flex justify-center items-center flex-col text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-3xl text-blue-600 dark:text-blue-400">
              Foundation
            </span>{" "}
            <FaPlus className=" text-neutral-300 w-6 h-8" />
            <span className="font-semibold text-3xl text-green-600 dark:text-green-400">
              Seeding
            </span>{" "}
            <FaPlus className=" text-neutral-300 w-6 h-8" />
            <span className="font-semibold text-3xl text-yellow-600 dark:text-yellow-400">
              Referral
            </span>{" "}
            <FaPlus className=" text-neutral-300 w-6 h-8 " />
            <span className="font-semibold text-3xl text-purple-600 dark:text-purple-400">
              Rootopia
            </span>{" "}
            <button className="mt-8 mx-5 hidden lg:flex px-20  py-4 bg-gradient-to-r from-[#F9DF87]  text-center relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#6C489E] transition-all hover:delay-1000  hover:ease-in-out text-white rounded-2xl text-lg md:text-3xl md:my-6 tracking-wider ">
              Join
            </button>
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <img
            src={banner}
            alt="Membership"
            className="rounded-lg w-full md:w-[700px] md:h-[400px] shadow-[#f9df87] shadow-md"
          />
        </motion.div>
        <button className="mt-8 mx-5 lg:hidden px-20  py-4 bg-gradient-to-r from-[#F9DF87]  text-center  font-bold hover:bg-gradient-to-l from-[#7947df] to-[#6C489E] transition-all hover:delay-1000  hover:ease-in-out text-white rounded-2xl text-lg md:text-3xl md:my-6 tracking-wider ">
          Join
        </button>
      </div>
    </div>
  );
};

export default MembershipSection;
