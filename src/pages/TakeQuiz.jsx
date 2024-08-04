import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../ContextValues';

function TakeQuiz() {
  const navigate = useNavigate();
  const {quiz} = useContext(context);
  // console.log(typeof quiz.duration)
  const [timeLeft, setTimeLeft] = useState(+quiz.duration * 60); // Initial timer set to 10 seconds for testing
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft <= 1) {
          clearInterval(timerId);
          setIsTimeUp(true);
          navigate('/submit'); // Navigate to /submit page

          alert("Time's up!");
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, [navigate]);

  const seconds = timeLeft % 60;
  const minutes = Math.floor(timeLeft / 60);
  const formatted_time = `${minutes} min : ${seconds} s`;

  function handlesubmit() {    
    try {
      clearInterval(timerId)
      
    } catch (error) {
      console.log(error)
    }
    navigate('/submit')
  }
  

  // console.log(quiz)
  return (
   
    <>
      <div className="navbar bg-dark text-white px-2">
        {/* Quiz name */}
        <div className="h3 text-primary">{quiz.quizName}</div>
        <div>{formatted_time}</div>
        <div className="btn btn-danger" onClick={()=>handlesubmit()}>Finish Test</div>
      </div>
      <div className="contanier mt-5">
        {
          quiz.questions.map((question, index)=>{
            return <div key={index} className="container mt-5">

              <div className="bg-secondary p-2 w-auto text-white">
                {index+1} . {question.qname}
              </div>
              <div className="options p-2 bg-light">
                {/* {console.log(question.option3)} */}
                {
                  
                  question.type== "normal" ? (
                    <>
                    <p>Select one option</p>
                    <ul style={{listStyle: "none" , padding : "0"}}>
                      <li>
                        <input type="radio" name={`q${index}`} id={`q${index}-option1`} />
                        &nbsp;
                        <label htmlFor={`q${index}-option1`} >{question.option1}</label>
                      </li>

                      <li>
                        <input type="radio" name={`q${index}`} id={`q${index}-option2`} />
                        &nbsp;
                        <label htmlFor={`q${index}-option2`} >{question.option2}</label>
                      </li>

                      {question.option3 != undefined && (
                      <li>
                        <input type="radio" name={`q${index}`} id={`q${index}-option3`} />
                        &nbsp;
                        <label htmlFor={`q${index}-option3`} >{question.option3}</label>
                      </li>
                      )}
                      {question.option3 != undefined && (
                      <li>
                        <input type="radio" name={`q${index}`} id={`q${index}-option4`} />
                        &nbsp;
                        <label htmlFor={`q${index}-option4`} >{question.option4}</label>
                      </li>
                      )}

                    </ul>
                    </>
                  ):(
                    <>
                    <p>Select one or more options</p>
                    <ul style={{listStyle: "none" , padding : "0"}}>
                      <li>
                        <input type="checkbox" name={`q${index}`} id={`q${index}-option1`} />
                        &nbsp;
                        <label htmlFor={`q${index}-option1`} >{question.option1}</label>
                      </li>

                      <li>
                        <input type="checkbox" name={`q${index}`} id={`q${index}-option2`} />
                        &nbsp;
                        <label htmlFor={`q${index}-option2`} >{question.option2}</label>
                      </li>
                      {question.option3 != undefined && (
                        <li>
                        <input type="checkbox" name={`q${index}`} id={`q${index}-option3`} />
                        &nbsp;
                        <label htmlFor={`q${index}-option3`} >{question.option3} </label>
                      </li>
                      )}
                      
                      {question.option4 !=undefined && (
                      <li>
                        <input type="checkbox" name={`q${index}`} id={`q${index}-option4`} />
                        &nbsp;
                        <label htmlFor={`q${index}-option4`} >{question.option4}</label>
                      </li>
                      )}

                    </ul>
                    </>
                  )
                }
                
              </div>
            </div>
          })
        }

      </div>
      <div className='w-100 text-center mb-5'>
      <div className="btn btn-success " onClick={()=>handlesubmit()}>Submit Test</div>
      
      </div>      {isTimeUp && <div>Time Over</div>}
    </>
  );
}

export default TakeQuiz;
