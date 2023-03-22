import React from "react";
import "./sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";
import { HiOutlineSupport } from "react-icons/hi";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-menus">
        <div className="icons">
          <div className="icon icon-active ">
            <p>
              <AiFillHome className=" active-a  home-icon  " />
            </p>
            <NavLink className="active-a" to="/">
              Home
            </NavLink>
          </div>

          <div className="icon ">
            <p>
              <GiTakeMyMoney className="home-icon" />
            </p>
            <NavLink to="">Loan</NavLink>
          </div>
          <div className="icon">
            <p>
              <MdLocalOffer className="home-icon" />
            </p>
            <NavLink to="">Offer</NavLink>
          </div>
          <div className="icon">
            <p>
              <HiOutlineSupport className="home-icon" />
            </p>

            <NavLink to="">Offer</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
