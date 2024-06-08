"use client";

import { FaChevronDown } from "react-icons/fa6";
import { FaSquareFull } from "react-icons/fa6";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { navLinks } from "@/lib/navbarData";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <NavigationMenu.Root className=" hidden lg:block w-full navbar-top z-10">
        <NavigationMenu.List className=" flex justify-start items-center gap-5 max-w-[1170px] mx-auto">
          <FaSquareFull size={7} color="#FC67A3" className="mb-2" />
          {navLinks.map((item) => (
            <NavigationMenu.Item key={item.levelOneTitle} className="">
              <NavigationMenu.Trigger className="group flex items-center pb-3 gap-2 pt-1 text-[13px] hover:cursor-pointer border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#FC67A3]">
                {/* top navbar items */}
                <p className="group-hover:text-[#FC67A3]">
                  {item.levelOneTitle}
                </p>
                <FaChevronDown
                  size={10}
                  color="gray"
                  className="group-hover:fill-[#FC67A3]"
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-[39px] right-0 w-full bg-[#fbfbfb] border border-t-1 border-[#eaeded] ">
                <NavigationMenu.Sub defaultValue="asghar">
                  <NavigationMenu.List className="flex justify-start gap-5 py-3 max-w-[1170px] mx-auto ">
                    {item.links.map((link) => (
                      <NavigationMenu.Item
                        value={link.subValue}
                        key={link.levelTwoTitle}
                      >
                        <NavigationMenu.Trigger className="w-full text-[13px] cursor-pointer">
                          {/* middle navbar items  */}

                          {link.levelTwoTitle}
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute w-full top-[43px] right-0 left-0 bg-[#fff] shadow-md rounded-b-[8px] border-t-2 border-[#eaeded]">
                          {/* bottom navbar items  */}
                          <div className="flex flex-col flex-wrap gap-5 items-start py-3 max-w-[1170px] mx-auto max-h-[400px] ">
                            {link.sublinks.map((sublinksSubArr, index) => (
                              <ul
                                key={index}
                                className="border-b border-gray-200 flex flex-col justify-items-start gap-x-3 max-h-[150px] min-w-[150px] overflow-auto no-scrollbar"
                              >
                                {sublinksSubArr.map((sublink, index) =>
                                  Object.keys(sublink)[0] ===
                                  "levelThreeTitle" ? (
                                    <li
                                      key={index}
                                      className=" mb-[5px] text-[13px] text-[#232323] cursor-pointer"
                                    >
                                      <b>
                                        <Link href={sublink.path}>
                                          {sublink.levelThreeTitle}
                                        </Link>
                                      </b>
                                    </li>
                                  ) : (
                                    <li
                                      key={index}
                                      className="text-gray-500 text-[13px]  cursor-pointer hover:text-black"
                                    >
                                      <Link
                                        href={`${sublink.path}&search=${sublink.levelThreeSubtitle}`}
                                      >
                                        {sublink.levelThreeSubtitle}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            ))}
                          </div>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>
                    ))}
                  </NavigationMenu.List>
                </NavigationMenu.Sub>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
}

export default Navbar;
