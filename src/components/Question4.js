import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQuestion } from "../hooks/FetchQuestions3";
import { updateResultAction } from "../redux/result_reducer";

const Question4 = ({ onChecked }) => {
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, serverError }] = useFetchQuestion();
  useSelector(state => console.log(state))
  const questions = useSelector((state) => state.questions.queue[state.questions.trace]);
  const dispatch = useDispatch();

  const initialChecked = result[trace] !== undefined ? result[trace] : undefined;
  const [checked, setChecked] = useState(initialChecked);
  const [hasSelection, setHasSelection] = useState(initialChecked !== undefined);

  useEffect(() => {
    setChecked(result[trace]);
    setHasSelection(result[trace] !== undefined);
  }, [result, trace]);

  useEffect(() => {
    return () => {
      setChecked(undefined);
      setHasSelection(false);
    };
  }, []);

  function onSelect(i) {
    if (!hasSelection) {
      onChecked(i);
      setChecked(i);
      setHasSelection(true);
      dispatch(updateResultAction({ trace, checked: i }));
    }
  }

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError) return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;

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
              onChange={() => onSelect(index)}
              checked={checked === index}
              disabled={hasSelection}
            />
            <label className="text-primary" htmlFor={`q1-option-${index}`}>
              {option}
            </label>
            <div className={`check ${checked === index ? "checked" : ""}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question4;
