"use client";

import ProductColor from "@/components/modules/Admin/ProductColor";
import ProductSpec from "@/components/modules/Admin/ProductSpec";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import { RiAttachment2 } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

function EditProductTemplate({ product }) {
  // form states
  const [title, setTitle] = useState(product?.title);
  const [price, setPrice] = useState(product?.price);
  const [category, setCategory] = useState(product?.category);
  const [quantity, setQuantity] = useState(product?.quantity);
  const [selectedWarrantyCheckbox, setSelectedWarrantyCheckbox] = useState(
    product?.warranty
  );

  const [warrantyName, setWarrantyName] = useState(product?.warrantyName || "");
  const [desc, setDesc] = useState(product?.desc);
  const [apiImages, setApiImages] = useState([]);
  const [productImages, setProductImages] = useState(null);
  const [selectedImages, setSelectedImages] = useState(() => {
    let initialImages = [];
    product?.productImages.forEach((image) => initialImages.push(image.url));
    return initialImages;
  });
  const [colors, setColors] = useState(product?.colors);
  const [specs, setSpecs] = useState(product?.specs);
  const [imageUploadMessage, setImageUploadMessage] = useState("");
  const [imageUploadError, setImageUploadError] = useState("");

  const addSpec = (e) => {
    e.preventDefault();
    const newSpecs = [...specs];
    newSpecs.push({});
    setSpecs(newSpecs);
  };

  const addColor = (e) => {
    e.preventDefault();
    const newColors = [...colors];
    newColors.push("");
    setColors(newColors);
  };

  const imageChangeHandler = async (e) => {
    const apiImagesArray = Array.from(e.target.files);
    // setImages(e.target.files?.[0]);
    setApiImages(apiImagesArray);

    const newArr = [];

    apiImagesArray?.forEach((file) => {
      let newBlob = URL.createObjectURL(file);

      newArr.push(newBlob);
    });

    setSelectedImages(newArr);
  };

  const uploadImages = async () => {
    if (!apiImages) return;

    const data = new FormData();

    apiImages.forEach((image, index) => {
      data.append(`image${index}`, image);
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/imageUpload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();

    if (result.success) {
      setProductImages(result.images);
      setImageUploadError("");
      setImageUploadMessage(result.message);
    } else {
      setImageUploadMessage("");
      setImageUploadError(result.error);
    }
  };

  const updateProduct = async (e) => {
    if (
      !title ||
      !category ||
      !desc ||
      !selectedWarrantyCheckbox ||
      !quantity ||
      !price ||
      !specs ||
      !desc
      // !productImages
    ) {
      alert("لطفا همه فیلدهای الزامی را پر کنید");
      return;
    }
    const data = {
      title,
      price,
      category,
      quantity,
      warranty: selectedWarrantyCheckbox,
      warrantyName,
      desc,
      colors,
      specs,
      productImages,
      id: product?._id,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/updateProduct`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await response.json();

    alert(result.message);
  };

  return (
    <div className="h-fit p-3 flex-auto w-full mb-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="title">
            عنوان <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            required
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-sm rounded-[5px] px-1 outline-none h-[30px]"
          />
        </div>
        {
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="title">
              شاخص (ایندکس) <span className="text-red-500 text-xs">*</span>
            </label>
            <input
              required
              type="number"
              id="index"
              value={product?.index}
              disabled
              className="text-sm rounded-[5px] px-1 outline-none h-[30px]"
            />
          </div>
        }

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="category">
            دسته‌بندی <span className="text-red-500 text-xs">*</span>
          </label>
          <select
            className="text-md rounded-[5px] px-1 outline-none h-[30px]"
            name="categories"
            id="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option defaultValue value="laptop">
              لپ تاپ
            </option>
            <option value="gpu">پردازنده گرافیکی</option>
            <option value="cpu">پردازنده مرکزی</option>
            <option value="keyboard">کیبورد</option>
            <option value="mouse">ماوس</option>
            <option value="monitor">مانیتور</option>
            <option value="headset">هدست</option>
            <option value="speakers">اسپیکر</option>
            <option value="case">کیس</option>
            <option value="motherboard">مادربرد</option>
            <option value="ssd">SSD</option>
            <option value="hdd">HDD</option>
            <option value="power-supply">منبع تغذیه</option>
            <option value="ram">رم</option>
            <option value="cpu-cooler">خنک کننده پردازنده</option>
            <option value="case-fan">فن کیس</option>
            <option value="mobile-phone">گوشی تلفن همراه</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 ">
          <label htmlFor="price">
            قیمت <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            required
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="text-sm rounded-[5px] px-1 outline-none  h-[30px]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="price">
            تعداد <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            type="number"
            id="price"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="text-sm rounded-[5px] px-1 outline-none  h-[30px]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p>
            گارانتی: <span className="text-red-500 text-xs">*</span>
          </p>
          <div className="flex gap-3 ">
            <div className="flex gap-1 items-center">
              <label htmlFor="none">ندارد </label>
              <input
                type="checkbox"
                id="none"
                name="warranty"
                value="none"
                checked={selectedWarrantyCheckbox === "none"}
                onChange={(e) => {
                  setSelectedWarrantyCheckbox(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="available">دارد</label>
              <input
                type="checkbox"
                id="available"
                name="warranty"
                value="available"
                checked={selectedWarrantyCheckbox === "available"}
                onChange={(e) => {
                  setSelectedWarrantyCheckbox(e.target.value);
  
                }}
              />
            </div>
          </div>
          {selectedWarrantyCheckbox === "available" && (
            <div className="flex flex-col gap-1">
              <label htmlFor="warranty-names">نام گارانتی</label>
              <input
                type="text"
                id="warranty-names"
                name="warranty"
                value={warrantyName}
                onChange={(e) => setWarrantyName(e.target.value)}
                className="text-sm rounded-[5px] px-1 outline-none  h-[30px]"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="desc">
            توضیحات محصول <span className="text-red-500 text-xs">*</span>
          </label>
          <textarea
            rows="10"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="text-sm rounded-[5px] px-1 outline-none"
          ></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <p htmlFor="images">
            تصاویر محصول <span className="text-red-500 text-xs">*</span>
          </p>

          <div className="flex gap-5 h-fit flex-wrap">
            {selectedImages?.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={150}
                height={100}
                className="object-contain"
                alt="selected images for upload"
              />
            ))}
          </div>
          <div className="flex gap-5 items-center mt-5">
            <label htmlFor="imageInput" className="cursor-pointer w-fit h-fit">
              <div className="flex w-fit items-center gap-3 p-2 px-3 rounded-[8px] text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-300">
                انتخاب تصاویر
                <RiAttachment2 className="text-xl" />
              </div>
              <input
                className="hidden"
                type="file"
                accept=".webp, .jpg, .jpeg, .png"
                multiple
                id="imageInput"
                name="product-images"
                onChange={imageChangeHandler}
              />
            </label>
            <button
              onClick={uploadImages}
              className="flex w-fit items-center gap-3 p-2 px-3 rounded-[8px] text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-300"
            >
              آپلود تصاویر
              <FaUpload />
            </button>
            {imageUploadMessage && (
              <p className="text-white bg-green-500 p-2 rounded-[5px]">
                {imageUploadMessage}
              </p>
            )}

            {imageUploadError && (
              <p className="text-white bg-red-600 p-2 rounded-[5px]">
                {imageUploadError}
              </p>
            )}
          </div>
        </div>

        <div className="bg-gray-500 w-full h-[1px]"></div>
        <div>
          <p className="mb-3">رنگ‌ها</p>
          <div className="flex  gap-5 flex-wrap">
            {colors.map((color, index) => {
              return (
                <ProductColor
                  colors={colors}
                  setColors={setColors}
                  index={index}
                  key={uuidv4()}
                  color={color}
                />
              );
            })}
          </div>

          <button
            onClick={addColor}
            className="flex items-center gap-1 mt-5 p-2 px-3 rounded-[8px] text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-300"
          >
            افزودن رنگ جدید
            <FaPlus className="text-lg  cursor-pointer" />
          </button>
        </div>

        <div className="bg-gray-500 w-full h-[1px]"></div>
        <div>
          <p className="mb-3">
            مشخصات <span className="text-red-500 text-xs">*</span>
          </p>
          <div className="flex flex-col gap-5">
            {specs.map((spec, index) => {
              const uid = uuidv4();
              return (
                <ProductSpec
                  spec={spec}
                  key={uid}
                  index={index}
                  specs={specs}
                  setSpecs={setSpecs}
                />
              );
            })}
          </div>

          <button
            onClick={addSpec}
            className="flex items-center gap-1 mt-5 p-2 px-3 rounded-[8px] text-white bg-pink-500 hover:bg-pink-600 transition-colors duration-300"
          >
            افزودن مشخصه جدید
            <FaPlus className="text-lg  cursor-pointer" />
          </button>
        </div>
        <button
          onClick={updateProduct}
          className="bg-pink-500  text-white hover:bg-pink-600 transition-colors duration-300 py-2 rounded-[8px]"
        >
          بروزرسانی محصول
        </button>
      </div>
    </div>
  );
}

export default EditProductTemplate;
