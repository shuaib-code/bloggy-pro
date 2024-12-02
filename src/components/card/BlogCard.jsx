import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import moment from "moment";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import api from "../../config/axios.config";
import useAuth from "../../hooks/useAuth";

const BlogCard = ({ blog }) => {
	// Extracting data from blog object
	const { user } = useAuth();
	const { title, img, creator, cat, date, _id, info } = blog;
	const ago = moment(date).fromNow();

	// Mutation for adding the blog to the wishlist
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
		// Main Card Container
		<div className=" shadow-md rounded-lg pb-4 flex flex-col bg-white transition-transform hover:shadow-xl">
			{/* Blog Image Section */}
			<div className="h-48 lg:h-72 w-full overflow-hidden rounded-t-lg relative">
				<PhotoProvider>
					<PhotoView src={img}>
						{/* Blog Image with hover effect */}
						<img
							src={img}
							alt={title}
							className="w-full h-full object-cover rounded-t-lg cursor-pointer hover:scale-110 transition-transform duration-300"
						/>
					</PhotoView>
				</PhotoProvider>
			</div>

			{/* Blog Details Section */}
			<div className="p-4 grow flex flex-col">
				{/* Category and Date */}
				<div className="flex justify-between items-center mb-2">
					{/* Category Badge */}
					<p className="text-xs font-bold text-violet-700 px-3 py-1 bg-violet-700 bg-opacity-10 uppercase rounded-full">
						{cat}
					</p>
					{/* Time Ago */}
					<p className="text-sm text-gray-500">{ago}</p>
				</div>

				{/* Blog Title */}
				<h1 className="font-bold text-lg lg:text-xl text-gray-800 leading-tight mb-2">
					{title}
				</h1>

				{/* Blog Info/Description */}
				<p className="text-sm text-gray-600 leading-relaxed grow mb-4">
					{info}
				</p>

				{/* Blog Creator Section */}
				<div className="mt-3 flex items-center">
					{/* Creator's Profile Picture */}
					<img
						src={creator?.img}
						alt={creator?.userName}
						className="w-10 h-10 object-cover rounded-full shadow"
					/>
					{/* Creator's Name */}
					<p className="ml-3 text-sm text-gray-700">
						by <span className="font-semibold">{creator?.userName}</span>
					</p>
				</div>

				{/* Action Buttons Section */}
				<div className="mt-5 flex justify-end gap-3">
					{/* Details Button */}
					<Link to={`/details/${_id}`}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="font-semibold text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md"
						>
							Details
						</motion.button>
					</Link>

					{/* Add to Wishlist Button */}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => mutation.mutate({ blogId: _id, userRef: user?.uid })}
						className={`font-semibold text-sm px-4 py-2 rounded-md shadow-md ${
							mutation.isPending
								? "bg-gray-300 text-gray-700"
								: "bg-green-500 hover:bg-green-600 text-white"
						}`}
					>
						{/* Button Text Changes Based on Mutation State */}
						{mutation.isPending ? "Adding..." : "Add to Wishlist"}
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
