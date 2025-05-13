import { useQuery } from "@tanstack/react-query";
import api from "../config/axios.config";
import RecentComment from "./card/RecentComment";

const RecentComments = () => {
  const comments = useQuery({
    queryKey: ["recentComments"],
    queryFn: () => api.get("/comments").then((r) => r.data),
  });
  if (comments.isLoading) {
    <p className="text-lg font-bold">Loading...</p>;
  }
  return (
    <div className="py-9">
      <div>
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Recent Comments from Blog
        </h1>
        <p className="text-sm font-medium text-gray-700">
          What people say about our blog...
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 mt-7">
        {comments?.data?.map((e, i) => (
          <RecentComment key={e._id} comment={e}></RecentComment>
        ))}
      </div>
    </div>
  );
};

export default RecentComments;
