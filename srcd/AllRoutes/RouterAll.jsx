import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

const Routes = () => {

  return(
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" />
      <Route component={Projects} path="/projects" />
      <Route component={Contact} path="/contact" />
    </Switch>
  )
}

export default Routes;