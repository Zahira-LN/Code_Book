import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/cart/CartPage.jsx";
import {  DashboardPage } from "../pages/dashboard/DashboardPage.jsx";
import HomePage from "../pages/home/HomePage";
import { Login } from "../pages/Login.jsx";
import OrderPage from "../pages/order/OrderPage.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import ProductList from "../pages/products/ProductList";
import { Register } from "../pages/Register.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbaordpage" element={<DashboardPage />} />
        <Route
          path="/cartpage"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/orderpage"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
