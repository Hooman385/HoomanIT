"use client";
import Link from "next/link";
import Logo from "../modules/Logo";
import { signIn } from "next-auth/react";
import { useFormState } from "react-dom";
import { signInUser } from "@/app/actions/signInUser";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInTemplate() {
  const [formState, formAction] = useFormState(signInUser, "");
  const router = useRouter();

  useEffect(() => {
    if (formState.success === true) {
      signIn("credentials", {
        email: formState.email,
        username: formState.username,
        role: formState.role,
        id: formState.id,
        callbackUrl: "localhost:3000/",
        // redirect: false,
      });
      // toast.success(formState.message, {
      //   position: "top-right",
      //   autoClose: 4000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: false,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      //   onClose: () => router.push("/"),
      // });
    }
  }, [formState]);

  return (
    <div className="h-[100vh] bg-[#eaeded] flex flex-col gap-5 items-center justify-center">
      <Logo />
      <div className=" mb-12 bg-white rounded-[5px] border border-gray-300 max-w-[400px] mx-auto w-full p-5">
        <h2 className="text-xl text-center">ورود به حساب کاربری</h2>
        <div className="vertical-divider"></div>
        <form action={formAction} className="flex flex-col gap-3">
          <label htmlFor="email">ایمیل</label>
          <input
            placeholder="آدرس ایمیل خود را اینجا بنویسید"
            id="email"
            name="email"
            type="text"
            className="border border-gray-200 rounded-[5px] overflow-hidden h-[35px] text-sm p-2"
          />
          <span className="hidden text-red-600 text-sm">
            ایمیل واردشده اشتباه است
          </span>

          <label htmlFor="password">رمز عبور</label>
          <input
            placeholder="رمز عبور خود را اینجا بنویسید"
            type="password"
            name="password"
            id="password"
            className="border border-gray-200 rounded-[5px] overflow-hidden h-[35px] text-sm p-2"
          />
          <span className="hidden text-red-600 text-sm">
            رمز عبور باید دستکم ۵ حرف باشد
          </span>
          {formState?.success === false && (
            <p className="text-sm bg-red-500 text-white border rounded-[5px] p-2">
              {formState?.message}
            </p>
          )}
          <button className="bg-[#FC67A3] h-[35px] rounded-[5px] text-white">
            ورود به حساب
          </button>
          <p className="text-sm">
            حساب کاربری ندارید؟ برای ثبت نام
            <Link className="text-[#FC67A3] font-bold" href="/register">
              {" "}
              کلیک{" "}
            </Link>
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
  );
}

export default SignInTemplate;
