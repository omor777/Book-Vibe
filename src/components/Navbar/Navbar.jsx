import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useContext } from "react";
import { ToggleContext } from "../../layouts/Root";

const Navbar = () => {
  const toggleValue = useContext(ToggleContext);
  return (
    <nav className="flex items-center justify-between my-12 container px-4 lg:px-0">
      <h3 className="text-black-100 text-28px font-work-sans font-bold">
        Book Vibe
      </h3>
      <ul className="hidden lg:flex flex-wrap items-center gap-4 ">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
              : "text-black-80 text-lg font-work-sans btn";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/listed_books"}
          className={({ isActive }) => {
            return isActive
              ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
              : "text-black-80 text-lg font-work-sans btn";
          }}
        >
          Listed Books
        </NavLink>
        <NavLink
          to={"/pages_to_read"}
          className={({ isActive }) => {
            return isActive
              ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
              : "text-black-80 text-lg font-work-sans btn";
          }}
        >
          Pages to Read
        </NavLink>
      </ul>
      <div className="hidden lg:flex items-center gap-4 flex-wrap">
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
  );
};

Navbar.propTypes = {};

export default Navbar;
