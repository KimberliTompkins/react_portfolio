import React from "react";

function Portfolio() {
  return (
    <div classNameName="container m-25 p-10">
    <div className="row">
        <div className="col-md-12 headliner">

            <h1>My Portfolio</h1>

        </div>
    </div>
    <div className="row">
        <div className="col-md-2>"></div>
        <div className="col-md-8">
            <section className="jumbotron pinkbg" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-10 p-10">
                            <div className="card" >
                                <a href="https://kimberlitompkins.github.io/BoozyFood/"><img src="images/BFLogo.PNG"
                                    className="card-img-top" alt="BoozyFood" /></a>
                                <div className="card-body" >
                                    <p className="card-text" >Boozy Food</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 m-10 p-10">
                            <div className="card" >
                                <a href=" https://kimberlitompkins.github.io/passwordGenerator_HW/"><img
                                        src="images/password.jpg" className="card-img-top" alt="password generator" /></a>
                                <div className="card-body" >
                                    <p className="card-text" >Password Generator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 m-10 p-10">

                            <div className="card" >
                                <a href="https://kimberlitompkins.github.io/quiz_HW/"><img
                                    src="images/question.jfif" className="card-img-top" alt="quiz" /></a>
                                <div className="card-body" >
                                    <p className="card-text" >jQuery Quiz</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 m-10 p-10">
                            <div className="card" >
                                <a href="https://damp-crag-35905.herokuapp.com/"><img
                                    src="images/Trail_finder.PNG" className="card-img-top" alt="trail" /></a>
                                <div className="card-body" >
                                    <p className="card-text" >Colorado Trail Master</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 m-10 p-10">
                            <div className="card" >
                                <a href="https://salty-springs-58678.herokuapp.com/"><img
                                    src="images/bacon-burger.png" className="card-img-top" alt="quiz"/></a>
                                <div className="card-body" >
                                    <p className="card-text" >Eat-Da_Burger</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 m-10 p-10">
                            <div className="card" >
                                <a href="https://afternoon-bastion-86378.herokuapp.com/"><img
                                    src="images/notetaker.jpg" className="card-img-top" alt="trail" /></a>
                                <div className="card-body" >
                                    <p className="card-text" >Note Taker</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="col-md-2"></div>
    </div>
</div>

  );
}

export default Portfolio;
