import moment from "moment";

const CommentCard = ({ comment }) => {
  const {  comment: userComment, date, userName, img } = comment;
  const now = moment(date).fromNow();
  return (
    <div className="grid grid-cols-10 gap-2 border-l-4 border-primary rounded-l shadow p-3">
      <div className="col-span-1">
        <img src={img} className="w-9 rounded-full" />
      </div>
      <div className="col-span-9">
        <div className="flex items-center gap-9 justify-between text-sm">
          <h1 className="font-semibold">{userName}</h1>
          <p>{now}</p>
        </div>
        <p className=" mt-3">{userComment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
