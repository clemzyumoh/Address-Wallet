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
import img from "../../assets/vote.webp"
import img1 from "../../assets/deeproot-banner.jpg";
import img2 from "../../assets/address.jpeg";
import img3 from "../../assets/telexcoin.jpeg";
import img4 from "../../assets/asset5.jpeg";
import img5 from "../../assets/share.webp";
import img6 from "../../assets/launch.webp";
import img7 from "../../assets/metafabric.webp";
import img8 from "../../assets/rootopia.jpeg";
import img9 from "../../assets/the foundation.jpeg";
import img10 from "../../assets/sax.webp";
import AnimatedText from "../../Components/AnimationText";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaCog
  
} from "react-icons/fa";





// const projects = [
//   {
//     id: 1,
//     name: "DeepRoots",
//     description: "A Platform for Innovative Deworld Apps.",
//     image: img, // Replace with actual
//     href: www.deeproots.earth,
//   },
//   {
//     id: 2,
//     name: "Addres Wallet",
//     description: "9 Layers of Dynamic Finance.",
//     image: img, // Replace with actual
//     href: www.addresswallet.com,
//   },
//   {
//     id: 3,
//     name: "TeleXcoin",
//     description: "Unlock the Future of Finance.",
//     image: img1, // Replace with actual image
//     href: www.telexcoin.com,
//   },
//   {
//     id: 4,
//     name: "Deep Assets",
//     description: "Transforming Real-World Assets into digital Value",
//     image: img2, // Replace with actual image
//     href: www.deepassets.com,
//   },
//   {
//     id: 5,
//     name: "Share Value",
//     description: "Learn, Create, Innovate – A DeWorld Education Hub",
//     image: img3, // Replace with actual image
//     href: www.sharevalue.com,
//   },
//   {
//     id: 6,
//     name: "InnoLaunch",
//     description: "Empowering DeWorld Projects.",
//     image: img4, // Replace with actual image
//     href: www.innolaunch.com,
//   },
//   {
//     id: 7,
//     name: "MetaFabric",
//     description: "Blockchain to Runway Your Style,Your NFT DeWorld.",
//     image: img5, // Replace with actual image
//     href: www.innolaunch.com,
//   },
//   {
//     id: 8,
//     name: "Rootopia Race",
//     description: "Step into Rootopia World Race.",
//     image: img5, // Replace with actual image
//     href: www.innolaunch.com,
//   },
//   {
//     id: 9,
//     name: "Foundation Seats",
//     description: "Join The Future.",
//     image: img5, // Replace with actual image
//     href: www.foundation.com,
//   },
// ];


const projects = [
  {
    id: 1,
    name: "DEEPROOTS",
    description: "A Platform for Innovative Deworld Apps.",
    image: img1,
    href: "https://www.deeproots.earth",
  },
  {
    id: 2,
    name: "ADDRESS WALLET",
    description: "9 Layers of Dynamic Finance.",
    image: img2,
    href: "https://www.addresswallet.com",
  },
  {
    id: 3,
    name: "TELEXCOIN",
    description: "Unlock the Future of Finance.",
    image: img3,
    href: "https://www.telexcoin.com",
  },
  {
    id: 4,
    name: "DEEP ASSETS",
    description: "Transforming Real-World Assets into Digital Value.",
    image: img4,
    href: "https://www.deepassets.com",
  },
  {
    id: 5,
    name: "SHARE VALUE",
    description: "Learn, Create, Innovate – A DeWorld Education Hub.",
    image: img5,
    href: "https://www.sharevalue.com",
  },
  {
    id: 6,
    name: "INNOFI",
    description: "VOTE & FUND DeWorld.",
    image: img,
    href: "https://www.innofi.com",
  },
  {
    id: 7,
    name: "INNOLAUNCH",
    description: "Empowering DeWorld Projects.",
    image: img6,
    href: "https://www.innolaunch.com",
  },
  {
    id: 8,
    name: "METAFABRICK",
    description: "Blockchain to Runway Your Style, Your NFT DeWorld.",
    image: img7,
    href: "https://www.metafabric.com",
  },
  {
    id: 9,
    name: "ROOTOPIA RACE",
    description: "Step into Rootopia World Race.",
    image: img8,
    href: "https://www.rootopiarace.com",
  },
  {
    id: 10,
    name: "SAXOPHONE LIVE PODCAST",
    description: "For Blockchain Insights.",
    image: img10,
    href: "https://www.saxpodcast.com",
  },
];

// const Launchpad = () => {
//   return (
//     <div className="  mb-20 bg-[#e2fafb] dark:bg-gray-800   ">
//       <AnimatedText
//         text="InnoFi"
//         animation="fade"
//         as="h1"
//         className="font-extrabold lg:max-w-[600px] mb-12 ml-3 mt-5 leading-[40px] tracking-wider lg:text-start lg:mt-20  text-5xl t lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
//       />

//       {/* Project Cards */}
//       <div className="flex justify-center items-center flex-col ">
//         <AnimatedText
//           text="Upcoming Projects"
//           animation="fade"
//           as="h1"
//           className="font-bold hidden lg:max-w-[600px] mb-8 leading-[40px] text-center md:text-4xl text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
//         />
//         <img src={img} alt="" className="" />
//       </div>

//       <div className="grid  grid-cols-1 my-16 gap-6">
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             className="relative h-[340px] w-full lg:h-[600px] bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
//             whileHover={{ scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 100 }}>
//             {/* VOTE Text - Positioned Bottom-32 */}

//             {/* Card Content */}
//             <div className="absolute bottom-2 hidden left-2 right-2 flex-col bg-black bg-opacity-60 text-white  flex-wrap justify-between items-center p-3 rounded-lg">
//               <AnimatedText
//                 text="Vote"
//                 animation="fade"
//                 as="h1"
//                 className="font-bold  lg:max-w-[600px] mb-3 leading-[40px] text-center md:text-4xl text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
//               />

//               {/* Phase Completion - Positioned Bottom-20 */}
//               <div className="gap-3 flex justify-between text-white text-sm">
//                 <span>Phase 1: 100%</span>
//                 <span>Phase 2: 75%</span>
//                 <span>Phase 3: 50%</span>
//                 <span>Phase 4: 25%</span>
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               {projects.map((project) => (
//                 <motion.div
//                   key={project.id}
//                   className="relative w-full h-[346px] md:h-96 lg:h-[600px] bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
//                   style={{ backgroundImage: `url(${img})` }}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 100 }}>
//                   {/* VOTE Text */}
//                   <div className="absolute bottom-0 left-0 right-0 flex-col bg-black bg-opacity-60 text-white flex flex-wrap justify-center items-center p-3 rounded-lg">
//                     <AnimatedText
//                       text="VOTE"
//                       animation="fade"
//                       as="h1"
//                       className="font-extrabold lg:max-w-[600px] mb-3 leading-[40px] text-center md:text-4xl text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
//                     />

//                     {/* Phase Completion & Vote Buttons */}
//                     <div className="gap-3 flex  text-white text-sm w-full">
//                       {[
//                         { phase: "Phase 1", percent: "100%" },
//                         { phase: "Phase 2", percent: "75%" },
//                         { phase: "Phase 3", percent: "50%" },
//                         { phase: "Phase 4", percent: "20%" },
//                       ].map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex justify-between flex-col items-center w-full bg-gray-800 p-2 rounded-md">
//                           <span>{item.phase}</span>
//                           <span className="text-gray-300">{item.percent}</span>
//                           <button className="  bg-gradient-to-r from-[#F68082] to-[#97F4F3] text-black font-bold  px-2 py-1 rounded">
//                             Vote
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Card Content */}
                 
//                   <div className="grid md:grid-cols-1 gap-6">
//                     {projects.map((project) => (
//                       <a
//                         key={project.id}
//                         href={project.href}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         <div className="bg-black bg-opacity-60 text-white flex-wrap justify-between items-center p-3 rounded-lg">
//                           <div className="mr-2">
//                             <h3 className="text-lg font-semibold leading-tight">
//                               {project.name}
//                             </h3>
//                             <p className="text-sm">{project.description}</p>
//                           </div>
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

const Launchpad = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-28 bg-[#e2fafb] pt-8 dark:bg-gray-800">
      <div className="flex justify-between mx-2 mb-12  items-center">
        <AnimatedText
          text="InnoFi"
          animation="fade"
          as="h1"
          className="font-extrabold   leading-[40px] tracking-wider  lg:text-end lg:mt-20 text-5xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
        />
        <div className="flex justify-center items-center lg:hidden gap-4">
          <button
            onClick={() => navigate("/notifications")}
            className="rounded-full p-2 bg-[#fce2e2]">
            <IoIosNotifications className="hover:scale-110 md:text-2xl text-xl text-[#f68082] cursor-pointer hover:rotate-12" />
          </button>
          <button className="  p-2 w-full rounded-full  bg-[#fce2e2]">
            <NavLink to="/settings" className="flex items-center">
              <FaCog className="hover:scale-110 md:text-2xl text-xl text-[#f68082] hover:rotate-90" />
            </NavLink>
          </button>
        </div>
      </div>
      <div className=" mx-auto  w-[90vw] lg:w-[60vw] lg:h-[60vh] shadow-2xl h-[40vh] mb-0 text-center">
        <img
          src={img}
          alt=""
          className="text-center lg:mx-auto w-full h-full rounded-2xl"
        />
      </div>
      {/* Project Cards */}
      <div className="flex justify-center items-center flex-col">
        <AnimatedText
          text="Vote & Fund: A Milestone for Innovative Projects"
          animation="fade"
          as="h1"
          className="font-bold  ml-3 mt-5 leading-[40px] tracking-wider lg:text-start lg:mt-20 text-3xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
        />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 mb-16 gap-6 px-6 lg:px-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-full lg:w-full md:w-[70vw] md:mx-auto h-[550px] md:h-[600px] lg:h-[600px] bg-cover  bg-center shadow-lg rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${project.image})` }} // ✅ Use correct project image
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}>
            {/* Vote Section */}
            <div className="absolute bottom-0 left-0 right-0 flex-col bg-black bg-opacity-60 text-white flex flex-wrap justify-center items-center p-3 rounded-lg">
              <AnimatedText
                text="VOTE"
                animation="fade"
                as="h1"
                className="font-extrabold lg:max-w-[600px] mb-3 leading-[40px] text-center md:text-4xl text-2xl lg:leading-normal bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent"
              />

              {/* Phase Completion & Vote Buttons */}
              <div className="gap-3 flex text-white text-sm w-full">
                {[
                  { phase: "Phase 1", percent: "100%" },
                  { phase: "Phase 2", percent: "75%" },
                  { phase: "Phase 3", percent: "50%" },
                  { phase: "Phase 4", percent: "20%" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between flex-col items-center w-full bg-gray-800 p-2 rounded-md">
                    <span>{item.phase}</span>
                    <span className="text-gray-300">{item.percent}</span>
                    <button className="bg-gradient-to-r from-[#F68082] to-[#97F4F3] text-black font-bold px-2 py-1 rounded">
                      Vote
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}

            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 text-white flex-wrap justify-between items-center p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="text-lg font-semibold leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm">{project.description}</p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-bold text-md text-transparent">
                    {" "}
                    {project.href}
                  </a>
                </div>
                <h3 className="font-bold    text-xl bg-gradient-to-r from-[#F68082] to-[#97F4F3] bg-clip-text font-orbitron text-transparent">
                  A & P{" "}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Launchpad;

