import React from 'react';
import { Link } from 'react-router-dom';

const Project_2 = () => {
  return (
    <div className="project-page">
      <div className="project-content">
        <header className="showcase-header">
          <h1>Box Generator</h1>
        </header>

        <section className="project-details">
          <h2>Interactive Box Generator Application</h2>
          <p className="project-description">
            A React application that allows users to generate and customize boxes with different colors and sizes.
          </p>
          
          <div className="tech-stack">
            <h3>Technologies Used:</h3>
            <ul>
              <li>React.js, Vite</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/fuentesmichael1/BoxGenerator" target="_blank" rel="noopener noreferrer">
              Raw Code
            </a>
          </div>
          
          <Link to="/" className="back-link">Back to Portfolio</Link>
        </section>
      </div>
    </div>
  );
};

export default Project_2;
