import Image from "next/image";
import Link from "next/link";

function EmptyCart() {
  return (
    <div >
      <div className="relative bg-[#EAEDED] w-[300px] h-[300px] mx-auto">
        <Image

          src="/emptycart.png"
          fill
          alt="empty cart illustration"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
      <h2 className="text-center text-2xl">سبد خرید شما خالی است</h2>
      <h3 className="text-center text2xl">
        برای بازگشت به صفحه اصلی{" "}
        <Link className="font-bold text-[#FC67A3]" href="/">
          اینجا
        </Link>{" "}
        را کلیک نمایید
      </h3>
    </div>
  );
}

export default EmptyCart;
