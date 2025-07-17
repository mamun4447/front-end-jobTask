import { motion } from "framer-motion";
import corporate from "../../assets/corporate.jpg";
import digital from "../../assets/digital.jpg";
import mobile from "../../assets/mobile.jpg";
import web from "../../assets/web.jpg";
import responsive from "../../assets/responsive.jpg";
import mobile1 from "../../assets/mobile1.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Web Design",
    image: web,
  },
  {
    id: 2,
    title: "Mobile Application",
    image: mobile,
  },
  {
    id: 3,
    title: "Corporate Design",
    image: corporate,
  },
  {
    id: 4,
    title: "Mobile Responsive",
    image: mobile1,
  },
  {
    id: 5,
    title: "Responsive Design",
    image: responsive,
  },
  {
    id: 6,
    title: "Digital Product",
    image: digital,
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-700" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white font-bold mb-2">Portfolio</h2>
          <p className="text-white">
            A glimpse into our recent works that showcase our creativity and
            expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className=" overflow-hidden shadow-md group relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 text-gray-800 p-4 backdrop-blur-md">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
