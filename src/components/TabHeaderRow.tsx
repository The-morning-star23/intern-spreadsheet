import { BsThreeDots } from "react-icons/bs";

export default function TabHeaderRow() {
  return (
    <tr className="bg-gray-200 text-xs text-gray-800">
      {/* Q3 Financial Overview spans ID, Job Request, Submitted */}
      <th className="px-2 py-1 border-r border-gray-300" colSpan={3}>
        <div
          onClick={() => console.log("Q3 Financial Overview clicked")}
          className="flex items-center gap-2 px-3 py-1 rounded bg-white shadow cursor-pointer hover:bg-gray-100"
        >
          <span className="text-blue-500">🔁</span>
          <span>Q3 Financial Overview</span>
        </div>
      </th>

      {/* ABC spans Status, Submitter */}
      <th className="px-2 py-1 border-r border-gray-300" colSpan={2}>
        <div
          onClick={() => console.log("ABC clicked")}
          className="flex items-center justify-between px-2 py-[6px] rounded bg-green-100 border border-green-300 cursor-pointer hover:bg-green-200"
        >
          <span className="text-green-800 font-medium text-xs">ABC</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>
      </th>

      {/* Answer a question spans URL, Assigned */}
      <th className="px-2 py-1 border-r border-gray-300" colSpan={2}>
        <div
          onClick={() => console.log("Answer a question clicked")}
          className="flex items-center justify-between px-2 py-[6px] rounded bg-purple-100 border border-purple-300 cursor-pointer hover:bg-purple-200"
        >
          <span className="text-purple-800 font-medium text-xs">Answer a question</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>
      </th>

      {/* Extract spans Priority */}
      <th className="px-2 py-1 border-r border-gray-300">
        <div
          onClick={() => console.log("Extract clicked")}
          className="flex items-center justify-between px-2 py-[6px] rounded bg-orange-100 border border-orange-300 cursor-pointer hover:bg-orange-200"
        >
          <span className="text-orange-800 font-medium text-xs">Extract</span>
          <BsThreeDots className="text-gray-500 text-[12px]" />
        </div>
      </th>

      {/* + spans Est. Value */}
      <th className="px-2 py-1">
        <div
          onClick={() => console.log("+ clicked")}
          className="flex items-center justify-center w-[24px] h-[24px] rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          +
        </div>
      </th>
    </tr>
  );
}
