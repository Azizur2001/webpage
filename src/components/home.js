import React from 'react';
import Cube from './cube'; // Ensure the path is correct

const Home = () => {
  return (
    <div id="home" className="section section-padding-top home-section">
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <Cube />
    </div>
  );
};

export default Home;
