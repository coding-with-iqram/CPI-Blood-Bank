import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // CSS ফাইল
import InstallPrompt from './InstallPrompt';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // menu open বা বন্ধ

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
  <nav className="navbar">
    <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
      🩸 Blood Bank
    </Link>

    <div className="menu-icon" onClick={toggleMenu}>
      &#9776; {/* ☰ */}
    </div>

    <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/register" onClick={() => setMenuOpen(false)}>Register Donor</Link>
      <Link to="/find" onClick={() => setMenuOpen(false)}>Search Donor</Link>
      <Link to="/list" onClick={() => setMenuOpen(false)}>Donor List</Link>
      <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <InstallPrompt></InstallPrompt>
      </div>
    </div>
  </nav>
);

};

export default Header;
