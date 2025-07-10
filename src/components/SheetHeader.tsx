import { HelpCircle, Plus, Type, Upload } from "lucide-react";

const SheetHeader = () => {
  return (
    <div className="absolute top-[112px] left-0 right-0 z-30 flex justify-between items-start px-4">
      {/* Left Q3 Tab */}
      <div className="flex items-center h-9 bg-white border-b border-r rounded-tr-md shadow-sm pl-3 pr-2">
        <div className="w-1.5 h-4 bg-blue-500 rounded mr-2" />
        <span className="text-sm font-medium text-gray-700">
          Q3 Financial Overview
        </span>
        <span className="ml-2 text-xs text-red-500">🔄</span>
      </div>

      {/* Right Floating Buttons */}
      <div className="flex items-center space-x-2">
        {[
          { icon: Type, label: "ABC" },
          { icon: HelpCircle, label: "?" },
          { icon: Upload, label: "⇩" },
        ].map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-8 h-8 bg-white border rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-100"
          >
            <Icon className="w-4 h-4" />
            <span className="-mt-0.5 text-[10px]">{label}</span>
          </div>
        ))}
        <div className="w-8 h-8 bg-white border rounded-md shadow-sm flex items-center justify-center hover:bg-gray-100">
          <Plus className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default SheetHeader;
