import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./components/pages/Resume/index";
import Hero from "./components/Hero/index";
import Projects from "./components/Projects";
import Footer from "./components/Footer/index";
import Contact from "./components/Contact/index";


function App() {
  return (
    <Router>
      <Route path="/">
        <Hero />
        <Contact />
        <Projects />
        <Footer />
      </Route>
    </Router>
  );
}

export default App;
