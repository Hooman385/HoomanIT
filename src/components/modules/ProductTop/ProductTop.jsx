"use client";
import { MdCompare } from "react-icons/md";
import ProductImagesSlider from "../ProductImagesSlider/ProductImagesSlider";
import ProductCounter from "../ProductCounter/ProductCounter";
import { useEffect, useState } from "react";

import AddToCart from "../AddToCart/AddToCart";
import { toFarsiNumber } from "@/lib/engToFa";

function ProductTop({ details }) {
  const {
    colors,
    createdAt,
    desc,
    price,
    productImages,
    specs,
    title,
    updatedAt,
    warranty,
    warrantyName,
    _id,
  } = details;
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(colors[0] ?? "");
  // const [price, setPrice] = useState(110000000);
  // const [id, setId] = useState(1);
  // const [title, setTitle] = useState("لپ تاپ اپل Macbook Air");
  // const [image, setImage] = useState("macbookair.jpg");
  // const [warranty, setWarranty] = useState(
  //   "گارانتی یکپارچه ( سازگار/تابا/حامی/لایف/ماتریس/الماس ایران )"
  // );

  return (
    <div className="bg-white w-full max-w-[1170px] mx-auto rounded-[8px] flex flex-col md:flex md:flex-row gap-3 pb-3 shadow-lg">
      <div className="right pr-3 pt-3">
        <ProductImagesSlider productImages={productImages} />
      </div>

      <div className="left flex-auto flex flex-col p-3">
        <h2>{title}</h2>
        <div className="vertical-divider"></div>
        <div>
          <div>
            <h3>گارانتی: {warranty === "available" ? warrantyName : "ندارد"} </h3>
          </div>
          <div className="py-3 flex items-center gap-3">
            {colors[0] && (
              <>
                <h3>رنگ:</h3>
                <div className="flex gap-3 ">
                  {colors?.map((color) => {
                    return (
                      <div
                        key={color}
                        className="flex items-center  gap-2 text-sm border border-gray-400 rounded-[5px] p-2"
                      >
                        <input
                          name="color"
                          id={color}
                          type="radio"
                          value={color}
                        />
                        <label htmlFor={color}>{color}</label>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="py-3 select-none">
            <h3>تعداد:</h3>
            <ProductCounter quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className="py-3">
            <h3>قیمت:</h3>
            <p>{parseInt(price).toLocaleString("fa-IR")} تومان</p>
          </div>
          <div className="buttons flex gap-3">
            <AddToCart
              title={title}
              image={productImages[0]}
              quantity={quantity}
              price={price}
              color={color}
              warranty={warranty}
              warrantyName={warrantyName}
              id={_id}
            />
            <button className="flex gap-3 items-center text-white bg-[#FC67A3] p-3 rounded-[5px] ">
              <MdCompare />
              مقایسه کن{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTop;
