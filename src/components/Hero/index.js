import React from "react";
import "./style.css";
import NavTabs from "../NavTabs/index";


function Hero() {
  return (
    <section class="bgimage" id="home">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-12 col-sm-12 col-xs-12 mt-5  ">
            <div class="float-right text-center">
              <h2 class="headliner">Kimberli Tompkins</h2>
              <h4 class="headliner">Full Stack Web Developer</h4>
              <h5 class="headliner">with years of experience in both</h5>
              <h5 class="headliner">Front End and Back End development.</h5>
              <img
                src="/Images/KTbw.png"
                class="card-img m-3 portImage "
                alt="this is me"
              />
              <div>
                <a
                  href="https://github.com/KimberliTompkins"
                  class="list-group-item-action headliner m-2 "
                  target="_blank"
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
                <a
                  href="https://www.linkedin.com/in/kimberli-tompkins-4a2443a5"
                  class="list-group-item-action headliner "
                  target="_blank"
                >
                  <ion-icon name="logo-linkedin"></ion-icon> Linkedin
                </a>
                <br/>
                <a
                  href="/resume.pdf"
                  class="list-group-item-action headliner "
                  target="_blank"
                >
                  <ion-icon name="document-text-outline"></ion-icon> Resume
                </a>
              </div>
            </div>
          </div>
        </div> 
  
      </div>
    </section>
  );
}

export default Hero;
