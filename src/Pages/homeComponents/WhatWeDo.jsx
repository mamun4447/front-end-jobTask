const services = [
  {
    category: "Strategy",
    titles: [
      "Analytics and Research",
      "Interactive Workshops",
      "Brand Strategy",
      "Content Strategy",
      "Digital Strategy",
      "Conversion Rate Optimization",
    ],
  },
  {
    category: "Design",
    titles: [
      "Creative Direction",
      "Brand Guides",
      "Prototypes",
      "UI/UX & Web Design",
      "Visual Asset Creation",
      "Motion Design",
    ],
  },
  {
    category: "Development",
    titles: [
      "System Architecture Design",
      "Full-Stack Development",
      "3rd Party Integrations",
      "Performance Optimization",
      "WordPress Development",
      "Shopify Development",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center items-start space-y-12 md:space-y-10 lg:space-y-0 md:space-x-12">
          {/* Services Section */}
          {services?.map((service, id) => (
            <div key={id} className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
                {service.category}
              </h3>
              <ul className="space-y-2">
                {service?.titles?.map((title, ids) => (
                  <li key={ids}>{title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
