import moment from "moment";

const RecentComment = ({ comment }) => {
  const { comment: com, img, userName, date, _id } = comment;
  const day = moment(date).format("DD");
  const month = moment(date).format("MMM");
  return (
		<div className="bg-primary bg-opacity-5 shadow-lg p-2 lg:p-5 relative rounded-md mt-6">
			<div className="font-plusJakartaSans mt-7 flex justify-between items-center">
				<h1 className="font-bold text-primary">{userName}</h1>
				<div className="text-xs font-semibold text-slate-700 flex justify-center gap-1">
					<p>{month}</p>
					<p>{day}</p>
				</div>
			</div>
			<p className="text-sm mt-4 font-inter">{com}</p>
			<div className="absolute -top-8 right-[40%] border-[4px] shadow-lg rounded-full">
				{/* <img src={img} className="w-11 lg:w-16 rounded-full" /> */}

				<img
					className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
					src={img}
					alt="Bordered avatar"
				/>
			</div>
		</div>
	);
};

export default RecentComment;
