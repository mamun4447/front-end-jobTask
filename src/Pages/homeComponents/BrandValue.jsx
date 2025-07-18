import girl from "../../assets/girl.jpg";
import design from "../../assets/design.jpg";
import table from "../../assets/table.jpg";
import { motion } from "framer-motion";

const BrandValue = () => {
  return (
    <section className="relative h-[600px] m-20 bg-none text-white flex items-center justify-center">
      {/* Background Images */}
      <div className="hidden md:flex gap-2">
        {/* Left Side  */}
        <div className="flex flex-col">
          <div
            className={`absolute top-0  left-60 w-[35%] h-[48%]  bg-cover bg-center z-10`}
            style={{ backgroundImage: `url(${girl})` }}
          ></div>
          <div
            className={`absolute bottom-0 left-40 w-[40%]  h-[48%] bg-cover bg-center z-10`}
            style={{ backgroundImage: `url(${design})` }}
          ></div>
        </div>

        {/* Right Side */}
        <div
          className={`absolute top-1/5  left-[52%] w-[40%] h-[70%]  bg-cover bg-center z-10`}
          style={{ backgroundImage: `url(${table})` }}
        ></div>
      </div>

      {/* Overlay for dim effect */}

      {/* Text Content */}
      <motion.div
        className="relative z-30 max-w-md text-center  bg-black py-12 px-10"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Brand Values</h2>
        <p className="text-lg max-w-xl mx-auto">
          Combining design, code, and strategy — we help your brand stand out
          with impactful web solutions.
        </p>
        <button className="btn my-4 outline py-2 px-4 rounded">
          LEARN MORE
        </button>
      </motion.div>
    </section>
  );
};
export default BrandValue;
