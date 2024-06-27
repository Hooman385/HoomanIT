import Image from "next/image";

const NotFound = () => {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <h1>آدرس مورد نظر یافت نشد - 404</h1>
      <Image
        width={200}
        height={200}
        src="/public/404-page-not-found.512x496.png"
        alt="image of 404 not-found error"
      />
    </div>
  );
};

export default NotFound;
