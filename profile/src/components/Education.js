import React from 'react';

const cardStyle = {
  padding: '20px',
  margin: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
};

const Education = () => {
  return (
    <div style={cardStyle}>
      <h1>Education</h1>
      <ul>
        <li>Elementary</li>
        <p>San Isidro Elementary School</p>
        <li>High School</li>
        <p>Pulo National High School</p>
        <li>Senior High School</li>
        <p>Cabuyao Institute of Technology</p>
        <li>College (Current)</li>
        <p>Pamantasan ng Cabuayo (3rd year BSIT)</p>
      </ul>
    </div>
  );
};

export default Education;