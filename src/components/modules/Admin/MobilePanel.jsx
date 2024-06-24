"use client";
import { FaPlus } from "react-icons/fa6";
import { PiSignOutFill } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { signOut } from "next-auth/react";
import Link from "next/link";

function MobilePanel() {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-pink-500 h-[70px] flex justify-center items-center text-2xl text-white ">
      <Link
        href="/"
        className="w-[25%] flex justify-center border-l border-white last:border-0"
      >
        <IoHome />
      </Link>

      <Link
        href="/admin"
        className="w-[25%] flex justify-center border-l border-white last:border-0"
      >
        <FaListUl />
      </Link>

      <Link
        href="/new-product"
        className="w-[25%] flex justify-center border-l border-white last:border-0"
      >
        <FaPlus />
      </Link>

      <div
        onClick={() => signOut({ callbackUrl: `http://localhost:3000` })}
        className="w-[25%] flex justify-center border-l border-white last:border-0"
      >
        <PiSignOutFill />
      </div>
    </div>
  );
}

export default MobilePanel;
