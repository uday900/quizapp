import React, { createContext, useState } from 'react'

export const quizDataContext = createContext();
function ContextValues({children}) {
    const [quizData, setquizData] = useState([
        {
            quizName: "React Quiz",
            duration: "20",
            questions: [
                {
                    questionName: "What is React?",
                    option1: "A library for building user interfaces", 
                    option2: "A database management system",
                    option3: "A programming language",
                    option4: "A web server",
                    type: "normal" // Added type
                },
                {
                    questionName: "What is JSX?",
                    option1: "JavaScript XML", 
                    option2: "JavaScript X",
                    option3: "Java Syntax Extension",
                    option4: "JavaScript Extension",
                    type: "normal" // Added type
                },
                {
                    questionName: "What is the virtual DOM?",
                    option1: "A lightweight copy of the actual DOM", 
                    option2: "A copy of the browser's DOM",
                    option3: "A specific API for interacting with the DOM",
                    option4: "None of the above",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "Which method is used to update state in a React component?",
                    option1: "this.updateState()", 
                    option2: "this.changeState()",
                    option3: "this.setState()",
                    option4: "this.modifyState()",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "Which hook is used to manage side effects in functional components?",
                    option1: "useState", 
                    option2: "useEffect",
                    option3: "useContext",
                    option4: "useRef",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "How do you pass data from parent to child component?",
                    option1: "Using props", 
                    option2: "Using state",
                    option3: "Using context",
                    option4: "Using refs",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "What does the 'key' prop do in a list?",
                    option1: "It uniquely identifies an element in the list", 
                    option2: "It sets the id of the element",
                    option3: "It binds the element to the DOM",
                    option4: "None of the above",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "How do you conditionally render a component in React?",
                    option1: "Using if-else statements", 
                    option2: "Using the ternary operator",
                    option3: "Using logical &&",
                    option4: "All of the above",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "What is a React Fragment?",
                    option1: "A wrapper to group a list of children elements without adding extra nodes to the DOM", 
                    option2: "A piece of broken React code",
                    option3: "A part of the virtual DOM",
                    option4: "None of the above",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "How do you create a ref in React?",
                    option1: "Using React.createRef()", 
                    option2: "Using this.ref",
                    option3: "Using useState",
                    option4: "Using useEffect",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "Does React have lifecycle methods in class components?",
                    option1: "true",
                    option2: "false",
                    type: "normal" // Added type
                }
            ]
        },
        {
            quizName: "React Native Quiz",
            duration: "20",
            questions: [
                {
                    questionName: "Which hook is used to manage side effects in functional components?",
                    option1: "useState", 
                    option2: "useEffect",
                    option3: "useContext",
                    option4: "useRef",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "What does the 'key' prop do in a list?",
                    option1: "It uniquely identifies an element in the list", 
                    option2: "It sets the id of the element",
                    option3: "It binds the element to the DOM",
                    option4: "None of the above",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "How do you conditionally render a component in React?",
                    option1: "Using if-else statements", 
                    option2: "Using the ternary operator",
                    option3: "Using logical &&",
                    option4: "All of the above",
                    type: "multiplechoice" // Added type
                },
                {
                    questionName: "Does React have lifecycle methods in class components?",
                    option1: "true",
                    option2: "false",
                    type: "normal" // Added type
                }
            ]
        }
    ]    
    )
    const [activeQuiz, setactiveQuiz] = useState(null);
  return (
    <>
    <quizDataContext.Provider value = {{quizData, setquizData, activeQuiz, setactiveQuiz}} >
        {children}
    </quizDataContext.Provider>

    </>
  )
}

export default ContextValues