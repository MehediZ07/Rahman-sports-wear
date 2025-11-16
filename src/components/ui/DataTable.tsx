import React from "react";

interface TableColumn {
  key: string;
  header: string;
  width?: string;
}

interface TableRow {
  [key: string]: string | number;
  highlighted?: boolean;
}

interface DataTableProps {
  columns: TableColumn[];
  data: TableRow[];
  totalRow?: TableRow;
  className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  totalRow,
  className = "",
}) => {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full border-collapse bg-white shadow-sm">
        {/* Header */}
        <thead>
          <tr className="bg-[#B8B8B8]">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-4 py-3 text-left font-semibold text-gray-800 text-sm md:text-base border border-gray-400 ${
                  column.width || ""
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        
        {/* Body */}
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } hover:bg-gray-50 transition-colors relative`}
            >
              {/* Red highlight bar for highlighted rows */}
              {row.highlighted && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#cf181f]" />
              )}
              
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-3 text-sm md:text-base text-gray-700 border border-gray-300"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
          
          {/* Total Row */}
          {totalRow && (
            <tr className="bg-[#B8B8B8] font-semibold">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-3 text-sm md:text-base text-gray-800 border border-gray-400"
                >
                  {totalRow[column.key]}
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};