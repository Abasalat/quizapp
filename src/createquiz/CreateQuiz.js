import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import "./Quiz.css";

const CreateQuiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  //   <span
  //   style={{ color: "white", boxShadow: "2px 2px 4px white" }}
  //   className="subtitle"
  // >
  //   Welcome, {name}
  // </span>

  return (
    <div className="quiz-container">
      <h1 className="quiz-title text-light">Quiz Application</h1>

      {questions ? (
        <>
          <div className="quizInfo ">
            <span className="text-light">{questions[currQues].category}</span>
            <span className="text-light">
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default CreateQuiz;
