import Image from "next/image";

const NotFound = () => {
  return (
    <div className="h-[400px] flex flex-col gap-5 items-center justify-center">
      <h1>آدرس مورد نظر یافت نشد - 404</h1>
      <Image
        width={200}
        height={200}
        src="/404-page-not-found.512x496.png"
        alt="image of 404 not-found error"
      />
    </div>
  );
};

export default NotFound;
