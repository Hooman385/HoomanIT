"use client";

export default function Error({ error, reset }) {
  return (
    <div className="h-[200px] flex flex-col gap-5 items-center justify-center">
      <h1 className="text-lg">
        متاسفانه خطایی رخ داده است، در صورت امکان مشکل را به ادمین گزارش دهید
      </h1>
      <p>{error.message}</p>
      <button
        className="p-2 rounded-[5px] bg-pink-500 text-center text-white"
        onClick={() => reset()}
      >
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
}
