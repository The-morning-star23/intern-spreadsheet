import { Bell, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 font-medium space-x-2">
        <span className="text-gray-500">Workspace</span>
        <ChevronRight size={16} />
        <span className="text-gray-500">Folder 2</span>
        <ChevronRight size={16} />
        <span className="text-black font-semibold">Spreadsheet 3</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <Input
          type="text"
          placeholder="Search within sheet"
          className="w-[200px] text-sm"
        />

        {/* Notification Icon */}
        <Bell className="w-5 h-5 text-gray-600" />

        {/* Avatar */}
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default TopBar;
