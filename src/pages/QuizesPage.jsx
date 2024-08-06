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
 {/* {
    create_quiz_popup && <Create_new_quiz setcreate_quiz_popup = {setcreate_quiz_popup}/>
 } */}
  <div className="container">
    {/* <div className="container mt-5">
        <div >
          <p>If you want to create new quiz &nbsp;
            <button className="btn btn-outline-success" 
              onClick={()=>setcreate_quiz_popup(true)}>
              Create new 
            </button>
          </p>
        </div>
    </div> */}

    <div className="container mt-5">

        <div className="h3 text-primary text-center mb-5">Quizes avilable</div>
        <div className="container d-flex gap-5 justify-content-start flex-wrap">
        {
            quizData.map((quizitem)=>{
              // console.log(quiz)
              // context.log()
                return <>
                <div className="p-3 rounded shadow border"  
                  style={{width: "200px", height : "200px"}}
                >
                  <div className="h5 ">
                    {quizitem.quizName}
                  </div>
                  <div>
                    <p>Duration : {quizitem.duration} min </p>
                    <p>No.of questions : {quizitem.questions.length}</p>
                    <p>
                      <Link to = '/instructions' onClick={()=>setquiz(quizitem)}> Take this quiz </Link>
                    </p>
                  </div>
                </div>
                </>
            })
        }
        </div>
        


    </div>

  </div>
  
    </>
  )
}

export default QuizesPage