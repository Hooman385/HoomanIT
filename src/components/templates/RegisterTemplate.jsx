"use client";

import Link from "next/link";
import Logo from "../modules/Logo";
import { createUser } from "@/app/actions/createUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterTemplate() {
  const [formState, formAction] = useFormState(createUser, "");
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (formState.success === true) {
      toast.success(formState.message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => router.push("/signin"),
      });
    }
  }, [formState]);

  return (
    <>
      <div className="h-[100vh] bg-[#eaeded] flex flex-col gap-5 items-center justify-center">
        <Logo />
        <div className=" mb-12 bg-white rounded-[5px] border border-gray-300 max-w-[400px] mx-auto w-full p-5">
          <h2 className="text-xl text-center"> ثبت نام در هومن‌آی‌تی</h2>
          <div className="vertical-divider"></div>
          <form action={formAction} className="flex flex-col gap-3">
            <label htmlFor="email">نام کاربری</label>
            <input
              id="username"
              name="username"
              type="text"
              className="border border-gray-200 rounded-[5px] overflow-hidden h-[35px] text-sm p-2"
            />

            <label htmlFor="email">ایمیل</label>
            <input
              id="email"
              name="email"
              type="text"
              className="border border-gray-200 rounded-[5px] overflow-hidden h-[35px] text-sm p-2"
            />

            <label htmlFor="password">رمز عبور</label>
            <div className="flex items-center">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                className="border w-full border-gray-200 rounded-[5px] overflow-hidden h-[35px] text-sm p-2 pl-[30px]"
              />
              {showPass ? (
                <FaRegEyeSlash
                  onClick={() => setShowPass(!showPass)}
                  className="mr-[-25px] cursor-pointer text-gray-500 hover:text-gray-600"
                />
              ) : (
                <FaRegEye
                  onClick={() => setShowPass(!showPass)}
                  className="mr-[-25px] cursor-pointer text-gray-500 hover:text-gray-600"
                />
              )}
            </div>

            {formState?.success === false && (
              <p className="text-sm bg-red-500 text-white border rounded-[5px] p-2">
                {formState?.message}
              </p>
            )}
            <button className="bg-[#FC67A3] h-[35px] rounded-[5px] text-white select-none">
              ثبت نام
            </button>
            <p className="text-sm">
              از پیش حساب دارید؟ برای ورود{" "}
              <Link className="text-[#FC67A3] font-bold" href="/signin">
                کلیک
              </Link>{" "}
              کنید
            </p>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}

export default RegisterTemplate;
