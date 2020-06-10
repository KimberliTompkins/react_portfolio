import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./components/pages/Portfolio/index";
import Resume from "./components/Resume/index";
import About from "./components/pages/About/index";
import Contact from "./components/pages/Contact/index";
import Hero from "./components/Hero/index";
import Projects from "./components/Projects/index";
// import * as Scroll from 'react-scroll';
// import { Proje as scroll} from 'react-scroll'

function App() {
  return (
    
    <Router>
      
      <div>
        <Switch>
        <Route exact path="/projects">
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
        </Route>
        </Switch>
      </div>
     
    </Router>
    
  );
}

export default App;
