"use client";
import { IoHomeOutline } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import CategoryCard from "../modules/BottomSlider/CategoryCard";
import Link from "next/link";
import CategoryItem from "../modules/CategoryItem";
import categories from "../../../data/categories";
import {
  CustomPage,
  NextPage,
  PrevPage,
} from "../modules/Admin/CategoriesPagination";
import NoResultsFound from "../modules/NoResultsFound";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import Loading from "../modules/Loading/Loading";

// import { use } from "react";
// import useSWR from "swr";
// import Loading from "../modules/Loading";

function CategoryTemplate(
  {
    // pageNumber,
    // maxPage,
    // products,
    // noResults,
    // pagesNumberRange,
  }
) {
  const searchParams = useSearchParams();
  const pageNumber = Number(searchParams.get("page")) ?? 1;
  // const [products, setProducts] = useState([]);
  // const [maxPage, setMaxPage] = useState(1);
  // const [pagesNumberRange, setPagesNumberRange] = useState();
  // const [noResults, setNoResults] = useState(false);
  // const [isLoading, setIsloading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsloading(true);

  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/categorySearchWithParams/?${searchParams.toString()}`
  //     );
  //     const result = await res.json();
  //     setProducts(result.data.products);
  //     setMaxPage(result.data.maxPage);
  //     setNoResults(result.data.noResults);
  //     setPagesNumberRange(result.data.pagesNumberRange);
  //     setIsloading(false);
  //   };

  //   getData();
  // }, [searchParams]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${
      process.env.NEXT_PUBLIC_BASE_HOST_URL
    }/api/categorySearchWithParams/?${searchParams.toString()}`,
    fetcher
  );

  const maxPage = data?.maxPage;
  const noResults = data?.noResults;
  const pagesNumberRange = data?.pagesNumberRange;
  const products = data?.products;

  return (
    <div className="myContainer">
      {/* banners and sliders and stuff like that go here */}
      <div className="max-w-[1170px] w-full mx-auto  flex items-center gap-2 text-sm">
        <IoHomeOutline size={18} />
        دسته‌بندی‌ها
        <FaChevronLeft size={8} />
      </div>
      <div className="content">
        <div className="sidebar hidden lg:flex ">
          {/* sidebar components go here  */}
          <div className="bg-white rounded-[5px] p-3 shadow-xl">
            <h3 className="text-[16px]">دسته‌بندی محصولات</h3>
            <div className="vertical-divider" />
            <div className="flex flex-col gap-3">
              {categories?.map((category, index) => (
                <CategoryItem
                  key={category.optionValue}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" relative  basis-[90%] lg:basis-[75%] lg:max-w-[873px] min-h-[700px] bg-gray-50 rounded-[5px] pb-3 mx-auto shadow-xl ">
          {/* {isLoading && <loading />} */}
          {error && error}

          <div className="flex gap-3 text-sm pt-6 pr-6">
            <p className="cursor-pointer text-gray-600 hover:text-[#F43B86]">
              جدیدترین‌ها
            </p>
            <p className="cursor-pointer text-gray-600 hover:text-[#F43B86]">
              محبوب‌ترین‌ها
            </p>
            <p className="cursor-pointer text-gray-600 hover:text-[#F43B86]">
              ارزان‌ترین‌ها
            </p>
          </div>

          {/* <div className="mt-10 mb-[100px] grid grid-cols-1 grid-rows-[200px_200px_200px] vxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  place-items-center gap-6 gap-y-20 py-3 ">
            {isLoading && <Loading />}
            {products &&
              pageNumber <= maxPage &&
              products?.map((product, index) => {
                return (
                  <Link
                    className="cursor-pointer"
                    key={index}
                    href={`/product/${product._id}`}
                  >
                    <CategoryCard product={product} />
                  </Link>
                );
              })}
            {(pageNumber > maxPage || noResults) && <NoResultsFound />}
          </div> */}
          <div className="mt-10 mb-[100px] grid grid-cols-1  md:grid-rows-[400px_400px_400px] gap-[1px] vxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3,minmax(200px,1fr))]  place-items-center  py-3 ">
            {isLoading && <Loading />}
            {products &&
              pageNumber <= maxPage &&
              products?.map((product, index) => {
                return <CategoryCard key={index} product={product} />;
              })}
            {(pageNumber > maxPage || noResults) && <NoResultsFound />}
          </div>
          <div className="flex absolute bottom-1 gap-3 pr-3 pb-3">
            <div className="flex items-center gap-3 h-[40px] mb-3">
              {!noResults && pageNumber <= maxPage && (
                <PrevPage pageNumber={pageNumber} maxPage={maxPage} />
              )}

              {!noResults &&
                pageNumber <= maxPage &&
                pagesNumberRange?.map((page) => {
                  return (
                    <CustomPage
                      key={page}
                      page={page}
                      pageNumber={pageNumber}
                    />
                  );
                })}

              {!noResults && pageNumber <= maxPage && (
                <NextPage pageNumber={pageNumber} maxPage={maxPage} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <h1>hi</h1>
  );
}

export default CategoryTemplate;
