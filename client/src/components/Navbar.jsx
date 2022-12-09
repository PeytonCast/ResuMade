import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import Auth from "../utils/auth";
//TODO: need to test if login link changes to logout after user logs in

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        ResuMade
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/dashboard">Account</CustomLink>
        {Auth.loggedIn ? (
          <CustomLink to="/signout" onClick={Auth.logout}>
            Signout
          </CustomLink>
        ) : (
          <CustomLink to="/login">Login/Signup</CustomLink>
        )}
      </ul>
    </nav>
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
