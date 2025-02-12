//import img from "../../assets/Designer 4.jpeg";
import banner from "../../assets/Designer 4.jpeg";
import img from "../../assets/ylogo.png";


const Section4 = () => {
  return (
    <div className="mt- mr-5 mb-14 md:mt-14 w-full">
      <div
        className="h-screen z-10 bg-cover relative  bg-center "
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="flex justify-center items-center flex-col">
          <img src={img} alt="" className=" absolute w-14 h-14 md:w-24 md:h-24 right-0 top-0" />
          <h1 className=" lg:text-5xl md:text-3xl mr-10 md:mr-0 text-2xl mt-5 text-neutral-200 ">
            Road Map (Full Access Roots)
          </h1>
          <button className="mt-8 mx-5  px-20 absolute bottom-0.5  py-4 bg-gradient-to-r from-[#F9DF87]  text-center  font-bold hover:bg-gradient-to-l from-[#7947df] to-[#6C489E] transition-all hover:delay-1000  hover:ease-in-out text-white rounded-2xl text-lg md:text-3xl md:my-6 tracking-wider ">
            Learn More....
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
