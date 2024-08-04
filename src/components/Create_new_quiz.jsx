import React, { useState } from 'react'

function Create_new_quiz({setcreate_quiz_popup}) {
    const [qno, setqno] = useState(1);
    const [new_question_popup, setnew_question_popup] = useState(false);
  console
  return <>
  <div className="create-new-quiz">
    {/* close btn */}
        <div className="w-100 close-btn-1 d-flex">
            <button className="btn" onClick={()=> setcreate_quiz_popup(false)}><i class="fa-solid fa-xmark"></i></button>
        </div>

        <form>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-4 form-label">
                Name of the Quiz
            </label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="staticEmail"/>
            </div>
            
          </div>

          <div className="form-group mt-2  row">
            <label htmlFor="staticEmail" className="col-sm-4 form-label">
                Number of questions 
            </label>
            <div className="col-sm-8">
              <input type="number" className="form-control" id="staticEmail"/>
            </div>
            
          </div>
      
          <div className="w-100 d-flex justify-content-around mt-4">
                <div className="btn btn-outline-success"
                  onClick={()=>{
                    setqno(qno+1)
                    setnew_question_popup(true)
                  }}>Add question
                </div>
              <button className="btn btn-success" onClick={()=>setcreate_quiz_popup(false)}>Add Quiz</button>
          </div>
       
    {
        new_question_popup && <NewQuestion setnew_question_popup = {setnew_question_popup} />
    }
    </form>

    </div>
</>
}

function NewQuestion({setnew_question_popup}){
    return <>
   <div className="container border p-3 border-secondary mt-4">
    <form action="" className='d-flex gap-5'>

    <div>
      {/* title */}
      <input type="" name="" id="" placeholder = "question name" className="form-control w-100" />

      <div className="from-group row mt-2">
        <label htmlFor="" className='col-sm-4'>option1</label>
        
        <div className="col-sm-8">
          <input type="text" name="" className = "form-control" id="" />
        </div>
      </div>
      <div className="from-group row mt-2">
        <label htmlFor="" className='col-sm-4'>option2</label>
        
        <div className="col-sm-8">
          <input type="text" name="" className = "form-control" id="" />
        </div>
      </div>
      <div className="from-group row mt-2">
        <label htmlFor="" className='col-sm-4'>option3</label>
        
        <div className="col-sm-8">
          <input type="text" name="" className = "form-control" id="" />
        </div>
      </div>
      <div className="from-group row mt-2">
        <label htmlFor="" className='col-sm-4'>option4</label>
        
        <div className="col-sm-8">
          <input type="text" name="" className = "form-control" id="" />
        </div>
      </div>


     </div>
     <div className="d-flex flex-column">

      <div className="">
        <p>question type</p>
        <input type="radio" name="qtype" id="" /> Normal
        <br />
        <input type="radio" name="qtype" id="" /> Multiple Choice
      
      </div>
      <div className="btn btn-success"
        onClick={()=>setnew_question_popup(false)}
      >add</div>
     </div>
    </form>

    </div>
    </>
} 
function Displayquestinsfn({qno, qtitle, qoptins}) {
    return <>
    <div className="container">
        <p>{qno} <b> {qtitle} </b></p>
        <p> {qoptins}</p>
    </div>
    </>
}

// exDisplayquestinsfn;
export default Create_new_quiz