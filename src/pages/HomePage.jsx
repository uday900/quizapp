import React from 'react'
import image from '../assets/image.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
function HomePage() {
  const navigate = useNavigate()
  return <>
 <div className="home d-flex w-100 vh-100">

    <div className="home-left container">
        <div>
        <div className="h1">
            Welcome to Quiz..
        </div>
        <p>
            Quiz is a powerful quizzing <br />
            platform developed by Uday darla. 
        </p>
        <div className="social-icons mb-3">
          <a href="https://www.linkedin.com/in/darla-uday-kiran-18a450239" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.youtube.com" target="_blank"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="btn btn-primary"
          onClick={()=> navigate('/quizzes')}
        >Get Started</div>
        </div>
    </div>

    <img src={image} alt="main image" />

</div>
  <Footer/>
  </>
}

export default HomePage