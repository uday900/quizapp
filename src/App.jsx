import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from './pages/Home';
import NavBar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Create_quiz from './components/create_quiz';
import Welcome_msg from './components/Welcome_msg';
import Contact from './components/Contact';
import QuizesPage from './pages/QuizesPage';
import TakeQuiz from './pages/TakeQuiz';
import SubmitPage from './pages/SubmitPage';
import InstructionPage from './pages/InstructionPage';
function App() {

  return (
    <>
    <NavBar/>
    
    <Routes>
      <Route path='/' element = {<Welcome_msg/>} >
      </Route>
      <Route path='*' element ={<div>not found page</div>} />

      <Route path='/contact' element = {<Contact/>} />
      <Route path='/createquiz' element = {<QuizesPage/>}/>
      <Route path='/quiz' element = {<TakeQuiz/>} />
      <Route path='/submit' element = {<SubmitPage/>} />
      <Route path='/instructions' element = {<InstructionPage/>} />
        
      
    </Routes>
   
    </>
  )
}

export default App
