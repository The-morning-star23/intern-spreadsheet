import { Button } from "@/components/ui/button";
import { Upload, Download, Share2, Plus } from "lucide-react";

const TopRightActions = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        className="text-sm px-3 py-1.5 gap-1"
        onClick={() => console.log("Import clicked")}
      >
        <Upload className="w-4 h-4" />
        Import
      </Button>

      <Button
        variant="outline"
        className="text-sm px-3 py-1.5 gap-1"
        onClick={() => console.log("Export clicked")}
      >
        <Download className="w-4 h-4" />
        Export
      </Button>

      <Button
        variant="outline"
        className="text-sm px-3 py-1.5 gap-1"
        onClick={() => console.log("Share clicked")}
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>

      <Button
        className="text-sm px-4 py-1.5 bg-green-600 hover:bg-green-700 text-white"
        onClick={() => console.log("New Action clicked")}
      >
        <Plus className="w-4 h-4 mr-1" />
        New Action
      </Button>
    </div>
  );
};

export default TopRightActions;
