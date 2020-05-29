import React from "react";


function Contact(props) {
  return (
    <div className="container m-10 p-10">
    <div className="row">
        <div className="col-md-12 headliner">
            <h1>Let's Chat</h1>
        </div>
    </div>
    <div className="row" >
        <div className="col-md-2" ></div>
        <section className="col-md-8" id="contactform" >
            <div className="jumbotron jumbotron-fluid pb-30; pinkbg" >
                <div className="container" >
                    <form action="https://formspree.io/mknzkjeq" method="POST" >
                        <div className="form-group" >
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label>Your message:</label>
                    
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="message" ></textarea>
                    
                        </div>
                    
                        <button type="submit" className="btn btn-primary" style={{marginBottom: 10}}>Submit</button>
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
