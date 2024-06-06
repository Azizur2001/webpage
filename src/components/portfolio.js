import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio" className="section section-padding-top">
      <h1>My Portfolio</h1>
      <div className="projects">
        <div className="project">
          <h2>Project One</h2>
          <p>Description of project one.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h2>Project Two</h2>
          <p>Description of project two.</p>
          <a href="#">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
