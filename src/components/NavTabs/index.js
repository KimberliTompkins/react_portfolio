import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
function NavTabs() {
  const location = useLocation();

  return (

    <nav class="navbar navbar-inverse navbar-fixed-top">
       <div class="container-fluid">
        <ul className="nav nav-inverse nav-fixed-top">
            <li className="nav-item">
              <Link to="/#projects" className={location.pathname === "/#projects" ? "nav-link active" : "nav-link"}> Projects </Link>
            </li>
            <li className="nav-item">
             <Link to="/#contact" className={location.pathname === "/#contact" ? "nav-link active" : "nav-link"}> Contact </Link>
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
