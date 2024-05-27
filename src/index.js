import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navbar from './Navbar/navbar';
import Home from './Home/home';
import About from './about/about';
import Projects from './projects/projects';
import Skills from './skills/skills';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/skills' exact component={Skills} />
        </Switch>  
      </Router>
    </Navbar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
