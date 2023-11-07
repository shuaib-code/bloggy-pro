import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/axios.config";
import toast from "react-hot-toast";

const Update = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blogDetails = useQuery({
    queryKey: [blogId],
    queryFn: () => api.get(`/blog?blog=${blogId}`).then((r) => r.data),
  });
  const updateBlog = useMutation({
    mutationFn: async (blog) => {
      return await api.patch(`/blog?id=${blogId}`, blog).then((r) => {
        r.data.modifiedCount > 0
          ? toast.success("Your Blog is Updated")
          : toast.error("There is nothing to update");
        navigate(`/details/${_id}`);
      });
    },
  });

  if (blogDetails.isLoading) {
    return (
      <div className="py-44 flex items-center justify-center">
        <p className="text-lg font-bold"> Fetching data...</p>
      </div>
    );
  }
  const { img, title, des, cat, creator, date, _id } = blogDetails.data[0];

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
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const cat = form.cat.value;
    const img = form.img.value;
    const des = form.des.value;

    const blog = {
      title,
      cat,
      img,
      des,
    };
    updateBlog.mutate(blog);
  };
  const form = (
    <div>
      <h1 className="text-xl font-bold">Update your Blog</h1>
      <p className="text-sm font-medium text-gray-700 my-3">
        keep up to date with what you say, share your thought with others
      </p>
      <form className="space-y-5" onSubmit={handleForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Title
            </span>
            <input
              type="text"
              name="title"
              className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="enter blog title"
              defaultValue={title}
              required
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Catagory
            </span>
            <select
              className="mt-1 px-3 my-0 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
              name="cat"
              id="Cat"
              defaultValue={cat}
            >
              {catOption?.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Image
          </span>
          <input
            type="text"
            name="img"
            className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="enter your blog related image"
            defaultValue={img}
            required
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Description
          </span>
          <textarea
            name="des"
            id="des"
            cols="30"
            rows="10"
            defaultValue={des}
            className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
          ></textarea>
        </label>
        <label className="block">
          <input
            type="submit"
            className="mt-1 px-3 py-2.5 text-white font-semibold bg-primary border shadow-sm border-slate-30 block w-full rounded-md sm:text-sm "
            value={updateBlog.isPending ? "Updating...." : "Update"}
          />
        </label>
      </form>
    </div>
  );

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div>
        <img src="/post.png" alt="" />
      </div>
      <div>{form}</div>
    </div>
  );
};

export default Update;
