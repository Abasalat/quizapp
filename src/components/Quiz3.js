import React, { useState } from "react";
import Question3 from "./Question3";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestions2";
import { PushAnswer } from "../hooks/setResult";
/* redux store import */
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const Quiz3 = () => {
  const [check, setChecked] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();


  /** next biutton event handler */
  function onNext() {
    //** update the race value by one using move next */
    console.log("Nexttt");
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      //**insert a new result in the array */
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    //** reset the value of the checked */
    setChecked(undefined)
  }
  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }

  //** finished exam after last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/*display questoin*/}
      <Question3 onChecked={onChecked} />

      <div className="grid">
        { trace > 0 ? <button className="btn prev" onClick={onPrev}>Prev</button>: <div></div>}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export { Quiz3 };
