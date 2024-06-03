// "use client"
import Link from "next/link";
import { MdCompare } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";

function FeatureIcons() {
  return (
    <div className="h-[150px] lg:h-[120px] bg-white rounded-[8px] shadow-2xl hidden sm:flex items-center gap-5 lg:gap-0 justify-center lg:justify-evenly flex-wrap lg:flex-nowrap px-5 lg:px-0 py-2 max-w-full text-center">
      <Link href="/">
        <div className="flex flex-col gap-2 items-center">
          <MdCompare />
          <p className="text-md lg:text-[16px]">مقایسه</p>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col gap-2 items-center">
          <FaCreditCard />
          <p className="text-md lg:text-[16px]">خرید اقساطی</p>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col gap-2 items-center">
          <FaRegStar />
          <p className="text-md lg:text-[16px]">تضمین اصالت کالا</p>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col gap-2 items-center">
          <CiCalendarDate />
          <p className="text-md lg:text-[15px]">۷ روز ضمانت بازگشت</p>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col gap-2 items-center">
          <FiMapPin />
          <p className="text-md lg:text-[16px]">ارسال سریع به سراسر کشور </p>
        </div>
      </Link>

      <Link href="/">
        <div className="flex flex-col gap-2 items-center">
          <CgNotes />
          <p className="text-md lg:text-[16px]">راهنمای خرید</p>
        </div>
      </Link>
    </div>
  );
}

export default FeatureIcons;
