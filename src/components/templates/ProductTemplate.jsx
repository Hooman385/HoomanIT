"use client";

import { FaChevronLeft } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import ProductTop from "../modules/ProductTop/ProductTop";
import ProductBottom from "../modules/ProductBottom/ProductBottom";
import Link from "next/link";

function ProductTemplate({ details }) {

  return (
    <div className="myContainer">

      {/* banners and sliders and stuff like that go here */}

      <div className="max-w-[1170px] w-full mx-auto  flex items-center gap-2 text-sm">
        <IoHomeOutline size={18} />
        <Link className="cursor-pointer" href="/categories">
          دسته‌بندی‌ها
        </Link>
        <FaChevronLeft size={8} />
        {details.category}
        <FaChevronLeft size={8} />
        {details.title}
      </div>

      {/* page specific content go here */}

      <div className="product flex flex-col gap-3">
        <ProductTop details={details} />
        <ProductBottom
          productSpecs={details.specs}
          productComments={details.comments}
          id={details._id}
        />
      </div>
    </div>
  );
}

export default ProductTemplate;
