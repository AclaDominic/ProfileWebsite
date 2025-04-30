import React from 'react';
 
const Skills = () => {
  return (
 
    <div style={cardStyle}>
      <h1>Projects</h1>
      <ul>
        <li>Project Management System (PMS)</li>
        <p>Project management system used to track projects and the task within the projects</p>
        <p><strong>Technologies used:</strong> React.js, Laravel, MySQL</p>
        <li>E-commerce (Website)</li>
        <p>E-commerce website for selling products online</p>
        <p><strong>Technologies used:</strong> React.js, Laravel, MySQL</p>
        
      </ul>
    </div>
  );
 
};
 
 
const cardStyle = {
  backgroundColor: '#f9f9f9',
  padding: '2rem', 
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
 
};
 
 
 
export default Skills;
 