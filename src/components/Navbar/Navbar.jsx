
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between my-12 container mx-auto">
      <h3 className="text-black-100 text-28px font-work-sans font-bold">
        Book Vibe
      </h3>
      <ul className="flex flex-wrap items-center gap-4">
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
      <div className="flex items-center gap-4 flex-wrap">
        <Button bgColor={"#23BE0A"}>Sing In</Button>
        <Button bgColor={"#59C6D2"}>Sing Up</Button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
