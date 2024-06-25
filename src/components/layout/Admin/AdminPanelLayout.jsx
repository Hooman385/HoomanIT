import BottomLeft from "@/components/modules/Admin/AllProdutsRows";
import MobilePanel from "@/components/modules/Admin/MobilePanel";
import RightPanel from "@/components/modules/Admin/RightPanel";
import Top from "@/components/modules/Admin/Top";

function AdminPanelLayout({  children }) {
  return (
    <div className="">
      <div className="rtl max-w-[1170px] w-full mx-auto flex flex-col">
        {/* <Top search={search} pageNumber={pageNumber} /> */}
        <div className="bottom hidden lg:flex lg:w-full gap-3 mt-[60px] ">
          <RightPanel />
          {children}
        </div>
        <div className=" flex flex-col justify-between lg:hidden  gap-3 mt-[60px] ">
          {children}
          <MobilePanel />
        </div>
      </div>
    </div>
  );
}

export default AdminPanelLayout;
