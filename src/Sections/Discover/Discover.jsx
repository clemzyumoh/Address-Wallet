import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Ethereum",
    category: "Blockchain",
    description: "Smart contract platform.",
  },
  {
    id: 2,
    name: "Solana",
    category: "Blockchain",
    description: "High-performance blockchain.",
  },
  {
    id: 3,
    name: "Uniswap",
    category: "DeFi",
    description: "Decentralized exchange.",
  },
  {
    id: 4,
    name: "Chainlink",
    category: "Oracle",
    description: "Connecting smart contracts to real-world data.",
  },
];

const Discover = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:mt-18 mt-8 mb-20">
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Discover Crypto Projects
      </motion.h2>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for a project..."
          className="w-full p-3 pl-10 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="p-4 bg-white dark:bg-gray-800 text-neutral-900 dark:text-neutral-200 shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}>
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className=" text-sm">{project.category}</p>
              <p className="">{project.description}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Discover;
