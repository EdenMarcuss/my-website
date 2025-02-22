import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Scanning from './pages/Scanning';
import Team from './pages/Team';
import Plan from './pages/Plan';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/scanning">Scanning</Link> | 
        <Link to="/team">Team</Link> | 
        <Link to="/plan">Plan</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scanning" element={<Scanning />} />
        <Route path="/team" element={<Team />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </Router>
  );
}

export default App;