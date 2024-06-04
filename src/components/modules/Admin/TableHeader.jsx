function TableHeader() {
  return (
    <div className="flex w-full bg-pink-500 text-white py-3">
      <p className="w-[8%] text-center text-sm border-l">#</p>
      <p className="w-[50%] md:w-[25%] text-center text-xs sm:text-sm border-l">نام محصول</p>
      <p className="w-[20%] text-center text-sm border-l hidden md:block">تاریخ ثبت</p>
      <p className="w-[30%] md:w-[20%] text-center text-xs sm:text-sm border-l">قیمت</p>
      <p className="w-[12%] text-center text-sm border-l hidden md:block">گارانتی</p>
      <p className="w-[15%] text-center text-xs sm:text-sm ">حذف یا ویرایش</p>
    </div>
  );
}

export default TableHeader;
