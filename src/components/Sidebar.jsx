import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ showMenu, setshowMenu }) {
    const handleMenu = () => { 
        setshowMenu(false); // Close the sidebar
    }

    return (
        <div className={`sidebar ${showMenu ? 'show' : ''}`}> {/* Ensure 'show' class is added based on state */}
            <ul className='navbar-nav me-auto d-flex mt-3 mt-lg-0'>
                <li className="nav-item mx-lg-1 mx-2" onClick={handleMenu}>
                    <i className="fa-solid fa-xmark fa-lg"></i>
                </li>
                <li className="nav-item mx-2 mx-lg-1" onClick={handleMenu}>
                    <Link to='/' className='nav-link'>
                        <i className="fas fa-home fa-lg mb-1"></i>
                        &nbsp;Home
                    </Link>
                </li>
                <li className="nav-item mx-2 mx-lg-1" onClick={handleMenu}>
                    <Link to='/quizzes' className='nav-link'>
                        <i className="fa-regular fa-note-sticky fa-lg mb-1"></i>
                        &nbsp;Quizzes
                    </Link>
                </li>
                <li className="nav-item mx-2 mx-lg-1" onClick={handleMenu}>
                    <Link to='/createquiz' className='nav-link'>
                        <i className="fa-solid fa-circle-plus fa-lg mb-1"></i>
                        &nbsp;Create quizzes
                    </Link>
                </li>
                <li className="nav-item mx-2 mx-lg-1" onClick={handleMenu}>
                    <Link to='/contact' className='nav-link'>
                        <i className="fa-solid fa-user fa-lg mb-1"></i>
                        &nbsp;Contact
                    </Link>
                </li>
            </ul>

            <Link to='/login' onClick={handleMenu}>
                <button className="btn btn-primary mx-3">Login</button>
            </Link>
            <Link to='/signup' onClick={handleMenu}>
                <button className="btn btn-primary">Signup</button>
            </Link>
        </div>
    );
}

export default Sidebar;
