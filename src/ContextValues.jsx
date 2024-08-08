import React, { createContext, useState } from 'react'
import Data from './data';
export const quizDataContext = createContext();
function ContextValues({children}) {
    const [quizData, setquizData] = useState(Data)
    const [activeQuiz, setactiveQuiz] = useState(null);
    const [currentQuizScore, setcurrentQuizScore] = useState(0)
    const [users, setusers] = useState([
      {
        userName: "",
        userMail: "",
        userPassword: "",
        favourites: []
      }
    ])
  return (
    <>
    <quizDataContext.Provider value = {{
      quizData,
      users,
      setusers,
      currentQuizScore, 
      setcurrentQuizScore,
       setquizData, activeQuiz, setactiveQuiz}} >
        {children}
    </quizDataContext.Provider>

    </>
  )
}

export default ContextValues