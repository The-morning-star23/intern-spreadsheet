import TopBar from "./components/TopBar";
import Toolbar from "./components/Toolbar";
import SheetHeader from "./components/SheetHeader"; // typo fixed
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-sm overflow-x-auto">
      {/* Top nav bar */}
      <TopBar />

      {/* Toolbar just below TopBar */}
      <Toolbar />

      {/* Q3 Tab and Right Icons, fixed below toolbar */}
      <SheetHeader />

      {/* Spreadsheet Table */}
      <div className="relative z-10"> {/* ensures SheetHeader overlaps if needed */}
        <Table />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
