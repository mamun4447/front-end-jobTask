import { Target, Code2 } from "lucide-react";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { motion } from "framer-motion";

const features = [
  {
    title: "Strategy",
    desc: "We craft smart, research-driven strategies to launch your product efficiently and successfully in the market.",
    icon: <LuBrain size={32} />,
  },
  {
    title: "Branding",
    desc: "Create a lasting impression with unique branding solutions that deeply connect with your audience.",
    icon: <Target size={32} />,
  },
  {
    title: "Development",
    desc: "Our scalable, performance-driven code ensures seamless user experience across devices and platforms.",
    icon: <Code2 size={32} />,
  },
  {
    title: "Web Design",
    desc: "Engaging visuals and intuitive layouts designed to elevate your brand and captivate your users.",
    icon: <IoColorPaletteOutline size={32} />,
  },
];

const Features = () => {
  return (
    <section className="relative mt-20 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Epic design and engineering
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              key={index}
              className={`px-6 py-12 transition-all hover:bg-white hover:text-gray-800 ${
                item.title === "Web Design"
                  ? "bg-yellow-500 text-white"
                  : "bg-none text-gray-800"
              }`}
            >
              <div className="text-4xl my-4 flex justify-center">
                <span className="bg-white text-gray-800 p-4 rounded-full hover:bg-amber-400">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
