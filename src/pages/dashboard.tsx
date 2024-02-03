import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/adminSidebar";
import { FaRegBell } from "react-icons/fa";
import img from "../assets/836.jpg";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for Data ,Users , Docs" />
          <FaRegBell />
          <img src={img} alt="User" />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={34000000}
            heading={"Revenue"}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading={"Revenue"}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading={"Revenue"}
            color="rgb(0,115,255)"
          />
        </section>
      </main>
    </div>
  );
};
interface widgetProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: widgetProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%{""}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> + {percent}%{""}
        </span>
      )}
    </div>
    <div className="widgetCircle">
      <span style={{ color: color }}>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
