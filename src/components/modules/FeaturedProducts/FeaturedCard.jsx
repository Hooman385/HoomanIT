import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";

function FeaturedCard({ image, title, price, prevPrice }) {
  return (
    <div className="flex flex-col gap-3 items-center bg-white rounded-[5px] p-2 w-[160px]">
      <Image
        src={image ? image : "/productSliderImages/product1.jpg"}
        width={110}
        height={110}
        alt="product image"
        className="object-contain "
      />
      <LiaShippingFastSolid className="mr-auto ml-2 text-[20px]" />
      <h3 className="text-xs rtl">
        {title ? title : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم"}
      </h3>
      <div className="w-full">
        <h3 className="text-left text-[14px]">
          {price ? price.toLocaleString("fa-IR") : "۵۰٬۰۰۰"} تومان
        </h3>
        <h4 className="text-left text-[12px] line-through text-gray-500">
          {prevPrice ? prevPrice.toLocaleString("fa-IR") : "۴۵٬۰۰۰"} تومان
        </h4>
      </div>
    </div>
  );
}

export default FeaturedCard;
