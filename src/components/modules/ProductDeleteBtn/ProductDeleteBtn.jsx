"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FaTrash } from "react-icons/fa";

function ProductDeleteBtn({ id, title }) {
  const modalRef = useRef(null);
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/deleteProduct/?id=${id}`,
      { method: "DELETE" }
    );
    const result = await res.json();
    if (res.status === 200) {
      modalRef.current.close();
      router.push("/admin?page=1");
      router.refresh();
    } else {
      alert(result.error);
      router.push("/admin?page=1");
      router.refresh();
    }
  };

  return (
    <>
      <button onClick={() => modalRef.current.showModal()}>
        <FaTrash className="text-[18px] text-red-400 hover:text-red-500" />
      </button>

      <dialog ref={modalRef} className="rounded-[10px]  h-[200px] w-[400px]">
        <div className="flex flex-col justify-between h-full w-full p-5">
          <p>آیا مطمئنید می‌خواهید این محصول را حذف کنید؟</p>
          <p>{title}</p>
          <div className="flex justify-center items-center gap-3">
            <button
              className="py-2 px-5 rounded-[8px]  bg-pink-500 text-white hover:bg-pink-600 transition-colors"
              onClick={deleteHandler}
            >
              بله
            </button>
            <button
              className="py-2 px-5 rounded-[8px]  bg-pink-500 text-white hover:bg-pink-600 transition-colors"
              onClick={() => modalRef.current.close()}
            >
              خیر
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ProductDeleteBtn;
