"use client";
import Link from "next/link";
import { TbUser } from "react-icons/tb";
import { ProfileHoverCard } from "./ProfileHoverCard/ProfileHoverCard";
import { useSession } from "next-auth/react";

function LoginRegisterButton() {
  const session = useSession();

  return (
    <div className="hidden lg:flex gap-1 items-center text-gray-600 cursor-pointer">
      
      {!session.data ? (
        <>
          <TbUser size={28} />
          <Link href="/signin">ورود</Link>
          <p>.</p>
          <Link href="/register">ثبت نام</Link>
        </>
      ) : (
        <ProfileHoverCard role={session?.data?.user?.role}>
          <div className="flex gap-1 items-end">
            <TbUser size={28} />
            {session?.data?.user?.name}
          </div>
        </ProfileHoverCard>
      )}
    </div>
  );
}

export default LoginRegisterButton;
