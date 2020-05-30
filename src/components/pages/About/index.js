import React from "react";
import './style.css';

function About() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-12 headliner">

        <h1>Kimberli Tompkins</h1>

      </div>
    </div>
    <div className="row" style={{margin: 0}}>
    <section class="col-md-6 pinkbg" id="introduction">
        <div class="jumbotron jumbotron-fluid pinkbg">
          <div class="container pinkbg">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src= "/react_portfolio/Images/me_2.jpg" class="card-img m-3" alt="thisisme"/>
                </div>
                <div class="col-md-8 p-3">
                  <div class="card-body">
                    <h5 class="card-title">Introduction</h5>
                    <p class="card-text">IT Professional with a proven track record of success</p>
                    <p class="card-text">Capable of reducing project time and costs while maintaining excellent customer 
    service</p>
                    <p class="card-text">Strong team player, communicator, leader, problem-solver and decision maker</p>
                    <p class="card-text">Proficiencies: web-based applications design and development, database design, 
    script writing and
                 structured analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="col-md-6" id="myinfo">
      <div class="jumbotron pinkbg"  >
          <h1 class="display-4">My info</h1>
          <hr class="my-4"/>
          <div class="list-group">
          <a href="https://github.com/KimberliTompkins" class="list-group-item list-group-item-action " target="_blank">
              Github
          </a>
          <a href="https://www.linkedin.com/in/kimberli-tompkins-4a2443a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BtaeOTjrCScul0HYK2stk6A%3D%3D"
              class="list-group-item list-group-item-action" target="_blank">Linkedin</a>
          <a href="contact.html" class="list-group-item list-group-item-action">kimberli.tompkins@outlook.com</a>
          </div>
      </div>
      </section>
    </div>
    </div>
  );
}

export default About;
