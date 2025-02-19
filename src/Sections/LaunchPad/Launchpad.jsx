// import { useState } from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     id: 1,
//     name: "Project Alpha",
//     status: "Active",
//     description: "A next-gen DeFi platform.",
//   },
//   {
//     id: 2,
//     name: "Project Beta",
//     status: "Upcoming",
//     description: "An NFT marketplace for artists.",
//   },
//   {
//     id: 3,
//     name: "Project Gamma",
//     status: "Active",
//     description: "A new Layer 2 blockchain solution.",
//   },
//   {
//     id: 4,
//     name: "Project Delta",
//     status: "Upcoming",
//     description: "A decentralized exchange with AI trading.",
//   },
// ];

// const Launchpad = () => {
//   const [filter, setFilter] = useState("Active");

//   return (
//     <div className="p-6 mt-8 md:mt-18 mb-20
//      bg-gray-100 dark:bg-gray-800 pt-10 rounded-2xl mx-5 md:mr-8">
//       <motion.h2
//         className="text-2xl font-bold mb-4"
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}>
//         Crypto Launchpad
//       </motion.h2>

//       {/* Filter Buttons */}
//       <div className="mb-6 flex space-x-4">
//         {["Active", "Upcoming"].map((status) => (
//           <button
//             key={status}
//             className={`px-4 py-2 rounded ${
//               filter === status
//                 ? "bg-blue-500 hover:scale-105 hover:bg-blue-600 text-white  "
//                 : "bg-gray-400 hover:scale-105 hover:border-2 hover:bg-transparent hover:border-blue-500"
//             }`}
//             onClick={() => setFilter(status)}>
//             {status} Projects
//           </button>
//         ))}
//       </div>

//       {/* Project Cards */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {projects
//           .filter((p) => p.status === filter)
//           .map((project) => (
//             <motion.div
//               key={project.id}
//               className="p-4 bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 shadow-lg rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 100 }}>
//               <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
//               <p className="">{project.description}</p>
//             </motion.div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Launchpad;
import { useState } from "react";
import { motion } from "framer-motion";
import img from "../../assets/launch.webp"
import img1 from "../../assets/launch.webp";
import img2 from "../../assets/launch.webp";
import img3 from "../../assets/launch.webp";
import img4 from "../../assets/launch.webp";
import img5 from "../../assets/launch.webp";
import AnimatedText from "../../Components/AnimationText";


const projects = [
  {
    id: 1,
    name: "Project Beta",
    description: "An NFT marketplace for artists.",
    image: img, // Replace with actual image
  },
  {
    id: 2,
    name: "Project Delta",
    description: "A decentralized  AI trading.",
    image: img1, // Replace with actual image
  },
  {
    id: 3,
    name: "Project 3",
    description: "A decentralized e AI tradin.",
    image: img2, // Replace with actual image
  },
  {
    id: 4,
    name: "Project 4",
    description: "A decentralized  AI trading.",
    image: img3, // Replace with actual image
  },
  {
    id: 5,
    name: "Project 5",
    description: "A decentralized  AI trading.",
    image: img4, // Replace with actual image
  },
  {
    id: 6,
    name: "Project6",
    description: "A decentralized  AI trading.",
    image: img5, // Replace with actual image
  },
];

const Launchpad = () => {
  return (
    <div className="  mb-20 bg-[#e2fafb] dark:bg-gray-800   ">
      <AnimatedText
        text="InnoFi"
        animation="fade"
        as="h1"
        className="font-extrabold lg:max-w-[600px] mb-12 ml-3 leading-[40px] lg:text-start  md:text-4xl text-3xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
      />

      {/* Project Cards */}
      <div className="flex justify-center items-center flex-col ">
        <AnimatedText
          text="Upcoming Projects"
          animation="fade"
          as="h1"
          className="font-bold hidden lg:max-w-[600px] mb-8 leading-[40px] text-center md:text-4xl text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
        />
        <img src={img} alt="" className="" />
      </div>

      <div className="grid  grid-cols-1 my-16 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative h-[340px] w-full lg:h-[600px] bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 0.9}}
            transition={{ type: "spring", stiffness: 100 }}>
            {/* VOTE Text - Positioned Bottom-32 */}

            {/* Card Content */}
            <div className="absolute bottom-2 hidden left-2 right-2 flex-col bg-black bg-opacity-60 text-white  flex-wrap justify-between items-center p-3 rounded-lg">
              <AnimatedText
                text="Vote"
                animation="fade"
                as="h1"
                className="font-bold  lg:max-w-[600px] mb-3 leading-[40px] text-center md:text-4xl text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
              />

              {/* Phase Completion - Positioned Bottom-20 */}
              <div className="gap-3 flex justify-between text-white text-sm">
                <span>Phase 1: 100%</span>
                <span>Phase 2: 75%</span>
                <span>Phase 3: 50%</span>
                <span>Phase 4: 25%</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative w-full h-80 md:h-96 lg:h-[600px] bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
                  style={{ backgroundImage: `url(${img})` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 100 }}>
                  {/* VOTE Text */}
                  <div className="absolute bottom-3 left-2 right-2 flex-col bg-black bg-opacity-60 text-white flex flex-wrap justify-center items-center p-3 rounded-lg">
                    <AnimatedText
                      text="Vote"
                      animation="fade"
                      as="h1"
                      className="font-bold lg:max-w-[600px] mb-3 leading-[40px] text-center md:text-4xl text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
                    />

                    {/* Phase Completion & Vote Buttons */}
                    <div className="gap-3 flex  text-white text-sm w-full">
                      {[
                        { phase: "Phase 1", percent: "75%" },
                        { phase: "Phase 2", percent: "50%" },
                        { phase: "Phase 3", percent: "25%" },
                        { phase: "Phase 4", percent: "10%" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between flex-col items-center w-full bg-gray-800 p-2 rounded-md">
                          <span>{item.phase}</span>
                          <span className="text-gray-300">{item.percent}</span>
                          <button className=" my-3 bg-gradient-to-r from-[#F68082] to-[#97F4F3] text-black font-bold  px-3 py-1 rounded">
                            Vote
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="hidden  bg-black bg-opacity-60 text-white  flex-wrap justify-between items-center p-3 rounded-lg">
                    <div className="mr-2">
                      <h3 className="text-lg font-semibold leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-sm hidden sm:block">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Launchpad;
