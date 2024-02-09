import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/adminSidebar";
import { FaRegBell } from "react-icons/fa";
import img from "../assets/836.jpg";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import Tdata from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";
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
            percent={-14}
            amount={false}
            value={340}
            heading={"Users"}
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={75}
            amount={false}
            value={34000}
            heading={"Products"}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={34000000}
            heading={"Revenue"}
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={60}
            amount={false}
            value={340000}
            heading={"Transactions"}
            color="rgb(76,0,255)"
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transactions</h2>
            {/* Graph */}
            <BarChart
              data1={[300, 144, 433, 655, 237, 755, 190]}
              data2={[200, 444, 343, 556, 778, 455, 990]}
              title1="Revenue"
              title2="Transaction"
              bgColor="rgb(0,115,255)"
              bgColor2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {Tdata.categories?.map((category, idx) => (
                <CategoriesItem
                  key={idx}
                  heading={category.heading}
                  value={category.value}
                  color={`hsl( ${category.value * 4}, 60% , 50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            {/* Chart */}

            <DoughnutChart
              labels={["male", "female"]}
              data={[12, 19]}
              bgColor={["hsl(340 , 82%, 56%)", "rgba(53 , 162 , 235,0.8)"]}
              cutout={"90%"}
            />

            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* Table */}
          {Tdata.transaction ? <DashboardTable data={Tdata.transaction} /> : ""}
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
          <HiTrendingDown /> {percent}%{""}
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255,255,255) 0
      )`,
      }}
    >
      <span style={{ color: color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoriesItem = ({ heading, value, color }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
