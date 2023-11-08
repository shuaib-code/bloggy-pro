import moment from "moment";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../config/axios.config";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogCard = ({ blogId, id, set, fetch }) => {
  const { user } = useAuth();
  const blogDetails = useQuery({
    queryKey: [blogId],
    queryFn: () => api.get(`/blog?blog=${blogId}`).then((r) => r.data),
  });
  const mutation = useMutation({
    mutationFn: async (blog) => {
      return await api
        .delete(`/wishlist?id=${id}$email=${user.email}`, blog)
        .then((r) => {
          r.data?.deletedCount > 0
            ? toast.success(`${title} is deleted from your wishlist`)
            : null;
          r.data?.deletedCount > 0 ? set(!fetch) : null;
        });
    },
  });
  if (blogDetails.isLoading) {
    return (
      <SkeletonTheme height="30px" highlightColor="#16bc64">
        <Skeleton count={5}></Skeleton>
      </SkeletonTheme>
    );
  }
  const { img, title, cat, creator, date, _id, info } = blogDetails.data[0];
  const ago = moment(date).fromNow();

  return (
    <div className="shadow-md rounded-xl pb-3">
      <div className="h-48 lg:h-72 w-full overflow-y-hidden rounded-t-xl">
        <img src={img} className="rounded-t-xl" />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          <p className="text-xs px-3 py-1 font-bold text-violet-700 bg-violet-700 uppercase bg-opacity-10 rounded-full  inline-flex">
            {cat}
          </p>
          <p className="text-sm font-semibold">{ago}</p>
        </div>
        <h1 className="font-bold font-plusJakartaSans my-2">{title}</h1>
        <p className="text-sm font-medium">{info}</p>
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
                mutation.mutate();
              }}
              className="font-semibold text-sm px-3 py-1 bg-red-700 bg-opacity-10 rounded-sm text-red-700"
            >
              {mutation.isPending ? "Removing..." : "Remove from Wishlist"}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
