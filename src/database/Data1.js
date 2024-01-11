// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const sportsQuestions = shuffleArray([
  {
    id: 1,
    question: "Which country won the FIFA World Cup in 2018?",
    options: [
      'Brazil',
      'Germany',
      'France',
      'Spain'
    ]
  },
  {
    id: 2,
    question: "Who is often referred to as 'The King' in tennis?",
    options: [
      'Roger Federer',
      'Rafael Nadal',
      'Novak Djokovic',
      'Serena Williams'
    ]
  },
  {
    id: 3,
    question: "In which year did Usain Bolt set the world record for the 100 meters?",
    options: [
      '2008',
      '2012',
      '2016',
      '2020'
    ]
  },
  {
    id: 4,
    question: "Which sport is known as the 'Gentleman's Game'?",
    options: [
      'Soccer',
      'Cricket',
      'Golf',
      'Tennis'
    ]
  },
  {
    id: 5,
    question: "Who won the 2021 NBA Finals?",
    options: [
      'Los Angeles Lakers',
      'Golden State Warriors',
      'Milwaukee Bucks',
      'Toronto Raptors'
    ]
  },
  {
    id: 6,
    question: "In which city are the headquarters of the International Olympic Committee (IOC) located?",
    options: [
      'Geneva',
      'Paris',
      'Lausanne',
      'Brussels'
    ]
  },
  {
    id: 7,
    question: "Which golfer is known as the 'Golden Bear'?",
    options: [
      'Arnold Palmer',
      'Tiger Woods',
      'Jack Nicklaus',
      'Phil Mickelson'
    ]
  },
  {
    id: 8,
    question: "What is the scoring system called in tennis?",
    options: [
      'Points',
      'Scores',
      'Ranks',
      'Love'
    ]
  },
  {
    id: 9,
    question: "Which country hosted the 2016 Summer Olympics?",
    options: [
      'China',
      'Brazil',
      'United States',
      'Russia'
    ]
  },
  {
    id: 10,
    question: "Who holds the record for the most goals scored in a single football (soccer) season?",
    options: [
      'Pele',
      'Lionel Messi',
      'Cristiano Ronaldo',
      'Gerd Muller'
    ]
  },
  {
    id: 11,
    question: "Which athlete is known as 'Lightning Bolt'?",
    options: [
      'Usain Bolt',
      'Carl Lewis',
      'Michael Johnson',
      'Jesse Owens'
    ]
  },
  {
    id: 12,
    question: "In which sport would you perform a slam dunk?",
    options: [
      'Basketball',
      'Tennis',
      'Volleyball',
      'Badminton'
    ]
  },
  {
    id: 13,
    question: "Who is the all-time leading scorer in NBA history?",
    options: [
      'Kobe Bryant',
      'LeBron James',
      'Kareem Abdul-Jabbar',
      'Michael Jordan'
    ]
  },
  {
    id: 14,
    question: "Which Formula 1 team does Lewis Hamilton drive for?",
    options: [
      'Ferrari',
      'Mercedes',
      'Red Bull Racing',
      'McLaren'
    ]
  },
  {
    id: 15,
    question: "What is the diameter of a standard basketball hoop in inches?",
    options: [
      '16',
      '18',
      '20',
      '22'
    ]
  },
  {
    id: 16,
    question: "Which country has won the most Olympic gold medals?",
    options: [
      'United States',
      'China',
      'Russia',
      'Germany'
    ]
  },
  {
    id: 17,
    question: "Who is the captain of the Indian cricket team (as of 2022)?",
    options: [
      'Virat Kohli',
      'Rohit Sharma',
      'KL Rahul',
      'Ajinkya Rahane'
    ]
  },
  {
    id: 18,
    question: "What is the term for a perfect score of 10 in gymnastics?",
    options: [
      'Flawless',
      'Superb',
      'Perfect',
      'Excellence'
    ]
  },
  {
    id: 19,
    question: "Which city hosted the 2012 Summer Olympics?",
    options: [
      'Sydney',
      'Beijing',
      'London',
      'Rio de Janeiro'
    ]
  },
  {
    id: 20,
    question: "In which year did the first modern Olympic Games take place?",
    options: [
      '1896',
      '1900',
      '1920',
      '1936'
    ]
  },
  {
    id: 21,
    question: "Who won the 2021 Wimbledon Men's Singles title?",
    options: [
      'Novak Djokovic',
      'Roger Federer',
      'Rafael Nadal',
      'Andy Murray'
    ]
  },
  {
    id: 22,
    question: "Which country is known as the 'Land of the Long White Cloud' in rugby?",
    options: [
      'Australia',
      'New Zealand',
      'South Africa',
      'England'
    ]
  },
  {
    id: 23,
    question: "What is the distance of a marathon in kilometers?",
    options: [
      '26.2',
      '21.1',
      '42.2',
      '35.0'
    ]
  },
  {
    id: 24,
    question: "Who is the most decorated Olympian of all time?",
    options: [
      'Michael Phelps',
      'Usain Bolt',
      'Simone Biles',
      'Nadia Comaneci'
    ]
  },
  {
    id: 25,
    question: "Which country won the 2019 Cricket World Cup?",
    options: [
      'India',
      'Australia',
      'England',
      'South Africa'
    ]
  }
]);

const randomQuestions5 = sportsQuestions.slice(0, 5);
export default randomQuestions5;
