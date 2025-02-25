// import React from "react";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";
// import { motion } from "framer-motion";

// const data = [
//   { name: "Distributed Over 41 years", value: 60000000, color: "#ff6384" },
//   { name: "Vesting 3-5 years team", value: 20000000, color: "#36a2eb" },
//   { name: "Development & Innovation", value: 8000000, color: "#ffce56" },
//   { name: "Seed & Private Rounds", value: 4000000, color: "#4bc0c0" },
//   { name: "Marketing & Partnership", value: 3000000, color: "#9966ff" },
//   { name: "Ecosystem Growth", value: 2000000, color: "#ff9f40" },
//   { name: "Exchange Listing (2026)", value: 1000000, color: "#ffcd56" },
//   { name: "Foundation Rewards", value: 1000000, color: "#c9cbcf" },
//   { name: "One Year ICO", value: 500000, color: "#32a852" },
//   { name: "GameFi & Education Rewards", value: 500000, color: "#e74c3c" },
// ];

// const TokenAllocation3D = () => {
//   return (
//     <div className="flex flex-col items-center justify-center p-8 space-y-10">
//       <h2 className="text-3xl font-bold text-center text-white">
//         Token Allocation
//       </h2>

//       <div className="relative">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx={200}
//             cy={200}
//             innerRadius={80}
//             outerRadius={160}
//             fill="#8884d8"
//             paddingAngle={5}
//             dataKey="value">
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//         <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
//           100M
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.map((entry, index) => (
//           <motion.div
//             key={index}
//             className="p-6 bg-gray-900 text-white rounded-lg shadow-lg relative overflow-hidden"
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//             style={{ borderTop: `4px solid ${entry.color}` }}>
//             <h3 className="text-lg font-semibold">{entry.name}</h3>
//             <p className="text-gray-400">
//               {entry.value.toLocaleString()} (
//               {((entry.value / 100000000) * 100).toFixed(2)}%)
//             </p>
//             <span
//               className="absolute top-0 right-0 w-10 h-10 rounded-full opacity-75"
//               style={{ backgroundColor: entry.color }}></span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TokenAllocation3D;
// import React from "react";
// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Distributed Over 41 years", value: 60, color: "#4CAF50" },
//   { name: "Vesting 3-5 years team", value: 20, color: "#FF9800" },
//   { name: "Development & Innovation", value: 8, color: "#2196F3" },
//   { name: "Seed & Private Rounds", value: 4, color: "#9C27B0" },
//   { name: "Marketing & Partnership", value: 3, color: "#F44336" },
//   { name: "Ecosystem Growth", value: 2, color: "#00BCD4" },
//   { name: "Exchange Listing (2026)", value: 1, color: "#8BC34A" },
//   { name: "Foundation Rewards", value: 1, color: "#FFEB3B" },
//   { name: "One year ICO", value: 0.5, color: "#d661e8" },
//   { name: "GameFi & Education Rewards", value: 0.5, color: "#E91E63" },
// ];

// const totalSupply = 100;

// const AllocationCard = ({ name, value, color }) => {
//   return (
//     <motion.div
//       className="p-4 bg-white dark:bg-neutral-900 shadow-lg rounded-xl flex flex-col items-center space-y-4 transform hover:scale-105 transition duration-300"
//       style={{ borderTop: `4px solid ${color}` }}>
//       <h2 className="text-3xl font-bold text-center dark:text-white">
//          Token Allocation {" "}
//       </h2>

//       <div className="w-32 h-32 relative">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               cx="50%"
//               cy="50%"
//               outerRadius={50}
//               fill="#ccc">
//               {data.map((entry) => (
//                 <Cell
//                   key={entry.name}
//                   fill={entry.name === name ? entry.color : "#E0E0E0"}
//                 />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//       <h3 className="text-lg font-semibold text-center" style={{ color }}>
//         {name}
//       </h3>
//       <p className="text-gray-600 dark:text-gray-400">
//         {value}M ({value}%)
//       </p>
//     </motion.div>
//   );
// };

// const TokenAllocation = () => {
//   return (
//     <div className="flex flex-col items-center space-y-8 ">
//       <h2 className="text-3xl font-bold text-center ">
//         Token Allocation {" "}
//       </h2>

//       <div className="relative w-64 h-64 flex items-center justify-center">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               fill="#ccc">
//               {data.map((entry) => (
//                 <Cell key={entry.name} fill={entry.color} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//         <div className="absolute text-2xl font-bold text-center">100M</div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.map((item) => (
//           <AllocationCard key={item.name} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TokenAllocation;

import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Distributed Over 41 years", value: 60, color: "#bf9fff" },
  { name: "Vesting 3-5 years team", value: 20, color: "#B0E6F8" },
  { name: "Development & Innovation", value: 8, color: "#2196F3" },
  { name: "Seed & Private Rounds", value: 4, color: "#9C27B0" },
  { name: "Marketing & Partnership", value: 3, color: "#F44336" },
  { name: "Ecosystem Growth", value: 2, color: "#00BCD4" },
];

const totalSupply = 100;

const AllocationCard = ({ name, value, color }) => {
  return (
    <motion.div className="flex items-center justify-between p-4 bg-[#E8EBFF]  dark:bg-neutral-900  rounded-lg transform hover:scale-105 transition duration-300">
      {/* Left Side - Color Indicator & Name */}
      <div className="flex items-center space-x-4">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3 className="md:text-lg text-sm font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
      </div>

      {/* Right Side - Token Allocation */}
      <p className="text-gray-600 dark:text-gray-400 ml-8 font-semibold">
        {value}M
      </p>
    </motion.div>
  );
};

const TokenAllocation = () => {
  return (
    <div className="flex flex-col items-center shadow-[2px_2px_2px_#B0E6F8,-2px_-2px_2px_#bf9fff] md:w-[70vw] w-[85vw] lg:w-[50vw] px-3 mx-5 md:p-8 py-5  rounded-2xl lg:p-5 md:space-y-8">
      {/* Total Supply Heading */}
      <h2 className="text-3xl font-bold text-center">Total Supply</h2>

      {/* Hollow Pie Chart (Doughnut Chart) */}
      <div className="relative w-64 h-64 flex items-center  justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <linearGradient
                id="gradientDistributed"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%">
                <stop offset="0%" stopColor="#9b6afc" />
                <stop offset="100%" stopColor="#E8EBFF" />
              </linearGradient>
            </defs>
            <Pie
              className="shadow"
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60} // Creates the hollow effect
              outerRadius={90}
              fill="#ccc"
              stroke="none"
              startAngle={85}
              endAngle={-290}
              paddingAngle={0}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centered Text inside the Hollow Pie Chart */}
        <div className="absolute text-xl text-center font-bold text-gray-800 dark:text-white">
          100M <br />
          <p className="text-neutral-500 text-sm">Total Supply</p>
        </div>
      </div>

      {/* Allocation Cards */}
      <div className="w-full  grid grid-cols-1  gap-5 md:gap-x-5 ">
        {data.map((item) => (
          <AllocationCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TokenAllocation;
