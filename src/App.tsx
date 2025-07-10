import TopBar from "./components/TopBar";
import Toolbar from "./components/Toolbar";
import SheetHeader from "./components/SheetHeader"; // typo fixed
import Table from "./components/Table";

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
        <Table />
    </div>
  );
}

export default App;
