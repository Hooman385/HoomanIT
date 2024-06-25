"use client";
import { toFarsiNumber } from "@/lib/engToFa";
import Link from "next/link";
import { FaHeadset } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function HeaderTop({ open, setOpen }) {
  const phone = "021-42265";
  const splitPhoneArray = phone.split("-");

  return (
    <div className="w-full header-top">
      <div className="flex mx-auto justify-between flex-wrap  max-w-[1170px] px-5">
        <div className="flex items-center justify-between gap-2 py-2  text-gray-600">
          <GiHamburgerMenu
            onClick={() => setOpen(!open)}
            className="text-[21px] block lg:hidden"
          />
          <Link href="/" className="hidden lg:block">
            <p className="hover:text-black">مجله هومن‌ آی‌ تی</p>
          </Link>
          <p className="hidden lg:block">.</p>
          <Link href="/" className="hidden lg:block">
            <p className="hover:text-black">درباره ما</p>
          </Link>
          <p className="hidden lg:block">.</p>
          <Link href="/" className="hidden lg:block">
            <p className="hover:text-black">تماس با ما</p>
          </Link>
        </div>
        <div className="flex items-center justify-between py-2 gap-4 text-gray-500 hover:text-black">
          <Link href="/">
            <p className="ltr font-bold">
              {toFarsiNumber(splitPhoneArray[0])} {" - "}
              {toFarsiNumber(splitPhoneArray[1])}
            </p>
          </Link>
          <Link href="/">
            <FaHeadset fontSize={28} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
