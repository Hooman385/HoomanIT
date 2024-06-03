import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const NextPage = ({ pageNumber, maxPage }) => {
  const path = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams);

      if (params.has(name)) {
        let value = Number(params.get(name));
        if (value < maxPage) {
          params.delete(name);
          params.append(name, value + 1);
        }
      }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <Link
      href={`${path}?${createQueryString("page")}`}
      className={`${
        pageNumber === maxPage ? "bg-pink-300" : "bg-pink-500"
      }  h-[40px] w-[45px] flex items-center justify-center text-white rounded-[5px] cursor-pointer hover:bg-pink-600`}
    >
      بعدی
    </Link>
  );
};

export const PrevPage = ({ pageNumber }) => {
  const searchParams = useSearchParams();
  const path = usePathname();

  const createQueryString = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams);

      if (params.has(name)) {
        let value = Number(params.get(name));
        if (value > 1) {
          params.delete(name);
          params.append(name, value - 1);
        }
      }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <Link
      href={`${path}?${createQueryString("page")}`}
      className={`${
        pageNumber === 1 ? "bg-pink-300" : "bg-pink-500"
      }  h-[40px] w-[45px] flex items-center justify-center text-white rounded-[5px] cursor-pointer hover:bg-pink-600`}
    >
      قبلی
    </Link>
  );
};

export const CustomPage = ({ page, pageNumber }) => {

  const path = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams);

      if (params.has(name)) {
        params.delete(name);
        params.append(name, page);
      } else {
        params.append(name, page);
      }
      return params.toString();
    },
    [searchParams]
  );
  return (
    <Link
      href={`${path}?${createQueryString("page")}`}
      key={page}
      className={`${
        page === pageNumber ? "bg-pink-700" : "bg-pink-500 hover:bg-pink-600"
      } h-[40px] w-[45px] pt-1 flex items-center justify-center text-white rounded-[5px] cursor-pointer`}
    >
      {page}
    </Link>
  );
};
