import { createContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Button from "../components/Button/Button";

export const ToggleContext = createContext(null);

const Root = () => {
  const [toggleValue, setToggleValue] = useState("my-drawer");

  return (
    <>
      <ToggleContext.Provider value={toggleValue}>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <Navbar />
            <Outlet />
            {/* content */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <aside className="menu  w-80 min-h-full bg-base-200 text-base-content flex flex-col">
              {/* Sidebar content here */}
              <div className="flex flex-col gap-5 grow">
                <h3 className="text-black-100 text-28px font-work-sans font-bold text-center my-5">
                  Book Vibe
                </h3>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
                      : "text-black-80 text-lg font-work-sans btn bg-transparent border-none shadow-none hover:bg-green-5 hover:text-green-900";
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/listed_books"}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
                      : "text-black-80 text-lg font-work-sans btn bg-transparent border-none shadow-none hover:bg-green-5 hover:text-green-900";
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
                  to={"/faq"}
                  className={({ isActive }) => {
                    return isActive
                      ? "text-lg font-work-sans btn btn-outline text-green-900  font-semibold  rounded-lg border border-green-900 cursor-pointer hover:bg-green-900 hover:border-green-900"
                      : "text-black-80 text-lg font-work-sans btn bg-transparent border-none shadow-none hover:bg-green-5 hover:text-green-900";
                  }}
                >
                  FAQ
                </NavLink>
              </div>
              <div className="flex items-center gap-4 justify-center mb-5">
                <Button bgColor={"#23BE0A"}>Sing In</Button>
                <Button bgColor={"#59C6D2"}>Sing Up</Button>
              </div>
            </aside>
          </div>
        </div>
        <ToastContainer />
      </ToggleContext.Provider>
    </>
  );
};

export default Root;
