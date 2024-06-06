import React from 'react';
import './cube.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import pythonlogo from '../images/pythonlogo.png';
import java from '../images/java.png';

const Cube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="face front"><img src={logo1} alt="Logo 1" /></div>
        <div className="face back"><img src={logo2} alt="Logo 2" /></div>
        <div className="face left"><img src={logo3} alt="Logo 3" /></div>
        <div className="face right"><img src={logo4} alt="Logo 4" /></div>
        <div className="face top"><img src={pythonlogo} alt="Python" /></div>
        <div className="face bottom"><img src={java} alt="Logo 1" /></div> {/* Reused logo1 for the bottom face */}
      </div>
    </div>
  );
};

export default Cube;
