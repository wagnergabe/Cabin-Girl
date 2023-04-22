import React from "react";
import {MdOutlineCabin, MdOutlineMailOutline} from "react-icons/md";
import { CgGirl } from "react-icons/cg";
import { AiOutlinePicture } from "react-icons/ai";
import { GrPaint } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "home",
      icon: <MdOutlineCabin />,
    },
    {
      path: "/about",
      name: "About",
      icon: <CgGirl />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <MdOutlineMailOutline />,
    },
    {
      path: "/gallery",
      name: "Gallery",
      icon: <AiOutlinePicture />,
    },
    {
      path: "/employment",
      name: "Employment",
      icon: <GrPaint />,
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
