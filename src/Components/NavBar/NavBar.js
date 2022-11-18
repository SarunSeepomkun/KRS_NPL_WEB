import React from "react";
import { NavLink } from "react-router-dom";
import krungsri2011 from "../../Assets/images/krungsri2011.jpg";

const NavBar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{
        "background-color": "rgb(157, 123, 78)",
        color: "rgb(255,255,255) !important",
      }}
    >
      <div class="navbar-brand d-lg-none">
        <img
          id="imgSmallLogo"
          alt="image small logo"
          style={{ "max-height": "40px", "max-width": "50px" }}
          src={krungsri2011}
        />
        <label class="text-nowrap mx-1">Krungsri Recovery System (KRS)</label>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li id="li_ToDoList" class="nav-item">
            <NavLink to="Todolist" className="nav-link">To Do List</NavLink>
          </li>
          <li id="li_CustomerByEntity" class="nav-item">
            <NavLink to="TodoListDailyPreport" className="nav-link">To Do List Daily Preport</NavLink>
          </li>
          <li id="li_frmReportRPTList" class="nav-item">
            <NavLink to="CustomerSearch" className="nav-link">Customers Search</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="Login" className="nav-link">Log out</NavLink>
          </li>
        </ul>
        <span className="navbar-text mr-3 userlogon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
