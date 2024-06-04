import Image from "next/image";
import CartButton from "./CartButton/CartButton";
import LoginRegisterButton from "./LoginRegisterButton";
import Search from "./Search";

import Logo from "./Logo";
import Link from "next/link";

function HeaderBottom() {
  return (
    <div className="w-full header-bottom">
      <div className="top flex mx-auto justify-between items-center flex-wrap max-w-[1170px] py-6 ">
        <Link href="/cart">
          <CartButton />
        </Link>
        {/* this logo is only shown in screen sizes below lg (1024px) */}
        <div className="flex lg:hidden items-center gap-2 mx-auto">
          <h1>
            <b>HOUMAN</b> IT
          </h1>
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </div>

        <LoginRegisterButton />

        <Search />
        <Logo />
      </div>
    </div>
  );
}

export default HeaderBottom;
