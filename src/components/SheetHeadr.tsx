import { Plus } from "lucide-react";

const SheetHeader = () => {
  return (
    <>
      {/* Left Q3 Slider Tab */}
      <div className="absolute top-[134px] left-0 pl-1 z-10">
        <div className="rotate-[-90deg] origin-top-left">
          <div className="bg-[#F2F4F7] text-sm font-medium text-[#344054] px-3 py-[6px] rounded-full border shadow">
            Q3 Financial Overview
          </div>
        </div>
      </div>

      {/* Right Toolbar */}
      <div className="absolute top-[134px] right-0 flex flex-col items-center gap-2 pr-1 z-10">
        {/* ABC */}
        <div className="w-10 h-10 bg-[#E2F0FF] rounded-md flex items-center justify-center text-xs font-semibold text-[#0066CC] shadow border">
          ABC
        </div>

        {/* Answer a question */}
        <div className="w-10 h-10 bg-[#F3EDFF] rounded-md flex items-center justify-center text-[10px] font-medium text-[#8C52FF] text-center shadow border">
          ?
        </div>

        {/* Extract */}
        <div className="w-10 h-10 bg-[#FFF3F0] rounded-md flex items-center justify-center text-[10px] font-semibold text-[#FF4D4F] text-center shadow border">
          ⇩
        </div>

        {/* + icon */}
        <button className="w-10 h-10 bg-white border rounded-md flex items-center justify-center shadow hover:bg-gray-100">
          <Plus className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </>
  );
};

export default SheetHeader;
