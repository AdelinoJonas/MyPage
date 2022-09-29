import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Knowledge from "../Pages/Knowledges";

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" exact />
      <Route component={Projects} path="/projects" exact />
      <Route component={Knowledge} path="/knowledge" exact />
      <Route component={Contact} path="/contact" exact />
    </Switch>
  );
};

export default Routes;
