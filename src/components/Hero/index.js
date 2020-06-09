import React from "react";
import "./style.css";
import NavTabs from "../NavTabs/index";

function Hero() {
  return (
    <section class="bgimage">
      <NavTabs/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 p-2">
            <div class="float-right">
              <h1 class="headliner">Kimberli Tompkins</h1>
              <h3 class="headliner">Full Stack Web Developer</h3>

            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
            <img
              src="/react_portfolio/Images/KT.png"
              class="card-img m-3 portImage"
              alt="thisisme"
            />
                            <a href="https://github.com/KimberliTompkins" class="list-group-item-action m-2 headliner"target="_blank">
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
                <a href="https://www.linkedin.com/in/kimberli-tompkins-4a2443a5/?
lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BtaeOTjrCScul0HYK2stk6A%3D%3D" class="list-group-item-action headliner" 
target="_blank">
                  <ion-icon name="logo-linkedin"></ion-icon> Linkedin
                </a>
         
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
