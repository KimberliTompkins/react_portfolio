import React from "react";
import "./style.css";

function Projects () {

    return (
    
      <div id="projects" class="container-fluid">
         {/* <hr  /> */}
         {/* <div class="row"> */}
          {/* <h4 class="sectionText">Projects</h4> */}
        {/* </div>   */}
        {/* <hr class="featurette-divider" /> */}

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Denver Through the Decades.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
            An application using MongoDB, Express, React.js, and Node.js to create a historical application for those in the Denver Area.
            Navigate through the decades and learn about the city history. Register to add and edit content.   <a href="https://denverdecades.herokuapp.com/">Check it out</a>
 </p>
            <a href="https://github.com/mnevarez01/DenverDecades">Github</a>
            <p>Contributors: Kimberli Tompkins, Maria Nevarez, Andrew Werner, Vanessa Pham</p>
            
            
          </div>
          <div className="col-md-5">
          <a href="https://denverdecades.herokuapp.com"><img src="/react_portfolio/Images/Denver_Decades.jpg" alt="DenverDecades"class="img-thumbnail"></img></a>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Colorado Trail Finder.{" "}
              <span className="text-muted">Get your hike on.</span>
            </h2>
            <p className="lead">
             Find details about specific hiking trails in Colorado, including maps and weather. Login to mark your favorites.
             A Full Stack application using JavaScript ES6, Node.js, Sequelize, Bootstrap, Mustache and several APIs.   <a href="https://colorado-trail-finder.herokuapp.com/">Check it out</a>
            </p>
          

            <a href="https://github.com/KimberliTompkins/Trail_Finder">Github</a>
            <p>Contributors: Kimberli Tompkins, Todd Leslie, Cole Carter and Genet Worku</p>
 
          </div>
          <div className="col-md-5 order-md-1">
          <a href="https://colorado-trail-finder.herokuapp.com/"><img src="/react_portfolio/Images/Trail_finder.png" alt="TrailFinder" class="img-thumbnail"></img></a>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              BoozyFood.{" "}<span class="text-muted">Create your perfect "quarantazine" without leaving home!</span>
            </h2>
            <p className="lead">
            Use the ingredients that you have at home to generate a recipe for you so you don't have to go outside during the COVID-19 quarantine. Includes a random drink generator.
            A Front End application using JavaScript, JQuery, JQueryUI, BootStrap, AJAX plus theCocktaildb and Spoonacular APIs.    <a href="https://kimberlitompkins.github.io/BoozyFood/">Check it out</a>
            </p>
          
            <a href="https://github.com/KimberliTompkins/BoozyFood">Github</a>
            <p>Contributors: Kimberi Tompkins, Ryan Siverson, Samantha Scott </p>
          </div>
          <div className="col-md-5">
          <a href="https://kimberlitompkins.github.io/BoozyFood/"><img src="/react_portfolio/Images/BoozyFood.jpg" alt="BoozyFood" class="img-thumbnail"></img></a>
          </div>
        </div>
      </div>
     
    );
 
}

export default Projects;
