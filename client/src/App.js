import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "../src/pages/Homepage";
import Dashboard from "../src/pages/Dashboard";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

//import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
