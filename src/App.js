import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FiHome, FiUsers, FiCalendar, FiCrosshair } from 'react-icons/fi';
import Home from './pages/Home';
import Scanning from './pages/Scanning';
import Team from './pages/Team';
import Plan from './pages/Plan';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-content">
            <span className="brand">Innovation Wing digital twin</span>
            
            <div className="nav-items">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FiHome className="icon" />
                Homepage
              </NavLink>
              <NavLink 
                to="/scanning"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FiCrosshair className="icon" />
                Scanning Progress
              </NavLink>
              <NavLink 
                to="/team"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FiUsers className="icon" />
                Team members
              </NavLink>
              <NavLink 
                to="/plan"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FiCalendar className="icon" />
                Plan
              </NavLink>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanning" element={<Scanning />} />
            <Route path="/team" element={<Team />} />
            <Route path="/plan" element={<Plan />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} 数字孪生实验室. 版权所有</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;