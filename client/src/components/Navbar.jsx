import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

//TODO: need to figure out way to conditionally render based on user logged in (isAuthenticated?)

export default function Navbar({ loggedIn, setLoggedIn }) {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        ResuMade
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/dashboard">Account</CustomLink>
        {loggedIn ? (
          <CustomLink to="/signout" onClick={() => setLoggedIn(!loggedIn)}>
            Signout
          </CustomLink>
        ) : (
          <CustomLink to="/login" onClick={() => setLoggedIn(!loggedIn)}>
            Login
          </CustomLink>
        )}
        {loggedIn ? "" : <CustomLink to="/signup">Signup</CustomLink>}
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
