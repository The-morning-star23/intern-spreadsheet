import { FiRefreshCw } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

export default function SheetHeader() {
  return (
    <div className="flex items-center justify-between px-2 pt-2 pb-1 border-b border-gray-200 text-xs font-medium">
      {/* Left: Q3 Financial Overview Tab */}
      <div className="flex items-center space-x-2">
        <div
          className="flex items-center space-x-1 rounded border border-gray-300 px-2 py-1 bg-white shadow-sm cursor-pointer"
          onClick={() => console.log("Clicked on Q3 Financial Overview tab")}
        >
          <span className="text-blue-500">🔁</span>
          <span className="text-gray-800">Q3 Financial Overview</span>
          <FiRefreshCw
            className="text-red-500 text-sm cursor-pointer"
            onClick={e => {
              e.stopPropagation();
              console.log("Refresh icon clicked");
            }}
          />
        </div>
      </div>

      {/* Right: ABC, Answer a question, Extract, + */}
      <div className="flex items-center space-x-1">
        <div
          className="flex items-center justify-between w-[90px] px-2 py-[6px] bg-green-100 rounded border border-green-300 cursor-pointer"
          onClick={() => console.log("ABC button clicked")}
        >
          <span className="text-xs font-medium text-green-800">ABC</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>

        <div
          className="flex items-center justify-between w-[150px] px-2 py-[6px] bg-purple-100 rounded border border-purple-300 cursor-pointer"
          onClick={() => console.log("Answer a question clicked")}
        >
          <span className="text-xs font-medium text-purple-800">Answer a question</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>

        <div
          className="flex items-center justify-between w-[100px] px-2 py-[6px] bg-orange-100 rounded border border-orange-300 cursor-pointer"
          onClick={() => console.log("Extract button clicked")}
        >
          <span className="text-xs font-medium text-orange-800">Extract</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>

        <div
          className="flex items-center justify-center w-6 h-[28px] rounded border border-gray-300 bg-gray-100 cursor-pointer"
          onClick={() => console.log("Add (+) button clicked")}
        >
          <span className="text-lg leading-none">+</span>
        </div>
      </div>
    </div>
  );
}
