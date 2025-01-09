import React from 'react';
import { Link } from 'react-router-dom';

const Project_1 = () => {
  return (
    <div className="project-page">
      <div className="project-content">
        <header className="showcase-header">
          <h1>To-Do List App</h1>
        </header>

        <section className="project-details">
          <h2>React To Do List Application</h2>
          <p className="project-description">
            A dynamic to-do list application built with React.
          </p>
          
          <div className="tech-stack">
            <h3>Technologies Used:</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/fuentesmichael1/ToDoList" target="_blank" rel="noopener noreferrer">
              Raw Code
            </a>
          </div>
          
          <Link to="/" className="back-link">Back to Portfolio</Link>
        </section>
      </div>
    </div>
  );
};

export default Project_1;
