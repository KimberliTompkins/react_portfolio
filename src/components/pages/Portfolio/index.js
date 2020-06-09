import React, { Component } from "react";
import projects from "../../../projects.json";

class Portfolio extends Component {

    state = {
        projects
      };
     
    render() {
        return (
            <div classNameName="container m-25 p-10">
            <div className="row">
            </div>
            <div className="row">
                <div className="col-md-2>"></div>
                <div className="col-md-8">
                    {/* <section className="jumbotron" id="projects"> */}
                        {/* <div className="container"> */}
                            {/* <div className="row"> */}
                               {this.state.projects.map(project => (
                                   
                                      <div className="col-md-6 mb-10 p-10">
                                      <div className="card" id={project.id}>
                                          <a href={project.link}><img src={project.image}
                                              className="card-img-top" alt={project.name} /></a>
                                          <div className="card-body" >
                                              <p className="card-text" >{project.name}</p>
                                          </div>
                                      </div>
                                  </div>
                                  
                               ))}                                 
                                
                         {/* </div>        */}
        
                        {/* </div> */}
                    {/* </section> */}
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
        
          );
    }
}



export default Portfolio;
