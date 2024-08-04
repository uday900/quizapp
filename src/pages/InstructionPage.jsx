import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { context } from '../ContextValues';

function InstructionPage() {


    const {quiz, setquiz} = useContext(context);
    // console.log(quiz)
    // console.log('inside instructor')
    const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleStartTest = () => {
    if (isAgreed) {
      alert('Test is starting...');
  

      // Logic to start the test can go here
    } else {
      alert('Please agree to the terms before starting the test.');
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Exam Instructions</h1>

        {/* Exam Details Section */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{quiz.quizName}: Final Assessment</h5>
            <p className="card-text"><strong>Duration:</strong> {quiz.duration} min</p>
            {/* <p className="card-text">
              <strong>Sections:</strong>
              <ul>
                <li><strong>Section 1:</strong> Multiple Choice Questions (MCQs) - 30 questions, 1 hour.</li>
                <li><strong>Section 2:</strong> Short Answer Questions - 10 questions, 45 minutes.</li>
                <li><strong>Section 3:</strong> Essay Question - 1 question, 15 minutes.</li>
              </ul>
            </p> */}
            <p className="card-text">Please ensure that you manage your time wisely to complete all sections within the allotted time.</p>
          </div>
        </div>

        <div className="accordion" id="instructionsAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingGeneral">
              <button 
                className="accordion-button" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseGeneral" 
                aria-expanded="true" 
                aria-controls="collapseGeneral"
              >
                General Guidelines
              </button>
            </h2>
            <div 
              id="collapseGeneral" 
              className="accordion-collapse collapse show" 
              aria-labelledby="headingGeneral" 
              data-bs-parent="#instructionsAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li><strong>Read All Instructions Carefully:</strong> Ensure that you understand all instructions before beginning the exam.</li>
                  <li><strong>Time Management:</strong> Allocate your time wisely. Monitor the time to ensure you have enough time to complete all sections.</li>
                  <li><strong>Answer All Questions:</strong> Attempt all questions. Even if you're unsure, provide the best possible answer.</li>
                  <li><strong>No External Assistance:</strong> This is a closed-book exam. No external resources, notes, or assistance are allowed.</li>
                  <li><strong>Academic Integrity:</strong> Cheating or any form of dishonesty will result in disqualification.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingDuring">
              <button 
                className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseDuring" 
                aria-expanded="false" 
                aria-controls="collapseDuring"
              >
                During the Exam
              </button>
            </h2>
            <div 
              id="collapseDuring" 
              className="accordion-collapse collapse" 
              aria-labelledby="headingDuring" 
              data-bs-parent="#instructionsAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li><strong>Keep Your Exam Screen Open:</strong> Do not navigate away from the exam window. Doing so may result in the submission of your exam.</li>
                  <li><strong>Work Independently:</strong> Collaboration with others is not allowed. Ensure that all work is your own.</li>
                  <li><strong>Submit Answers Carefully:</strong> Double-check your answers before submission. Ensure that each question is answered correctly.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTechnical">
              <button 
                className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseTechnical" 
                aria-expanded="false" 
                aria-controls="collapseTechnical"
              >
                Technical Instructions
              </button>
            </h2>
            <div 
              id="collapseTechnical" 
              className="accordion-collapse collapse" 
              aria-labelledby="headingTechnical" 
              data-bs-parent="#instructionsAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li><strong>Internet Connection:</strong> Ensure you have a stable internet connection throughout the exam.</li>
                  <li><strong>Browser Requirements:</strong> Use a supported browser (e.g., Chrome, Firefox). Disable any pop-up blockers.</li>
                  <li><strong>Device Preparation:</strong> Use a fully charged laptop or desktop computer. Avoid using mobile devices.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSubmission">
              <button 
                className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseSubmission" 
                aria-expanded="false" 
                aria-controls="collapseSubmission"
              >
                Exam Submission
              </button>
            </h2>
            <div 
              id="collapseSubmission" 
              className="accordion-collapse collapse" 
              aria-labelledby="headingSubmission" 
              data-bs-parent="#instructionsAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li><strong>Review Your Answers:</strong> Before submitting, review all your answers to ensure they are complete and accurate.</li>
                  <li><strong>Submit on Time:</strong> Ensure you submit the exam before the time limit expires. Late submissions may not be accepted.</li>
                  <li><strong>Confirm Submission:</strong> After submitting, check for a confirmation message that your exam has been successfully submitted.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingContact">
              <button 
                className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseContact" 
                aria-expanded="false" 
                aria-controls="collapseContact"
              >
                Contact Information
              </button>
            </h2>
            <div 
              id="collapseContact" 
              className="accordion-collapse collapse" 
              aria-labelledby="headingContact" 
              data-bs-parent="#instructionsAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li><strong>Technical Issues:</strong> If you encounter any technical difficulties, contact [Technical Support Contact Info].</li>
                  <li><strong>Exam Queries:</strong> For any questions during the exam, contact [Exam Proctor/Instructor Contact Info].</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox and Start Test Button */}
        <div className="mt-4">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value={isAgreed} 
              id="agreeCheckbox" 
              onChange={handleCheckboxChange} 
            />
            <label className="form-check-label" htmlFor="agreeCheckbox">
              I have read and agree to the instructions.
            </label>
          </div>

          <button 
            className="btn btn-primary mt-3" 
            onClick={()=>{
                handleStartTest
                navigate('/quiz')
            }}
            disabled={!isAgreed} // Button is disabled until checkbox is checked
          >
            Start Test
          </button>
        </div>
      </div>
    </>
  );
}

export default InstructionPage;
