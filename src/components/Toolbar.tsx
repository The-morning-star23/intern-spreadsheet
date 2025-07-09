import {
  ChevronDown,
  EyeOff,
  Filter,
  LayoutGrid,
  ListFilter,
} from "lucide-react";
import TopRightActions from "./TopRightActions";

const Toolbar = () => {
  const buttonClass =
    "flex items-center gap-1 px-3 py-1.5 text-sm rounded-md border hover:bg-gray-100";

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white text-sm text-gray-700">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <button className={buttonClass}>
          Tool bar <ChevronDown className="w-4 h-4" />
        </button>
        <button className={buttonClass}>
          <EyeOff className="w-4 h-4" />
          Hide fields
        </button>
        <button className={buttonClass}>
          <ListFilter className="w-4 h-4" />
          Sort
        </button>
        <button className={buttonClass}>
          <Filter className="w-4 h-4" />
          Filter
        </button>
        <button className={buttonClass}>
          <LayoutGrid className="w-4 h-4" />
          Cell view
        </button>
      </div>

      {/* Right Side */}
      <TopRightActions />
    </div>
  );
};

export default Toolbar;
