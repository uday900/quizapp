import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewQuestion from '../components/NewQuestion'
import UpdateQuestion from '../components/UpdateQuestion'

function CreateQuizesPage() {
  const navigate = useNavigate()
  const [qno, setqno] = useState(1)
  const [new_question_popup, setnew_question_popup] = useState(false)
  const [update_question_popup, setupdate_question_popup] = useState(false)
  const [form_data, setform_data] = useState();
  const [quiz_name, setquiz_name] = useState("")
  const [quiz_duration, setquiz_duration] = useState("")
  // var update_index;
  const [update_index, setupdate_index] = useState("")

  const [new_quiz, setnew_quiz] = useState(
    {
      quizName : "",
      duration: "",
      questions : [],

    }
  )
  const [questions_arr, setquestions_arr] = useState([
    {
      questionName: "What is the capital of France?",
      option1: "Paris",
      option2: "London",
      option3: "Berlin",
      option4: "Madrid",
      answer: "Paris",
      type: "normal",
  }
  ,
  {
      questionName: "Which of the following is a programming language?",
      option1: "Python",
      option2: "HTML",
      option3: "CSS",
      option4: "Photoshop",
      answer: "Python",
      type: "multiple choice",
  },
  {
    questionName: "Which of the following is a NoSQL database?",
    option1: "MySQL",
    option2: "MongoDB",
    option3: "PostgreSQL",
    option4: "Oracle",
    answer: "MongoDB",
    type: "multiple choice",
}

  
  ])
  // console.log(questions_arr)
  
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
    // event.preventDefault();
    setnew_quiz({...new_quiz,
      quizName : quiz_name,
      duration : quiz_duration,
      questions : questions_arr
    })
    // console.log("after handle")
  }
  // console.log(ne w_quiz)

  
  return (


    <div className='container'>

      <div className='mt-5'>
      <form onSubmit={handleFormSubmit}>
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
      <div className="btn btn-outline-success "
        onClick={()=>setnew_question_popup(true)}
        
      >
        Add question
      </div>
      <button type =  'submit' className="btn btn-success mx-3">
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

          return <>
          <div key={index}>
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
          </>
        })
      }
      
      
    </section>

    </div>
  )
}

export default CreateQuizesPage