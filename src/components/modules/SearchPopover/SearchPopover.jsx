import Image from "next/image";
import styles from "./searchPopover.module.css";
import Link from "next/link";

function SearchPopover({ data, debouncedText }) {
  return (
    <div className="flex flex-col max-h-[300px] rounded-[8px] bg-[#F0F0F1] shadow-xl overflow-hidden">
      {data?.data && data?.data.length !== 0 ? (
        data?.data.map((product, index) => {
          if (index > 1) return;
          return (
            <Link href={`/product/${product._id}`} key={product?._id}>
              <div className=" w-full h-[100px] p-5  flex items-center justify-between gap-3 px-3 cursor-pointer hover:bg-gray-200 ">
                <p>{product?.title}</p>
                <Image
                  src={product?.productImages[0]?.path}
                  width={50}
                  height={50}
                  alt="search popover result image"
                />
              </div>
            </Link>
          );
        })
      ) : (
        <h1 className="p-4 ">{data?.error}</h1>
      )}
      {data?.data && data?.data.length > 2 && (
        <Link
          className="p-3 cursor-pointer hover:bg-gray-200 "
          href={`/categories?search=${debouncedText}`}
        >
          مشاهده همه محصولات
        </Link>
      )}
    </div>
  );
}

export default SearchPopover;
