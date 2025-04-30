import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div className="app" style={appStyle}>
        {/* Sidebar Trigger Icon */}
        <i
          className="bi bi-list fs-3 text-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
          style={{ cursor: 'pointer', marginBottom: '1rem' }}
        ></i>

        {/* Sidebar */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="sidebar"
          aria-labelledby="sidebarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarLabel">Menu</h5>
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
              <li><Link className="nav-link" to="/about">About</Link></li>
              <li><Link className="nav-link" to="/projects">Projects</Link></li>
              <li><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div style={contentStyle}>
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
  marginLeft: '1rem',
};

export default App;