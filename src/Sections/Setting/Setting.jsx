import { useDispatch, useSelector } from "react-redux";
import {  setLanguage } from "../../Redux/settingSlice";
import { motion } from "framer-motion";
//import { FaMoon, FaSun } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import React, { useState } from "react";


const Settings = ({ darkMode, setDarkMode }) => {
  const dispatch = useDispatch();
  const {  language } = useSelector((state) => state.settings);

  return (
    <motion.div className="p-6 mt-18 dark:bg-gray-800">
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Settings
      </motion.h2>

      {/* Dark Mode Toggle */}
      <motion.div className="flex items-center justify-between p-4 shadow-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 rounded-lg mb-6 ">
        <p className="text-lg">Dark Mode</p>
        {/* <button
          className="p-2 rounded-full bg-gray-300"
          onClick={() => dispatch(toggleDarkMode())}>
          {darkMode ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button> */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setDarkMode(!darkMode)}
          className="w-[24px]">
          {darkMode ? (
            <Sun size={24} className="dark:text-[#0085A8]" />
          ) : (
            <Moon size={24} className="text-[#1F1619]" />
          )}
        </motion.button>
      </motion.div>

      {/* Language Selector */}
      <div className="p-4 shadow-lg rounded-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200">
        <p className="text-lg mb-2">Language</p>
        <select
          className="w-full p-2 border bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 rounded"
          value={language}
          onChange={(e) => dispatch(setLanguage(e.target.value))}>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Chinese</option>
        </select>
      </div>
    </motion.div>
  );
};

export default Settings;
