import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import the custom CSS
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [is_active, set_is_active] = useState();

  const location = useLocation();
  const path = location.pathname === '/quiz' || location.pathname === '/submit' ||
                location.pathname ==='/instructions';

  return (
    <nav className={`navbar navbar-expand-lg px-4 border align-items-center ${path && 'd-none'}`}>
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

      <div 
        className="list-items d-flex"
          style={{listStyle : "none", alignContent : "center", alignItems :"center"}}
        >
        {/* <ul className="d-flex text-center border"
          style={{listStyle: "none", alignItems: "center", height : "100%"}}> */}
          <li className="nav-item">
            <Link to ='/'
              className='nav-link'
              // className={`nav-link ${is_active ? 'active-link' : ''}`}
              // onClick={() => set_is_active(true)}
            >
              <i class="fa-solid fa-house"></i>&nbsp;
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/quizzes'
              className= 'nav-link'
              // onClick={() => set_is_active(true)}
            >
              Quizzes
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/createquiz'
              className= 'nav-link'
              // onClick={() => set_is_active(true)}
            >
              Create quiz
            </Link>
          </li>

          <li className="nav-item">
            <Link to ='/contact'
              className= 'nav-link'
              // onClick={() => set_is_active(true)}
            >
              <i class="fa-solid fa-user"></i>&nbsp;
              Contact
            </Link>
          </li>
        {/* </ul> */}
        
      </div>

      <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <Link to = '/login' >
            <button className="btn btn-primary">Login</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to = '/signup' >
            <button className="btn btn-primary">Signup</button>
            </Link>
          </li>
        </ul>
    </nav>
  );
};

export default NavBar;
