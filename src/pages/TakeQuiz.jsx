import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizDataContext } from '../ContextValues';

function TakeQuiz() {
  const navigate = useNavigate();
  const { currentQuizScore, setcurrentQuizScore, quizData, activeQuiz, setactiveQuiz } = useContext(quizDataContext);
  const [timeLeft, setTimeLeft] = useState(+activeQuiz.duration * 60); // Timer in seconds
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft <= 1) {
          clearInterval(timerId);
          setIsTimeUp(true);
          navigate('/submit'); // Navigate to /submit page
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, [navigate]);

  const seconds = timeLeft % 60;
  const minutes = Math.floor(timeLeft / 60);
  const formattedTime = `${minutes} min : ${seconds} s`;

  const handleSubmit = () => {
    setcurrentQuizScore(score);
    navigate('/submit');
  };

  const handleScore = (event, correctAnswers) => {
    if (event.target.type === 'radio' && event.target.value === correctAnswers) {
      setScore(prevScore => prevScore + 1);
    }
    // Handle multiple selections for checkboxes if needed
  };

  return (
    <>
      <div className="navbar bg-dark text-white px-2 sticky-top">
        <div className="h3 text-primary">{activeQuiz.quizName}</div>
        <div>{formattedTime}</div>
        <div className="btn btn-danger" onClick={handleSubmit}>Finish Test</div>
      </div>

      <div className="container" style={{ marginTop: "50px" }}>
        {activeQuiz.questions.map((question, index) => (
          <div key={index} className="container mt-5">
            <div className="bg-secondary p-2 w-auto text-white">
              {index + 1}. {question.questionName}
            </div>
            <div className="options p-2 bg-light">
              {question.type === "normal" ? (
                <>
                  <p>Select one option</p>
                  <ul style={{ listStyle: "none", padding: "0" }}>
                    {[question.option1, question.option2, question.option3, question.option4].map((option, idx) => 
                      option !== undefined && (
                        <li key={idx}>
                          <input
                            type="radio"
                            name={`q${index}`}
                            value={option}
                            onChange={(event) => handleScore(event, question.answer)}
                            id={`q${index}-option${idx + 1}`}
                          />
                          &nbsp;
                          <label htmlFor={`q${index}-option${idx + 1}`}>{option}</label>
                        </li>
                      )
                    )}
                  </ul>
                </>
              ) : (
                <>
                  <p>Select one or more options</p>
                  <ul style={{ listStyle: "none", padding: "0" }}>
                    {[question.option1, question.option2, question.option3, question.option4].map((option, idx) =>
                      option !== undefined && (
                        <li key={idx}>
                          <input
                            type="checkbox"
                            name={`q${index}`}
                            value={option}
                            onChange={(event) => handleScore(event, question.answer)}
                            id={`q${index}-option${idx + 1}`}
                          />
                          &nbsp;
                          <label htmlFor={`q${index}-option${idx + 1}`}>{option}</label>
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className='w-100 text-center mb-5'>
        <div className="btn btn-success" onClick={handleSubmit}>Submit Test</div>
      </div>
      {isTimeUp && <div>Time Over</div>}
    </>
  );
}

export default TakeQuiz;
