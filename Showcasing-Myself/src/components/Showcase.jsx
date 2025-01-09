import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useForm, ValidationError } from '@formspree/react';
import { MdLocationOn } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

// Import skill icons
import htmlIcon from '/src/assets/icons/html.png';
import cssIcon from '/src/assets/icons/css.png';
import jsIcon from '/src/assets/icons/javascript.jpg';
import reactIcon from '/src/assets/icons/react.png';
import nodeIcon from '/src/assets/icons/node.png';
import pythonIcon from '/src/assets/icons/python.jpg';
import mysqlIcon from '/src/assets/icons/mysql.png';
import mongodbIcon from '/src/assets/icons/mongodb.png';
import flaskIcon from '/src/assets/icons/flask.png';

// Import top pictures
import familyPic from '../assets/top_pics/family.jpeg';
import mePic from '../assets/top_pics/me.jpeg';
import friendsPic from '../assets/top_pics/friends.jpeg';

// Import project images
import todoList from '/src/assets/images/To-do-list.png';
import boxGenerator from '/src/assets/images/Box-Generator.png';
import counter from '/src/assets/images/counter.png';
import puttingItTogether from '/src/assets/images/PuttingItTogether.png';

// Import certificate
import certificatePdf from '/src/assets/certificates/file.pdf';

// Contact Form
const ContactForm = () => {
  const [state, handleSubmit] = useForm('xldekzyg');

  if (state.succeeded) {
    return <p className="success-message">Thank You For Emailing!</p>;
  }

  return (
    <div className='contact-div'>
      <div className='contact-title-div'>
        <h1>Contact Me</h1>
        <h3>Please leave your Name, Email, and a brief message. I look forward to hearing from you!</h3>
        <p className='contact-location'><MdLocationOn />St. Louis, MO</p>
        <a href='tel:+13142188818' className='contact-number'>
          <FiPhoneCall className='contact-icon' /> +1(314) 749-8811
        </a>
        <a href='mailto:michaelfuentes159@gmail.com' className='contact-email'>
          <AiOutlineMail className='contact-icon' /> michaelfuentes159@gmail.com
        </a>
      </div>

      <div className='contact-form-div'>
        <form onSubmit={handleSubmit} className='form'>
          <label className='contact-label'>Your Name</label>
          <input
            id='name'
            type='name'
            name='name'
            placeholder='Enter Name'
          />
          <ValidationError prefix='Name' field='name' errors={state.errors} />

          <label className='contact-label'>Email Address</label>
          <input 
            id='email'
            type='email'
            name='email'
            placeholder='Enter Email'
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />

          <label className='contact-label'>Message</label>  
          <textarea
            id='message'
            rows='3'
            name='message'
          />
          <ValidationError prefix='Message' field='message' errors={state.errors} />

          <div className='button-div'>
            <button className='contact-button' type='submit' disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Skills Links
const skills = [
  { 
    name: 'HTML', 
    icon: htmlIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  { 
    name: 'CSS', 
    icon: cssIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  { 
    name: 'JavaScript', 
    icon: jsIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  { 
    name: 'React', 
    icon: reactIcon,
    url: 'https://reactjs.org/'
  },
  { 
    name: 'Node.js', 
    icon: nodeIcon,
    url: 'https://nodejs.org/'
  },
  { 
    name: 'Python', 
    icon: pythonIcon,
    url: 'https://www.python.org/'
  },
  { 
    name: 'MySQL', 
    icon: mysqlIcon,
    url: 'https://www.mysql.com/'
  },
  { 
    name: 'MongoDB', 
    icon: mongodbIcon,
    url: 'https://www.mongodb.com/'
  },
  { 
    name: 'Flask', 
    icon: flaskIcon,
    url: 'https://flask.palletsprojects.com/'
  },
];

// Projects Links & Pictures
const projects = [
  {
    title: "Project 1",
    image: todoList,
    path: "/project1",
    description: "A simple to-do list app.",
  },
  {
    title: "Project 2",
    image: boxGenerator,
    path: "/project2",
    description: "An interactive box generator app.",
  },
  {
    title: "Project 3",
    image: counter,
    path: "/project3",
    description: "A app that counts.",
  },
  {
    title: "Project 4",
    image: puttingItTogether,
    path: "/project4",
    description: "A simple and interactive app that lets you change the age of a person.",
  }
];

const Showcase = () => {
  return (
    <div className="page-container">
      <Nav />
      <div className="showcase-container">
        <header className="showcase-header">
          <h1>Welcome to My Portfolio</h1>
        </header>

        <section className="circles-section">
          <div className="circle-container">
            <div className="circle">
              <div className="circle-image">
                <img src={familyPic} alt="Family" />
              </div>
              <p>Family</p>
            </div>
            <div className="circle">
              <div className="circle-image">
                <img src={mePic} alt="Me" />
              </div>
              <p>Me</p>
            </div>
            <div className="circle">
              <div className="circle-image">
                <img src={friendsPic} alt="Friends" />
              </div>
              <p>Friends</p>
            </div>
          </div>
        </section>

        <main className="showcase-main">
          <div className="content-wrapper">
            <section id="about" className="about-section">
              <h2>About Me</h2>
              <p>
                Hello, I'm Michael Fuentes, a passionate full stack software engineer with skills in HTML, CSS, JavaScript, React, Python and others.
                I have 4 siblings and I am smack dab in the middle of them. I graduated from Coding Dojo in November of 2024,
                I am currently live in O'Fallon MO, and I am doing solo and group projects to further my knowledge and harden my skills.
              </p>
            </section>
            <section id="links" className='links'>
              <h2>Links</h2>
              <a href='http://www.linkedin.com/in/fuentesmichael159' target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href='https://github.com/fuentesmichael1' target="_blank" rel="noopener noreferrer">GitHub</a>
              <a 
                href="https://docs.google.com/document/d/1U7rRKHJu4Y3zKUPgl8eO8jbnbOBKLtioqnRZMoS-hlg/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </section>
            <section id="skills" className="skills-section">
              <h2>Skills</h2>
              <p>Here are some of the technologies and tools I'm proficient in:</p>
              <p>Click on a skill to learn more about it.</p>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <a 
                    key={index} 
                    href={skill.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="skill-item"
                  >
                    <img src={skill.icon} alt={skill.name} />
                    <p>{skill.name}</p>
                  </a>
                ))}
              </div>
            </section>

            <section id="projects" className="projects-section">
              <h2>My Projects</h2>
              <p>Click on a project to learn more about it.</p>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <Link to={project.path} key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section id="certificates" className="certificates-section">
              <h2>Certificate</h2>
              <div className="certificates-container">
                <a 
                  href={certificatePdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="certificate-link"
                >
                  View Certificate
                </a>
              </div>
            </section>

            <section id="contact" className="contact-section">
              <ContactForm />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Showcase;
