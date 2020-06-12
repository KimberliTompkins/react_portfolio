import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="container-fluid m-10 p-10">
        <hr class="featurette-divider" />

        <h4 className="sectionText">Contact</h4>
        <hr class="featurette-divider" />
        <div className="row">
          <div className="col-md-12 ">
            <div className="row" style={{ backgroundColor: "#FAF3DD" }}>
              <div className="col-md-2"></div>
              <div
                className="jumbotron jumbotron-fluid pb-30;"
                style={{ backgroundColor: "#FAF3DD" }}
              >
                <h4 className="p-3">Let's Chat</h4>
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
                      className="btn btn-primary"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
