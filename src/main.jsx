import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import LoginFormRHF from "./components/form/LoginFormRHF";
import RegisterFormRHF from "./components/form/RegisterFormRHF";
import Services from "./components/services/Services";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>page not found</div>,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
