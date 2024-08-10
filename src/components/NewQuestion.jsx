import React, { useState } from 'react'
import './NewQuestion.css'
function NewQuestion({ questions_arr, setquestions_arr, setnew_question_popup, setqno}) {

    const [form_data, setform_data] = useState({type: "normal"});
    //   const [form_data, setform_data] = useState({
//     // question_name: "null",
//     // option1 : "false",
//     // option2 : "false",
//     // option3 : "false",
//     // option4 : "false",
//     // answer : "false",
//     // type : "normal",
// });

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        setqno(prev=>prev + 1)
        setquestions_arr([...questions_arr, form_data])
        setnew_question_popup(false)
    }

    const handleFormData = (event)=>{
        // console.log(event.target.name , event.target.value)
        setform_data({...form_data, [event.target.name ]: event.target.value})
        
    }
    
  return (
    <div className='main-box mt-5 p-2 shadow '>

   
        <div className="btn btn-default close-btn"
            onClick={()=>setnew_question_popup(false)}
        >
        <i class="fa-regular fa-circle-xmark"></i>
        </div>


    
    <div className="container p-3">

    <form onSubmit = {handleFormSubmit} name='question-form' 
        className='d-flex gap-5'>
        <div>
        <input type="" name="questionName" id="" 
            placeholder = "question name"
            onChange={handleFormData}
            className="form-control w-100" required/>

        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>option1</label>
            
            <div className="col-sm-8">
            <input type="text" name="option1" 
                onChange={handleFormData}
                className = "form-control" 
                id="" required/>
            </div>
        </div>
        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>option2</label>
            
            <div className="col-sm-8">
            <input type="text" name="option2" 
                className = "form-control"
                onChange={handleFormData}
                id="" required/>
            </div>
        </div>
        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>option3</label>
            
            <div className="col-sm-8">
            <input type="text" name="option3" 
                onChange={handleFormData}
                className = "form-control" id="" />
            </div>
        </div>
        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>option4</label>
            <div className="col-sm-8">
            <input type="text" name="option4" 
                onChange={handleFormData}
                className = "form-control" id="" />
            </div>
        </div>
        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>answer</label>
            <div className="col-sm-8">
            <input type="text" name="answer" 
                placeholder = "enter answer here"
                onChange={handleFormData}
                className = "form-control" id="" 
            required/>
            </div>
        </div>


        </div>
        <div className="d-flex flex-column">
        <div className="mb-3">
            <p>Question type</p>

            <select className='p-2 rounded' onChange={handleFormData} name="type" id="">
                <option value="normal">normal</option>
                <option value="multiple choice">multiple choice</option>
            </select>
        </div>

        <button className="btn btn-success"
            type = "submit"
        >add
        </button>
        </div>
       
    </form>

    </div>
       
    </div>
  )
}

export default NewQuestion