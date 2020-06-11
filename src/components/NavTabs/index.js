import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/#projects"
          className={location.pathname === "/#projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/#contact"
          className={location.pathname === "/#contact" ? "nav-link active" : "nav-link"}
       >
          Contact
      </Link>
 </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
