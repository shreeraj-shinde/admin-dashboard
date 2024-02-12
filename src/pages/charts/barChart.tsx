import AdminSidebar from "../../components/adminSidebar";
import { BarChart } from "../../components/charts";

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data1={[200, 444, 343, 556, 778, 455, 990]}
            data2={[300, 144, 433, 655, 237, 755, 190]}
            title1="Products"
            title2="User"
            bgColor={"hsl(260, 50% , 30%)"}
            bgColor2={"hsl(360 , 90% , 90%)"}
          />
          <h2>TOP SELLING PRODUCTS AND TOP CUSTOMERS</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data1={[200, 444, 343, 556, 778, 455, 990]}
            data2={[]}
            title1="Products"
            title2=""
            bgColor={"hsl(260, 50% , 30%)"}
            bgColor2=""
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
