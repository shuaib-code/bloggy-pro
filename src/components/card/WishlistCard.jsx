import { useMutation, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import moment from "moment";
import toast from "react-hot-toast";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import api from "../../config/axios.config";
import useAuth from "../../hooks/useAuth";

const BlogCard = ({ blogId, id, set, fetch }) => {
	// Get user data from custom hook
	const { user } = useAuth();

	// Fetch blog details using react-query
	const blogDetails = useQuery({
		queryKey: [blogId],
		queryFn: () => api.get(`/blog?blog=${blogId}`).then((r) => r.data),
	});

	// Handle deletion of a blog from the wishlist
	const mutation = useMutation({
		mutationFn: async () => {
			return await api
				.delete(`/wishlist?id=${id}&email=${user.email}`)
				.then((r) => {
					if (r.data?.deletedCount > 0) {
						toast.success(`${r.data.title} is deleted from your wishlist`);
						set(!fetch); // Update parent state
					}
				});
		},
	});

	// Show a skeleton loader while data is loading
	if (blogDetails.isLoading) {
		return (
			<SkeletonTheme baseColor="#f4f4f4" highlightColor="#e0e0e0">
				<Skeleton count={5} height={30} />
			</SkeletonTheme>
		);
	}

	// Destructure blog details for easier usage
	const { img, title, cat, creator, date, _id, info } = blogDetails.data[0];
	const ago = moment(date).fromNow();

	return (
		<div className="shadow-lg rounded-xl pb-3 bg-white">
			{/* Blog Image Section */}
			<div className="h-48 lg:h-72 w-full overflow-hidden rounded-t-xl">
				<img
					src={img}
					alt={title}
					className="w-full h-full object-cover rounded-t-xl"
				/>
			</div>

			{/* Blog Details Section */}
			<div className="p-4">
				{/* Category and Timestamp */}
				<div className="flex justify-between items-center mb-2">
					<span className="text-xs px-3 py-1 font-bold text-violet-700 bg-violet-100 rounded-full uppercase">
						{cat}
					</span>
					<span className="text-sm text-gray-500">{ago}</span>
				</div>

				{/* Blog Title */}
				<h2 className="font-bold text-lg text-gray-800">{title}</h2>

				{/* Blog Info */}
				<p className="text-sm text-gray-600 mt-2">{info}</p>

				{/* Creator Info */}
				<div className="flex items-center mt-4">
					<img
						src={creator?.img}
						alt={creator?.userName}
						className="w-8 h-8 rounded-full object-cover"
					/>
					<p className="ml-3 text-sm font-medium text-gray-700">
						by <span className="font-semibold">{creator?.userName}</span>
					</p>
				</div>

				{/* Actions: Details and Remove */}
				<div className="mt-5 flex justify-end gap-4">
					{/* Navigate to Blog Details */}
					<Link to={`/details/${_id}`}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-md shadow-md"
						>
							Details
						</motion.button>
					</Link>

					{/* Remove from Wishlist */}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => mutation.mutate()}
						className={`px-4 py-2 text-sm font-semibold rounded-md shadow-md ${
							mutation.isPending
								? "bg-red-300 text-red-600"
								: "bg-red-50 text-red-700"
						}`}
					>
						{mutation.isPending ? "Removing..." : "Remove from Wishlist"}
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
