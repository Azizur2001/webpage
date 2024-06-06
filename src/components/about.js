import React from 'react';
import './about.css';
import profilePic from '../images/mypic.png';

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <div className="image-container">
          <div className="gold-box"></div>
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="about-content">
          <h1 className="about-title">Hello, I am Azizur</h1>
          <p className="about-description">
            A [your age]-year-old [location]-based software developer. I first started developing games using Unity3D,
            but soon realized I preferred web and mobile app development, and I've been building and working on that
            for the past [X] years now.<br /><br />
            Being self-taught made me appreciate education; thus, I'm studying [Your Major] simultaneously.
            Business and technology are both my passions.<br /><br />
            Aside from working hard, I tend to enjoy simple things like reading, petting cats, hitting the gym,
            and other things we humans do. If any of what I said seems interesting, then please do not hesitate to
            send me a message.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
