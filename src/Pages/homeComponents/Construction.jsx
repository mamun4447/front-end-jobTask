import bgImg from "../../assets/construction.jpg";

const Construction = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[600px] flex items-center justify-end px-8"
      style={{ backgroundImage: `url('${bgImg}')` }}
    >
      <div className="text-white py-8 pr-4 md:pr-20 rounded-lg max-w-1/2 text-start">
        <h2 className="text-3xl font-bold mb-4 ">
          Construction and Revolution Projects
        </h2>
        <p className="hidden md:flex mb-6">
          We combine world-class design with top-notch engineering to deliver
          stunning, high-performance digital products. We combine world-class
          design with top-notch engineering to deliverstunning, high-performance
          digital products. We combine world-class design with top-notch
          engineering to deliver stunning, high-performance digital products.
        </p>
        <button className="px-8 py-3 btn outline text-white rounded-xl hover:bg-yellow-600 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Construction;
