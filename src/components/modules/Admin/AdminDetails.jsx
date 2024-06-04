"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";

function AdminDetails() {
  // const { username } = useSelector((store) => store.user.details);
  const session = useSession();

  return (
    <div className="mb-[30px]">
      <div className="relative border-2 overflow-hidden mt-[-60px] mx-auto rounded-full w-[130px] h-[130px]">
        <Image
          className=""
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          src="/avatar2.png"
          alt="profile image"
        />
      </div>
      <p className="text-center text-xl mt-[30px]">
        {/* {session?.data?.user?.name ? session?.data?.user.name : "نام کاربری"} */}
        {session?.data?.user.name && session?.data?.user.name}
      </p>
    </div>
  );
}

export default AdminDetails;
