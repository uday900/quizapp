import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubmitPage() {
  const navigate = useNavigate();
  const quizResults = {
    score: "Your responses have been recorded. We will review them and provide feedback soon.",
    totalQuestions: 0,
    attempted: 0
  };

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
          <p>Score: {quizResults.score}</p>
          <p>Total Questions: {quizResults.totalQuestions}</p>
          <p>Attempted: {quizResults.attempted}</p>
        </div>
        <div className="btn btn-success" onClick={handleFinish}>
          Return to Home
        </div>
      </div>
    </div>
  );
}

export default SubmitPage;
