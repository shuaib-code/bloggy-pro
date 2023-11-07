import moment from "moment";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import api from "../../config/axios.config";
import toast from "react-hot-toast";

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
    <div className="shadow-md rounded-xl pb-3">
      <div className="h-64 w-full overflow-y-hidden rounded-2xl">
        <img src={img} className="rounded-2xl" />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold text-primary uppercase rounded-lg  inline-flex px-5">
            {cat}
          </p>
          <p className="text-sm font-semibold">{ago}</p>
        </div>
        <h1 className="font-bold text-lg font-plusJakartaSans my-2">{title}</h1>
        <p className="text-sm font-medium">{des?.slice(0, 165)}...</p>
        <div className="mt-3 flex justify-start items-center">
          <img src={creator?.img} className="w-7 rounded-full" />
          <p className="font-plusJakartaSans text-sm font-medium ml-2">
            by <span className="font-semibold">{creator?.userName}</span>
          </p>
        </div>
        <div className="mt-5 flex justify-end items-center mr-4 gap-2">
          <div>
            <Link to={`/details/${_id}`}>
              <button className="font-semibold text-sm px-3 py-1 bg-primary rounded-sm text-white">
                Details
              </button>
            </Link>
          </div>
          <div>
            <button
              onClick={() => {
                mutation.mutate({ blogId: _id, userRef: user?.uid });
              }}
              className="font-semibold text-sm px-3 py-1 bg-primary bg-opacity-10 rounded-sm text-primary"
            >
              {mutation.isPending ? "Adding..." : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
