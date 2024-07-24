import { useEffect, useState } from "react";
import {
  Navbar as NavbarCX,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function NavList() {
  const [{ token }] = useCookies(["token"]);
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to={"/dashboard"}
          className="flex items-center text-white hover:text-gray-100 transition-colors"
        >
          Dashboard
        </Link>
      </Typography>
      {token ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link
            to={"/"}
            className="flex items-center text-white hover:text-gray-100 transition-colors"
          >
            Account
          </Link>
        </Typography>
      ) : (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium flex items-center space-x-2"
        >
          <Link
            to={"/login"}
            className="flex items-center text-white hover:text-gray-100 transition-colors"
          >
            Login
          </Link>
          <p className="text-white">/</p>
          <Link
            to={"/register"}
            className="flex items-center text-white hover:text-gray-100 transition-colors"
          >
            Register
          </Link>
        </Typography>
      )}
    </ul>
  );
}

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <NavbarCX
      className="fixed top-0 w-screen border-t-0 border-x-0 border-b-[1px] border-white px-6 py-3 rounded-none text-white"
      style={{ minWidth: "100vw", backgroundColor: "#000" }}
    >
      <div className="flex items-center justify-between bg-black">
        <Link to={"/"}>
          <Typography variant="h5" className="mr-4 cursor-pointer py-1.5">
            LODE
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </NavbarCX>
  );
}
