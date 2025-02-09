import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Project Alpha",
    status: "Active",
    description: "A next-gen DeFi platform.",
  },
  {
    id: 2,
    name: "Project Beta",
    status: "Upcoming",
    description: "An NFT marketplace for artists.",
  },
  {
    id: 3,
    name: "Project Gamma",
    status: "Active",
    description: "A new Layer 2 blockchain solution.",
  },
  {
    id: 4,
    name: "Project Delta",
    status: "Upcoming",
    description: "A decentralized exchange with AI trading.",
  },
];

const Launchpad = () => {
  const [filter, setFilter] = useState("Active");

  return (
    <div className="p-6">
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Crypto Launchpad
      </motion.h2>

      {/* Filter Buttons */}
      <div className="mb-6 flex space-x-4">
        {["Active", "Upcoming"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded ${
              filter === status ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(status)}>
            {status} Projects
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects
          .filter((p) => p.status === filter)
          .map((project) => (
            <motion.div
              key={project.id}
              className="p-4 bg-white shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}>
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Launchpad;
