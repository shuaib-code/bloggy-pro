import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-7">
      <div className="space-y-9">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10">
          Let us worry about your <span className="text-primary">Blog</span>,
          focus on writing blog.
        </h1>
        <p className="text-base lg:text-xl font-medium text-gray-600">
          A professional Blog page that comes with ready-to-post creative blog
          with one common goal in mind, help you share faster & beautiful blog
          with Bloggy PRO.
        </p>
        <div className="space-x-2">
          <Link to="/add">
            <button className="font-semibold px-3 border-2 border-primary py-1 bg-primary rounded-md text-white">
              Write Blog
            </button>
          </Link>
          <Link to="/blogs">
            <button className="font-semibold px-3 border-2 border-primary py-1 text-primary rounded-md bg-transparent">
              See All Blogs
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src="/banner.png" alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
