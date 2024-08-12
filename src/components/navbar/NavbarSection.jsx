import {
  Button,
  Flowbite,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../../assets/react.svg";
import { useAuthContext } from "../../contexts/ContextHooks";

function NavbarSection() {
  const { user,setUser, logOut } = useAuthContext();
  const navigate = useNavigate();

  const customTheme = {
    root: {
      base: "bg-red px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar fluid rounded className=" border-red-500 mb-10">
        <NavbarBrand href="">
          <img src={img} className="mr-3 h-6 sm:h-9" alt="React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button onClick={handleLogOut}>LogOut</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink as={"div"}>
            <NavLink to={"/home"}>Home</NavLink>
          </NavbarLink>
          <NavbarLink as={"div"}>
            <NavLink to={"/services"}>Services</NavLink>
          </NavbarLink>
          {!user?.uid && (
            <>
              <NavbarLink as={"div"}>
                <NavLink to={"/login"}>Login</NavLink>
              </NavbarLink>
              <NavbarLink as={"div"}>
                <NavLink to={"/register"}>Register</NavLink>
              </NavbarLink>
            </>
          )}
        </NavbarCollapse>
      </Navbar>
    </Flowbite>
  );
}

export default NavbarSection;
