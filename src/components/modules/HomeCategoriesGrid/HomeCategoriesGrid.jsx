import Image from "next/image";

function HomeCategoriesGrid() {
  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-4 gap-x-2 gap-y-3  h-[450px] lg:w-[849px] justify-start mb-5 ">
        <div className="group relative  cursor-pointer rounded-[10px] overflow-hidden">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/categoriesImages/cpus.jpg"
            alt="cpus"
            fill
            className="object-cover"
          />
          <h1 className="text-xl  text-white w-full h-full  hidden group-hover:grid place-items-center  group-hover:backdrop-blur-[5px] ">
            پردازنده
          </h1>
        </div>

        <div className=" group  relative   cursor-pointer rounded-[10px] overflow-hidden">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/categoriesImages/gpus.jpg"
            fill
            alt="gpus"
            className="object-cover"
          />
          <h1 className="text-xl  text-white w-full h-full  hidden group-hover:grid place-items-center  group-hover:backdrop-blur-[5px] ">
            کارت گرافیک
          </h1>
        </div>

        <div className=" group  relative  cursor-pointer rounded-[10px] overflow-hidden">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/categoriesImages/laptops.webp"
            fill
            alt="laptops"
            className="object-cover"
          />
          <h1 className="text-xl  text-white w-full h-full  hidden group-hover:grid place-items-center  group-hover:backdrop-blur-[5px] ">
            لپ‌ تاپ
          </h1>
        </div>

        <div className=" group relative lg:row-span-2   cursor-pointer rounded-[10px] overflow-hidden">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/categoriesImages/phones.jpg"
            fill
            alt="phones"
            className="object-cover "
          />
          <h1 className="text-xl  text-white w-full h-full  hidden group-hover:grid place-items-center  group-hover:backdrop-blur-[5px] ">
            گوشی موبایل
          </h1>
        </div>

        <div className=" group relative col-span-full lg:col-span-3  cursor-pointer rounded-[10px] overflow-hidden">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            src="/categoriesImages/keyboards.webp"
            fill
            alt="keyboards"
          />
          <h1 className="text-xl  text-white w-full h-full  hidden group-hover:grid place-items-center  group-hover:backdrop-blur-[5px] ">
            کیبورد
          </h1>
        </div>
      </div>
      <button className="bg-pink-500 p-3 rounded-[8px] hover:bg-pink-600 transition-all text-white">
        مشاهده تمام محصولات
      </button>
    </div>
  );
}

export default HomeCategoriesGrid;
