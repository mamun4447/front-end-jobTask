const Hero = () => {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Text Block */}
        <div className="bg-white p-8 md:w-1/2 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            We Create Websites
          </h2>
          <p className="text-gray-700 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Image from{" "}
            <a href="#" className="underline">
              Freepik
            </a>
          </p>
          <button className="bg-black text-white py-2 px-5 rounded hover:bg-gray-800">
            VIEW PORTFOLIO
          </button>
        </div>

        {/* RIGHT: Layered Image Block */}
        <div className="relative w-full md:w-1/2 h-[350px]">
          {/* Yellow square */}
          <div className="absolute top-12 left-12 w-[85%] h-[85%] bg-[#f5aa1c] -z-30"></div>

          {/* Black-patterned overlay (you can replace bg-black with bg-[url] or stripe pattern later) */}
          <div className="absolute top-20 left-6 w-[90%] h-[90%] bg-black/50 bg-repeat -z-20 opacity-70"></div>

          {/* Beige background container with image */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#d9c7bb] shadow-lg p-4 z-10 flex items-center justify-center">
            <img
              // src={tabletImg}
              alt="Tablet mockup"
              className="max-h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
