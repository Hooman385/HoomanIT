import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

function ProductComment({ comment }) {
  const createdDateObject = new Date(comment.createdAt);
  return (
    <div className="flex flex-col gap-3 mb-14 border border-gray-300 p-5 rounded-[8px]">
      <div className="flex items-center gap-5">
        <p className="text-xs">{comment.authorName}</p>
        <p className="text-xs">
          {createdDateObject.toLocaleDateString("fa-IR")}
        </p>
      </div>
      <div className="mb-5">
        <h3 className="text-xl mb-2">{comment.title}</h3>
        <p>{comment.body}</p>
      </div>

      <p className="flex items-end gap-2 text-xs">
        <AiOutlineLike className="text-xl cursor-pointer" />۵ نفر این نظر را
        مفید تشخیص دادند
      </p>
    </div>
  );
}

export default ProductComment;
