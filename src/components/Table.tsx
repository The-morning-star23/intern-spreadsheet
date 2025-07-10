import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import type { ColumnResizeMode } from "@tanstack/react-table";
import type { JobData } from "../data/mockData";
import { mockData } from "../data/mockData";
import { useEffect, useState } from "react";

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
        status === "In-process"
          ? "bg-yellow-100 text-yellow-800"
          : status === "Blocked"
          ? "bg-red-100 text-red-800"
          : status === "Complete"
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800";
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
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline whitespace-nowrap overflow-hidden text-ellipsis block max-w-[140px]"
        >
          {url}
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
          : "text-blue-600";
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
  const [selectedCell, setSelectedCell] = useState<[number, number]>([0, 0]);

  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange" as ColumnResizeMode,
  });

  // Add empty rows to total 25
  const totalRows = 25;
  const filledRows = table.getRowModel().rows;
  const emptyRows = Array.from({ length: totalRows - filledRows.length }, () => ({
    id: "",
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  }));

  const fullRows = [...filledRows.map(r => r.original), ...emptyRows];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSelectedCell(([row, col]) => {
        if (e.key === "ArrowDown") return [Math.min(row + 1, totalRows - 1), col];
        if (e.key === "ArrowUp") return [Math.max(row - 1, 0), col];
        if (e.key === "ArrowRight") return [row, Math.min(col + 1, columns.length - 1)];
        if (e.key === "ArrowLeft") return [row, Math.max(col - 1, 0)];
        return [row, col];
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="overflow-auto border mx-4 my-4 bg-white rounded shadow">
      <table className="min-w-full text-sm table-fixed border-collapse">
        <thead className="bg-gray-100 text-left font-medium">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-3 py-2 border w-auto whitespace-nowrap select-none"
                  style={{ width: header.getSize() }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {fullRows.map((rowData, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((col, colIndex) => {
                const cellValue = rowData[col.id as keyof JobData];
                const isSelected = rowIndex === selectedCell[0] && colIndex === selectedCell[1];
                const isEmpty = !cellValue;

                return (
                  <td
                    key={colIndex}
                    className={`px-3 py-2 border truncate align-middle ${
                      isSelected
                        ? isEmpty
                          ? "outline outline-green-500 outline-2"
                          : "ring-2 ring-blue-500 ring-offset-1"
                        : ""
                    }`}
                  >
                    {cellValue ? cellValue.toString() : ""}
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
