import Image from "next/image";

function NoResultsFound() {
  return (
    <div className="w-full col-span-4 flex flex-col items-center justify-center ">
      <Image
        className=""
        src="/no-results-found.png"
        width={300}
        height={300}
        alt="search icons PNG Designed By NikhilDesigner from https://pngtree.com/freepng/no-result-search-icon_6511543.html?sol=downref&id=bef"
      />
      <h3 className="text-2xl">موردی یافت نشد</h3>
    </div>
  );
}

export default NoResultsFound;
