import Navbar from "./components/Navbar";
import SheetHeader from "./components/SheetHeader";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <SheetHeader />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
