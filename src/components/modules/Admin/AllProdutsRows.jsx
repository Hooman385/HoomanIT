import TableHeader from "./TableHeader";
import ProductRow from "./ProductRow";
import { CustomPage, NextPage, PrevPage } from "./AdminPagination";
import { getProducts, updatePageNumbers } from "@/lib/ACPPaginationFunctions";
import { redirect } from "next/navigation";
import Image from "next/image";

async function AllProductsRows({ pageNumber, search }) {
  const [products, maxPage, noResults] = await getProducts(pageNumber, search);
  if (pageNumber > maxPage) {
    redirect('/admin?page=1');
  }

  const pagesNumberRange = updatePageNumbers(pageNumber, maxPage);

  return (
    <div>
      <div className="w-full lg:max-w-[890px] rounded-[8px]  flex flex-col gap-1 mb-3 ">
        {!noResults && <TableHeader />}
        {noResults === true && (
          <div className="w-full  flex flex-col items-center justify-center">
            <Image
              className=""
              src="/no-results-found.png"
              width={300}
              height={300}
              alt="search icons PNG Designed By NikhilDesigner from https://pngtree.com/freepng/no-result-search-icon_6511543.html?sol=downref&id=bef"
            />
            <h3 className="text-2xl">موردی یافت نشد</h3>
          </div>
        )}
        {products?.map((product, index) => {
          return (
            <ProductRow key={product._id} product={product} index={index} />
          );
        })}

        <div className="flex items-center gap-3 h-[40px] mb-3">
          {!noResults && (
            <PrevPage
              pageNumber={pageNumber}
              maxPage={maxPage}
              search={search}
            />
          )}

          {!noResults &&
            pagesNumberRange.map((page) => {
              return (
                <CustomPage
                  key={page}
                  page={page}
                  pageNumber={pageNumber}
                  search={search}
                />
              );
            })}

          {!noResults && (
            <NextPage
              pageNumber={pageNumber}
              maxPage={maxPage}
              search={search}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProductsRows;
