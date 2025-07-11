import TopBar from "./components/TopBar";
import Toolbar from "./components/Toolbar";
import Table from "./components/Table";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50 text-sm overflow-x-auto">
      {/* Top nav bar */}
      <TopBar />

      {/* Toolbar just below TopBar */}
      <Toolbar />

      {/*Table */}
      <Table />
    </div>
  );
}

export default App;
