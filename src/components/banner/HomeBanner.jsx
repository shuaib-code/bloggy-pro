import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomeBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-7">
      <div className="space-y-9">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10">
          Let us worry about your <span className="text-primary"> Blog </span>,
          focus on writing blog.
        </h1>
        <p className="text-base lg:text-xl font-medium text-gray-600">
          <TypeAnimation
            sequence={[
              " A professional Blog page that comes with ready-to-post creative blog with one common goal in mind, help you share faster & beautiful blog with Bloggy PRO.",
              1000,
            ]}
            speed={150}
            repeat={Infinity}
          />
        </p>
        <div className="flex space-x-4">
          <Link to="/add">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="font-semibold px-5 py-2 border-2 border-primary rounded-md bg-primary text-white hover:bg-primary-dark"
            >
              Write Blog
            </motion.button>
          </Link>

          <Link to="/blogs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="font-semibold px-5 py-2 border-2 border-primary rounded-md text-primary bg-transparent hover:bg-primary hover:text-white"
            >
              See All Blogs
            </motion.button>
          </Link>
        </div>
      </div>
      <div>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 150,
              restDelta: 0.002,
            },
          }}
          src="/banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeBanner;
