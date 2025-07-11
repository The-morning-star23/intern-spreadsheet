import { FiRefreshCw } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

export default function SheetHeader() {
  return (
    <div className="flex items-center justify-between px-2 pt-2 pb-1 border-b border-gray-200 text-xs font-medium">
      {/* Left: Q3 Financial Overview Tab */}
      <div className="flex items-center space-x-2">
        <div
          onClick={() => console.log("Clicked on Q3 Financial Overview tab")}
          className="flex items-center space-x-1 rounded-full border border-gray-300 bg-white px-3 py-[6px] text-xs font-medium shadow-sm hover:bg-gray-50 cursor-pointer"
        >
          <span className="text-blue-500">🔁</span>
          <span className="text-gray-800">Q3 Financial Overview</span>
          <FiRefreshCw
            className="text-gray-400 text-[14px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Refresh icon clicked");
            }}
          />
        </div>
      </div>

      {/* Right: ABC, Answer a question, Extract, + */}
      <div className="flex items-center space-x-2">
        {/* ABC */}
        <div
          onClick={() => console.log("ABC button clicked")}
          className="flex items-center space-x-1 rounded-full border border-green-200 bg-green-100 px-3 py-[6px] cursor-pointer hover:bg-green-200 transition"
        >
          <span className="text-xs font-medium text-green-800">ABC</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>

        {/* Answer a question */}
        <div
          onClick={() => console.log("Answer a question clicked")}
          className="flex items-center space-x-1 rounded-full border border-purple-200 bg-purple-100 px-3 py-[6px] cursor-pointer hover:bg-purple-200 transition"
        >
          <span className="text-xs font-medium text-purple-800">Answer a question</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>

        {/* Extract */}
        <div
          onClick={() => console.log("Extract button clicked")}
          className="flex items-center space-x-1 rounded-full border border-orange-200 bg-orange-100 px-3 py-[6px] cursor-pointer hover:bg-orange-200 transition"
        >
          <span className="text-xs font-medium text-orange-800">Extract</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>

        {/* Plus Button */}
        <div
          onClick={() => console.log("Add (+) button clicked")}
          className="flex items-center justify-center w-[28px] h-[28px] rounded-full border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
        >
          <span className="text-lg leading-none">+</span>
        </div>
      </div>
    </div>
  );
}
