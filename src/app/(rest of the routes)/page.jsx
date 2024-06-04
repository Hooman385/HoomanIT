import AssembleOnline from "@/components/modules/AssembleOnline";
import BottomEmblaCarouselIndex from "@/components/modules/BottomSlider";

import BuyUsedProducts from "@/components/modules/BuyUsedProducts";
import FeatureIcons from "@/components/modules/FeatureIcons/FeatureIcons";
import FeaturedProducts from "@/components/modules/FeaturedProducts/FeaturedProducts";
import SidebarContactUs from "@/components/modules/SidebarContactUs";
import SidebarGuide from "@/components/modules/SidebarGuide";
import { ToastContainer } from "react-toastify";
import styles from "./loading.module.css";
import HomeCategoriesGrid from "@/components/modules/HomeCategoriesGrid/HomeCategoriesGrid";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-3 pt-10 bg-[#EAEDED] ">
      {/* <EmblaCarousel /> */}
      <div className="content mx-auto justify-center max-w-[1170px] flex gap-2 mb-[100px]">
        <div className="sidebar hidden basis-[25%] xl:flex flex-col gap-3">
          <BuyUsedProducts />
          <AssembleOnline />
          <SidebarGuide />
          <SidebarContactUs />
          <SidebarGuide />
        </div>
        <div className="main flex flex-col gap-3  px-3 lg:basis-[75%] lg:max-w-[873px]">
          {/* <BottomEmblaCarouselIndex /> */}
          <HomeCategoriesGrid />
          <FeatureIcons />
          <FeaturedProducts title={"ارسال از امروز"} />
          <FeaturedProducts title={"بیشترین تخفیف‌های لپتاپ"} />
          <FeaturedProducts title={"بیشترین تخفیف‌های کارت گرافیک"} />
        </div>
      </div>
    </div>
  );
}
