import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewQuestion from '../components/NewQuestion'

function CreateQuizesPage() {
  const navigate = useNavigate()
  const [qno, setqno] = useState(1)
  const [new_question_popup, setnew_question_popup] = useState(false)
  const [questions_arr, setquestions_arr] = useState([
    {
      question_name: "What is the capital of France?",
      option1: "Paris",
      option2: "London",
      option3: "Berlin",
      option4: "Madrid",
      answer: "Paris",
      type: "normal",
  }
  ,
  {
      question_name: "Which of the following is a programming language?",
      option1: "Python",
      option2: "HTML",
      option3: "CSS",
      option4: "Photoshop",
      answer: "Python",
      type: "multiple choice",
  }
  
  ])
  // console.log(questions_arr)
  
  return (
    <div className='container'>

      <div className="form-group">
        <div className="form-label">
          Name of the quiz
        </div>
        <input type="text" name="" 
          placeholder = "enter the quiz name" 
          id="" className="form-control" 
        />
      </div>

      <div className="form-grop">
        <label htmlFor="duration">Duration : </label>
        <input type="number" name="" id="duration" className="form-control" />
      </div>

      <div className="btn btn-outline-success mt-5"
        onClick={()=>setnew_question_popup(true)}>
        Add question {qno}
      </div>

    {
      new_question_popup && <NewQuestion  questions_arr = {questions_arr} setquestions_arr = {setquestions_arr} setqno = {setqno} setnew_question_popup={setnew_question_popup} new_question_popup={new_question_popup}/>
    }
    {/* displaying questions-------------------- */}
    <section className='mt-5 bg-light'>
    {console.log(questions_arr)}
      {
        questions_arr.map((que,index)=>{
          return <>

            <b> {index + 1} . {que.question_name}</b>
            {que.type == "normal" ? (
              <div>
              <div className="form-check">
                <input type="radio" name="question" id={`${index}_option1`} className="form-check-input" />
                <label htmlFor={`${index}_option1`} className="form-check-label">{que.option1}</label>
              </div>
            
              <div className="form-check">
                <input type="radio" name="question" id={`${index}_option2`} className="form-check-input" />
                <label htmlFor={`${index}_option2`} className="form-check-label">{que.option2}</label>
              </div>
            
              {
                que.option3 != undefined && <div className="form-check">
                <input type="radio" name="question" id={`${index}_option3`} className="form-check-input" />
                <label htmlFor={`${index}_option3`} className="form-check-label">{que.option3}</label>
              </div>
              }
            
              {
                que.option4 != undefined && <div className="form-check">
                <input type="radio" name="question" id={`${index}_option4`} className="form-check-input" />
                <label htmlFor={`${index}_option4`} className="form-check-label">{que.option4}</label>
              </div>
              }
            </div>
            
              ):(
              <div>
                <div className="form-check">
                  <input type="checkbox" name="" id="" className="form-check-input" />
                  <label className="form-check-label">{que.option1}</label>
                </div>

                <div className="form-check">
                  <input type="checkbox" name="" id="" className="form-check-input" />
                  <label className="form-check-label">{que.option2}</label>
                </div>
                {
                que.option3 != undefined && <div className="form-check">
                <input type="checkbox" name="question" id="option3" className="form-check-input" />
                <label htmlFor="option3" className="form-check-label">{que.option3}</label>
              </div>
              }
            
              {
                que.option4 != undefined && <div className="form-check">
                <input type="checkbox" name="question" id="option4" className="form-check-input" />
                <label htmlFor="option4" className="form-check-label">{que.option4}</label>
              </div>
              }
              </div>
              

              )}
              <div className='my-2'>
                <div className="btn btn-sm btn-primary mx-2">
                  update
                </div>
                <button className="btn btn-sm btn-danger">
                  delete
                </button>
              </div>
      

          </>
        })
      }
      
      
    </section>

    </div>
  )
}

export default CreateQuizesPage