import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './Navbar/navbar';
import About from './about/about';
import Projects from './projects/projects';
import Skills from './skills/skills';
import Home from './Home/home';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Navbar>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/skills' exact component={Skills} />
          <Route component={NotFound} />
        </Switch>  
      </Router>
    </Navbar>
  );
}

export default App;