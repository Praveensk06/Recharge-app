import React from "react";
import { Outlet } from "react-router-dom";

import "./navLayout.css";

import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";

const NavLayout = () => {
  return (
    <main>
      <NavBar />
      <div className="container">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          {/* render child component */}
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default NavLayout;
