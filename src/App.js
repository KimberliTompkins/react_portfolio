import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio/index";
import Resume from "./components/pages/Resume/index";
import About from "./components/pages/About/index";
import Contact from "./components/pages/Contact/index";
import Hero from "./components/Hero/index";

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
          <Portfolio />
        </Route>
        </Switch>
      </div>
     
    </Router>
    
  );
}

export default App;
