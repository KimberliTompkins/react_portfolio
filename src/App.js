import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio/index";
import Resume from "./components/pages/Resume/index";
import About from "./components/pages/About/index";
import Contact from "./components/Contact/index";
import Hero from "./components/Hero/index";
import Projects from "./components/Projects";
import Footer from "./components/Footer/index";

function App() {
  return (
    
    <Router>
      
      <div>
        <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Hero />
          <Projects />
          <Contact />
          <Footer />
        </Route>
        </Switch>
      </div>
     
    </Router>
    
  );
}

export default App;
