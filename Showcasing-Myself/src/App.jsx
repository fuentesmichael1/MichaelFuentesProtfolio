import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Showcase from './components/Showcase';
import Project_1 from './components/Project_1';
import Project_2 from './components/Project_2';
import Project_3 from './components/Project_3';
import Project_4 from './components/Project_4';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/project1" element={<Project_1 />} />
          <Route path="/project2" element={<Project_2 />} />
          <Route path="/project3" element={<Project_3 />} />
          <Route path="/project4" element={<Project_4 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
