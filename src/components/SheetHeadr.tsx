import { Plus, HelpCircle, Upload, Type } from 'lucide-react';
import { cn } from '@/lib/utils';

const SheetHeader = () => {
  return (
    <div className="absolute top-[87px] left-0 w-full flex">
      {/* Q3 Tab */}
      <div className="w-[180px] border-r border-gray-200 bg-white">
        <div className="flex items-center px-3 py-2 space-x-2 border-b border-gray-200">
          <div className="w-1.5 h-6 bg-blue-500 rounded" />
          <span className="text-sm font-medium text-gray-700">Q3 Financial Overview</span>
          <div className="ml-auto text-xs text-red-500 cursor-pointer">🔄</div>
        </div>
      </div>

      {/* Right-side Toolbar */}
      <div className="ml-auto flex flex-col justify-start items-center space-y-2 pr-2 pt-2">
        <div className={iconBoxStyle}>
          <Type className="w-4 h-4" />
          <span className="text-[10px] font-medium">ABC</span>
        </div>
        <div className={iconBoxStyle}>
          <HelpCircle className="w-4 h-4" />
          <span className="text-[10px] font-medium">?</span>
        </div>
        <div className={iconBoxStyle}>
          <Upload className="w-4 h-4" />
          <span className="text-[10px] font-medium">⇩</span>
        </div>
        <div className={cn(iconBoxStyle, 'bg-gray-100 hover:bg-gray-200')}>
          <Plus className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const iconBoxStyle =
  'w-9 h-9 bg-white border border-gray-300 rounded-md shadow-sm flex flex-col justify-center items-center hover:shadow-md cursor-pointer';

export default SheetHeader;
