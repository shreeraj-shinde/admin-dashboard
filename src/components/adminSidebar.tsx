import { useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboard2Fill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);

  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo</h2>
        <DivOne location={location} />

        {/* Charts */}
        <DivTwo location={location} />

        {/* Apps */}
        <DivThree location={location} />
      </aside>
    </>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgb(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        text="Dashboard"
        url="/admin/dashboard"
        Icon={RiDashboard2Fill}
        location={location}
      />
      <Li
        text="Products"
        url="/admin/products"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        text="Customers"
        url="/admin/customers"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        text="Transactions"
        url="/admin/transactions"
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
);

const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        text="Stopwatch"
        url="/admin/app/stopwatch"
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        text="Coupon"
        url="/admin/app/coupon"
        Icon={RiCoupon3Fill}
        location={location}
      />
      <Li
        text="Toss"
        url="/admin/app/toss"
        Icon={FaGamepad}
        location={location}
      />
    </ul>
  </div>
);

const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        text="Bar"
        url="/admin/chart/bar"
        Icon={FaChartBar}
        location={location}
      />
      <Li
        text="Pie"
        url="/admin/chart/pie"
        Icon={FaChartPie}
        location={location}
      />
      <Li
        text="Line"
        url="/admin/chart/Line"
        Icon={FaChartLine}
        location={location}
      />
    </ul>
  </div>
);

export default AdminSidebar;
