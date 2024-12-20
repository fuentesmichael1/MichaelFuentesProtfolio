import React from 'react';
import { Link } from 'react-router-dom';

const Project_4 = () => {
  return (
    <div className="project-page">
      <div className="project-content">
        <header className="showcase-header">
          <h1>Changing Ages</h1>
        </header>

        <section className="project-details">
          <h2>Click to change the ages</h2>
          <p className="project-description">
            A very simple app that lets you change the age of a person.
          </p>
          
          <div className="tech-stack">
            <h3>Technologies Used:</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://your-website-url.com" target="_blank" rel="noopener noreferrer">
              Website
            </a>
            <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </div>
          
          <Link to="/" className="back-link">Back to Portfolio</Link>
        </section>
      </div>
    </div>
  );
};

export default Project_4;