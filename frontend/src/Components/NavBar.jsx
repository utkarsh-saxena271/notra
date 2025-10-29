import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-gray-900/80 backdrop-blur-md text-white shadow-md sticky top-0 z-50">
      <NavLink to={!user ? "/" : "/dashboard"}>
        <h1 className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors duration-200">
          YourNotes!
        </h1>
      </NavLink>

      <div className="flex items-center gap-4">
        {!user && (
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `hover:text-white font-medium transition-colors ${
                isActive ? "text-blue-300" : "text-gray-300"
              }`
            }
          >
            Login
          </NavLink>
        )}

        {user && (
          <div className="flex items-center gap-4">
            <NavLink
              to={"/dashboard"}
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              Dashboard
            </NavLink>
            <LogoutButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;