import {
  Bell,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
      {/* Left: Workspace Breadcrumb with green slider */}
      <div className="flex items-center text-sm text-gray-600 font-medium space-x-2">
        {/* Green vertical slider (Figma accurate) */}
        <div className="w-1.5 h-4 rounded-full bg-green-600 mr-2"></div>

        <span className="text-gray-500">Workspace</span>
        <ChevronRight size={16} />
        <span className="text-gray-500">Folder 2</span>
        <ChevronRight size={16} />
        <span className="text-black font-semibold">Spreadsheet 3</span>
        <MoreHorizontal size={16} className="text-gray-400 ml-1" />
      </div>

      {/* Right: Search, Notification, Avatar + Info */}
      <div className="flex items-center space-x-4">
        {/* Search input */}
        <Input
          type="text"
          placeholder="Search within sheet"
          className="w-[200px] text-sm"
        />

        {/* Notification bell with red count badge */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            2
          </span>
        </div>

        {/* Avatar + Name + Email */}
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
