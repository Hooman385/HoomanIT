import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="bg-[#DF435A] h-[100svh] flex flex-col gap-2 justify-center items-center">
      <Image
        src="/accessDenied.jpg"
        width={400}
        height={150}
        alt="access denied"
      />
      <h1 className="text-3xl">شما به این صفحه دسترسی ندارید</h1>
      <Link className="text-2xl text-white" href="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
}

export default page;
