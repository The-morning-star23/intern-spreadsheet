import {
  Bell,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm">
      <div className="flex items-center text-sm font-medium text-gray-600">
        <span className="text-gray-500">Workspace</span>
        <ChevronRight size={16} className="mx-1" />
        <span className="text-gray-500">Folder 2</span>
        <ChevronRight size={16} className="mx-1" />
        <span className="text-gray-900 font-semibold">Spreadsheet 3</span>
        <MoreHorizontal className="text-gray-400 ml-1" size={18} />
      </div>

      {/* Right: Search + Notification + Avatar with details */}
      <div className="flex items-center space-x-4">
        {/* Search box */}
        <Input
          type="text"
          placeholder="Search within sheet"
          className="w-[220px] h-8 text-sm"
        />

        {/* Bell icon with badge */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-semibold text-white bg-red-600 rounded-full">
            2
          </span>
        </div>

        {/* Avatar + Name & Email */}
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm leading-tight">
            <span className="font-medium text-gray-900">John Doe</span>
            <span className="text-gray-500 text-xs">john.doe@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
