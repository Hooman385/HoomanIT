import { useSelector } from "react-redux";

function FilledCartLeft() {
  const totalCost = useSelector((store) => store.cart.totalCost);
  const shipmentCost = 0;
  const discount = 0;
  const checkOutCost = totalCost + shipmentCost - discount;

  return (
    <div className="left flex flex-col gap-2 bg-white w-full md:flex-1 h-fit shadow-xl rounded-[5px] p-5">
      <div className="flex text-sm gap-3 justify-between">
        <p>مبلغ کل:</p>
        <p>
          {totalCost.toLocaleString("fa-IR")} <span>تومان</span>
        </p>
      </div>
      <div className="flex text-sm gap-3 justify-between">
        <p>تخفیف:</p>
        <p>
          {discount.toLocaleString("fa-IR")} <span>تومان</span>
        </p>
      </div>
      <div className="flex text-sm gap-3 justify-between">
        <p>هزینه ارسال:</p>
        <p>
          {shipmentCost.toLocaleString("fa-IR")} <span>تومان</span>
        </p>
      </div>
      <div className="vertical-divider"></div>
      <div className="flex  justify-between">
        <p>مبلغ قابل پرداخت:</p>
        <p>
          {checkOutCost.toLocaleString("fa-IR")} <span>تومان</span>
        </p>
      </div>
      <button className="mt-5 bg-[#FC67A3] text-white w-full h-[40px] rounded-[5px]">
        ادامه ثبت سفارش
      </button>
    </div>
  );
}

export default FilledCartLeft;
