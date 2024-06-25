"use client";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/slices/cartSlice";

function AddToCartModule({
  title,
  image,
  price,
  quantity,
  warranty,
  warrantyName,
  color,
  id,
}) {
  const products = useSelector((store) => store.cart.products);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(
          addToCart({ title, color, price, quantity, image, warranty, id, warrantyName })
        )
      }
      className="flex gap-3 items-center text-white bg-[#FC67A3] p-3 rounded-[5px] "
    >
      <LuShoppingCart />
      افزودن به سبد خرید
    </button>
  );
}

export default AddToCartModule;
