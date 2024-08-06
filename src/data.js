export var quizData = [
    {
        quizName: "React Quiz",
        duration: "20",
        questions: [
            {
                questionName: "What is React?",  // Changed from qname to questionName
                option1: "A library for building user interfaces", 
                option2: "A database management system",
                option3: "A programming language",
                option4: "A web server",
                answer: "A library for building user interfaces",  // Added answer field
                type: "normal"
            },
            {
                questionName: "What is JSX?",  // Changed from qname to questionName
                option1: "JavaScript XML", 
                option2: "JavaScript X",
                option3: "Java Syntax Extension",
                option4: "JavaScript Extension",
                answer: "JavaScript XML",  // Added answer field
                type: "multiplechoice"
            },
            {
                questionName: "What is the virtual DOM?",  // Changed from qname to questionName
                option1: "A lightweight copy of the actual DOM", 
                option2: "A copy of the browser's DOM",
                option3: "A specific API for interacting with the DOM",
                option4: "None of the above",
                answer: "A lightweight copy of the actual DOM",  // Added answer field
                type: "multiplechoice"
            },
            {
                questionName: "Which method is used to update state in a React component?",  // Changed from qname to questionName
                option1: "this.updateState()", 
                option2: "this.changeState()",
                option3: "this.setState()",
                option4: "this.modifyState()",
                answer: "this.setState()",  // Added answer field
                type: "multiplechoice"
            },
            {
                questionName: "Which hook is used to manage side effects in functional components?",  // Changed from qname to questionName
                option1: "useState", 
                option2: "useEffect",
                option3: "useContext",
                option4: "useRef",
                answer: "useEffect",  // Added answer field
                type: "multiplechoice"
            },
            {
                questionName: "How do you pass data from parent to child component?",  // Changed from qname to questionName
                option1: "Using props", 
                option2: "Using state",
                option3: "Using context",
                option4: "Using refs",
                answer: "Using props",  // Added answer field
                type: "multiplechoice"
            },
            {
                questionName: "What does the 'key' prop do in a list?",  // Changed from qname to questionName
                option1: "It uniquely identifies an element in the list", 
                option2: "It sets the id of the element",
                option3: "It binds the element to the DOM",
                option4: "None of the above",
                answer: "It uniquely identifies an element in the list",  // Added answer field
                type: "multiplechoice"
            },
            {
                questionName: "How do you conditionally render a component in React?",  // Changed from qname to questionName
                option1: "Using if-else statements", 
                option2: "Using the ternary operator",
                option3: "Using logical &&",
                option4: "All of the above",
                answer: "All of the above",  // Added answer field
                type: "multiplechoice"
            },
            {
                questionName: "What is a React Fragment?",  // Changed from qname to questionName
                option1: "A wrapper to group a list of children elements without adding extra nodes to the DOM", 
                option2: "A piece of broken React code",
                option3: "A part of the virtual DOM",
                option4: "None of the above",
                answer: "A wrapper to group a list of children elements without adding extra nodes to the DOM",  // Added answer field
                type: "multiplechoice"
            },
            {
                questionName: "How do you create a ref in React?",  // Changed from qname to questionName
                option1: "Using React.createRef()", 
                option2: "Using this.ref",
                option3: "Using useState",
                option4: "Using useEffect",
                answer: "Using React.createRef()",  // Added answer field
                type: "multiplechoice"
            },
        ]
    }
];
