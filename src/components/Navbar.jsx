import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import the custom CSS
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isQuizzesActive, setIsQuizzesActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const handleLinkClick = (activeLink) => {
    setIsHomeActive(activeLink === 'home');
    setIsQuizzesActive(activeLink === 'quizzes');
    setIsContactActive(activeLink === 'contact');
  };

  const location = useLocation();
  const path = location.pathname === '/quiz' || location.pathname === '/submit' ||
                location.pathname ==='/instructions';

  return (
    <nav className={`navbar navbar-expand-lg px-4 border ${path && 'd-none'}`}>
      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="/">
        <i
          className="fas fa-cubes fa-2x me-3"
          style={{ color: '#ff6219' }}
                  ></i>
               </a>
        <div
          className="vr mx-3"
          style={{
            height: '40px',
            width: '1px',
            backgroundColor: '#000',
          }}
        ></div>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to ='/'
              className={`nav-link ${isHomeActive ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/createquiz'
              className={`nav-link ${isQuizzesActive ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('quizzes')}
            >
              Quizzes
            </Link>
          </li>
          <li className="nav-item">
            <Link to ='/contact'
              className={`nav-link ${isContactActive ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="btn btn-primary">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
