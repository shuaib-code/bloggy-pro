import moment from "moment/moment";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import api from "../config/axios.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (blog) => {
      return await api
        .post(`/blog?email=${user.email}`, blog)
        .then((r) => {
          r.data.acknowledged ? toast.success("Your Blog is now Public") : null;
          r.data.acknowledged
            ? navigate(`/details/${r.data.insertedId}`)
            : null;
        })
        .catch((e) => {
          toast.error(e.message);
          logOut().then(() =>
            toast.error("Something is went worng. Log in again")
          );
        });
    },
  });
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
    const info = form.info.value;
    const date = moment().format();

    const blog = {
      title,
      cat,
      img,
      des,
      info,
      creator: { id: user.uid, img: user.photoURL, userName: user.displayName },
      date,
    };
    mutation.mutate(blog);
  };
  const form = (
    <div>
      <h1 className="text-xl font-bold">Post your Blog</h1>
      <p className="text-sm font-medium text-gray-700 my-3">
        Post your blog, share your thought with others
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
              placeholder="Enter blog title"
              required
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Catagory
            </span>
            <select
              className="mt-1 uppercase font-medium px-3 my-0 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
              name="cat"
              id="Cat"
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
            placeholder="Enter your blog related image"
            required
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Info</span>
          <textarea
            name="info"
            id="info"
            cols="30"
            rows="3"
            className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
          ></textarea>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Description
          </span>
          <textarea
            name="des"
            id="des"
            cols="30"
            rows="7"
            className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
          ></textarea>
        </label>
        <label className="block">
          <input
            type="submit"
            className="mt-1 px-3 py-2.5 text-white font-semibold bg-primary border shadow-sm border-slate-30 block w-full rounded-md sm:text-sm "
            value={mutation.isPending ? "Posting...." : "Post"}
          />
        </label>
      </form>
    </div>
  );
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div>{form}</div>
      <div>
        <img src="/post.png" />
      </div>
    </div>
  );
};

export default Add;
