import AdminSidebar from "../../components/adminSidebar";
import { DoughnutChart, PieChart } from "../../components/charts";
import { categories } from "../../assets/data.json";
const PieCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Pie Charts and Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              bgColor={[
                `hsl(110 , 80% , 80%)`,
                `hsl(110 , 80% ,50%)`,
                `hsl(110 , 40% , 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fullfilment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              bgColor={categories.map(
                (i) => `hsl(${i.value * 4} , ${i.value * 2}% , 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>Products Category Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={["In Stock", "Out of Stock"]}
              data={[40, 20]}
              bgColor={["hsl(269 , 80% , 40%)", "rgb(53 , 162 , 255)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              bgColor={[
                "hsl(119 , 80% , 40%)",
                "hsl(19 , 80% , 40%)",
                "hsl(69 , 80% , 40%)",
                "hsl(300 , 80% , 40%)",
                "rgb(53 , 162 ,255)",
              ]}
              legends={false}
              offset={[0, 0, 0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
