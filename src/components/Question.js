import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";
import ErrorMessage from "./Error/ErrorMeassage";

// ... (existing code)

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const buttonStyle = { width: 185 };

  const handleSelect = (i) => {
    if (selectedOptions[currQues] === i) {
      return "select";
    } else if (selectedOptions[currQues] !== null && i === correct) {
      return "correct";
    } else if (selectedOptions[currQues] === i && i !== correct) {
      return "wrong";
    }
  };

  const handleCheck = (i) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currQues] = i;
    setSelectedOptions(newSelectedOptions);

    if (i === correct) {
      setScore(score + 10);
      setError(false);
    } else {
      setError(`Incorrect! The correct option is: ${correct}`);
    }
  };

  const handleNext = () => {
    if (currQues >= 5) {
      navigate("/result1");
    } else if (selectedOptions[currQues] !== null) {
      setCurrQues(currQues + 1);
      setError(false);
    } else {
      setError("Please select an option before moving to the next question.");
    }
  };

  const handlePrev = () => {
    if (currQues > 0) {
      setCurrQues(currQues - 1);
      setError(false);
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions([]);
  };

  return (
    <div className="container-main">
      {questions[currQues]?.question && (
        <div className="question">
          <h2 className="text-light singleQuestion">
            {questions[currQues].question}
          </h2>
          <ul key={questions?.id} className="options">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((i, index) => (
                <li key={index}>
                  <button
                    className={`singleOption ${handleSelect(i)}`}
                    onClick={() => handleCheck(i)}
                    disabled={selectedOptions[currQues] !== null}
                  >
                    {i}
                  </button>
                </li>
              ))}
            <div className="controls ">
              <Button
                className="bt"
                variant="contained"
                color="secondary"
                size="large"
                style={buttonStyle}
                onClick={handlePrev}
              >
                Prev
              </Button>
              <Button
                className="bt"
                variant="contained"
                color="primary"
                size="large"
                style={buttonStyle}
                onClick={handleNext}
              >
                {currQues >= 5 ? "Submit" : "Next"}
              </Button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Question;
