import TableHOC from "./TableHOC";
import data from "../assets/data.json";
import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";

interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const columns: ColumnDef<DataType>[] = [
  {
    header: "ID",
    cell: (row) => row.renderValue(),
    accessorKey: "id",
  },
  {
    header: "Quantity",
    cell: (row) => row.renderValue(),
    accessorKey: "quantity",
  },
  {
    header: "Discount",
    cell: (row) => row.renderValue(),
    accessorKey: "discount",
  },
  {
    header: "Amount",
    cell: (row) => row.renderValue(),
    accessorKey: "amount",
  },
  {
    header: "Status",
    cell: (row) => row.renderValue(),
    accessorKey: "status",
  },
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC(columns, data, "transactionBox", "Top Transactions")();
};

export default DashboardTable;
