import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryCard({ product }) {
  return (
    // <div className="gxs:w-[220px]  md:w-[210px]  h-[250px] bg-gray-100 rounded-[8px] overflow-hidden  flex flex-col items-center shadow-2xl hover:scale-105 transition-all">
    //   <div className="img-container relative w-full h-[70%]">
    //     <Image
    //       className="object-cover"
    //       src={product?.productImages?.[0].path}
    //       fill
    //       alt="product category image"
    //     />
    //   </div>
    //   <div className="my-auto text-center text-sm p-1">
    //     <h3>{product?.title}</h3>
    //   </div>
    // </div>
    <Link
      href={`/product/${product._id}`}
      className=" shadow-[0px_0px_25px_0px_rgb(0,0,0,0.04)] hover:shadow-[0px_0px_25px_0px_rgb(0,0,0,0.2)] w-full h-[400px]  overflow-hidden  flex flex-col  cursor-pointer  transition-shadow"
    >
      <div className="img-container m-auto relative w-[90%] h-[60%]">
        <Image
          className="object-contain"
          src={product?.productImages?.[0].url}
          fill
          alt="product category image"
        />
      </div>
      <div className="my-auto text-center text-sm p-1">
        <h3>{product?.title}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
