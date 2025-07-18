import bgImg from "../../assets/mocup.jpg";
import { motion } from "framer-motion";

const MocUp = () => {
  const brandings = [
    {
      title: "Brandig Stategy",
    },
    {
      title: "Design Logos",
    },
    {
      title: "Brandig Identity",
    },
  ];
  return (
    <div
      className="relative bg-cover bg-center  bg-no-repeat  flex flex-col sm:flex-row items-center justify-around px-8"
      style={{ backgroundImage: `url('${bgImg}')` }}
    >
      {/* Left Section */}
      <div className=" ">
        <motion.div
          className="text-black py-16 px-4 md:px-20  bg-blue-100 uppercase"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-5xl font-bold mb-4 ">Mocup</h2>
          <p className="hidden md:flex mb-6">Ready To use</p>
        </motion.div>
      </div>

      {/* right section */}
      <div className="flex flex-col gap-2 my-4 mx-4">
        {/* Text section */}
        {brandings?.map((branding, id) => (
          <motion.div
            key={id}
            className="text-black md:w-md  p-10 text-start bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4 ">{branding.title}</h2>
            <p className="hidden md:flex mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              magnam fuga explicabo maiores repellendus accusantium quos beatae
              numquam necessitatibus ipsum?
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MocUp;
