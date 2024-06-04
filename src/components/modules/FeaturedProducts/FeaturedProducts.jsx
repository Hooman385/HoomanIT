import Link from "next/link";
import React from "react";
import { FaSquareFull } from "react-icons/fa";
import FeaturedCard from "./FeaturedCard";
import ProductSliderIndex from "../ProductSlider/ProductSliderIndex";

function FeaturedProducts({ title }) {
  return (
    <div className="featuredProducts bg-[#f571a6]  pb-5  rounded-[8px] shadow-2xl flex flex-col gap-1 px-4 ">
      <div className="top flex gap-1 py-6 justify-between items-center">
        {/* top */}
        <div className="flex items-center ">
          <FaSquareFull size={7} color="#0D7FDF" className="ml-2" />
          <h3 className="text-[14px] ml-2">{title}</h3>
        </div>
        {/* middle */}
        <div className="dottedLine border-t-2 border-dotted border-gray-200 flex-auto"></div>
        {/* bottom */}
        <Link href="/" className="text-[12px] w-[10%] text-center ">
          مشاهده همه
        </Link>
      </div>
      <div className="bottom ">
        <ProductSliderIndex />
      </div>
    </div>
  );
}

export default FeaturedProducts;
