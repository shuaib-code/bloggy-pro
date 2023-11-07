import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import api from "../config/axios.config";
import moment from "moment/moment";
import { BiCommentAdd, BiEdit } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import CommentCard from "../components/card/CommentCard";

const Details = () => {
  const { user } = useAuth();
  const [fatch, setFatch] = useState(true);
  const { blogId } = useParams();
  const blogDetails = useQuery({
    queryKey: [blogId],
    queryFn: () => api.get(`/blog?blog=${blogId}`).then((r) => r.data),
  });
  const loadedComments = useQuery({
    queryKey: ["comments", fatch],
    queryFn: () => api.get(`/comment?blog=${blogId}`).then((r) => r.data),
    keepPreviousData: true,
  });
  const postComment = useMutation({
    mutationFn: async (comment) => {
      return await api.post(`/comment`, comment).then((r) => {
        r.data.acknowledged ? toast.success("Your comment is added") : null;
        r.data.acknowledged ? setFatch(!fatch) : null;
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
  const now = moment(date).fromNow();
  const handelComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const date = moment().format();
    postComment.mutate({
      comment,
      id: user.uid,
      date,
      userName: user.displayName,
      img: user.photoURL,
      blogId: _id,
    });
  };
  const comments = (
    <div className="mt-6">
      <h1 className="font-semibold">
        Comments{" "}
        <span className=" text-neutral-800">
          {loadedComments?.data?.length}
        </span>
      </h1>
      <div className="space-y-3 mt-4">
        {loadedComments.isLoading
          ? "Loading Comments..."
          : loadedComments.data?.map((e) => (
              <CommentCard key={e._id} comment={e}></CommentCard>
            ))}
      </div>
    </div>
  );
  const commentSection = (
    <div>
      {user.uid === creator.id ? (
        <Link to={`/update/${blogId}`}>
          <div className="flex justify-center font-semibold items-center gap-4 bg-primary text-primary bg-opacity-10 py-2 rounded-md">
            <BiEdit className="text-xl"></BiEdit>
            <h1>Edit your blog</h1>
          </div>
        </Link>
      ) : (
        <div className="flex justify-center items-center gap-4 bg-gray-100 py-2 rounded-md">
          <BiCommentAdd className="text-xl"></BiCommentAdd>
          <h1>Leave your comment</h1>
        </div>
      )}
      {user.uid === creator.id ? null : (
        <form className="space-y-5 my-4" onSubmit={handelComment}>
          <label className="block">
            <textarea
              name="comment"
              id="comment"
              cols="20"
              rows="5"
              className="mt-1 px-3 py-2.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
            ></textarea>
          </label>
          <label className="block">
            <input
              type="submit"
              className="mt-1 px-3 py-2.5 text-white font-semibold bg-primary border shadow-sm border-slate-30 block w-full rounded-md sm:text-sm "
              value={postComment.isPending ? "Commenting...." : "Comment"}
            />
          </label>
        </form>
      )}
      {comments}
    </div>
  );
  return (
    <div className="flex items-center justify-center py-7 mt-7">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div className="relative col-span-2">
          <img
            src={img}
            className="rounded-xl h-[270px] lg:h-[400px] shadow-xl object-cover w-full"
          />
          <p className="text-sm uppercase font-semibold shadow-2xl absolute top-2 right-2.5 px-3 py-1 my-1 inline-flex rounded-sm text-primary bg-white">
            {cat}
          </p>
          <div className="mt-9">
            <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
            <div className="flex justify-between items-center mt-4">
              <div className="flex justify-center items-center">
                <img src={creator?.img} className="w-8 rounded-full mr-2" />
                <p className=" font-semibold">{creator?.userName}</p>
              </div>
              <p className="font-medium text-primary">{now}</p>
            </div>
            <p className="font-medium mt-4">{des}</p>
          </div>
        </div>
        <div>{commentSection}</div>
      </div>
    </div>
  );
};

export default Details;
