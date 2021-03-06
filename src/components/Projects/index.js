import React from "react";
import "./style.css";

function Projects () {

    return (
     
      
         <div class="container-fluid projectsContainer">
            <div class="d-flex justify-content-center flex-row  bd-highlight mb-3">
              
            <h1 className="featurette-heading mt-5 mb-3" >
           Projects</h1>
        </div>
    
        
        
      
        <div className="row featurette ">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading" >
              Wild Joy Creations.{" "}
              <span className="text-muted">Crafty Crafty Crafty</span>
            </h2>
            <p className="lead">
            Customized gifts for life’s celebrations and memorable moments.
             A public facing customer website developed in React  <a href="http://wildjoycreations">Check it out</a>
            </p>
          

            <a href="https://github.com/KimberliTompkins/WildJoy_Creations">Github</a>
            
          </div>
          <div className="col-md-5 order-md-1">
          <a href="https://colorado-trail-finder.herokuapp.com/"><img src="/Images/wildjoy.png" alt="wildjoy" class="img-thumbnail"></img></a>
          </div>
        </div>

        <hr className="featurette-divider mb-5" />
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
          <a href="https://denverdecades.herokuapp.com"><img src="/Images/Denver_Decades.jpg" alt="DenverDecades"class="img-thumbnail"></img></a>
          </div>
        </div>

        <hr className="featurette-divider mb-5" />

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
          <a href="https://colorado-trail-finder.herokuapp.com/"><img src="/Images/Trail_finder.png" alt="TrailFinder" class="img-thumbnail"></img></a>
          </div>
        </div>

        <hr className="featurette-divider" />

        </div>
     
    );
 
}

export default Projects;
