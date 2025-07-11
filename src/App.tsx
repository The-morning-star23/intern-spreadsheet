import TopBar from "./components/TopBar";
import Toolbar from "./components/Toolbar";
import SheetHeader from "./components/SheetHeader";
import Table from "./components/Table";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-sm overflow-x-auto">
      {/* Top nav bar */}
      <TopBar />

      {/* Toolbar just below TopBar */}
      <Toolbar />

      {/* SheetHeader + Table inside a shared bordered box */}
      <div className="border mx-4 my-4 bg-white rounded shadow overflow-hidden">
        <SheetHeader />
        <Table />
      </div>
    </div>
  );
}

export default App;
