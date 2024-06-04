"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { navLinks } from "@/lib/navbarData";
import { FaChevronDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "./MobileNavbar.css";

function MobileNavbar({ open, setOpen }) {
  return (
    <Accordion.Root
      className={` block lg:hidden bg-gray-200 pt-[60px] w-[200px] h-[100svh] z-[99] p-2 fixed top-0 right-0 transition-all duration-300	 ${
        open ? "" : "translate-x-[200px]"
      }`}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <div className="absolute top-0 left-0 bg-blue-500 flex justify-between items-center px-2 w-full text-white h-[50px]">
        <h2>فروشگاه هومن‌آی‌تی</h2>
        <IoClose onClick={() => setOpen(!open)} className=" text-[26px]" />
      </div>
      {navLinks.map((item) => (
        <Accordion.Item
          className="AccordionItem"
          value={item.levelOneTitle}
          key={item.levelOneTitle}
        >
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger w-full flex justify-between items-center text-sm mb-3">
              {item.levelOneTitle}
              <FaChevronDown className="AccordionChevron text-[10px]" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="AccordionContent overflow-hidden flex flex-col gap-2">
            {item.links.map((link) => (
              <Accordion.Root
                className="AccordionRoot  px-1"
                type="single"
                defaultValue="item-1"
                collapsible
                key={link.levelTwoTitle}
              >
                <Accordion.Item value={link.levelTwoTitle}>
                  <Accordion.Header>
                    <Accordion.Trigger className="AccordionTrigger w-full flex  items-center justify-between text-[13px] ">
                      {link.levelTwoTitle}
                      <FaChevronDown className="AccordionChevron text-[10px]" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="AccordionContent overflow-hidden ">
                    {link.sublinks.map((sublinksSubArr, index) => (
                      <ul
                        key={index}
                        className="py-2 pr-1 list-disc list-inside"
                      >
                        {sublinksSubArr.map(
                          (sublink) =>
                            Object.keys(sublink)[0] === "levelThreeTitle" && (
                              <li
                                key={sublink.levelThreeTitle}
                                className="text-xs "
                              >
                                <b>{sublink.levelThreeTitle}</b>
                              </li>
                            )
                        )}
                      </ul>
                    ))}
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            ))}
          </Accordion.Content>
        </Accordion.Item>
      ))}
      <ul className="absolute bottom-0 right-0 flex  gap-1 w-[100%] text-center bg-gray-200 p-2">
        <li className="py-1 text-white rounded-[5px] w-full text-[10px] bg-blue-400">
          سبد خرید
        </li>
        <li className="py-1 text-white rounded-[5px] w-full text-[10px] bg-green-500">
          ورود
        </li>
      </ul>
    </Accordion.Root>
  );
}

export default MobileNavbar;
