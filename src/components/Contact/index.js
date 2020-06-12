import React from "react";
import { HashLink as Link } from 'react-router-hash-link';


function Contact(props) {
  return (
    <div className="container-fluid m-10 p-10" id="contact">
    <div className="row">
    <hr class="featurette-divider" />
        <div className="col-md-12 ">
        <hr class="featurette-divider" />
        <div className="row" >
            <h4 className="sectionText">Contact</h4>
            <Link to="/#home" class="p-1 ml-1">Home</Link>
            <Link to="/#projects" class="p-1 ml-1">Projects</Link>
        </div>
        <hr class="featurette-divider" />
        </div>
        
    </div>
    <div className="row" >
        <div className="col-md-2" ></div>
        
        <section className="col-md-8" id="contactform"  >
            
            <div className="jumbotron jumbotron-fluid pb-30;" style={{backgroundColor:"#FAF3DD"}}>
            <h4 className="p-3">Let's Chat</h4>
                <div className="container p-3" style={{backgroundColor:"#FAF3DD"}}>
               
                    <form action="https://formspree.io/mknzkjeq" method="POST" >
                        <div className="form-group" >
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">I will never share your email with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label>Your message:</label>
                    
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="message" ></textarea>
                    
                        </div>
                    
                        <button type="submit" className="btn btn-primary" style={{marginBottom: 10}}>Submit</button>
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
        </section>   
        <div className="col-md-2" >
        </div>
          
    </div>
</div>
  );
}

export default Contact;
