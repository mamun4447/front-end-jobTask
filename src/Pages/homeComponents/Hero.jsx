import tabletImg from "../../assets/hero.png";
import heroBg from "../../assets/herobg.png";

const Hero = () => {
  return (
    <div className=" py-20 px-4 md:px-20 ">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="relative order-2 lg:order-1 bg-white px-6 py-10 -bottom-40 lg:-right-20  lg:-bottom-50 ">
          <div className="space-y-8 lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">
              We Create Websites
            </h2>
            <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative px-4  order-1 ld:order-2 md:w-full h-full lg:right-70 lg:-top-6  flex justify-center">
          {/* Background Layer */}
          <div className="absolute w-[450px] h-[600px] bg-[#f4b122] -top-8 -right-8 z-0 rounded-md" />
          {/* Zebra bg */}
          <img
            className=" relative z-10 w-[400px] h-[400px] left-40 top-20"
            src={heroBg}
            alt=""
          />
          {/* Main Image */}
          <img
            src={tabletImg}
            alt="Tablet Mockup"
            className="relative z-20 w-[400px] h-[400px] bg-[#e4d3c8] py-4 right-44 top-10  drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
