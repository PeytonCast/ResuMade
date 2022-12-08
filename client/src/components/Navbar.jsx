import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "../index.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false); // state for opening drawer(side menu)
  return (
    <div style={{ height: "100vh", backgroundColor: "#E0E2DB" }}>
      <div
        style={{
          backgroundColor: "#000000",
          height: 60,
          paddingLeft: 12,
          paddingTop: 12,
        }}
        className="menuIcon">
        <MenuOutlined
          style={{
            color: "white",
            fontSize: 20,
          }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <div></div>
      <span className="headerMenu">
        <AppMenu />
      </span>
      <Drawer // side menu for mobile view
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "#E0E2DB" }}>
        <AppMenu isInline />
      </Drawer>
    </div>
  );
}

// nav menu
function AppMenu({ isInline = false }) {
  const navigate = useNavigate();
  return (
    <div style={{ height: "120vh", backgroundColor: "#E0E2DB" }}>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
            //TODO sign out feature here
          } else {
            navigate(key);
          }
        }}
        style={{
          backgroundColor: "#000000",
          color: "#E5E5E5",
          fontSize: 18,
          border: "none",
          justifyContent: "flex-end",
        }}
        mode={isInline ? "inline" : "horizontal"}
        items={[
          {
            label: "Home",
            key: "home",
          },
          {
            label: "Account",
            key: "dashboard",
          },
          {
            label: "Login",
            key: "login",
          },
          {
            label: "Signup",
            key: "signup",
          },
          // {
          //   label: "Signout",
          //   key: "signout",
          // },
        ]}></Menu>
      <Content />
    </div>
  );
}

function Content() {
  <div>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/signup" element={<SignupForm />}></Route>
      {/* <Route path="/signout" element={<Signout />}></Route> */}
    </Routes>
    ;
  </div>;
}

export default Navbar;
