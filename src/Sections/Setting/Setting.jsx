import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, setLanguage } from "../../Redux/settingSlice";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const Settings = () => {
  const dispatch = useDispatch();
  const { darkMode, language } = useSelector((state) => state.settings);

  return (
    <div
      className={`p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}>
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Settings
      </motion.h2>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between p-4 shadow-lg rounded-lg mb-6 bg-gray-200">
        <p className="text-lg">Dark Mode</p>
        <button
          className="p-2 rounded-full bg-gray-300"
          onClick={() => dispatch(toggleDarkMode())}>
          {darkMode ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Language Selector */}
      <div className="p-4 shadow-lg rounded-lg bg-gray-200">
        <p className="text-lg mb-2">Language</p>
        <select
          className="w-full p-2 border rounded"
          value={language}
          onChange={(e) => dispatch(setLanguage(e.target.value))}>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>Chinese</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
