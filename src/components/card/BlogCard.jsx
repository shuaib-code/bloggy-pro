import moment from "moment";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import api from "../../config/axios.config";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const { user } = useAuth();
  const { title, img, creator, des, cat, date, _id } = blog;
  const ago = moment(date).fromNow();

  const mutation = useMutation({
    mutationFn: async (blog) => {
      return await api.post("/wishlist", blog).then((r) => {
        r.data.acknowledged
          ? toast.success(`${title} is added to your wishlist`)
          : null;
      });
    },
  });
  return (
    <div className="shadow rounded-lg pb-3 flex flex-col">
      <div className="h-44 lg:h-72 w-full overflow-y-hidden rounded-t-lg">
        <img src={img} className="rounded-t" />
      </div>
      <div className="p-2 grow flex flex-col">
        <div className="flex justify-between items-center">
          <p className="text-xs font-bold text-violet-700 px-3 py-1 bg-violet-700 bg-opacity-10 uppercase rounded-full  inline-flex">
            {cat}
          </p>
          <p className="text-sm font-semibold">{ago}</p>
        </div>
        <h1 className="font-bold text-base lg:text-lg font-plusJakartaSans my-2">
          {title}
        </h1>
        <p className="text-sm grow font-medium">{des?.slice(0, 165)}...</p>
        <div className="mt-3 flex justify-start items-center">
          <img
            src={creator?.img}
            className="w-7 h-7 object-cover rounded-full"
          />
          <p className="font-plusJakartaSans text-sm font-medium ml-2">
            by <span className="font-semibold">{creator?.userName}</span>
          </p>
        </div>
        <div className="mt-5 flex justify-end items-center mr-4 gap-2">
          <div>
            <Link to={`/details/${_id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-semibold text-sm px-3 py-1 bg-primary rounded-sm text-white"
              >
                Details
              </motion.button>
            </Link>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                mutation.mutate({ blogId: _id, userRef: user?.uid });
              }}
              className="font-semibold text-sm px-3 py-1 bg-primary bg-opacity-10 rounded-sm text-primary"
            >
              {mutation.isPending ? "Adding..." : "Add to Wishlist"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
