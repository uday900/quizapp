import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizDataContext } from '../ContextValues';

function SubmitPage() {
  const navigate = useNavigate();
  const {currentQuizScore, setcurrentQuizScore, activeQuiz} = useContext(quizDataContext)
  console.log(currentQuizScore)
  const handleFinish = () => {
    // Navigate to another page or perform other actions
    navigate('/');
  };

  return (
    <div className="submit-page text-center d-flex justify-content-center ">
      <div className=" ">
        <h1>Quiz Submitted!</h1>
        <div  className = 'text-success' style = {{fontSize: "100px"}} 
        ><i class="fa-solid fa-circle-check"></i></div>
        <p>Thank you for taking the quiz.</p>
        <div className="result-summary text-left">
          <h2>Your Results:</h2>
          <p>Total Questions: {activeQuiz.questions.length}</p>
          <p>Score: {currentQuizScore}/{activeQuiz.questions.length}</p>
          {/* <p>No.of correct answers : {currentQuizScore}</p>
          <p>No.of incorrect answers : {activeQuiz.questions.length - currentQuizScore}</p>
          <p>Attempted: </p> */}
        </div>
        <div className="btn btn-success" onClick={handleFinish}>
          Return to Home
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
