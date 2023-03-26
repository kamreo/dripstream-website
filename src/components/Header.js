import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ toggleDarkMode, isDarkMode }) {
  const [showLinks, setShowLinks] = useState(false);

  function toggleLinks() {
    setShowLinks(!showLinks);
  }

  return (
    <header className={isDarkMode ? 'dark' : ''}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" onClick={toggleLinks}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <ScrollLink to="home" className="nav-link" smooth onClick={toggleLinks}>
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="company" className="nav-link" smooth onClick={toggleLinks}>
                Company
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="projects" className="nav-link" smooth onClick={toggleLinks}>
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="team" className="nav-link" smooth onClick={toggleLinks}>
                Team
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="contact" className="nav-link" smooth onClick={toggleLinks}>
                Contact
              </ScrollLink>
            </li>
          </ul>

          <button className="dark-mode-toggle btn btn-outline-dark" onClick={toggleDarkMode}>
            {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;