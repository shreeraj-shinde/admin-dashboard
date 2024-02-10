import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/adminSidebar";
import { ColumnDef } from "@tanstack/react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const Transactions = () => {
  const columns: ColumnDef<DataType>[] = [
    {
      header: "User",
      accessorKey: "user",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Discount",
      accessorKey: "discount",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: (row) => row.renderValue(),
    },
  ];

  const [data, setData] = useState<DataType[]>([
    {
      user: "Calla Solloway",
      amount: 44,
      discount: 70,
      quantity: 45,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      user: "Lara Ondrak",
      amount: 78,
      discount: 37,
      quantity: 33,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      user: "Nolan Batchelder",
      amount: 81,
      discount: 93,
      quantity: 99,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      user: "Clary Spofforth",
      amount: 37,
      discount: 100,
      quantity: 33,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      user: "Harwell Duff",
      amount: 78,
      discount: 88,
      quantity: 27,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      user: "Cleveland Donati",
      amount: 66,
      discount: 88,
      quantity: 75,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      user: "Ingram Markie",
      amount: 64,
      discount: 36,
      quantity: 31,
      status: <span className="red">Processing</span>,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
  ]);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Transactions"),
    []
  );

  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main>{Table()}</main>
    </div>
  );
};

export default Transactions;
