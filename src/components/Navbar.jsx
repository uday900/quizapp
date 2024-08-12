import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import the custom CSS
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import logimage from '../assets/website_logo.jpeg'

const NavBar = () => {
  const [is_active, set_is_active] = useState();
  const [showMenu, setshowMenu] = useState(false)
  const [is_search_active, setis_search_active] = useState(false)

  const location = useLocation();
  const path = location.pathname === '/quiz' || location.pathname === '/submit' ||
                location.pathname ==='/instructions';
  
  return (
    <nav className={`navbar navbar-expand-lg px-4 border navbar-light bg-light ${path && 'd-none'}`}>
    
        
      {showMenu && <Sidebar showMenu = {showMenu} setshowMenu={ setshowMenu}/>}
      <div className="navbar-brand">
        <a className="navbar-brand" href="/">
            <img src={logimage} alt="website logo" 
              className='logo-image'/>
        </a>
      </div>
       
      <div className="display-on-tablet navbar-nav">
        <form class="d-flex flex-row">
          <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
          <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
            Search
          </button>

          <Link to = '/login' >
              <button className="login btn btn-primary mx-3">Login</button>
              </Link>
          <Link to = '/signup' >
              <button className="signup btn btn-primary">Signup</button>
              </Link>
        </form>
      </div>
      <div >
        <div className="display-on-mobile " >
        {/* <form class=""> */}

        
         {is_search_active &&  <div className="search-box">
            <input type="text" 
            class="form-control w-auto search-input" 
            placeholder="Search"  />      
          </div>
        }
          <button class="btn" type="button" 
            onClick={()=>setis_search_active(is_search_active ? false : true)}>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        
         

        {/* </form> */}
      </div>

      {/* menu symbol------------ */}
            <button
            className='menu-btn p-0 navbar-toggler'
            onClick={()=>setshowMenu(true)}
          // className="navbar-toggler"
          // type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#collapse-one"
          // aria-controls="collapse-one"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <i className="navbar-toggler-icon"></i>
        </button>
        </div>


      {/* collapse navbar-collapse */}
      <div className="collapse navbar-collapse " id = "collapse-one">
        <ul className='navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0' >
        <li class="nav-item text-center mx-2 mx-lg-1">
          <Link to ='/' className='nav-link'>
            <div>
              <i class="fas fa-home fa-lg mb-1"></i>
            </div>
            Home
          </Link>
        </li>

        <li class="nav-item text-center mx-2 mx-lg-1">
          <Link to ='/quizzes' className='nav-link'>
            <div>
            <i class="fa-regular fa-note-sticky fa-lg mb-1"></i>            </div>
            Quizes
          </Link>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <Link to ='/createquiz' className='nav-link'>
            <div>
            <i class="fa-solid fa-circle-plus fa-lg mb-1"></i>            </div>
            Create quizzes
          </Link>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <Link to ='/contact' className='nav-link'>
            <div>
            <i class="fa-solid fa-user fa-lg mb-1"></i>
                        </div>
            Contact
          </Link>
        </li>
       
        </ul>

        {/* <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <a class="nav-link" href="#!">
            <div>
              <i class="fas fa-bell fa-lg mb-1"></i>
              <span class="badge rounded-pill badge-notification bg-info">11</span>
            </div>
            Messages
          </a>
        </li>
        </ul> */}

        <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
        <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
          Search
        </button>

        <Link to = '/login' >
            <button className="btn btn-primary mx-3">Login</button>
            </Link>
        <Link to = '/signup' >
            <button className="btn btn-primary">Signup</button>
            </Link>
      </form>

      </div>
          
      
    </nav>
  );
};

export default NavBar;
