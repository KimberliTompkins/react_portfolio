import React from "react";
import EmailForm from "../EmailForm/index";




function Contact() {
  return (
    <div id="projects" class="container-fluid">

   <div className="row featurette" >
     <div className="col-md-7 order-md-1 mt-2">
       <p className="lead mt-3">
       I'm a Web Developer with a number of years experience behind the keyboard.</p>
      <p className="lead">I have worked with everything from ColdFusion to React and so much in between. </p> 
      <p className="lead">On the personnel side I am a proud Navy Veteran and I fill my time with volunteer work in the Veteran community.</p>
     </div>
     <div className="col-md-5 mt-3">
     <img src="/Images/aboutMe.png" alt="aboutme"class="img-thumbnail"></img>
     </div>
   </div>

   {/* <hr className="featurette-divider" /> */}

   <div className="row featurette">
   <div className="col-md-5">
 
                <div className="container p-3 mt-3">
                    <EmailForm/>
                </div>
</div>
     <div className="col-md-7 order-md">
       <h2 className="featurette-heading">
         Skills.{" "}
        
       </h2>
       <div className="row">
       <div className="col-md-4">
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
       <div className="col-md-4">
   <p className="lead">
     <ul>
       
        <li>My SQL</li>
        <li>MS SQL</li>
        <li>MongoDB,</li>
        <li>Sequelize</li>
      
     </ul>
   </p>
   </div>
   <div className="col-md-4">
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
   </div>
 </div>

);

}

export default Contact;
