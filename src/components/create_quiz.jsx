import React, { useState } from 'react'
import NavBar from './Navbar';
import Create_new_quiz from './Create_new_quiz';

function Create_quiz() {
    const [enableCQ, setenableCQ] = useState(false)
  return <>
 {
    enableCQ && <Create_new_quiz/>
 }
  <div className="container">
    <div className="container mt-5">
        <div className="btn btn-outline-success"
            onClick={()=>setenableCQ(true)}>Create new </div>
    </div>

    <div className="container">

        <div className="h3">Quizes avilable</div>
        
        <div>
            <span>React with us</span>
            <a href="#">Take this</a>
        </div>

    </div>

  </div>
  
  </>
}

export default Create_quiz;