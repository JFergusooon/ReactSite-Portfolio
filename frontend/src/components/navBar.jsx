import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Left Title */}
      <p className="navbar-title">
        JFerguson-dev.com
      </p>

      {/* Hamburger (mobile only) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="navBarButton" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/projects" className="navBarButton" onClick={() => setMenuOpen(false)}>My Projects</Link>
        <Link to="/about" className="navBarButton" onClick={() => setMenuOpen(false)}>About Me</Link>
        <Link to="/contact" className="navBarButton" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/resume" className="navBarButton" onClick={() => setMenuOpen(false)}>Resume</Link>
      </div>

    </nav>
  );
}

export default NavBar;
