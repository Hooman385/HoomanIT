"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

function SidebarAccordion({ trigger, content }) {
  return (
    <Accordion.Root collapsible>
      <Accordion.Item value="1">
        <Accordion.Header>
          <Accordion.Trigger className="flex gap-3 items-center AccordionTrigger">
            <p>{trigger}</p>{" "}
            <FaChevronDown size={10} className="AccordionChevron" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent overflow-hidden">
          <ul className="flex flex-col gap-3 p-3">
            {content?.map((item) => (
              <li key={item.brand} className="text-[14px] list-disc list-inside ">
                <Link href={item.link}>
                {item.brand}
                </Link>
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default SidebarAccordion;
