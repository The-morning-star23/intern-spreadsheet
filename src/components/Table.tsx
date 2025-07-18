import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import type { ColumnResizeMode } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import type { JobData } from "../data/mockData";
import { mockData } from "../data/mockData";

const columnHelper = createColumnHelper<JobData>();

const baseColumns = [
  columnHelper.accessor("id", { header: "#" }),
  columnHelper.accessor("jobRequest", { header: "Job Request" }),
  columnHelper.accessor("submitted", { header: "Submitted" }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: info => {
      const status = String(info.getValue()).trim();
      if (!status) return null;
      const color =
        status.toLowerCase().includes("progress")
          ? "bg-yellow-100 text-yellow-800"
          : status.toLowerCase().includes("blocked")
          ? "bg-red-100 text-red-800"
          : status.toLowerCase().includes("complete")
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800";

      return (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${color}`}>
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("submitter", { header: "Submitter" }),
  columnHelper.accessor("url", {
    header: "URL",
    cell: info => {
      const url = info.getValue();
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline block max-w-[150px] truncate"
        >
          {url}
        </a>
      );
    },
  }),
  columnHelper.accessor("assigned", { header: "Assigned" }),
  columnHelper.accessor("priority", {
    header: "Priority",
    cell: info => {
      const value = String(info.getValue()).toLowerCase();
      const color =
        value === "high"
          ? "text-red-600"
          : value === "medium"
          ? "text-yellow-600"
          : "text-blue-600";
      return <span className={`font-medium ${color}`}>{info.getValue()}</span>;
    },
  }),
  columnHelper.accessor("dueDate", { header: "Due Date" }),
  columnHelper.accessor("estValue", { header: "Est. Value" }),
];

const totalRows = 50;
const fullData = [
  ...mockData,
  ...Array.from({ length: totalRows - mockData.length }, (_, i) => ({
    id: mockData.length + i + 1,
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  })),
];

const Table = () => {
  const [selectedCell, setSelectedCell] = useState<[number, number]>([0, 0]);

  const table = useReactTable({
    data: fullData,
    columns: baseColumns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange" as ColumnResizeMode,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSelectedCell(([row, col]) => {
        if (e.key === "ArrowDown") return [Math.min(row + 1, table.getRowModel().rows.length - 1), col];
        if (e.key === "ArrowUp") return [Math.max(row - 1, 0), col];
        if (e.key === "ArrowRight") return [row, Math.min(col + 1, table.getAllColumns().length - 1)];
        if (e.key === "ArrowLeft") return [row, Math.max(col - 1, 0)];
        return [row, col];
      });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [table]);

  return (
    <div className="overflow-auto">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[calc(100%+1px)] text-sm border-collapse">
          <thead>
            <tr className="text-xs font-medium text-left">
              <th colSpan={6} className="p-0 bg-white">
                <button
                  className="w-full h-full flex items-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-2 py-[6px] shadow-sm hover:bg-gray-200 focus:outline focus:outline-blue-500"
                  aria-label="Q3 Financial Overview"
                >
                  <span className="text-blue-500">🔁</span>
                  <span className="truncate text-sm font-medium text-gray-800">Q3 Financial Overview</span>
                </button>
              </th>

              <th colSpan={1} className="p-0 bg-white">
                <button
                  className="w-full h-full flex items-center justify-center gap-1 rounded-md border border-green-200 bg-green-100 text-green-800 px-2 py-[6px] text-xs font-semibold hover:bg-green-200 focus:outline focus:outline-blue-500"
                  aria-label="ABC"
                >
                  ✅ <span>ABC</span>
                </button>
              </th>

              <th colSpan={2} className="p-0 bg-white">
                <button
                  className="w-full h-full flex items-center justify-center gap-1 rounded-md border border-purple-200 bg-purple-100 text-purple-800 px-2 py-[6px] text-xs font-semibold hover:bg-purple-200 focus:outline focus:outline-blue-500"
                  aria-label="Answer a question"
                >
                  💬 <span>Answer a question</span>
                </button>
              </th>

              <th colSpan={1} className="p-0 bg-white">
                <button
                  className="w-full h-full flex items-center justify-center gap-1 rounded-md border border-orange-200 bg-orange-100 text-orange-800 px-1 py-[6px] text-xs font-semibold hover:bg-orange-200 focus:outline focus:outline-blue-500"
                  aria-label="Extract"
                >
                  🧾 <span>Extract</span>
                </button>
              </th>
            </tr>
          </thead>

          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-gray-100 text-left font-medium">
                {headerGroup.headers.map((header, i, arr) => {
                  const isLast = i === arr.length - 1;
                  return (
                    <th
                      key={header.id}
                      className={`px-4 py-2 border select-none bg-white ${isLast ? "border-r" : ""}`}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr className="bg-white hover:bg-gray-50" key={row.id}>
                {row.getVisibleCells().map((cell, index, arr) => {
                  const isSelected = rowIndex === selectedCell[0] && index === selectedCell[1];
                  const isEmpty = !cell.getValue();
                  const isLast = index === arr.length - 1;

                  return (
                    <td
                      key={cell.id}
                      className={`px-4 py-2 border truncate whitespace-nowrap bg-white ${
                        isSelected
                          ? isEmpty
                            ? "outline outline-green-500 outline-2"
                            : "ring-2 ring-blue-500 ring-offset-1"
                          : ""
                      } ${isLast ? "border-r" : ""}`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Tab Bar */}
      <div className="flex items-center border-t border-gray-200 px-4 py-2 bg-white text-sm">
        {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab, idx) => (
          <button
            key={tab}
            onClick={() => console.log(`Clicked tab: ${tab}`)}
            className={`px-3 py-1 rounded ${
              idx === 0 ? "font-semibold text-green-900 border-b-2 border-green-600" : "text-gray-500"
            } hover:bg-gray-100 focus:outline focus:outline-green-600`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
