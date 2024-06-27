"use client";
import React from "react";
import EmptyCart from "../modules/EmptyCart";
import FilledCart from "../modules/FilledCart/FilledCart";
import { useSelector } from "react-redux";

// import { useCart } from "@/lib/customHooks";

function CartTemplate() {
  const products = useSelector((store) => store.cart.products);

  return (
    <div className="myContainer">
      {/* banners and sliders and stuff like that go here */}

      <div className="max-w-[1170px] w-full mx-auto  flex items-center gap-2 text-sm">
        {/* <IoHomeOutline size={18} />
        دسته‌بندی‌ها
        <FaChevronLeft size={8} /> */}
      </div>

      {/* page specific content go here */}

      <div className="max-w-[1170px] w-full mx-auto flex flex-col gap-3 mb-12">
        {products.length === 0 ? <EmptyCart /> : <FilledCart />}
      </div>
    </div>
  );
}

export default CartTemplate;
