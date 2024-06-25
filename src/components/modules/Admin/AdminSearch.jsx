"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDebounce } from "use-debounce";

function AdminSearch() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const pageNumber = searchParams.get("page");

  const router = useRouter();
  const [searchText, setSearchText] = useState(search) || "";

  const [debouncedSearchText] = useDebounce(search, 500);

  //using ref works as a way to prevent params being removed from url
  //however when react strict mode is on, it renders more than once
  //and this ref will eventually become false and useEffect's second part
  //will run and remove params from url again
  //so i can make the code simpler only if i turn off react strict mode
  //or if i run the app in build mode which basically turns off react strict mode again.

  // const initialRenderRef = useRef(true);

  useEffect(() => {
    if (!debouncedSearchText && !pageNumber) {
      router.push("/admin");
    } else if (!debouncedSearchText && pageNumber) {
      router.push(`/admin?page=${pageNumber}`);
    } else if (debouncedSearchText && pageNumber) {
      router.push(`/admin?search=${debouncedSearchText}&page=${pageNumber}`);
    } else if (debouncedSearchText && !pageNumber) {
      router.push(`/admin?search=${debouncedSearchText}`);
    }
  }, [debouncedSearchText]);

  return (
    <div className="flex items-center h-[55px] w-full mb-5 flex-auto lg:w-[500px] lg:max-w-[550px] bg-[#f0f0f1] p-1 overflow-hidden rounded-[10px]">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="bg-[#f0f0f1] w-full outline-none pr-3 text-[14px] "
        type="text"
        placeholder="محصول مورد نظر را جستجو کنید..."
      />
      <button className="pl-3">
        <CiSearch size={31} />
      </button>
    </div>
  );
}

export default AdminSearch;
