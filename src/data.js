const Data = [
    {
        quizName: "React Quiz",
        duration: "15",
        questions: [
            {
                questionName: "What is React?",
                option1: "A library for building user interfaces",
                option2: "A database management system",
                option3: "A programming language",
                option4: "A web server",
                type: "normal",
                answer: "A library for building user interfaces"
            },
            {
                questionName: "What is JSX?",
                option1: "JavaScript XML",
                option2: "JavaScript X",
                option3: "Java Syntax Extension",
                option4: "JavaScript Extension",
                type: "normal",
                answer: "JavaScript XML"
            },
            {
                questionName: "What is the virtual DOM?",
                option1: "A lightweight copy of the actual DOM",
                option2: "A copy of the browser's DOM",
                option3: "A specific API for interacting with the DOM",
                option4: "None of the above",
                type: "multiplechoice",
                answer: "A lightweight copy of the actual DOM"
            },
            {
                questionName: "Which method is used to update state in a React component?",
                option1: "this.updateState()",
                option2: "this.changeState()",
                option3: "this.setState()",
                option4: "this.modifyState()",
                type: "multiplechoice",
                answer: "this.setState()"
            },
            {
                questionName: "Which hook is used to manage side effects in functional components?",
                option1: "useState",
                option2: "useEffect",
                option3: "useContext",
                option4: "useRef",
                type: "multiplechoice",
                answer: "useEffect"
            },
            {
                questionName: "How do you pass data from parent to child component?",
                option1: "Using props",
                option2: "Using state",
                option3: "Using context",
                option4: "Using refs",
                type: "multiplechoice",
                answer: "Using props"
            },
            {
                questionName: "What does the 'key' prop do in a list?",
                option1: "It uniquely identifies an element in the list",
                option2: "It sets the id of the element",
                option3: "It binds the element to the DOM",
                option4: "None of the above",
                type: "multiplechoice",
                answer: "It uniquely identifies an element in the list"
            },
            {
                questionName: "How do you conditionally render a component in React?",
                option1: "Using if-else statements",
                option2: "Using the ternary operator",
                option3: "Using logical &&",
                option4: "All of the above",
                type: "multiplechoice",
                answer: "All of the above"
            },
            {
                questionName: "What is a React Fragment?",
                option1: "A wrapper to group a list of children elements without adding extra nodes to the DOM",
                option2: "A piece of broken React code",
                option3: "A part of the virtual DOM",
                option4: "None of the above",
                type: "normal",
                answer: "A wrapper to group a list of children elements without adding extra nodes to the DOM"
            },
            {
                questionName: "How do you create a ref in React?",
                option1: "Using React.createRef()",
                option2: "Using this.ref",
                option3: "Using useState",
                option4: "Using useEffect",
                type: "normal",
                answer: "Using React.createRef()"
            }
        ]
    },
    {
        quizName: "Java Quiz",
        duration: "15",
        questions: [
            {
                questionName: "What is Java?",
                option1: "A programming language",
                option2: "An operating system",
                option3: "A database",
                option4: "A web browser",
                type: "normal",
                answer: "A programming language"
            },
            {
                questionName: "Which company developed Java?",
                option1: "Microsoft",
                option2: "Google",
                option3: "Sun Microsystems",
                option4: "IBM",
                type: "normal",
                answer: "Sun Microsystems"
            },
            {
                questionName: "What is the extension of Java bytecode files?",
                option1: ".java",
                option2: ".class",
                option3: ".jar",
                option4: ".exe",
                type: "normal",
                answer: ".class"
            },
            {
                questionName: "What is JVM?",
                option1: "Java Virtual Machine",
                option2: "Java Version Manager",
                option3: "Java Variable Method",
                option4: "Java Verified Method",
                type: "multiplechoice",
                answer: "Java Virtual Machine"
            },
            {
                questionName: "Which keyword is used to create a class in Java?",
                option1: "class",
                option2: "object",
                option3: "create",
                option4: "new",
                type: "normal",
                answer: "class"
            },
            {
                questionName: "Which keyword is used to inherit a class in Java?",
                option1: "implements",
                option2: "extends",
                option3: "inherits",
                option4: "super",
                type: "multiplechoice",
                answer: "extends"
            },
            {
                questionName: "Which of these is not a Java keyword?",
                option1: "if",
                option2: "then",
                option3: "goto",
                option4: "switch",
                type: "multiplechoice",
                answer: "then"
            },
            {
                questionName: "Which method is the entry point of a Java program?",
                option1: "main",
                option2: "start",
                option3: "run",
                option4: "init",
                type: "normal",
                answer: "main"
            },
            {
                questionName: "Which of the following is a valid Java identifier?",
                option1: "1stNumber",
                option2: "first_number",
                option3: "first-number",
                option4: "FirstNumber",
                type: "multiplechoice",
                answer: "first_number"
            },
            {
                questionName: "Which of these is a Java primitive data type?",
                option1: "String",
                option2: "ArrayList",
                option3: "int",
                option4: "Integer",
                type: "normal",
                answer: "int"
            }
        ]
    },
    // Add the remaining quizzes for Python, JavaScript, and SQL with answers in a similar format.
];

export default Data;
