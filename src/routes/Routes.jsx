import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LoginFormRHF from "../components/form/LoginFormRHF";
import RegisterFormRHF from "../components/form/RegisterFormRHF";
import Services from "../components/services/Services";
import ProductDetails from "../components/services/ProductDetails";
import EditProduct from "../components/services/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div className="w-full h-screen text-center pt-56">page not found</div>,
    children: [
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "login",
        element: <LoginFormRHF />,
      },
      {
        path: "register",
        element: <RegisterFormRHF />,
      },
      {
        path: "product/:id",
        element: <ProductDetails/>,
      },
      {
        path: "/product/edit/:id",
        element: <EditProduct/>,
      },
    ],
  },
]);
