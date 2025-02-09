import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../src/Components/SideBar";
import Home from "../src/Sections/Home/Home";
import Swap from "../src/Sections/Swap/Swap";
import Foundation from "../src/Sections/Foundation/Foundation";
import Launchpad from "../src/Sections/LaunchPad/Launchpad";
import Discover from "../src/Sections/Discover/Discover";
import Settings from "../src/Sections/Setting/Setting";
import Header from "./Components/Header";
import "../src/index.css";
//import MobHeader from "./Components/MobHeader";
import BottomNavbar from "./Components/BottomNavbar";

const App = () => {
  const { darkMode } = useSelector((state) => state.settings);

 return (
   <>
    
     <div className={darkMode ? "dark" : ""}>
       <div className="flex bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
         <Sidebar />
         <div className="flex-1">
            <Header /> 
           
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/swap" element={<Swap />} />
             <Route path="/foundation" element={<Foundation />} />
             <Route path="/launchpad" element={<Launchpad />} />
             <Route path="/discover" element={<Discover />} />
             <Route path="/settings" element={<Settings />} />
           </Routes>
         </div>
       </div>
     </div>
     <BottomNavbar/>
   </>
 );

};

export default App;
