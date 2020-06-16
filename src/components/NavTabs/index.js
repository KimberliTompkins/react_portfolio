import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
 import "./style.css";
function NavTabs() {
  const location = useLocation();

  return (
    <div className="container-fluid wrapper">
    <nav className="nav nav-expand-lg" >
      
        <ul className="nav nav-inverse " >
        <li className="nav-item">
             <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}> Home </Link>
           </li>
            <li className="nav-item">
              <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}> Projects </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}> About Me</Link>
            </li>
           <li className="nav-item">
           <Link to="/Resume" className={location.pathname === "/Resume" ? "nav-link active" : "nav-link"}> Resume </Link>
         </li>
        </ul> 
     
</nav> 
</div>
  );   

}

export default NavTabs;
