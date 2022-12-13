import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Button, ConfigProvider } from "antd";
import "./navbar.css";

import Auth from "../utils/auth";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="nav">
        <h3>ResuMade</h3>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          {/* only show Account link if user logged in */}
          {Auth.loggedIn() ? (
            <CustomLink to="/dashboard">Account</CustomLink>
          ) : (
            ""
          )}
          {/* only show signout link if user logged in*/}
          {Auth.loggedIn() ? (
            <CustomLink onClick={Auth.logout} id="signout-link">
              Signout
            </CustomLink>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )}
          {/* only show signup link if not logged in */}
          {Auth.loggedIn() ? (
            ""
          ) : (
            <CustomLink to="/signup" id="signup-link">
              Signup
            </CustomLink>
          )}
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
