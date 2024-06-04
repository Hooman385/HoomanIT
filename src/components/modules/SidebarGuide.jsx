"use client";

import Image from "next/image";
import { FaPlus } from "react-icons/fa";

function SidebarGuide({
  title,
  desc,
  guideImg,
  listImgOne,
  listImgTwo,
  listImgThree,
  listDescOne,
  listDescTwo,
  listDescThree,
}) {
  return (
    <div className="rounded-[8px] bg-white shadow-2xl ">
      <h3 className="h-[50px] border-b-2 border-dashed border-gray-300 flex justify-center items-center">
        {title ? title : "title"}
      </h3>
      <div className="my-[15px]">
        <Image
          src={guideImg ? guideImg : "/1.jpeg"}
          alt="guide image"
          width={102.8}
          height={102.8}
          className="rounded-full object-cover aspect-square mx-auto hover:scale-[105%] transition-all ease-in-out duration-150 cursor-pointer"
        />
      </div>
      <div className="w-[85%] mx-auto cursor-pointer">
        <p className="text-[14px] text-justify ">
          {desc
            ? desc
            : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
        </p>
      </div>

      {/* guide list items */}
      <div className="flex flex-col gap-5 mt-5 w-[85%] items-center justify-center mx-auto">
        <div className="flex gap-3 items-start justify-center cursor-pointer">
          <Image
            width={47.8}
            height={47.8}
            alt="list item image"
            src={listImgOne ? listImgOne : "/1.jpeg"}
            className="rounded-full aspect-square"
          />
          <p className="text-gray-500 text-sm hover:text-black ">
            {listDescOne
              ? listDescOne
              : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
          </p>
        </div>

        <div className="flex gap-3 items-start justify-center cursor-pointer">
          <Image
            width={47.8}
            height={47.8}
            alt="list item image"
            src={listImgOne ? listImgOne : "/1.jpeg"}
            className="rounded-full aspect-square"
          />
          <p className="text-gray-500 text-sm hover:text-black ">
            {listDescOne
              ? listDescOne
              : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
          </p>
        </div>

        <div className="flex gap-3 items-start justify-center cursor-pointer">
          <Image
            width={47.8}
            height={47.8}
            alt="list item image"
            src={listImgOne ? listImgOne : "/1.jpeg"}
            className="rounded-full aspect-square"
          />
          <p className="text-gray-500 text-sm hover:text-black ">
            {listDescOne
              ? listDescOne
              : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "}
          </p>
        </div>

        <p className="flex justify-center items-center text-sm gap-2 cursor-pointer mb-3 text-gray-500 hover:text-black">
          <FaPlus size={13} />
          مشاهده همه
        </p>
      </div>
    </div>
  );
}

export default SidebarGuide;
