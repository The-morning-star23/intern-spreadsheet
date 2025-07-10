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

// Create columns based on JobData
const columnHelper = createColumnHelper<JobData>();

const baseColumns = [
  columnHelper.accessor("id", { header: "#" }),
  columnHelper.accessor("jobRequest", { header: "Job Request" }),
  columnHelper.accessor("submitted", { header: "Submitted" }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: info => {
      const status = String(info.getValue()).trim();
      if (!status) return null; // No background or span if empty
      
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

// Fill empty rows to make 50 total
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
    <div className="overflow-auto border mx-4 my-4 bg-white rounded shadow">
      <table className="min-w-full text-sm table-fixed border-collapse">
        <thead className="bg-gray-100 text-left font-medium">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-4 py-2 border w-auto select-none"
                  style={{ width: header.getSize() }}
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr className="hover:bg-gray-50" key={row.id}>
              {row.getVisibleCells().map((cell, colIndex) => {
                const isSelected = rowIndex === selectedCell[0] && colIndex === selectedCell[1];
                const isEmpty = !cell.getValue();

                return (
                  <td
                    key={cell.id}
                    className={`px-4 py-2 border truncate whitespace-nowrap ${
                      isSelected
                        ? isEmpty
                          ? "outline outline-green-500 outline-2"
                          : "ring-2 ring-blue-500 ring-offset-1"
                        : ""
                    }`}
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
  );
};

export default Table;
