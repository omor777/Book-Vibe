import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useContext } from "react";
import { ToggleContext } from "../../layouts/Root";

const Navbar = () => {
  const toggleValue = useContext(ToggleContext);
  return (
    <div className="sticky top-0 shadow-md py-5 px-5 bg-white rounded-xl">
      <nav className="flex items-center justify-between ">
        <Link
          to={"/"}
          className="text-black-100 text-xl md:text-28px font-work-sans font-bold"
        >
          Book Vibe
        </Link>
        <ul className="hidden lg:flex flex-wrap items-center gap-x-4 ">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive
                ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
                : "text-black-80 text-lg font-work-sans btn  bg-transparent border-none shadow-none hover:bg-green-5 hover:text-green-900";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to={"/listed_books"}
            className={({ isActive }) => {
              return isActive
                ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
                : "text-black-80 text-lg font-work-sans btn  bg-transparent border-none shadow-none hover:bg-green-5 hover:text-green-900";
            }}
          >
            Listed Books
          </NavLink>
          <NavLink
            to={"/pages_to_read"}
            className={({ isActive }) => {
              return isActive
                ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
                : "text-black-80 text-lg font-work-sans btn bg-transparent border-none shadow-none hover:bg-green-5 hover:text-green-900";
            }}
          >
            Pages to Read
          </NavLink>

          <NavLink
            to={"/contact"}
            className={({ isActive }) => {
              return isActive
                ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
                : "text-black-80 text-lg font-work-sans btn bg-transparent border-none shadow-none hover:bg-green-5 hover:text-green-900";
            }}
          >
            Contact
          </NavLink>
          <NavLink
            to={"/faq"}
            className={({ isActive }) => {
              return isActive
                ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
                : "text-black-80 text-lg font-work-sans btn bg-transparent border-none shadow-none hover:bg-green-5 hover:text-green-900";
            }}
          >
            FAQ
          </NavLink>
        </ul>
        <div className="hidden lg:flex items-center gap-4 ">
          <Button bgColor={"#23BE0A"}>Sing In</Button>
          <Button bgColor={"#59C6D2"}>Sing Up</Button>
        </div>
        <label
          htmlFor={toggleValue}
          className="hover:bg-gray-200 duration-300 p-1 rounded-md lg:hidden"
        >
          <HiOutlineBars3BottomLeft className="text-3xl cursor-pointer" />
        </label>
      </nav>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
