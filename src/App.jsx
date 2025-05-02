import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='*' element={<NotFound />} />
        </Routes>  
      </Router>
    </Navbar>
  );
}

export default App;
