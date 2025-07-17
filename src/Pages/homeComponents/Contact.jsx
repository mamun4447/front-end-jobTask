import contact from "../../assets/Contact.jpg";

const Contact = () => {
  return (
    <section className="grid grid-cols-2 mt-32 ml-20 ">
      {/* ===>Contact Info<=== */}
      <div className="text-gray-600 pt-20 space-y-2 mx-auto text-center bg-white w-full h-full">
        <h1 className="text-black text-5xl font-bold">Contact Us</h1>
        <p className="text-lg">
          We are here to meet any businesses need and to <br /> promote your
          company online.
        </p>
        <hr className="my-2 w-1/2 mx-auto" />
        <p>
          <span className="font-bold">Phone: </span>+8801789997959
        </p>
        <p>
          <span className="font-bold">Location: </span>Aftabnogor, Dhaka.
        </p>
        <p>
          <span className="font-bold">Email: </span>
          abdullah.mamun67896@gmail.com
        </p>
      </div>

      {/* ===>an image<=== */}
      <img src={contact} />
    </section>
  );
};

export default Contact;
