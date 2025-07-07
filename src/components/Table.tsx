import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import type { JobData } from "../data/mockData";
import { mockData } from "../data/mockData";
import { useState, useEffect } from "react";

const columnHelper = createColumnHelper<JobData>();

const columns = [
  columnHelper.accessor("id", {
    header: "#",
  }),
  columnHelper.accessor("jobRequest", {
    header: "Job Request",
  }),
  columnHelper.accessor("submitted", {
    header: "Submitted",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: info => {
      const status = info.getValue();
      const color =
        status === "In Progress"
          ? "bg-blue-100 text-blue-800"
          : status === "Blocked"
          ? "bg-red-100 text-red-800"
          : "bg-green-100 text-green-800";
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${color}`}>
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("submitter", {
    header: "Submitter",
  }),
  columnHelper.accessor("url", {
    header: "URL",
    cell: info => {
      const url = info.getValue();
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Link
        </a>
      );
    },
  }),
  columnHelper.accessor("assigned", {
    header: "Assigned",
  }),
  columnHelper.accessor("priority", {
    header: "Priority",
    cell: info => {
      const priority = info.getValue();
      const color =
        priority === "High"
          ? "text-red-600"
          : priority === "Medium"
          ? "text-yellow-600"
          : "text-green-600";
      return <span className={`font-medium ${color}`}>{priority}</span>;
    },
  }),
  columnHelper.accessor("dueDate", {
    header: "Due Date",
  }),
  columnHelper.accessor("estValue", {
    header: "Est. Value",
  }),
];

const Table = () => {
  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [selectedCell, setSelectedCell] = useState<[number, number]>([0, 0]);

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
      <table className="min-w-full text-sm table-fixed">
        <thead className="bg-gray-100 text-left font-medium">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th className="px-4 py-2 border" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr className="hover:bg-gray-50" key={row.id}>
              {row.getVisibleCells().map((cell, colIndex) => {
                const isSelected =
                  rowIndex === selectedCell[0] && colIndex === selectedCell[1];
                return (
                  <td
                    className={`px-4 py-2 border ${
                      isSelected ? "ring-2 ring-blue-500 ring-offset-1" : ""
                    }`}
                    key={cell.id}
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
