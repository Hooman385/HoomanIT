"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function NewComment({ productId }) {
  // passed down the id from parent components and got it here as props
  // but also got if from usePathname() hook, however this hook has a problem in this case
  // it's called only when user switches tab from specs to comments
  // and if the url structure changes in the future it might stop working.
  // so i'm gonna let it stay but i won't use it.
  const [commentTitle, setCommentTItle] = useState("");
  const [userComment, setUserComment] = useState("");
  const session = useSession();
  const router = useRouter();
  //   const path = usePathname();
  //   const productId = path.split("/")[2];

  const submitComment = async () => {
    if (!userComment || !commentTitle) {
      alert("لطفا فیلدهای خواسته شده را پر نمایید");
      return;
    }
    const response = await fetch("http://localhost:3000/api/submitComment", {
      method: "POST",
      body: JSON.stringify({
        body: userComment,
        title: commentTitle,
        productId,
        authorId: session.data.user.id,
        authorName: session.data.user.name,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (response.status === 201) {
      // alert(result.message);
      toast.success(result.message);
      router.refresh();
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        className="border-2 w-full border-pink-500 rounded-[5px] p-4"
        placeholder="عنوان دیدگاه"
        type="text"
        value={commentTitle}
        onChange={(e) => setCommentTItle(e.target.value)}
      />
      <textarea
        className="border-2 w-full border-pink-500 rounded-[5px] p-4"
        placeholder="متن دیدگاه"
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
        rows="5"
      ></textarea>
      <button
        onClick={submitComment}
        className="bg-pink-500 text-white w-full p-3 rounded-[5px] hover:bg-pink-600 transition-colors"
      >
        ثبت دیدگاه
      </button>
      <Toaster />
    </div>
  );
}

export default NewComment;
