import bgImg from "../../assets/crafting.jpg";
import { motion } from "framer-motion";

const Crafting = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[600px] flex items-center justify-center md:justify-start px-8"
      style={{ backgroundImage: `url('${bgImg}')` }}
    >
      {/* Text section */}
      <motion.div
        className="text-black py-16 px-4 md:px-20 rounded-lg md:max-w-[40%] text-center md:text-start bg-white"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 ">
          Crafting Digital <br /> Experiences
        </h2>
        <p className="hidden md:flex mb-6">
          We combine world-class design with top-notch engineering to deliver
          stunning, high-performance digital products.
        </p>
        <button className="px-8 py-3 btn outline bg-black text-white rounded-xl hover:bg-white hover:text-black transition">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

export default Crafting;
