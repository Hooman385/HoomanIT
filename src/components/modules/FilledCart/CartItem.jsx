import Image from "next/image";
import { IoClose } from "react-icons/io5";
import ProductCounter from "../ProductCounter/ProductCounter";
import { removeFromCart } from "@/redux/features/slices/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ title, id, color, quantity, price, image, warranty }) {
  const dispatch = useDispatch();

  return (
    <div className="flex  last:border-0 border-b border-b-gray-200 py-2">
      <div className="right w-[250px] flex items-center justify-around gap-1 rounded-[8px] overflow-hidden">
        <div
          onClick={() => dispatch(removeFromCart({ id }))}
          className="flex items-center justify-center h-[100px] w-[25px] bg-[#FC67A3] cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="relative w-[110px] h-[110px] md:w-[150px] md:h-[150px]">
          <Image
            priority
            src={image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            alt="macbook air image"
            className="object-contain"
          />
        </div>
      </div>
      <div className="left flex flex-col justify-between gap-3">
        <h3 className="text-sm md:text-base">{title}</h3>
        <div className="flex flex-col gap-1">
          <p className="text-sm">{color}</p>
          <p className="text-sm">{warranty}</p>
          <ProductCounter quantity={quantity} id={id} />
          <p className="text-sm">
            {price.toLocaleString("fa-IR")} <span>تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
