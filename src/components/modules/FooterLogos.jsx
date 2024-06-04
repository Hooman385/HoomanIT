import { FaHeadset } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { toFarsiNumber } from "@/lib/engToFa";

function FooterLogos() {
  const phone = "021-42265";
  const sms = 10002058;
  const splitPhoneArray = phone.split("-");
  return (
    <div className="flex flex-col w-[250px] gap-3">
      <h3 className="text-lg text-center">با ما در ارتباط باشید</h3>
      {/* top icons  */}
      <div className="socialMediaLogos flex justify-between">
        <FaInstagram size={31} />
        <FaXTwitter size={31} />
        <FaYoutube size={31} />
        <FaLinkedin size={31} />
      </div>

      {/* bottom icons  */}
      <div className="flex justify-between gap-2 items-center">
        <div className="flex justify-between flex-1 items-center">
          <p className="ltr">
            {toFarsiNumber(splitPhoneArray[0])} {" - "}
            {toFarsiNumber(splitPhoneArray[1])}
          </p>
          <FaHeadset size={21} />
        </div>
        <div className="border-r border-gray-400 h-[18px]"></div>
        <div className="flex justify-between flex-1 items-center">
          <p>{toFarsiNumber(sms)}</p>
          <RiMessage2Fill size={21} />
        </div>
      </div>
    </div>
  );
}

export default FooterLogos;
