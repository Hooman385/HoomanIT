import React from "react";

function Newsletter() {
  return (
    <div className="flex flex-col gap-2 w-[90%] lg:w-[50%] mx-auto">
      <div>
        <h3 className="text-center">عضویت در خبرنامه</h3>
      </div>
      <div className="relative vxs:w-[400px] w-[90%] flex items-center justify-center mx-auto h-[50px]">
        <input
          className="h-full w-full rounded-[8px] text-sm pr-2"
          type="text"
          placeholder="آدرس ایمیل خود را وارد نمایید"
        />
        <button className="absolute left-1 bg-[#FECF08] text-sm h-[45px] w-[75px] rounded-[8px]">
          اشتراک
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
