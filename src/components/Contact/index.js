import React from "react";
import EmailForm from "../EmailForm/index";
import "./style.css";

function Contact() {
  return (
    <div class="container-fluid contactContainer" >
     
      <div class="d-flex justify-content-center flex-row  bd-highlight">
      <h1 className="featurette-heading" >About Me </h1>
        </div>

      <div class="d-flex justify-content-center flex-row  bd-highlight mb-3">
      <p className="lead mt-3">
            I'm a Web Developer with a number of years experience behind the
            keyboard.
          </p>
      </div>
      <div class="d-flex justify-content-center flex-row  bd-highlight mb-3">
      <p className="lead">
            I have worked with everything from ColdFusion to React and so much
            in between.{" "}
          </p>
      </div>
      <div class="d-flex justify-content-center flex-row  bd-highlight mb-3">
      <p className="lead">
            On the personnel side I am a proud Navy Veteran and I fill my time
            with volunteer work in the Veteran community.
          </p>
      </div>
      <div class="d-flex justify-content-center flex-row  bd-highlight mb-3">
      <h2 className="featurette-heading">Skills. </h2>
      </div>
     
      <div class="d-flex justify-content-center flex-row  bd-highlight mb-3">
     
  <div class="p-2 bd-highlight">
  <p className="lead">
                <ul>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>jQuery</li>
                  <li>ES6+</li>
                  <li>React.js</li>
                  <li>ColdFusion</li>
                </ul>
              </p>
  </div>
  <div class="p-2 bd-highlight">
  <p className="lead">
                <ul>
                  <li>My SQL</li>
                  <li>MS SQL</li>
                  <li>MongoDB,</li>
                  <li>Sequelize</li>
                </ul>
              </p>
  </div>
  <div class="p-2 bd-highlight">
  <p className="lead">
                <ul>
                  <li>CSS</li>
                  <li>Bootstrap CSS</li>
                  <li>Handlebars</li>
                </ul>
              </p>
  </div>


      </div>

     
    </div>
  );
}

export default Contact;
