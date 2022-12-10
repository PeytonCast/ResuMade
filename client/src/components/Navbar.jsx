import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

import Auth from "../utils/auth";
//TODO: need to test if login link changes to logout after user logs in

export default function Navbar() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/" className="site-title">
          ResuMade
        </Link>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/dashboard">Account</CustomLink>
          {/* if user is logged in show signout link*/}
          {Auth.loggedIn() ? (
            <CustomLink onClick={Auth.logout}>Signout</CustomLink>
          ) : (
            <CustomLink to="/login">Login/Sign Up</CustomLink>
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
