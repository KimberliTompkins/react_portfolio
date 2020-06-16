import React from "react";



function Contact() {
  return (
    <div id="projects" class="container-fluid">
    {/* <hr  /> */}
    {/* <div class="row"> */}
     {/* <h4 class="sectionText">Projects</h4> */}
   {/* </div>   */}
   {/* <hr class="featurette-divider" /> */}

   <div className="row featurette" >
     <div className="col-md-7 order-md-1 mt-2">
       <p className="lead">
       I'm a Web Developer with a number of years experience behind the keyboard.</p>
      <p className="lead">I have worked with everything from ColdFusion to React and so much in between. </p> 
      <p className="lead">On the personnel side I am a proud Navy Veteran and I fill my time with volunteer work in the Veteran community.</p>
     </div>
     <div className="col-md-5">
     <img src="/react_portfolio/Images/aboutMe.png" alt="aboutme"class="img-thumbnail"></img>
     </div>
   </div>

   {/* <hr className="featurette-divider" /> */}

   <div className="row featurette">
   <div className="col-md-5">
 
                <div
                  className="container p-3"
                  style={{ backgroundColor: "#FAF3DD" }}
                >
                  <form action="https://formspree.io/mknzkjeq" method="POST">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        I will never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label>Your message:</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info"
                      style={{ marginBottom: 10 }}
                    >
                      Submit
                    </button>
                    <div>
                      <a
                        href="https://github.com/KimberliTompkins"
                        class="list-group-item-action m-2 "
                        target="_blank"
                      >
                        <ion-icon name="logo-github"></ion-icon> Github
                      </a>
                      <a
                        href="https://www.linkedin.com/in/kimberli-tompkins-4a2443a5"
                        class="list-group-item-action "
                        target="_blank"
                      >
                        <ion-icon name="logo-linkedin"></ion-icon> Linkedin
                      </a>
                    </div>
                  </form>
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
