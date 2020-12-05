import { Nav } from "react-bootstrap";
import React from "react";
import "./style.css";

function Footer() {
  return (
    <nav class="navbar  footer">
      <span class="navbar-text mb-0">
        Kimberli.Tompkins@outlook.com - 2020
        <a
          href="https://github.com/KimberliTompkins"
          class="list-group-item-action m-2 "
          target="_blank"
        >
          <ion-icon name="logo-github"></ion-icon> Github
        </a>
        <a
          href="https://www.linkedin.com/in/kimberli-tompkins-4a2443a5"
          class="list-group-item-action "
          target="_blank"
        >
          <ion-icon name="logo-linkedin"></ion-icon> Linkedin
        </a>
        <a
          href="/resume.pdf"
          class="list-group-item-action m-2 "
          target="_blank"
        >
          <ion-icon name="document-text-outline"></ion-icon> Resume
        </a>
      </span>
    </nav>
  );
}
export default Footer;
