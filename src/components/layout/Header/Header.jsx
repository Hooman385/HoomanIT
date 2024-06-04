"use client";
import MobileNavbar from "@/components/modules/MobileNavbar/MobileNavbar";
import HeaderBottom from "../../modules/HeaderBottom";
import HeaderTop from "../../modules/HeaderTop";
import Navbar from "../../modules/Navbar";
import { useState } from "react";

function Header() {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  return (
    <div className="flex flex-col mx-auto relative ">
      <HeaderTop open={mobileNavbarOpen} setOpen={setMobileNavbarOpen} />
      <HeaderBottom />
      <Navbar />
      <MobileNavbar open={mobileNavbarOpen} setOpen={setMobileNavbarOpen} />
    </div>
  );
}

export default Header;
