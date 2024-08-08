import { Outlet } from "react-router-dom";
import NavbarSection from "../components/navbar/NavbarSection";


function MainLayout() {
  return (
    <>
    <NavbarSection/>
    <Outlet/>
    </>
  )
}

export default MainLayout