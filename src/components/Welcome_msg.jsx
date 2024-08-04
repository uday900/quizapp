import React from 'react'
import NavBar from './Navbar'
import image from '../assets/image.png'
import { useNavigate } from 'react-router-dom'
function Welcome_msg() {
  const navigate = useNavigate()
  return <>

 <div className="home d-flex w-100 vh-100">
    <div className="home-left container">
        <div className="h1">
            Welcome to Quiz
        </div>
        <p>
            Quiz is a powerful quizzing <br />
            platform developed by Sivaji and Uday. 
        </p>
        <div className="btn btn-outline-dark"
          onClick={()=> navigate('/createquiz')}
        >Get Started</div>
    </div>

    <img src={image} alt="main image" />

  </div>
  </>
}

export default Welcome_msg