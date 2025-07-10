import { Plus } from "lucide-react";

const SheetHeader = () => {
  return (
    <>
      {/* Q3 Tab - LEFT SIDE */}
      <div className="absolute left-0 top-[176px] pl-2 z-10">
        <div className="bg-[#F2F4F7] text-xs font-medium text-[#344054] px-3 py-1 rounded-full border border-gray-300 shadow-sm">
          Q3 Financial Overview
        </div>
      </div>

      {/* Right Toolbar */}
      <div className="absolute top-[176px] right-0 flex flex-col items-center gap-2 pr-2 z-10">
        {/* ABC */}
        <div className="w-10 h-10 bg-[#E2F0FF] rounded-md flex items-center justify-center text-xs font-semibold text-[#0066CC] shadow-sm border border-[#B3D8FF]">
          ABC
        </div>

        {/* Answer a question */}
        <div className="w-10 h-10 bg-[#F3EDFF] rounded-md flex items-center justify-center text-xs font-medium text-[#8C52FF] shadow-sm border border-[#D7C8FF]">
          ?
        </div>

        {/* Extract */}
        <div className="w-10 h-10 bg-[#FFF3F0] rounded-md flex items-center justify-center text-xs font-semibold text-[#FF4D4F] shadow-sm border border-[#FFD6CC]">
          ⇩
        </div>

        {/* + Icon */}
        <button className="w-10 h-10 bg-white border border-gray-300 rounded-md flex items-center justify-center shadow-sm hover:bg-gray-100">
          <Plus className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </>
  );
};

export default SheetHeader;
