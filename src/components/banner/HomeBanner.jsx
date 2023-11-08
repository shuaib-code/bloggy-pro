import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        <div className="space-x-2">
          <Link to="/add">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold px-3 border-2 border-primary py-1 bg-primary rounded-md text-white"
            >
              Write Blog
            </motion.button>
          </Link>
          <Link to="/blogs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold px-3 border-2 border-primary py-1 text-primary rounded-md bg-transparent"
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
