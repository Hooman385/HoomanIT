import Image from "next/image";
import React from "react";

function AssembleOnline() {
  return (
    <div className="bg-[#D5D5D5] h-[288px] relative rounded-[8px] overflow-hidden">
      <div className="relative used-img-container">
        <Image className="object-cover used-img" src="/assemble.jpg" fill alt="assemble online "  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <div className="bg-[#FECF08] absolute right-0 left-0 mx-auto w-[258px] h-[44.5px] rounded-[8px] flex items-center justify-center bottom-[10px]">
        <h2>اسمبل آنلاین</h2>
      </div>
    </div>
  );
}

export default AssembleOnline;
