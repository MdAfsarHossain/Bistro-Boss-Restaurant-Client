import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <div>
      {/* <h1>Main Layouts</h1> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
