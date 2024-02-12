import AdminSidebar from "../../components/adminSidebar";
import { LineChart } from "../../components/charts";

const LineCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Line Charts</h1>

        <section>
          <LineChart
            data={[40, 70, 120, 200, 235]}
            label="Users"
            borderColor="rgb(53 , 162 ,255)"
            bgColor="rgba(53 , 162 ,255 , 0.4)"
          />
          <h2>Active Users</h2>
        </section>

        <section>
          <LineChart
            data={[40, 70, 120, 200, 235]}
            label="Products"
            borderColor="hsl(129,80%,40%)"
            bgColor="hsla(129,80%,40% , 0.5)"
          />
          <h2>Total Proucts</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
