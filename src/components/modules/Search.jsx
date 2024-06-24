"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "use-debounce";
import SearchPopover from "./SearchPopover/SearchPopover";
import useSWR from "swr";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [debouncedText] = useDebounce(searchText.trim(), 500);
  const [tempSearchProducts, setTempSearchProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/mainSearchTemp?query=${debouncedText}`,
    fetcher
  );
  const focusHandler = () => {
    setIsFocused(true);
  };

  const blurHandler = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  useEffect(() => {
    if ((data?.data && isFocused) || (data?.error && isFocused)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [data, isFocused]);

  return (
    <div className="relative flex flex-col items-center  w-[100vw] lg:w-[500px] lg:max-w-[550px] my-5 ">
      <div className="flex items-center h-[55px] w-full my-5 bg-[#f0f0f1] p-1 overflow-hidden rounded-[10px]">
        <input
          onFocus={focusHandler}
          onBlur={blurHandler}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-[#f0f0f1] w-full outline-none pr-3 text-[14px]"
          type="text"
          placeholder="محصول مورد نظر را جستجو کنید..."
        />
        <button
          className="pl-3 hover:text-pink-500 hover:scale-110 transition-all"
          onClick={() => {
            router.push(`/categories?search=${debouncedText}`);
          }}
        >
          <CiSearch size={31} />
        </button>
      </div>
      <div className="z-[100] absolute top-[80px] w-full">
        {open && (
          <SearchPopover
            debouncedText={debouncedText}
            data={data}
            error={error}
            products={tempSearchProducts}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
