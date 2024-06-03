import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="hidden lg:flex items-center gap-2 cursor-pointer">
      <h1>
        <b>HOUMAN</b> IT
      </h1>
      <Image src="/logo.png" width={50} height={50} alt="logo" />
    </Link>
  );
}

export default Logo;
