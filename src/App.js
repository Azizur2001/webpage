import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Contact from './components/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
export default App;
