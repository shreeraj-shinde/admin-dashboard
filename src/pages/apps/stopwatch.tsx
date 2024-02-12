import { useEffect, useState } from "react";
import AdminSidebar from "../../components/adminSidebar";

const formatTime = (timeInSeconds: number) => {
  const hours = String(Math.floor(timeInSeconds / 3600));
  const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
  const seconds = String(timeInSeconds % 60);

  return `${hours.padStart(2, "0")} : ${minutes.padStart(
    2,
    "0"
  )} : ${seconds.padStart(2, "0")}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalID: number;

    if (isActive) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [isActive]);
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboardAppContainer">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsActive((prev) => !prev)}>
              {isActive ? "Pause" : "Start"}
            </button>
            <button
              onClick={() => {
                setIsActive(false);
                setTime(0);
              }}
            >
              Reset
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
