// "use client";

// import { usePathname, useSearchParams } from "next/navigation";
// import ProductRow from "./ProductRow";
// import TableHeader from "./TableHeader";
// import { useEffect, useState } from "react";

// function BottomLeft({ initialProducts, maxPage }) {
//   const [products, setProducts] = useState(initialProducts ?? []);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pagesToShow, setPagesToShow] = useState([]);

//   const getPageNumbersRange = () => {
//     const currentPage = pageNumber;
//     let start = currentPage - 2;
//     let end = currentPage + 2;

//     if (start < 1) {
//       start = 1;
//       end = Math.min(5, maxPage);
//     }

//     if (end > maxPage) {
//       end = maxPage;
//       start = Math.max(1, maxPage - 4);
//     }

//     return Array.from({ length: end - start + 1 }, (_, i) => start + i);
//   };

//   const updatePageNumbers = () => {
//     const pageNumbers = getPageNumbersRange();
//     setPagesToShow(pageNumbers);
//   };

//   const data = {
//     page: pageNumber,
//     limit: 3,
//   };

//   useEffect(() => {
//     const getData = async () => {
//       const response = await fetch(
//         "${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/adminPanelPagination",
//         {
//           method: "POST",
//           body: JSON.stringify(data),
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       const result = await response.json();
//       setProducts(result.products);
//     };
//     getData();
//     updatePageNumbers();
//   }, [pageNumber]);

//   return (
//     <div className="w-[890px] rounded-[8px]  flex flex-col gap-1 mb-3 ">
//       <TableHeader />

//       {products?.map((product, index) => {
//         return <ProductRow key={product._id} product={product} index={index} />;
//       })}

//       <div className="flex items-center gap-3 h-[40px] mb-3">
//         <p
//           onClick={() => decrement(pageNumber - 1)}
//           className="bg-pink-500 h-[40px] w-[45px] flex items-center justify-center text-white rounded-[5px] cursor-pointer hover:bg-pink-600"
//         >
//           قبلی
//         </p>

//         {pagesToShow.map((page) => {
//           return (
//             <p
//               onClick={(e) => setPageNumber(page)}
//               key={page}
//               className={`${
//                 page === pageNumber
//                   ? "bg-pink-700"
//                   : "bg-pink-500 hover:bg-pink-600"
//               } h-[40px] w-[45px] flex items-center justify-center text-white rounded-[5px] cursor-pointer`}
//             >
//               {page}
//             </p>
//           );
//         })}

//         <p
//           onClick={() => increment(pageNumber + 1)}
//           className="bg-pink-500 h-[40px] w-[45px] flex items-center justify-center text-white rounded-[5px] cursor-pointer hover:bg-pink-600"
//         >
//           بعدی
//         </p>
//       </div>
//     </div>
//   );
// }

// export default BottomLeft;
