import React, { useContext, useState } from 'react'
import Create_new_quiz from '../components/Create_new_quiz'
import { quizData } from '../data'
import {Link} from "react-router-dom"
import {context} from '../ContextValues'
function QuizesPage() {
    const [create_quiz_popup, setcreate_quiz_popup] = useState(false)
    const {quiz, setquiz} = useContext(context);
    // console.log("workied")
    // console.log(quiz)
  return (
    <>
 {
    create_quiz_popup && <Create_new_quiz setcreate_quiz_popup = {setcreate_quiz_popup}/>
 }
  <div className="container">
    <div className="container mt-5">
        <div >
          <p>If you want to create new quiz &nbsp;
            <button className="btn btn-outline-success" 
              onClick={()=>setcreate_quiz_popup(true)}>
              Create new 
            </button>
          </p>
        </div>
    </div>

    <div className="container mt-5">

        <div className="h3 text-primary">Quizes avilable</div>

        {
            quizData.map((quizitem)=>{
              // console.log(quiz)
              // context.log()
                return <>
                    <div className="h6">{quizitem.quizName} 
                    <Link to = '/instructions' onClick={()=>setquiz(quizitem)}> Take this </Link>
                    </div>
                </>
            })
        }


    </div>

  </div>
  
    </>
  )
}

export default QuizesPage