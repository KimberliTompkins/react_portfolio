import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
// import "./style.css";
function NavTabs() {
  const location = useLocation();

  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
       <div class="container-fluid">
        <ul className="nav nav-inverse nav-fixed-top" style={{"position": "fixed"}}>
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
      </div>
</nav> 
  );   

}

export default NavTabs;
