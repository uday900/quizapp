import React, { createContext, useState } from 'react'
import Data from './data';
export const quizDataContext = createContext();
function ContextValues({children}) {
    const [quizData, setquizData] = useState(Data)
    const [activeQuiz, setactiveQuiz] = useState(null);
    const [quizScore, setquizScore] = useState(0)
  return (
    <>
    <quizDataContext.Provider value = {{quizData,
        quizScore , setquizScore,
       setquizData, activeQuiz, setactiveQuiz}} >
        {children}
    </quizDataContext.Provider>

    </>
  )
}

export default ContextValues