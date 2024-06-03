import { clearCart } from "@/redux/features/slices/cartSlice";
import FilledCartLeft from "./FilledCartLeft";
import FilledCartRight from "./FilledCartRight";
import { useDispatch } from "react-redux";

function FilledCart() {
  const dispatch = useDispatch();
  return (
    <>
      <h3>سبد خرید</h3>
      <button
        className="text-white p-5 bg-pink-500 rounded-[5px]"
        onClick={() => dispatch(clearCart())}
      >
        پاکسازی سبد
      </button>
      <div className="flex flex-col items-center md:items-start md:flex-row gap-3 w-full">
        <FilledCartRight />
        <FilledCartLeft />
      </div>
    </>
  );
}

export default FilledCart;
