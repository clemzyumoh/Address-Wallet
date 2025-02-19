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
    <div className="p-6 mt-8 md:mt-18 mb-20 bg-[#e2fafb] dark:bg-gray-800 pt-10 rounded-2xl mx-5 md:mr-8">
      <AnimatedText
        text="InnoLaunchpad"
        animation="fade"
        as="h1"
        className="font-extrabold lg:max-w-[600px] mb-12 leading-[40px] lg:text-start text-3xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
      />

      {/* Project Cards */}
      <div className=" text-center ">
        <AnimatedText
          text="Upcoming Projects"
          animation="fade"
          as="h1"
          className="font-bold lg:max-w-[600px] mb-8 leading-[40px] text-center text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative w-full h-72 md:h-96 lg:h-[600px] bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
              style={{ backgroundImage: `url(${project.image})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}>
              <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-60 text-white flex flex-wrap justify-between items-center p-3 rounded-lg">
                <div className="mr-2">
                  <h3 className="text-lg font-semibold leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm hidden sm:block">
                    {project.description}
                  </p>
                </div>

                <h1 className="bg-gradient-to-r from-[#f68082] font-bold lg:text-2xl text-lg to-[#96f2f3] bg-clip-text text-transparent">
                  InnoFi Vote
                </h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
