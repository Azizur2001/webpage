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
          As a senior at Queens College, I am poised to embark on an exciting journey as a software engineer. 
          With a strong desire to break through in this field, I am committed to honing my skills, gaining 
          hands-on experience, and developing expertise to make a meaningful impact. Seeking opportunities that 
          allow me to apply my knowledge and contribute to cutting-edge projects, I am driven by a passion for innovation and 
          continuous growth<br /><br />
          Looking ahead, my vision as a software engineer is to contribute to a dynamic company that fosters innovation and 
          encourages professional growth. I am eager to work diligently and committed to gaining comprehensive industry experience 
          and further enhance my skills. As I approach graduation from Queens College, I am actively seeking opportunities to apply 
          my knowledge and make a positive impact within a progressive organization.<br /><br />
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
