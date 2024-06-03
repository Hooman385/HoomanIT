import Image from "next/image";
import React from "react";

function Licenses() {
  return (
    <div className="flex flex-col gxs:flex-row justify-between gap-1 ">
      <div className="relative w-[100px] h-[100px]">
        <Image
          src="/ecunion.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="license logo"
          className="object-contain cursor-pointer"
        />
      </div>
      <div className="relative w-[100px] h-[100px]">
        <Image
          src="/enamad.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="license logo"
          className="object-contain cursor-pointer"
        />
      </div>
      <div className="relative w-[100px] h-[100px]">
        <Image
          src="/enamad.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="license logo"
          className="object-contain cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Licenses;
