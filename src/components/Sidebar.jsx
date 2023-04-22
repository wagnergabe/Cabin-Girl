import React, { useState } from "react";
import {MdOutlineCabin, MdOutlineMailOutline} from "react-icons/md";
import { CgGirl } from "react-icons/cg";
import { AiOutlinePicture } from "react-icons/ai";
import { GrPaint } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
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
       <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
           <div className="top_section">
               <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
               <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <FaBars onClick={toggle}/>
               </div>
           </div>
           {
               menuItem.map((item, index)=>(
                   <NavLink to={item.path} key={index} className="link" activeclassName="active">
                       <div className="icon">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                   </NavLink>
               ))
           }
       </div>
       <main>{children}</main>
    </div>
);
};

export default Sidebar;
