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
    question: "What does HTML stand for?",
    options: [
      'HyperText Markup Language*',
      'HyperText Modeling Language',
      'High-Level Text Language',
      'HyperLink and Text Markup'
    ]
  },
  {
    id: 2,
    question: "Which programming language is often used for web development?",
    options: [
      'Java',
      'Python',
      'JavaScript*',
      'C++'
    ]
  },
  {
    id: 3,
    question: "What is the purpose of CSS in web development?",
    options: [
      'Client-Side Scripting',
      'Database Management',
      'Server-Side Scripting',
      'Styling and Layout*'
    ]
  },
  {
    id: 4,
    question: "Which of the following is a version control system?",
    options: [
      'Git*',
      'Java',
      'Python',
      'HTML'
    ]
  },
  {
    id: 5,
    question: "What is the output of the following JavaScript code: `console.log(2 + '2');`?",
    options: [
      '4',
      '22*',
      'Error',
      'NaN'
    ]
  },
  {
    id: 6,
    question: "In Python, how do you define a function?",
    options: [
      'func',
      'def*',
      'function',
      'define'
    ]
  },
  {
    id: 7,
    question: "What does the acronym API stand for?",
    options: [
      'Application Programming Interface*',
      'Advanced Programming Interface',
      'Automated Processing Interface',
      'Application Process Integration'
    ]
  },
  {
    id: 8,
    question: "Which programming language is known for its use in data science and machine learning?",
    options: [
      'Java',
      'JavaScript',
      'Python*',
      'C#'
    ]
  },
  {
    id: 9,
    question: "What is the purpose of SQL?",
    options: [
      'Styling and Layout',
      'Server-Side Scripting',
      'Structured Query Language*',
      'Single Question Language'
    ]
  },
  {
    id: 10,
    question: "Which company developed the C programming language?",
    options: [
      'Microsoft',
      'IBM',
      'Bell Labs*',
      'Oracle'
    ]
  }
]);

const randomQuestions5Programming = programmingQuestions.slice(0, 5);

const questionsForProgramming = randomQuestions5Programming.map(question => {
  const optionsWithoutAsterisk = question.options.map(option => option.replace(/\*$/, ''));
  return {
    id: question.id,
    question: question.question,
    options: optionsWithoutAsterisk
  };
});

const programmingAnswer = randomQuestions5Programming.map(question => {
  return question.options.indexOf(question.options.find(option => option.endsWith('*')));
});

export { questionsForProgramming, programmingAnswer };
