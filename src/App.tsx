import TopBar from "./components/TopBar";
import Toolbar from "./components/Toolbar";
import SheetHeader from "@/components/SheetHeadr";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-sm overflow-x-auto">
      <TopBar />           {/* top navbar with icons + avatar */}
      <Toolbar />
      <SheetHeader />      {/* sheet title + tab + buttons */}
      <Table />            {/* spreadsheet */}
      <Pagination />       {/* 2 / 2 at bottom */}
    </div>
  );
}

export default App;
