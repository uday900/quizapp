import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from './pages/HomePage';
import NavBar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './components/Contact';
import QuizesPage from './pages/QuizesPage';
import TakeQuiz from './pages/TakeQuiz';
import SubmitPage from './pages/SubmitPage';
import InstructionPage from './pages/InstructionPage';
import CreateQuizesPage from './pages/CreateQuizesPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
function App() {

  return (
    <>
    <NavBar/>
    
    <Routes>
      <Route path='/' element = {<HomePage/>} >
      </Route>
      <Route path='*' element ={<div>not found page</div>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/quizzes' element = { <QuizesPage/>} />
      <Route path='/createquiz' element = {<CreateQuizesPage/>}/>
      <Route path='/quiz' element = {<TakeQuiz/>} />
      <Route path='/submit' element = {<SubmitPage/>} />
      <Route path='/instructions' element = {<InstructionPage/>} />
      <Route path = '/login' element = { <LoginPage/>} />
      <Route path='/signup' element = { <SignupPage/>} />
    </Routes>
   
    </>
  )
}

export default App
