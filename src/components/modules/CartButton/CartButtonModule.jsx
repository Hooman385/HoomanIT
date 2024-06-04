import { TbShoppingCart } from "react-icons/tb";
import { useSelector } from "react-redux";

function CartButtonModule() {
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);

  return (
    <div className="h-[60px] my-auto w-[130px] hidden xs:flex justify-center items-center gap-2 border-solid border-[2px] border-gray-200 rounded-[10px] cursor-pointer">
      <div className="relative">
        <TbShoppingCart size={31} />
        <span className="absolute bottom-[-5px] right-[-5px] text-white bg-[#f43b86] rounded-full w-5 h-5 z-10 leading-4 flex justify-center items-center text-[0.8rem]">
          {totalQuantity}
        </span>
      </div>
      <p className="text-gray-600">سبد خرید</p>
    </div>
  );
}

export default CartButtonModule;
