import React from 'react';
import './skills.css'; // Make sure this file has the appropriate styles
import javaScriptLogo from '../images/logo3.png';
import javaLogo from '../images/java.png';
import pythonLogo from '../images/pythonlogo.png';
import reactLogo from '../images/react.png';
import materialUILogo from '../images/MaterialUI.png';
import htmlLogo from '../images/html5.png'; // Replace with actual filename
import cssLogo from '../images/css.png'; // Replace with actual filename
import mongoDBLogo from '../images/MongoDB.png'; // Replace with actual filename
// import cPlusPlusLogo from '../images/CPlusPlus.png'; // Replace with actual filename
import nodeLogo from '../images/node.png';
import sqlLogo from '../images/sql.png';
import firebaseLogo from '../images/firebase.png';
import gitLogo from '../images/Git.png';


const skillsData = [
  { name: 'JavaScript', logo: javaScriptLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Material UI', logo: materialUILogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'MongoDB', logo: mongoDBLogo },
  { name: 'Node', logo: nodeLogo },
  { name: 'SQL', logo: sqlLogo },
  { name: 'Firebase', logo: firebaseLogo },
  { name: 'GIT', logo: gitLogo },



];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;





// import React from 'react';
// import './skills.css';

// const skillsData = [
//   { name: 'JavaScript', icon: '✔️' },
//   { name: 'React', icon: '✔️' },
//   { name: 'Next.js', icon: '✔️' },
//   { name: 'Node', icon: '✔️' },
//   { name: 'Java', icon: '✔️' },
//   { name: 'Material UI', icon: '✔️' },
//   { name: 'HTML', icon: '✔️' },
//   { name: 'CSS', icon: '✔️' },
//   { name: 'Python', icon: '✔️' },
//   { name: 'Java', icon: '✔️' },
//   { name: 'C++', icon: '✔️' },
//   { name: 'MongoDB', icon: '✔️' }
// ];

// const Skills = () => {
//   return (
//     <div className="skills-section">
//       <h2>Skills</h2>
//       <div className="skills-grid">
//         {skillsData.map((skill, index) => (
//           <div key={index} className="skill-card">
//             <span className="skill-icon">{skill.icon}</span>
//             <span className="skill-name">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
