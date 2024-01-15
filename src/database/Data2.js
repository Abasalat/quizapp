// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const scienceQuestions = shuffleArray([
  {
    id: 1,
    question: "What is the chemical symbol for gold?",
    options: [
      'Au*',
      'Ag',
      'Fe',
      'Cu'
    ]
  },
  {
    id: 2,
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      'Oxygen',
      'Nitrogen*',
      'Carbon dioxide',
      'Argon'
    ]
  },
  {
    id: 3,
    question: "What is the powerhouse of the cell?",
    options: [
      'Nucleus',
      'Mitochondria*',
      'Endoplasmic reticulum',
      'Golgi apparatus'
    ]
  },
  {
    id: 4,
    question: "Who developed the theory of relativity?",
    options: [
      'Isaac Newton',
      'Galileo Galilei',
      'Albert Einstein*',
      'Niels Bohr'
    ]
  },
  {
    id: 5,
    question: "What is the chemical formula for water?",
    options: [
      'H2O*',
      'CO2',
      'O2',
      'CH4'
    ]
  },
  {
    id: 6,
    question: "Which planet is known as the Red Planet?",
    options: [
      'Venus',
      'Mars*',
      'Jupiter',
      'Saturn'
    ]
  },
  {
    id: 7,
    question: "What is the smallest unit of matter?",
    options: [
      'Atom*',
      'Molecule',
      'Cell',
      'Proton'
    ]
  },
  {
    id: 8,
    question: "Which element has the chemical symbol 'C'?",
    options: [
      'Calcium',
      'Carbon*',
      'Copper',
      'Chlorine'
    ]
  },
  {
    id: 9,
    question: "Who is known as the father of modern physics?",
    options: [
      'Isaac Newton',
      'Niels Bohr',
      'Galileo Galilei',
      'Albert Einstein*'
    ]
  },
  {
    id: 10,
    question: "What is the speed of light in a vacuum?",
    options: [
      '299,792 kilometers per second*',
      '150,000 kilometers per second',
      '500,000 kilometers per second',
      '1 million kilometers per second'
    ]
  }
]);

const randomQuestions5Science = scienceQuestions.slice(0, 5);

const questionsForScience = randomQuestions5Science.map(question => {
  const optionsWithoutAsterisk = question.options.map(option => option.replace(/\*$/, ''));
  return {
    id: question.id,
    question: question.question,
    options: optionsWithoutAsterisk
  };
});

const scienceAnswer = randomQuestions5Science.map(question => {
  return question.options.indexOf(question.options.find(option => option.endsWith('*')));
});

export { questionsForScience, scienceAnswer };
