import React, { useState } from "react";
import {
  Link,
  Navigate,
  useMatch,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";
import { Menu, Layout } from "antd";
import "./navbar.css";
import Auth from "../utils/auth";

const { Header, Content, Footer } = Layout;

// export default function Navbar() {
//   return (
//     <div className="container">
//       <nav className="nav">
//         <h3>ResuMade</h3>
//         <ul>
//           <CustomLink to="/">Home</CustomLink>
//           {/* only show Account link if user logged in */}
//           {Auth.loggedIn() ? (
//             <CustomLink to="/dashboard">Account</CustomLink>
//           ) : (
//             ""
//           )}
//           {/* only show signout link if user logged in*/}
//           {Auth.loggedIn() ? (
//             <CustomLink onClick={Auth.logout} id="signout-link">
//               Signout
//             </CustomLink>
//           ) : (
//             <CustomLink to="/login">Login</CustomLink>
//           )}
//           {/* only show signup link if not logged in */}
//           {Auth.loggedIn() ? (
//             ""
//           ) : (
//             <CustomLink to="/signup" id="signup-link">
//               Signup
//             </CustomLink>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

const Navbar = () => {
  const [current, setCurrent] = useState("mail");
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
    <Layout>
      <Header
        style={{
          backgroundColor: "white",
          display: "flex",
        }}>
        <h2 className="logo" style={{ display: "flex", alignItems: "center" }}>
          ResuMade
        </h2>
        {Auth.loggedIn() ? (
          <Menu
            onClick={changePage}
            mode="horizontal"
            items={items2}
            style={{
              marginLeft: "auto",
              minWidth: "700 px",
            }}
          />
        ) : (
          <Menu
            onClick={changePage}
            mode="horizontal"
            items={items1}
            style={{
              marginLeft: "auto",
              minWidth: "700 px",
            }}
          />
        )}

        {Auth.loggedIn() ? (
          ""
        ) : (
          <Link to="/signup" id="signup-link">
            Signup
          </Link>
        )}
      </Header>
    </Layout>
  );
};
export default Navbar;
