import { useState } from "react";
import AdminSidebar from "../../components/adminSidebar";

const Toss = () => {
  const [angle, setAngle] = useState<number>(0);

  const flipCoin = () => {
    if (Math.random() > 0.5) setAngle((prev) => prev + 180);
    else setAngle((prev) => prev + 360);
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>
        <h1>Toss</h1>
        <section>
          <article className="tossCoin">
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;
