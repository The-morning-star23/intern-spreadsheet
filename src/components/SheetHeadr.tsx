import { Plus, RefreshCw } from "lucide-react";

const SheetHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b text-sm">
      {/* Left side: Q3 Financial Overview Tab */}
      <div className="flex items-center gap-2 font-medium text-gray-800">
        {/* Link icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14L21 3m0 0v4.586a1 1 0 01-1.707.707l-9-9A1 1 0 0111.414 0H16"
          />
        </svg>

        <span>Q3 Financial Overview</span>

        {/* Sync icon */}
        <RefreshCw className="w-4 h-4 text-red-400" />
      </div>

      {/* Right-side actions */}
      <div className="flex items-center gap-3">
        {["ABC", "Answer a question", "Extract"].map((label, idx) => (
          <button
            key={idx}
            className="flex items-center gap-1 rounded border px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
          >
            {/* Circle dot icon (placeholder for now) */}
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            <span>{label}</span>
          </button>
        ))}

        {/* + icon button */}
        <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SheetHeader;
