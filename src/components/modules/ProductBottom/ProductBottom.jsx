"use client";
import React, { useState } from "react";
import ProductSpecs from "./ProductSpecs";
import ProductComments from "./ProductComments";
import { FaRegFileLines } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";

function ProductBottom({ productSpecs, productComments, id }) {
  const [specs, setSpecs] = useState(true);
  const [comments, setComments] = useState(false);

  const tabHandler = (e) => {
    if (e?.target.className.includes("comments")) {
      setSpecs(false);
      setComments(true);
    }

    if (e?.target.className.includes("specs")) {
      setComments(false);
      setSpecs(true);
    }
  };

  return (
    <div className="bg-white w-full max-w-[1170px] mx-auto rounded-[8px] flex flex-col gap-3 p-5 mb-5 shadow-lg">
      {/* tabs */}
      <div className="flex gap-4 ">
        <h3
          name="مشخصات"
          onClick={(e) => tabHandler(e)}
          className={
            specs
              ? "specs flex items-center gap-2 font-thin border-b-2 border-b-[#FC67A3] pb-3 cursor-pointer"
              : "specs flex items-center gap-2 font-thin border-b-2 border-b-transparent pb-3 cursor-pointer"
          }
        >
          <FaRegFileLines className="text-gray-600" />
          مشخصات کامل محصول
        </h3>
        <h3
          name="نظرات"
          onClick={(e) => tabHandler(e)}
          className={
            comments
              ? "comments flex items-center gap-2 font-thin border-b-2 border-b-[#FC67A3] pb-3 cursor-pointer"
              : "comments flex items-center gap-2 font-thin border-b-2 border-b-transparent pb-3 cursor-pointer"
          }
        >
          <FaRegCommentDots className="text-gray-600" />
          نظرات کاربران
        </h3>
      </div>
      {/* tabs content  */}
      <div>
        {specs && <ProductSpecs productSpecs={productSpecs} />}
        {comments && (
          <ProductComments productComments={productComments} id={id} />
        )}
      </div>
    </div>
  );
}

export default ProductBottom;
