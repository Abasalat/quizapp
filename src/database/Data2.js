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
    question: "What is the chemical symbol for water?",
    options: [
      'H2O',
      'CO2',
      'O2',
      'N2'
    ]
  },
  {
    id: 2,
    question: "Who is known as the 'Father of Modern Physics'?",
    options: [
      'Isaac Newton',
      'Galileo Galilei',
      'Albert Einstein',
      'Niels Bohr'
    ]
  },
  {
    id: 3,
    question: "What is the powerhouse of the cell?",
    options: [
      'Nucleus',
      'Mitochondria',
      'Endoplasmic Reticulum',
      'Golgi Apparatus'
    ]
  },
  {
    id: 4,
    question: "Which gas is responsible for the greenhouse effect on Earth?",
    options: [
      'Oxygen',
      'Carbon Dioxide',
      'Nitrogen',
      'Methane'
    ]
  },
  {
    id: 5,
    question: "What is the largest planet in our solar system?",
    options: [
      'Earth',
      'Jupiter',
      'Saturn',
      'Mars'
    ]
  },
  {
    id: 6,
    question: "Who developed the theory of relativity?",
    options: [
      'Isaac Newton',
      'Albert Einstein',
      'Galileo Galilei',
      'Stephen Hawking'
    ]
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: [
      'Au',
      'Ag',
      'Fe',
      'Cu'
    ]
  },
  {
    id: 8,
    question: "Which element has the atomic number 1?",
    options: [
      'Hydrogen',
      'Oxygen',
      'Helium',
      'Carbon'
    ]
  },
  {
    id: 9,
    question: "What is the process by which plants make their own food?",
    options: [
      'Photosynthesis',
      'Respiration',
      'Fermentation',
      'Transpiration'
    ]
  },
  {
    id: 10,
    question: "Who discovered penicillin?",
    options: [
      'Marie Curie',
      'Alexander Fleming',
      'Louis Pasteur',
      'Robert Koch'
    ]
  },
  {
    id: 11,
    question: "What is the smallest unit of matter?",
    options: [
      'Molecule',
      'Atom',
      'Cell',
      'Particle'
    ]
  },
  {
    id: 12,
    question: "What is the chemical formula for methane?",
    options: [
      'CH4',
      'CO2',
      'H2O',
      'O2'
    ]
  },
  {
    id: 13,
    question: "Who proposed the theory of evolution by natural selection?",
    options: [
      'Charles Darwin',
      'Gregor Mendel',
      'Alfred Russel Wallace',
      'Jean-Baptiste Lamarck'
    ]
  },
  {
    id: 14,
    question: "What is the SI unit for measuring temperature?",
    options: [
      'Celsius',
      'Kelvin',
      'Fahrenheit',
      'Rankine'
    ]
  },
  {
    id: 15,
    question: "What is the chemical symbol for iron?",
    options: [
      'Fe',
      'Au',
      'Ag',
      'Cu'
    ]
  },
  {
    id: 16,
    question: "What is the process of turning a gas into a liquid?",
    options: [
      'Condensation',
      'Evaporation',
      'Sublimation',
      'Melting'
    ]
  },
  {
    id: 17,
    question: "Who formulated the laws of motion and universal gravitation?",
    options: [
      'Isaac Newton',
      'Galileo Galilei',
      'Albert Einstein',
      'Nikola Tesla'
    ]
  },
  {
    id: 18,
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: [
      'Oxygen',
      'Carbon Dioxide',
      'Nitrogen',
      'Helium'
    ]
  },
  {
    id: 19,
    question: "What is the chemical symbol for sodium?",
    options: [
      'Na',
      'K',
      'Ca',
      'Mg'
    ]
  },
  {
    id: 20,
    question: "Who discovered radium and polonium?",
    options: [
      'Marie Curie',
      'Albert Einstein',
      'Niels Bohr',
      'Max Planck'
    ]
  },
  {
    id: 21,
    question: "What is the speed of light in a vacuum?",
    options: [
      '299,792 kilometers per second',
      '150,000 kilometers per second',
      '450,000 kilometers per second',
      '600,000 kilometers per second'
    ]
  },
  {
    id: 22,
    question: "Which planet is known as the 'Red Planet'?",
    options: [
      'Venus',
      'Mars',
      'Jupiter',
      'Mercury'
    ]
  },
  {
    id: 23,
    question: "Who is considered the 'Father of Chemistry'?",
    options: [
      'Robert Boyle',
      'Antoine Lavoisier',
      'John Dalton',
      'Dmitri Mendeleev'
    ]
  },
  {
    id: 24,
    question: "What is the chemical symbol for oxygen?",
    options: [
      'O2',
      'O3',
      'CO2',
      'H2O'
    ]
  },
  {
    id: 25,
    question: "What is the largest organ in the human body?",
    options: [
      'Heart',
      'Liver',
      'Brain',
      'Skin'
    ]
  }
]);
const randomQuestions5 = scienceQuestions.slice(0, 5);
const questionsForScience = randomQuestions5.map(question => {
  const optionsWithoutAsterisk = question.options.map(option => option.replace(/\*$/, ''));
  return {
    id: question.id,
    question: question.question,
    options: optionsWithoutAsterisk
  };
});

const scanswer = randomQuestions5.map(question => {
  return question.options.indexOf(question.options.find(option => option.endsWith('*')));
});

export { questionsForScience, scanswer};

