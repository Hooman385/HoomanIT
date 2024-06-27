import * as HoverCard from "@radix-ui/react-hover-card";
import "./ProfileHoverCardStyles.css";
import { PiSignOutFill } from "react-icons/pi";
import { PiUserRectangle } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { signOut } from "next-auth/react";
import Link from "next/link";

export const ProfileHoverCard = ({ children, role }) => {
  return (
    <HoverCard.Root className="z-50" openDelay={0} closeDelay={300}>
      <HoverCard.Trigger>{children}</HoverCard.Trigger>
      <HoverCard.Content className="HoverCardContent mt-2 flex flex-col gap-1 items-center justify-center border-[1px] border-gray-300 rounded-[8px] bg-gray-200  py-5 w-[200px] z-[11]">
        <Link
          href="/"
          className="bg-gray-200 flex items-center justify-around  hover:border-0 w-[170px] h-[50px] rounded-[5px] hover:text-white hover:bg-gray-500 cursor-pointer"
        >
          <p className="w-[70%]">پروفایل من</p>
          <PiUserRectangle className="text-2xl" />
        </Link>
        {role === "ADMIN" && (
          <Link
            href="/admin"
            className="bg-gray-200 flex items-center justify-around   hover:border-0 w-[170px] h-[50px] rounded-[5px] hover:text-white hover:bg-gray-500 cursor-pointer"
          >
            <p className="w-[70%]">پنل ادمین</p>
            <RiAdminFill className="text-xl " />
          </Link>
        )}

        <div className="w-[70%] h-[1px] bg-gray-400 my-1"></div>
        <button className="bg-gray-200 flex items-center justify-around   hover:border-0 w-[170px] h-[50px] rounded-[5px] hover:text-white hover:bg-red-600 cursor-pointer">
          <p onClick={() => signOut()} className="w-[70%] text-right">
            خروج از حساب
          </p>
          <PiSignOutFill className="text-2xl " />
        </button>
      </HoverCard.Content>
    </HoverCard.Root>
  );
};
