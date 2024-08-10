import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewQuestion from '../components/NewQuestion'
import UpdateQuestion from '../components/UpdateQuestion'
import './CreateQuizesPage.css'
import { quizDataContext } from '../ContextValues'

function CreateQuizesPage() {
  const navigate = useNavigate()
  const [qno, setqno] = useState(1)

  const [new_question_popup, setnew_question_popup] = useState(false)
  const [update_question_popup, setupdate_question_popup] = useState(false)
  const [quiz_name, setquiz_name] = useState("")
  const [quiz_duration, setquiz_duration] = useState("")
  const [update_index, setupdate_index] = useState("")
  
  const [questions_arr, setquestions_arr] = useState([])


  const {quizData, setquizData}  = useContext(quizDataContext)  
  const handleDeleteQuestion = (ind)=>{
    // alert("f ")
    setquestions_arr(questions_arr.filter((que,i)=>{
      return ind !==i 
    }))
  }
  const handleUpdateQuestion = (ind)=>{
    setupdate_index(ind)
    setupdate_question_popup(true)
  }
  const handleFormSubmit = (event)=>{
    event.preventDefault();
    setquiz_name("")
    setquiz_duration("")
    const new_quiz = {
      quizName : quiz_name,
      duration : quiz_duration,
      questions : questions_arr
    }
    console.log("new quiz ", new_quiz)
    setquizData([...quizData, new_quiz])
    // console.log("after handle")
  }

  
  return (
    <div className='container border'>

      <div className='mt-3'>
      <div className="h2 text-center mb-4">
        Create your own quiz
      </div>
      <form className = 'form' onSubmit={handleFormSubmit}>
       
        <div className="form-group">
          <div className="form-label">
            Name of the quiz
          </div>

        <input type="text" name="" 
          placeholder = "enter the quiz name" 
          value={quiz_name}
          onChange={(e)=>setquiz_name(e.target.value)}
          id="" className="form-control" 
        required/>
      </div>

      <div className="form-grop">
        <label htmlFor="duration">Duration : </label>
        <input type="number" name="" id="duration" 
          value={quiz_duration}
          onChange={(e)=>setquiz_duration(e.target.value)}
          className="form-control" required/>
      </div>

      <div className='mt-5'>
        <button className="btn-1 btn btn-outline-success"
          onClick={()=>setnew_question_popup(true)}
          
        >
          Add question
        </button>
        <button type =  'submit' className="btn btn-success ">
          Create quiz
        </button>
      </div>
      </form>
      
      </div>

    {
      new_question_popup && <NewQuestion  questions_arr = {questions_arr} setquestions_arr = {setquestions_arr} setqno = {setqno} setnew_question_popup={setnew_question_popup} new_question_popup={new_question_popup}/>
    }
    {update_question_popup && <UpdateQuestion index = {update_index} setquestions_arr = {setquestions_arr} questions_arr = {questions_arr} setupdate_question_popup = {setupdate_question_popup}/>}
    
    {/* displaying questions-------------------- */}
    <section className='mt-5 bg-light'>
    {/* {console.log(questions_arr)} */}
      {
        questions_arr.map((que,index)=>{

          return <div key={index}>
          <div>
            <b> {index + 1} . {que.questionName}</b>
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

            
            </div>
              <div className='my-2'>
                <div className="btn btn-sm btn-primary mx-2"
                  onClick={()=>handleUpdateQuestion(index)}>
                  update
                </div>
                <button className="btn btn-sm btn-danger"
                  onClick={()=>handleDeleteQuestion(index)}>
        
                  delete
                </button>

                
              </div>
      

          </div>
        })
      }
    
    <div className='d-flex justify-content-end bg-white'>
    
      <button type =  'submit' 
        onClick={handleFormSubmit} 
        className="btn btn-success mx-3"
        disabled = {quiz_name =="" || quiz_duration == ""}
        >
          Create quiz
      </button>
    </div>
      
      
    </section>

    </div>
  )
}

export default CreateQuizesPage