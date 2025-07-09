import { Zap, Plus, Upload, Download, Share2 } from "lucide-react";

const SheetHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
      {/* Left side: Sheet name + tabs */}
      <div className="flex items-center gap-4">
        {/* Sheet Name */}
        <div className="flex items-center text-sm font-medium text-gray-700">
          <span className="text-blue-600 underline cursor-pointer">Q3 Financial Overview</span>
          <Zap size={14} className="ml-1 text-orange-500" />
        </div>

        {/* Tab group headers */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="bg-green-100 px-3 py-1 rounded text-green-800">ABC</div>
          <div className="bg-purple-100 px-3 py-1 rounded text-purple-800">Answer a question</div>
          <div className="bg-orange-100 px-3 py-1 rounded text-orange-800">Extract</div>
          <div className="bg-gray-200 px-3 py-1 rounded text-gray-600 flex items-center gap-1">
            <Plus size={12} /> <span>New</span>
          </div>
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 border rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
          <Upload size={14} /> Import
        </button>
        <button className="flex items-center gap-1 border rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
          <Download size={14} /> Export
        </button>
        <button className="flex items-center gap-1 border rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
          <Share2 size={14} /> Share
        </button>
        <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">
          New Action
        </button>
      </div>
    </div>
  );
};

export default SheetHeader;
