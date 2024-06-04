"use client";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { cartPlusOne, cartMinusOne } from "@/redux/features/slices/cartSlice";
import { useDispatch } from "react-redux";

function ProductCounter({ quantity, setQuantity, id }) {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const plusOne = () => {
    setQuantity((prev) => prev + 1);
  };

  const minusOne = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex justify-around items-center bg-[#FC67A3] h-[40px] w-[100px] rounded-[5px]">
      <FaPlus
        onClick={
          pathname === "/cart" ? () => dispatch(cartPlusOne({ id })) : plusOne
        }
        className="rounded-full p-[3px] text-[18px] bg-white cursor-pointer"
      />
      <p className="text-white">{quantity}</p>
      <FaMinus
        onClick={
          pathname === "/cart" ? () => dispatch(cartMinusOne({ id })) : minusOne
        }
        className="rounded-full p-[3px] text-[18px] bg-white cursor-pointer"
      />
    </div>
  );
}

export default ProductCounter;
