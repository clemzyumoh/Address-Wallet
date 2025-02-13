// img from "../../assets/sec2.png"
//import Roadmap from "../../Components/Roadmap";
import FoundationRewards from "./Section1";
//import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import Section4 from "./Section4";
const Foundation = () => {
  return (
    <div className="md:p-6 lg:pb-3 md:pb-40 pb-32  ">
      <Section2 />
      <FoundationRewards />

      <Section4 />

      <Section3 />
    </div>
  );
};

export default Foundation;
