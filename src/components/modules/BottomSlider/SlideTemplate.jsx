import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function SlideTemplate() {
  return (
    <div className="flex h-full w-full " >
      <div className="leftSide w-[30%] mr-5 flex flex-col justify-between">
        <ul className="flex flex-col gap-4 list-disc rtl pt-5 pl-2">
          <li className="text-sm text-right list-none">مشخصات </li>
          <li className="text-xs text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </li>
          <li className="text-xs text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </li>
          <li className="text-xs text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </li>
          <li className="text-xs text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </li>
        </ul>
        <p className="flex items-center text-sm mb-4 pl-5">
          <MdKeyboardArrowLeft />
          مشاهده همه
        </p>
      </div>
      <div className="rightSide h-full w-[70%] flex flex-col gap-5 pt-5 pr-4">
        <div>
          <h2 className="text-right text-sm">
            کنسول بازی سونی PS5 Slim دیسک خور باندل یک دسته اضافی
          </h2>
          <h3 className="text-right text-sm">
            Playstation 5 Slim Game Console Bundle 2Gamepads
          </h3>
        </div>
        <div className="flex justify-around mt-5">
          <div className="flex flex-col justify-center items-center text-xl bg-yellow-500 rounded-[40px] p-5 w-[150px] h-[150px]">
            <p className="line-through	">35,000,000</p>
            <b>34,300,000</b>
            <p>تومان</p>
          </div>
          <Image
            src="/ps5.jpg"
            width={180}
            height={180}
            className="object-contain"
            alt="ps5"
          />
        </div>
      </div>
    </div>
  );
}

export default SlideTemplate;
