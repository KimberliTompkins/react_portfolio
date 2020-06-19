import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap';
import "./style.css";
function NavTabs() {
  const location = useLocation();

  return (
    <div className="container-fluid wrapper">
      <Navbar expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="Projects">Projects</Nav.Link>
      <Nav.Link href="Contact">About Me</Nav.Link>
      <Nav.Link href="Resume">Resume</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  );   

}

export default NavTabs;
