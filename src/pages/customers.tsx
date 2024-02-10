import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import AdminSidebar from "../components/adminSidebar";
import { ColumnDef } from "@tanstack/react-table";
import { FiDelete } from "react-icons/fi";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const Customers = () => {
  const columns: ColumnDef<DataType>[] = [
    {
      header: "Avatar",
      accessorKey: "avatar",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Name",
      accessorKey: "name",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Gender",
      accessorKey: "gender",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Email",
      accessorKey: "email",
      cell: (row) => row.renderValue(),
    },
    {
      header: "Role",
      accessorKey: "role",
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
      avatar: (
        <img
          src="http://dummyimage.com/214x100.png/cc0000/ffffff"
          alt="avatar"
        />
      ),
      name: "Cornelle Klesse",
      gender: "Female",
      email: "cklesse2@123-reg.co.uk",
      role: "Construction Worker",
      action: (
        <button>
          <FiDelete />
        </button>
      ),
    },
    {
      avatar: (
        <img
          src="http://dummyimage.com/214x100.png/cc0000/ffffff"
          alt="avatar"
        />
      ),
      name: "Jill Doumer",
      gender: "Female",
      email: "jdoumer3@bizjournals.com",
      role: "Construction Expeditor",
      action: (
        <button>
          <FiDelete />
        </button>
      ),
    },
    {
      avatar: (
        <img
          src="http://dummyimage.com/214x100.png/cc0000/ffffff"
          alt="avatar"
        />
      ),
      name: "Sauveur Jolliffe",
      gender: "Male",
      email: "sjolliffe4@oracle.com",
      role: "Architect",
      action: (
        <button>
          <FiDelete />
        </button>
      ),
    },
    {
      avatar: (
        <img
          src="http://dummyimage.com/214x100.png/cc0000/ffffff"
          alt="avatar"
        />
      ),
      name: "Hillie Alforde",
      gender: "Male",
      email: "halforde5@businessinsider.com",
      role: "Architect",
      action: (
        <button>
          <FiDelete />
        </button>
      ),
    },
    {
      avatar: (
        <img
          src="http://dummyimage.com/214x100.png/cc0000/ffffff"
          alt="avatar"
        />
      ),
      name: "Vince Ochiltree",
      gender: "Male",
      email: "vochiltree6@examiner.com",
      role: "Project Manager",
      action: (
        <button>
          <FiDelete />
        </button>
      ),
    },
    {
      avatar: (
        <img
          src="http://dummyimage.com/214x100.png/cc0000/ffffff"
          alt="avatar"
        />
      ),
      name: "Shelby Maddin",
      gender: "Male",
      email: "smaddin7@aboutads.info",
      role: "Construction Manager",
      action: (
        <button>
          <FiDelete />
        </button>
      ),
    },
    {
      avatar: (
        <img
          src="http://dummyimage.com/214x100.png/cc0000/ffffff"
          alt="avatar"
        />
      ),
      name: "Hedvig Lemmer",
      gender: "Female",
      email: "hlemmer8@jigsy.com",
      role: "Supervisor",
      action: (
        <button>
          <FiDelete />
        </button>
      ),
    },
    {
      avatar: (
        <img
          src="http://dummyimage.com/214x100.png/cc0000/ffffff"
          alt="avatar"
        />
      ),
      name: "Lawton Enrico",
      gender: "Male",
      email: "lenrico9@wired.com",
      role: "Electrician",
      action: (
        <button>
          <FiDelete />
        </button>
      ),
    },
  ]);

  const Table = TableHOC<DataType>(
    columns,
    data,
    "dashboardProductBox",
    "Customers"
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
export default Customers;
