import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextValues from '../ContextValues';

function SubmitPage() {
  const navigate = useNavigate();
  const {quizScore, setquizScore, activeQuiz} = useContext(ContextValues)
 

  const handleFinish = () => {
    // Navigate to another page or perform other actions
    navigate('/');
  };

  return (
    <div className="submit-page d-flex justify-content-center align-items-center align-content-center">
      <div className="container text-center">
        <h1>Quiz Submitted!</h1>
        <p>Thank you for taking the quiz.</p>
        <div className="result-summary">
          <h2>Your Results:</h2>
          <p>Score: {quizScore}</p>
          <p>Total Questions: {activeQuiz.questions.length}</p>
          <p>Attempted: </p>
        </div>
        <div className="btn btn-success" onClick={handleFinish}>
          Return to Home
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
