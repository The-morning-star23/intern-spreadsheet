import { BsThreeDotsVertical } from "react-icons/bs";
import { FiRotateCw } from "react-icons/fi";
import { PiTextAaBold } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

export default function SheetHeader() {
  return (
    <div className="flex justify-between items-start w-full px-4 mt-4">
      {/* LEFT SIDE: Q3 Financial Overview Slider Tab */}
      <div className="relative z-10">
        <div className="flex items-center bg-white border border-gray-300 rounded-r-full px-4 py-2 shadow-sm h-[40px]">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 text-blue-600 rounded px-2 py-1 text-xs font-medium flex items-center">
              <PiTextAaBold className="mr-1" /> Q3 Financial Overview
            </div>
            <FiRotateCw className="text-red-500 text-sm cursor-pointer" />
          </div>
        </div>
        {/* Vertical slider bar */}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-green-500 rounded-full" />
      </div>

      {/* RIGHT SIDE: ABC, Answer a question, Extract, + */}
      <div className="flex items-center space-x-2">
        <button className="flex items-center px-3 py-1.5 rounded-md bg-green-100 text-green-700 text-xs font-medium">
          ABC <BsThreeDotsVertical className="ml-2 text-xs" />
        </button>
        <button className="flex items-center px-3 py-1.5 rounded-md bg-purple-100 text-purple-700 text-xs font-medium">
          Answer a question <BsThreeDotsVertical className="ml-2 text-xs" />
        </button>
        <button className="flex items-center px-3 py-1.5 rounded-md bg-orange-100 text-orange-700 text-xs font-medium">
          Extract <BsThreeDotsVertical className="ml-2 text-xs" />
        </button>
        <button className="flex items-center justify-center w-7 h-7 rounded-md border border-gray-300">
          <FiPlus className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
