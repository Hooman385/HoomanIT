"use client";
import { MdOutlineContactPhone } from "react-icons/md";

function SidebarContactUs() {
  return (
    <div className="w-full h-[135px] bg-white p-2  rounded-xl">
      <div className="relative h-[63%] gradient-bg rounded-t-[8px] flex justify-center items-end gradient-bg">
        <div className="bg-white rounded-full p-2 absolute top-7 ">
          <MdOutlineContactPhone size={45} className="text-cyan-500" />
        </div>
      </div>
      <div className="z-50 flex items-center justify-center h-[40%]">
        <h2 className=" z-50">
          با ما در ارتباط باشید.
        </h2>
      </div>
      <div className="h-[350px]"></div>
    </div>
  );
}

export default SidebarContactUs;
