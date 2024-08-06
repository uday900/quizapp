import React from 'react'
import './UpdateQuestion.css'
import { useState } from 'react'

function UpdateQuestion({ setupdate_question_popup, index, setquestions_arr, questions_arr}) {
    // const [form_data, setform_data] = useState({type: "normal"});
    const [data, setdata] = useState(questions_arr[index])
    // console.log(data)
    // console.log("index", index)
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        questions_arr[index] = data;
        setquestions_arr(questions_arr)
        setupdate_question_popup(false)
    }
    const handleFormData = (event)=>{
        setdata({...data, [event.target.name] : event.target.value})
    }
  return (
    <div>
<div className='main-box update-main-box mt-5 p-2 shadow '>
    
    <div className='close-btn' >
            <div className="btn btn-default"
                onClick={()=>setupdate_question_popup(false)}
            >
            <i class="fa-regular fa-circle-xmark"></i>
            </div>
    </div>

    
    <div className="container p-3">

    <form onSubmit = {handleFormSubmit} name='question-form' 
        className='d-flex gap-5'>
        <div>

        <input type="" name="questionName" id="" 
            value={data.questionName}
            onChange={handleFormData}
            // onChange={(e)=>setdata(data.questionName =e.target.value)}
            className="form-control w-100" required/>

        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>option1</label>
            
            <div className="col-sm-8">
            <input type="text" name="option1" 
                onChange={handleFormData}
                value={data.option1}
                className = "form-control" 
                id="" required/>
            </div>
        </div>
        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>option2</label>
            
            <div className="col-sm-8">
            <input type="text" name="option2" 
                className = "form-control"
                value={data.option2}
                onChange={handleFormData}
                id="" required/>
            </div>
        </div>
        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>option3</label>
            
            <div className="col-sm-8">
            <input type="text" name="option3" 
                value={data.option3}
                onChange={handleFormData}
                className = "form-control" id="" />
            </div>
        </div>
        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>option4</label>
            <div className="col-sm-8">
            <input type="text" name="option4" 
                value={data.option4}
                onChange={handleFormData}
                className = "form-control" id="" />
            </div>
        </div>
        <div className="from-group row mt-2">
            <label htmlFor="" className='col-sm-4'>answer</label>
            <div className="col-sm-8">
            <input type="text" name="answer" 
                placeholder = "enter answer here"
                value={data.answer}
                onChange={handleFormData}
                className = "form-control" id="" 
            required/>
            </div>
        </div>


        </div>
        <div className="d-flex flex-column">
        <div className="mb-3">
            <p>Question type</p>

            <select className='p-2 rounded'  name="type" id="" value={data.type}
                onChange={handleFormData}>
                <option value="normal">normal</option>
                <option value="multiple choice">multiple choice</option>
            </select>
        </div>

        <button className="btn btn-primary"
            type = "submit"
        >Update
        </button>
        </div>
       
    </form>

    </div>
       
    </div>



    </div>
  )
}

export default UpdateQuestion