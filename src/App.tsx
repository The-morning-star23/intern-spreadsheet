import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";        // <- "navbar" bar
import SheetHeader from "./components/SheetHeader";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-sm overflow-x-auto">
      <Navbar />
      <TopBar />           {/* top navbar with icons + avatar */}
      <SheetHeader />      {/* sheet title + tab + buttons */}
      <Table />            {/* spreadsheet */}
      <Pagination />       {/* 2 / 2 at bottom */}
    </div>
  );
}

export default App;
