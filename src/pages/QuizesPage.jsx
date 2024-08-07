import React, { useContext, useState } from 'react'
import Create_new_quiz from '../components/Create_new_quiz'
// import { quizData } from '../data'
import {Link} from "react-router-dom"
import { quizDataContext } from '../ContextValues'


function QuizesPage() {
    const [create_quiz_popup, setcreate_quiz_popup] = useState(false)
    const {quizData, setquizData, activeQuiz, setactiveQuiz} = useContext(quizDataContext);
    
    console.log("list of quizes", quizData)
  return (
    <>

  <div className="container">
    <div className="container mt-5">

        <div className="h3 text-primary text-center mb-5">Quizes avilable</div>
        <div className="container d-flex gap-5 justify-content-start flex-wrap">
        {
            quizData.map((quizitem, index)=>{
                return <div key={index} className="p-3 rounded shadow border"  
                  style={{width: "200px", height : "200px"}}
                >
                  <div className="h5 ">
                    {quizitem.quizName}
                  </div>
                  <div>
                    <p>Duration : {quizitem.duration} min </p>
                    <p>No.of questions : {quizitem.questions.length}</p>
                    <p>
                      <Link to = '/instructions' onClick={()=>setactiveQuiz(quizitem)}> Take this quiz </Link>
                    </p>
                  </div>
                </div>
               
            })
        }
        </div>
        


    </div>

  </div>
  
    </>
  )
}

export default QuizesPage