import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import api from "../config/axios.config";
import WishlistCard from "../components/card/WishlistCard";
import { useState } from "react";

const Wishlist = () => {
  const [reFetch, setReFetch] = useState(true);
  const { user } = useAuth();
  const wishlist = useQuery({
    queryKey: ["wishlist", reFetch],
    queryFn: () => api.get(`/wishlist?uid=${user.uid}`).then((r) => r.data),
    keepPrviousData: true,
  });

  return (
    <div>
      <div className="my-10">
        <h1 className="text-2xl font-bold">Your Wishlist</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {wishlist?.data?.map((e) => (
          <WishlistCard
            key={e._id}
            blogId={e.blogId}
            id={e._id}
            fetch={reFetch}
            set={setReFetch}
          ></WishlistCard>
        ))}
        {wishlist?.data?.length === 0 ? (
          <div className="flex justify-center items-center my-20">
            <p className="text-2xl font-semibold">No Wishlist found</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Wishlist;
