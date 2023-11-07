import { useQuery } from "@tanstack/react-query";
import api from "../config/axios.config";
import BlogCard from "./card/BlogCard";
import { Link } from "react-router-dom";

const LatestBlog = () => {
  const {
    isLoading,
    isError,
    error,
    data: blogs,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["Latestblog"],
    queryFn: () => api.get("/blog?get=latest").then((r) => r.data),
    keepPreviousData: true,
  });
  if (isLoading) {
    <div>
      <p>Wait....</p>
    </div>;
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
            <button className="text-sm font-semibold px-2 lg:px-3 py-2 rounded-md bg-primary text-white">
              View all
            </button>
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