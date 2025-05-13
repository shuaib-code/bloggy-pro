import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BlogCard from "../components/card/BlogCard";
import api from "../config/axios.config";

const Blogs = () => {
	const [filter, setFilter] = useState("blog");
	const [activeFilter, setActiveFilter] = useState("all");

	const getBlogs = (filter) => api.get(`/${filter}`);

	const { isLoading, data: blogs } = useQuery({
		queryKey: ["blog", filter],
		queryFn: () => getBlogs(filter),
		keepPreviousData: true,
		enabled: filter !== "blog" || filter !== "", // Conditional fetching
	});

	const search = (e) => {
		e.preventDefault();
		const value = e.target.search.value;
		setFilter(`blog?search=${value}`);
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

	return (
		<div className="py-11">
			<div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
				<div>
					<h1 className="text-2xl text-ce font-bold my-3">
						Explore all published blogs from BloggyPro
					</h1>
					<p className="mt-5 font-medium text-gray-800">
						Keep up to date with what people are blogging!
					</p>
					<p className="font-medium text-gray-800">
						BloggyPro is an ever-evolving blog website with regular updates.
					</p>
				</div>
				<div className="p-2 lg:p-6">
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
					<div className="mt-16">
						<h1 className="text-lg font-bold">Filter by Category</h1>
						<div className="mt-4">
							<p
								onClick={() => {
									setFilter("blog");
									setActiveFilter("all");
								}}
								id="all"
								className={`px-4 py-2 m-1 text-sm font-medium rounded-lg transition ${
									activeFilter === "all"
										? "bg-primary text-white shadow-lg"
										: "bg-gray-100 text-gray-800 hover:bg-primary hover:text-white"
								} inline-block`}
							>
								All
							</p>
							{catOption.map((category, i) => (
								<p
									key={i}
									id={category}
									onClick={() => {
										setFilter(`blog?cat=${category}`);
										setActiveFilter(category);
									}}
									className={`px-4 py-2 m-1 text-sm font-medium rounded-lg transition ${
										activeFilter === category
											? "bg-primary text-white shadow-lg"
											: "bg-gray-100 text-gray-800 hover:bg-primary hover:text-white"
									} inline-block`}
								>
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Blogs Display Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
				{isLoading ? (
					<SkeletonTheme height="30px" highlightColor="#16B364">
						<Skeleton count={7} />
					</SkeletonTheme>
				) : (
					<>
						{blogs?.data?.map((blog) => (
							<BlogCard key={blog._id} blog={blog} />
						))}
						{blogs?.data?.length === 0 && (
							<div className="flex justify-center items-center my-20">
								<p className="text-2xl font-semibold">No blogs found</p>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default function App() {
	return (
		<React.Suspense fallback={<Skeleton count={7} />}>
			<Blogs />
		</React.Suspense>
	);
}
