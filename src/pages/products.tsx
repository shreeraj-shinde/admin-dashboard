import { ReactElement, useState } from "react";
import TableHOC from "../components/TableHOC";
import AdminSidebar from "../components/adminSidebar";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const shoe =
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D";

const ipad =
  "https://images.unsplash.com/photo-1546868871-0f936769675e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SSUyMFBhZHxlbnwwfHwwfHx8MA%3D%3D";
const columns: ColumnDef<DataType>[] = [
  { header: "Photo", accessorKey: "photo", cell: (row) => row.renderValue() },
  { header: "Name", accessorKey: "name", cell: (row) => row.renderValue() },
  { header: "Price", accessorKey: "price", cell: (row) => row.renderValue() },
  { header: "Stock", accessorKey: "stock", cell: (row) => row.renderValue() },
  { header: "Action", accessorKey: "action", cell: (row) => row.renderValue() },
];
const Products = () => {
  const [data, setData] = useState<DataType[]>([
    {
      photo: <img src={shoe} alt="Image Photo" />,
      name: "Nike Jordans",
      price: 27000,
      stock: 5,
      action: <Link to="/admin/product/shoes">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
    {
      photo: <img src={ipad} alt="Image Photo" />,
      name: "Apple IPad",
      price: 120000,
      stock: 3,
      action: <Link to="/admin/product/Ipad">Manage</Link>,
    },
  ]);

  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboardProductBox",
    "Products"
  );
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="createProductBtn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
