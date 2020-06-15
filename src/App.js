import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./components/pages/Resume/index";
import Hero from "./components/Hero/index";
import Projects from "./components/Projects";
import Footer from "./components/Footer/index";
import Contact from "./components/Contact/index";
import NavTabs from "./components/NavTabs/index";

function App() {
  return (
    
    <Router>
      
      <div>
        <Switch>
        <Route exact path="/Projects">
          <NavTabs />
          <Projects />
          <Footer />
        </Route>
        <Route exact path="/Resume">
          
          <Resume />
          <Footer />
        </Route>
        <Route exact path="/Contact">
           <NavTabs />
           <Contact />
           <Footer />
        </Route>
        <Route path="/">
          <NavTabs />
          <Hero />
          <Footer />
        </Route>
        </Switch>
      </div>
     
    </Router>
    
  );
}

export default App;
