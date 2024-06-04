"use client";
import { FaPlus } from "react-icons/fa6";
import { PiSignOutFill } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import AdminDetails from "./AdminDetails";
import { signOut } from "next-auth/react";

function RightPanel() {
  return (
    <div className="hidden lg:block bottom-right h-fit p-3 sticky top-[50px] bg-[#eaeaea] rounded-[8px] w-[270px]">
      <AdminDetails />
      <ul className="flex flex-col gap-3 w-full">
        <Link href="/">
          <li className="p-2 rounded-[5px] hover:text-white hover:bg-pink-500 cursor-pointer flex justify-between items-center">
            بازگشت به صفحه اصلی
            <IoHome className="text-xl" />
          </li>
        </Link>
        <Link href="/admin">
          <li className="p-2 rounded-[5px] hover:text-white hover:bg-pink-500 cursor-pointer flex justify-between items-center">
            فهرست محصولات
            <FaListUl className="text-xl" />
          </li>
        </Link>
        <Link href="/new-product">
          <li className="p-2 rounded-[5px] hover:text-white hover:bg-pink-500 cursor-pointer flex justify-between items-center">
            افزودن محصول جدید
            <FaPlus className="text-xl" />
          </li>
        </Link>
        {/* <li className="p-2 rounded-[5px] hover:text-white hover:bg-pink-500 cursor-pointer flex justify-between items-center">
          محصولات در انتظار تائید
          <FaCartArrowDown className="text-xl" />
        </li> */}

        {/* <li className="p-2 rounded-[5px] hover:text-white hover:bg-pink-500 cursor-pointer flex justify-between items-center">
          نظرات در انتظار تائید
          <FaRegCommentAlt className="text-xl" />
        </li> */}

        <li
          onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          className="p-2 rounded-[5px] hover:text-white hover:bg-red-600 cursor-pointer flex justify-between items-center"
        >
          خروج از حساب
          <PiSignOutFill className="text-xl" />
        </li>
      </ul>
    </div>
  );
}

export default RightPanel;
