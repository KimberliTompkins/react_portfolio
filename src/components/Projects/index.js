import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import projects from "../../projects.json";
import "./style.css";

class Projects extends Component {
  state = {
    projects,
  };

  render() {
    return (
   
      <div class="container" >
         <hr  />
         <div class="row" id="projects">
          <h4 class="headliner">Projects</h4>
          <Link to="/#home" class="p-1 ml-1">Home</Link>
          <Link to="/#contact" class="p-1">Contact</Link>
        </div>  
        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Denver Through the Decades.{" "}
              <span class="text-muted">It’ll blow your mind.</span>
            </h2>
            <p class="lead">
            An application using MongoDB, Express, React.js, and Node.js to create a historical application for those in the Denver Area.
            Navigate through the decades and learn about the city history. Register to add and edit content.</p>
            <a href="https://denverdecades.herokuapp.com/">Check it out</a>
            <p>Contributors: Kimberli Tompkins, Maria Nevarez, Andrew Werner, Vanessa Pham</p>
            
            
          </div>
          <div class="col-md-5">
          <a href="https://denverdecades.herokuapp.com"><img src="/react_portfolio/Images/Denver_Decades.jpg" alt="DenverDecades"class="img-thumbnail"></img></a>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Colorado Trail Finder.{" "}
              <span class="text-muted">Get your hike on.</span>
            </h2>
            <p class="lead">
             Find details about specific hiking trails in Colorado, including maps and weather. Login to mark your favorites.
             A Full Stack application using JavaScript ES6, Node.js, Sequelize, Bootstrap, Mustache and several APIs.
            </p>
            
            <a href="https://colorado-trail-finder.herokuapp.com/">Check it out</a>
            <p>Contributors: Kimberli Tompkins and Todd Leslie</p>
 
          </div>
          <div class="col-md-5 order-md-1">
          <a href="https://colorado-trail-finder.herokuapp.com/"><img src="/react_portfolio/Images/Trail_finder.png" alt="TrailFinder" class="img-thumbnail"></img></a>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              BoozyFood.{" "}<span class="text-muted">Create your perfect "quarantazine" without leaving home!</span>
            </h2>
            <p class="lead">
            Use the ingredients that you have at home to generate a recipe for you so you don't have to go outside during the COVID-19 quarantine. Includes a random drink generator.
            A Front End application using JavaScript, JQuery, JQueryUI, BootStrap, AJAX plus theCocktaildb and Spoonacular APIs.  
            </p>
            <a href="https://kimberlitompkins.github.io/BoozyFood/">Check it out</a>
            <p>Contributors: Kimberi Tompkins, Ryan Siverson, Samantha Scott </p>
          </div>
          <div class="col-md-5">
          <a href="https://kimberlitompkins.github.io/BoozyFood/"><img src="/react_portfolio/Images/BoozyFood.jpg" alt="BoozyFood" class="img-thumbnail"></img></a>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Projects;
