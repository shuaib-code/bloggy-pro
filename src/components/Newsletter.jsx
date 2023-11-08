import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [newsletter, setNewsletter] = useState(0);
  const { ref, inView } = useInView();
  const massage = (
    <div
      className={`${
        newsletter ? "absolute" : "hidden"
      } w-full min-h-screen font-plusJakartaSans bg-black/1 backdrop-blur-sm right-0`}
    >
      <div className="my-56 flex items-center justify-center mx-7">
        <div className=" bg-no-repeat bg-bottom shadow-xl bg-[url('https://www.trados.com/media/dynamic/images/Trados%20Elements%20-%20General%20-%20Style%20A%20-%20640%20x%20320_tcm234-228947.webp?original=.png&v=20231107081141')] rounded-xl ">
          <div className="px-9 backdrop-blur-sm py-16 rounded-xl">
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Thank you for subscribing our newsletter
              </h1>
              <div className="mt-10 flex justify-center">
                <div>
                  <button
                    onClick={() => setNewsletter(0)}
                    className="text-red-600 rounded bg-red-600 bg-opacity-10 font-bold px-4 py-1"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-3 my-7 items-center bg-[#f6f9fc] rounded-lg"
    >
      <div>
        {inView ? (
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            src="/newsletter.png"
          />
        ) : null}
      </div>
      <div className="px-4">
        <h1 className="text-3xl lg:text-4xl text-gray-700 font-bold text-center my-5">
          Subscribe our Newsletter
        </h1>
        <p className="font-semibold text-gray-600 mt-2 text-sm text-center">
          A professional Blog page that comes with ready-to-post creative blog
          with one common goal in mind, help you share faster & beautiful blog
          with Bloggy PRO.
        </p>
        <div>
          <div className="flex items-center border-2 my-6 rounded-lg mx-6 border-primary ">
            <input
              type="text"
              name="newsletter"
              className="px-3 py-2.5 bg-transparent placeholder-slate-400 focus:border-0 w-full rounded-md sm:text-sm"
              placeholder="Your Email"
              required
            />
            <button
              onClick={() => setNewsletter(1)}
              className="px-5 py-2.5 font-semibold text-white bg-primary border-t-2 border-b-2 border-r-2 border-primary sm:text-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {massage}
    </div>
  );
};

export default Newsletter;
