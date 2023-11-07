import { useQuery } from "@tanstack/react-query";
import api from "../config/axios.config";
import BlogCard from "./card/BlogCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LatestBlog = () => {
  const { isLoading, data: blogs } = useQuery({
    queryKey: ["Latestblog"],
    queryFn: () => api.get("/blog?get=latest").then((r) => r.data),
    keepPreviousData: true,
  });
  if (isLoading) {
    return (
      <SkeletonTheme height="30px" highlightColor="#16B364">
        <Skeleton count={7}></Skeleton>
      </SkeletonTheme>
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold">Recent blogs</h1>
          <p className="text-xs lg:text-sm font-medium">
            Here is what we have been up to recently.
          </p>
        </div>
        <div>
          <Link to="/blogs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-semibold px-2 lg:px-3 py-2 rounded-md bg-primary text-white"
            >
              View all
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogs?.map((e) => (
          <BlogCard key={e._id} blog={e}></BlogCard>
        ))}
        {blogs?.data?.length === 0 ? (
          <div className="flex justify-center items-center my-20">
            <p className="text-2xl font-semibold">No blog found</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LatestBlog;
