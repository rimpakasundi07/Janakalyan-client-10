import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/issues">Issues</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>

      <li>
        <NavLink to="/register">Register</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/allissue">All Issues</NavLink>
          </li>
          <li>
            <NavLink to="/addIssues">Add Issues</NavLink>
          </li>
          <li>
            <NavLink to="/myIssues">My Issues</NavLink>
          </li>
          <li>
            <NavLink to="/myContribution">My Contribution</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h2 className="lg:text-3xl font-bold text-sky-400 ml-4 text-xl">
          জনকল্যাণ
        </h2>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="lg:mr-4">
          {user ? (
            <a className="btn text-white bg-sky-400 hover:bg-sky-700">
              Sign Out
            </a>
          ) : (
            <a className="btn text-white bg-sky-600 hover:bg-sky-400">
              {" "}
              Login{" "}
            </a>
          )}
        </div>
        <img
          className="w-10 h-10 lg:mr-6 rounded-full"
          alt="User profile"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </div>
  );
};

export default Navbar;
