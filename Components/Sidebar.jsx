import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Icon */}
      <button className="menu-icon" onClick={toggleSidebar}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="menu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Services
          </NavLink>
          <NavLink
            to="/gallary"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Gallary
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
