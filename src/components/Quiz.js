import React, { useEffect } from "react";
import Question1 from "./Question1";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestions";
/* redux store import */
import { useSelector, useDispatch } from "react-redux";
const Quiz = () => {

  //const trace = useSelector((state) => state.questions.trace);
  const {queue, trace} = useSelector(state => state.questions);
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(queue);
  });

  /** next biutton event handler */
  function onNext() {
    //** update the race value by one using move next */
    if(trace< queue.length){
      dispatch(MoveNextQuestion())
    }
  }
  function onPrev() {
    if(trace>0){
    dispatch(MovePrevQuestion())
    }
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/*display questoin*/}
      <Question1 />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export { Quiz };
