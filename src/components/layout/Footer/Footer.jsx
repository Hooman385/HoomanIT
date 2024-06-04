import FooterLinks from "@/components/modules/FooterLinks";
import FooterLogos from "@/components/modules/FooterLogos";
import Licenses from "@/components/modules/Licenses";
import Newsletter from "@/components/modules/Newsletter";
import Link from "next/link";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { FaCreditCard, FaRegStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdCompare } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#EAEDED]">
      <div className="flex w-full justify-center items-center">
        <div className="border-b-[1px] border-t-[1px] py-1 border-gray-300 flex-auto"></div>
        <h2 className="px-5">
          فروشگاه اینترنتی هومن‌آی‌تی،{" "}
          <b className="text-[#fc67a3] text-lg">خرید مقرون به صرفه آنلاین</b>
        </h2>
        <div className="border-b-[1px] border-t-[1px] py-1 border-gray-300 flex-auto"></div>
      </div>
      <div className="flex flex-col py-10 items-center max-w-[1170px] mx-auto">
        <p className="text-sm mt-3 px-10 text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className="md:h-[116px]  rounded-[8px] hidden  lg:flex-wrap lg:flex w-full justify-evenly gap-5 px-5  mt-10 mb-10 md:mb-0">
          <Link href="/">
            <div className="flex flex-col gap-2 items-center">
              <MdCompare />
              مقایسه
            </div>
          </Link>

          <Link href="/">
            <div className="flex flex-col gap-2 items-center">
              <FaCreditCard />
              خرید اقساطی
            </div>
          </Link>

          <Link href="/">
            <div className="flex flex-col gap-2 items-center">
              <FaRegStar />
              تضمین اصالت کالا
            </div>
          </Link>

          <Link href="/">
            <div className="flex flex-col gap-2 items-center">
              <CiCalendarDate />۷ روز ضمانت بازگشت
            </div>
          </Link>

          <Link href="/">
            <div className="flex flex-col gap-2 items-center">
              <FiMapPin />
              ارسال سریع به سراسر کشور{" "}
            </div>
          </Link>

          <Link href="/">
            <div className="flex flex-col gap-2 items-center">
              <CgNotes />
              راهنمای خرید
            </div>
          </Link>
        </div>

        <FooterLinks />
        <div className="footer-bottom flex flex-col gap-10 items-center lg:flex-row justify-evenly w-full mt-10 lg:px-5">
          <FooterLogos />
          <Newsletter />
          <Licenses />
        </div>
      </div>
    </div>
  );
}

export default Footer;
