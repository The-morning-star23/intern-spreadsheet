import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal, Filter, LayoutGrid } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full px-4 py-2 border-b flex items-center justify-between bg-white">
      {/* Left Section: Action Icons */}
      <div className="flex items-center gap-2 text-gray-600">
        <button
          onClick={() => console.log("Sort clicked")}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <SlidersHorizontal size={18} />
        </button>
        <button
          onClick={() => console.log("Filter clicked")}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <Filter size={18} />
        </button>
        <button
          onClick={() => console.log("Cell View clicked")}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <LayoutGrid size={18} />
        </button>
      </div>

      {/* Right Section: Avatar with dropdown */}
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 mr-2">
            <DropdownMenuItem onClick={() => console.log("Profile clicked")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Logout clicked")}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
