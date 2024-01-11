// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const programmingQuestions = shuffleArray([
  {
    id: 1,
    question: "What is the capital of Python?",
    options: ['C', 'Java', 'Python', 'C++']
  },
  {
    id: 2,
    question: "Which programming language is known for its use in AI and ML?",
    options: ['JavaScript', 'Python', 'Ruby', 'Swift']
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: ['HyperText Markup Language', 'High-level Text Modeling Language', 'Hyper Transferable and Multi-purpose Language', 'Home Tool Markup Language']
  },
  {
    id: 4,
    question: "Which is a dynamically typed language?",
    options: ['Java', 'C#', 'Python', 'C++']
  },
  {
    id: 5,
    question: "What is the purpose of 'git clone' in Git?",
    options: ['Create a new Git repository', 'Copy an existing repository', 'Switch between branches', 'Delete a repository']
  },
  {
    id: 6,
    question: "In JavaScript, what is a closure?",
    options: ['Declare variables', 'Define functions', 'Function and lexical environment combo', 'Type of loop']
  },
  {
    id: 7,
    question: "Output of `print(2 + '2')` in Python:",
    options: ['4', '22', 'Error', 'None of the above']
  },
  {
    id: 8,
    question: "Which data structure follows LIFO?",
    options: ['Queue', 'Stack', 'Linked List', 'Array']
  },
  {
    id: 9,
    question: "Purpose of 'npm' command in Node.js?",
    options: ['Install Node.js', 'Manage packages and dependencies', 'Create a new project', 'Run JavaScript files']
  },
  {
    id: 10,
    question: "Open a file in binary mode in Python:",
    options: ["file('filename', 'rb')", "open('filename', 'r')", "open('filename', 'wb')", "file('filename', 'b')"]
  },
  // Add more questions following the same format
  // ...
]);

const randomQuestions5 = programmingQuestions.slice(0, 5);
export default randomQuestions5;
