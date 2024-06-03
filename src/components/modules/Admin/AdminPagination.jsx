import Link from "next/link";

export const NextPage = ({ pageNumber, maxPage, search }) => {
  return (
    <Link
      // href={`/admin/?page=${
      //   pageNumber === maxPage ? pageNumber : pageNumber + 1
      // }`}
      href={{
        pathname: "/admin",
        query: {
          ...(search ? { search: search } : {}),
          page: pageNumber === maxPage ? pageNumber : pageNumber + 1,
        },
      }}
      className={`${
        pageNumber === maxPage ? "bg-pink-300" : "bg-pink-500"
      }  h-[40px] w-[45px] flex items-center justify-center text-white rounded-[5px] cursor-pointer hover:bg-pink-600`}
    >
      بعدی
    </Link>
  );
};

export const PrevPage = ({ pageNumber, search }) => {
  return (
    <Link
      // href={`/admin/?page=${pageNumber > 1 ? pageNumber - 1 : 1}`}
      href={{
        pathname: "/admin",
        query: {
          ...(search ? { search: search } : {}),
          page: pageNumber > 1 ? pageNumber - 1 : 1,
        },
      }}
      className={`${
        pageNumber === 1 ? "bg-pink-300" : "bg-pink-500"
      }  h-[40px] w-[45px] flex items-center justify-center text-white rounded-[5px] cursor-pointer hover:bg-pink-600`}
    >
      قبلی
    </Link>
  );
};

export const CustomPage = ({ page, pageNumber, search }) => {
  return (
    <Link
      // href={`/admin?page=${page}`}
      href={{
        pathname: "/admin",
        query: { ...(search ? { search: search } : {}), page: page },
      }}
      key={page}
      className={`${
        page === pageNumber ? "bg-pink-700" : "bg-pink-500 hover:bg-pink-600"
      } h-[40px] w-[45px] pt-1 flex items-center justify-center text-white rounded-[5px] cursor-pointer`}
    >
      {page}
    </Link>
  );
};
