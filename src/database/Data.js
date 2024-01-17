// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Array of questions with added randomization
const gkQuestions = shuffleArray([
  {
    id: 1,
    question: "JavaScript is an options :",
    options: ["Object-Oriented", "Object-Based", "Procedural", "Language*"],
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris*", "Rome"],
  },
  {
    id: 3,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare*",
      "Mark Twain",
    ],
  },
  {
    id: 4,
    question: "In which year did World War II end?",
    options: ["1943", "1945*", "1950", "1939"],
  },
  {
    id: 5,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter*", "Saturn", "Mars"],
  },
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci*",
      "Pablo Picasso",
      "Michelangelo",
    ],
  },
  {
    id: 7,
    question: "What is the currency of Japan?",
    options: ["Yen*", "Won", "Dollar", "Euro"],
  },
  {
    id: 8,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars*", "Jupiter", "Mercury"],
  },
  {
    id: 9,
    question: "Who was the first President of the United States?",
    options: [
      "Thomas Jefferson",
      "George Washington*",
      "Abraham Lincoln",
      "John Adams",
    ],
  },
  {
    id: 10,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean*",
    ],
  },
  {
    id: 11,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen*", "Gold", "Silver", "Carbon"],
  },
  {
    id: 12,
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein*",
      "Galileo Galilei",
      "Stephen Hawking",
    ],
  },
  {
    id: 13,
    question: "What is the longest river in the world?",
    options: ["Nile*", "Amazon", "Mississippi", "Yangtze"],
  },
  {
    id: 14,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan*", "Vietnam"],
  },
  {
    id: 15,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["J.K. Rowling", "Harper Lee*", "George Orwell", "Mark Twain"],
  },
  {
    id: 16,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale*", "Giraffe", "Hippopotamus"],
  },
  {
    id: 17,
    question: "In which year did the Titanic sink?",
    options: ["1912*", "1920", "1901", "1931"],
  },
  {
    id: 18,
    question: "Who is known as the 'Father of Computer Science'?",
    options: ["Bill Gates", "Alan Turing*", "Steve Jobs", "Charles Babbage"],
  },
  {
    id: 19,
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Nitrogen*", "Oxygen", "Carbon Dioxide", "Argon"],
  },
  {
    id: 20,
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming*",
      "Louis Pasteur",
      "Robert Koch",
    ],
  },
  {
    id: 21,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2*", "3"],
  },
  {
    id: 22,
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Venus*", "Mercury", "Mars", "Jupiter"],
  },
  {
    id: 23,
    question: "Who painted the Sistine Chapel ceiling?",
    options: ["Leonardo da Vinci", "Michelangelo*", "Raphael", "Donatello"],
  },
  {
    id: 24,
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert*", "Arctic Desert", "Gobi Desert", "Antarctica"],
  },
  {
    id: 25,
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion*", "Tiger", "Leopard", "Cheetah"],
  },
]);

const randomQuestions5 = gkQuestions.slice(0, 5);

const questionsForUI = randomQuestions5.map((question) => {
  const optionsWithoutAsterisk = question.options.map((option) =>
    option.replace(/\*$/, "")
  );
  return {
    id: question.id,
    question: question.question,
    options: optionsWithoutAsterisk,
  };
});

const answer = randomQuestions5.map((question) => {
  return question.options.indexOf(
    question.options.find((option) => option.endsWith("*"))
  );
});
export { questionsForUI };
export default answer;
