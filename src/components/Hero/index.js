import React from "react";
import "./style.css";
import NavTabs from "../NavTabs/index";


function Hero() {
  return (
    <section class="bgimage" id="home">
      <NavTabs />
      <div class="container-fluid">
        <div class="row">
          <div class="col-10 col-md-10 col-sm-10 col-xs-10 p-2">
            <div class="float-right text-center">
              <h1 class="headliner">Kimberli Tompkins</h1>
              <h3 class="headliner">Full Stack Web Developer</h3>
              <h5 class="headliner">with years of experience in both</h5>
              <h5 class="headliner">Front End and Back End development.</h5>
              
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center ">
            
            <img
              src="/react_portfolio/Images/KT.png"
              class="card-img m-3 portImage "
              alt="this is me"
            />
          
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Hero;
