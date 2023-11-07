import { useQuery } from "@tanstack/react-query";
import api from "../config/axios.config";
import { useState } from "react";
import BlogCard from "../components/card/BlogCard";

const Blogs = () => {
  const [filter, setfilter] = useState("blog");
  const [activeFilter, setActiveFilter] = useState("all");

  const getBlogs = (filter) => api.get(`/${filter}`);

  const {
    isLoading,
    isError,
    error,
    data: blogs,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["blog", filter],
    queryFn: () => getBlogs(filter),
    keepPreviousData: true,
  });

  const search = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setfilter(`blog?search=${value}`);
  };
  const catOption = [
    "education",
    "food",
    "health",
    "book",
    "sport",
    "science",
    "history",
    "technology",
  ];
  if (isLoading) {
    <div>
      <p>Wait....</p>
    </div>;
  }
  return (
    <div className="py-11">
      <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-2xl text-ce font-bold my-3">
            Explore all publised blog form BloggyPro
          </h1>
          <p className="mt-5 font-medium text-gray-800">
            Keep up to date with what people are bloging!
          </p>
          <p className=" font-medium text-gray-800">
            BloggyPro is an ever evolving blog website with regular updates.
          </p>
        </div>
        <div className="p-2 lg:p-6">
          <div>
            <form
              className="flex justify-center items-center my-7"
              onSubmit={search}
            >
              <input
                type="search"
                name="search"
                className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-56 rounded-md sm:text-sm focus:ring-1"
                placeholder="Search"
              />
              <input
                type="submit"
                value="Search"
                className="flex justify-center font-medium items-center ml-2 px-4 py-2.5 rounded-md text-white bg-primary"
              />
            </form>
          </div>
          <div className="mt-16">
            <h1 className="text-lg font-bold">Filter by Catagory</h1>
            <div className="mt-4">
              <p
                onClick={() => {
                  setfilter(`blog`);
                  setActiveFilter("all");
                }}
                id="all"
                className={`px-3 m-1 font-semibold text-center py-1 border-2 border-primary ${
                  activeFilter === "all"
                    ? "text-primary bg-white"
                    : "bg-primary  text-white"
                } rounded-md inline-block`}
              >
                All
              </p>
              {catOption.map((e, i) => (
                <p
                  key={i}
                  id={e}
                  onClick={() => {
                    setfilter(`blog?cat=${e}`);
                    setActiveFilter(e);
                  }}
                  className={`px-3 m-1 font-semibold text-center py-1 border-2 border-primary ${
                    activeFilter === e
                      ? "text-primary bg-white"
                      : "bg-primary  text-white"
                  } rounded-md inline-block`}
                >
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogs?.data?.map((e) => (
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

export default Blogs;
