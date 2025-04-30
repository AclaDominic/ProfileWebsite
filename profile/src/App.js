import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Bootstrap triggers events when the sidebar opens or closes
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.addEventListener('shown.bs.offcanvas', () => setIsSidebarOpen(true));
    sidebarElement.addEventListener('hidden.bs.offcanvas', () => setIsSidebarOpen(false));

    return () => {
      sidebarElement.removeEventListener('shown.bs.offcanvas', () => setIsSidebarOpen(true));
      sidebarElement.removeEventListener('hidden.bs.offcanvas', () => setIsSidebarOpen(false));
    };
  }, []);

  return (
    <Router>
      <div className="app" style={appStyle}>
        <i
          className="bi bi-list fs-3 text-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
          style={{ cursor: 'pointer', marginBottom: '1rem' }}
        ></i>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="sidebar"
          aria-labelledby="sidebarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarLabel">Navigation</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/about">About Me</Link></li>
              <li><Link className="nav-link" to="/projects">Projects</Link></li>
              <li><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ ...contentStyle, marginLeft: isSidebarOpen ? '250px' : '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const appStyle = {
  backgroundColor: '#e6f2e6',
  minHeight: '100vh',
  padding: '2rem',
};

const contentStyle = {
  transition: 'margin-left 0.3s ease',
};

export default App;
