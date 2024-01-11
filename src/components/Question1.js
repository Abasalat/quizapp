import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetchQuestion } from "../hooks/FetchQuestions";

const Question1 = () => {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  
  const questions = useSelector((state) => state.questions.queue[state.questions.trace]);
  useEffect(() => {
    //console.log(questions);
  });

  function onSelect() {
    //console.log('radio button change');
  }

  if(isLoading) return <h3 className="text-light">isLoading</h3>
  if(serverError) return <h3 className="text-light">{serverError || "Unknown Error"}</h3>

  // Check if question is defined before rendering its properties
  return (
    <div className="questions">
          <h2 className="text-light">{questions?.question}</h2>
          <ul key={questions?.id}>
            {questions?.options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  value={option}
                  name="options"
                  id={`q1-option-${index}`}
                  onChange={onSelect}
                />
                <label className="text-primary" htmlFor={`q1-option-${index}`}>
                  {option}
                </label>
                <div className="check"></div>
              </li>
            ))}
          </ul>
    </div>
  );
};

export default Question1;
