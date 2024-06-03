import React from "react";

function FooterLinks() {
  return (
    <div className="container grid grid-cols-1 vxs:grid-cols-2 gap-y-10  xs:flex  lg:text-start justify-evenly mt-[30px] ">
      {/* col 1 */}
      <div className=" flex flex-col gap-2">
        <h3 className="mb-1 font-bold">هومن‌آی‌تی</h3>
        <p className="text-sm">مجوز و گواهینامه‌ها</p>
        <p className="text-sm">قوانین و مقررات</p>
        <p className="text-sm">حریم خصوصی</p>
        <p className="text-sm">گارانتی در هومن‌آی‌تی</p>
        <p className="text-sm">درباره ما</p>
        <p className="text-sm">تماس با ما</p>
        <p className="text-sm">استخدام</p>
      </div>

      {/* col 2 */}
      <div className="flex flex-col gap-2">
        <h3 className="mb-1 font-bold">راهنما</h3>
        <p className="text-sm">تضمین اصالت کالا</p>
        <p className="text-sm">شرایط برگشت‌دادن کالا</p>
        <p className="text-sm">شیوه ارسال کالا</p>
        <p className="text-sm">راهنمای خرید</p>
        <p className="text-sm">تخفیف‌ها</p>
      </div>

      {/* col 3 */}
      <div className="flex flex-col gap-2">
        <h3 className="mb-1 font-bold">برندها</h3>
        <p className="text-sm">ایسوس</p>
        <p className="text-sm">اِم‌اِس‌آی</p>
        <p className="text-sm">گیگابایت</p>
        <p className="text-sm">اِچ‌پی</p>
        <p className="text-sm">مایکروسافت</p>
        <p className="text-sm">سونی</p>
      </div>

      {/* col 4 */}
      <div className="flex flex-col gap-2">
        <h3 className="mb-1 font-bold">خدمات</h3>
        <p className="text-sm">مشاوره رایگان</p>
        <p className="text-sm">پشتیبانی</p>
        <p className="text-sm">تبلیغات</p>
        <p className="text-sm">اعتبار سنجی خریداران</p>
        <p className="text-sm">اسمبل آنلاین</p>
        <p className="text-sm">خرید سازمانی</p>
        <p className="text-sm">فروش ویژه همکاران</p>
        <p className="text-sm">معرفی به دوستان</p>
      </div>
    </div>
  );
}

export default FooterLinks;
