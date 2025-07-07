const Navbar = () => {
  const logAction = (action: string) => {
    console.log(`[ACTION]: ${action}`);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 border-b bg-white">
      <div className="flex space-x-4 text-sm text-gray-700 font-medium">
        <button onClick={() => logAction("Toolbar clicked")}>Tool bar »</button>
        <button onClick={() => logAction("Hide fields clicked")}>🔽 Hide fields</button>
        <button onClick={() => logAction("Sort clicked")}>↕️ Sort</button>
        <button onClick={() => logAction("Filter clicked")}>🔍 Filter</button>
        <button onClick={() => logAction("Cell view clicked")}>📄 Cell view</button>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => logAction("Import clicked")}
          className="border px-3 py-1 rounded text-sm"
        >
          Import
        </button>
        <button
          onClick={() => logAction("Export clicked")}
          className="border px-3 py-1 rounded text-sm"
        >
          Export
        </button>
        <button
          onClick={() => logAction("Share clicked")}
          className="border px-3 py-1 rounded text-sm"
        >
          Share
        </button>
        <button
          onClick={() => logAction("New Action clicked")}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm"
        >
          + New Action
        </button>
      </div>
    </div>
  );
};

export default Navbar;
