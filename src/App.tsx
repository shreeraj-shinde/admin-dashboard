import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/products"));
const Transactions = lazy(() => import("./pages/transactions"));
const Customers = lazy(() => import("./pages/customers"));
const NewProduct = lazy(() => import("./pages/Management/newProduct"));
const ManageProducts = lazy(() => import("./pages/Management/manageProducts"));
const ManageTransactions = lazy(
  () => import("./pages/Management/manageTransactions")
);
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/customers" element={<Customers />} />
          {/* Charts */}

          {/* Apps */}

          {/**Management  */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ManageProducts />} />
          <Route
            path="/admin/transaction/:id"
            element={<ManageTransactions />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
