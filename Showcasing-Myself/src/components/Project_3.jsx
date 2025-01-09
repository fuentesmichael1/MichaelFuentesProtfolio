import React from 'react';
import { Link } from 'react-router-dom';

const Project_3 = () => {
  return (
    <div className="project-page">
      <div className="project-content">
        <header className="showcase-header">
          <h1>Counter App</h1>
        </header>

        <section className="project-details">
          <h2>Interactive Counter Application</h2>
          <p className="project-description">
            A simple yet effective counter application built with Python.
          </p>
          
          <div className="tech-stack">
            <h3>Technologies Used:</h3>
            <ul>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/fuentesmichael1/Counter" target="_blank" rel="noopener noreferrer">
              Raw Code
            </a>
          </div>
          
          <Link to="/" className="back-link">Back to Portfolio</Link>
        </section>
      </div>
    </div>
  );
};

export default Project_3;
