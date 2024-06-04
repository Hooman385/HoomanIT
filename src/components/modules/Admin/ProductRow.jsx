import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import ProductDeleteBtn from "../ProductDeleteBtn/ProductDeleteBtn";

function ProductRow({ product }) {
  return (
    <div className="flex  bg-gray-500 hover:bg-gray-600 cursor-pointer text-white py-3">
      <p className="w-[8%] text-center text-sm border-l flex justify-center items-center">
        {product.index}
      </p>
      <p className="w-[50%] md:w-[25%] text-center text-xs sm:text-sm border-l flex justify-center items-center">
        <Link href={`/product/${product.id}`}>{product?.title}</Link>
      </p>
      <p className="w-[20%] text-center text-sm border-l hidden md:flex justify-center items-center">
        {new Date(product?.createdAt).toLocaleDateString("fa-IR")}
      </p>
      <p className="w-[30%] md:w-[20%] text-center text-xs sm:text-sm border-l flex justify-center items-center">
        {product?.price?.toLocaleString("fa-IR")} تومان
      </p>
      <p className="w-[12%] text-center text-sm border-l hidden md:flex justify-center items-center">
        {product?.warrantyName ? product?.warrantyName : "ندارد"}
      </p>
      <div className="flex w-[15%] items-center gap-1 sm:gap-3 justify-center">
        <ProductDeleteBtn id={product?.id} title={product?.title} />
        <Link href={`/edit-product?id=${product.id}`}>
          <FaEdit className="text-[18px] text-white hover:text-blue-200" />
        </Link>
      </div>
    </div>
  );
}

export default ProductRow;
