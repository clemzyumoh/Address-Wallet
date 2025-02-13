import { motion } from "framer-motion";
import banner from "../../assets/Designer 6.jpeg";
import img from "../../assets/found2.png";
import { FaPlus } from "react-icons/fa";
//import { TiEquals } from "react-icons/ti";
import { FaLongArrowAltUp } from "react-icons/fa";
const MembershipSection = () => {
  return (
    <div className=" w-full   ">
      {/* Left Side - Text */}
      <div className="flex flex-col  items-center justify-between">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <img
            src={img}
            alt="Membership"
            className=""
          />
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
        <button className="mt-8 mx-5 text-neutral-900 px-20  py-4 bg-gradient-to-r from-[#F9DF87]  text-center  font-bold hover:bg-gradient-to-l from-[#7947df] to-[#6C489E] transition-all hover:delay-1000  hover:ease-in-out dark:text-white rounded-2xl text-lg md:text-3xl md:my-6 tracking-wider ">
          Activate
        </button>
      </div>
    </div>
  );
};

export default MembershipSection;
