import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import "./navbar.css";
import Auth from "../utils/auth";

const Navbar = () => {
  const items1 = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Account",
      key: "/dashboard",
    },
    {
      label: "Login",
      key: "/login",
    },
    {
      label: "Signup",
      key: "/signup",
    },
  ];
  const items2 = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Account",
      key: "/dashboard",
    },
    {
      label: "Logout",
      key: "/signout",
    },
  ];

  const navigate = useNavigate();

  const changePage = ({ key }) => {
    if (key === "/signout") {
      Auth.logout();
    } else {
      navigate(key);
    }
  };
  return (
    <nav className="menuBar">
      <div>
        <h2>
          <Link to="/" id="logo">
            ResuMade
          </Link>
        </h2>
      </div>
      <div className="menu">
        {Auth.loggedIn() ? (
          <Menu
            onClick={changePage}
            mode="horizontal"
            items={items2}
            style={{ marginLeft: "auto" }}
          />
        ) : (
          <Menu
            onClick={changePage}
            mode="horizontal"
            items={items1}
            style={{ marginLeft: "auto" }}
          />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
