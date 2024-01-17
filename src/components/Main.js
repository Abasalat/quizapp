import React, { useRef } from "react";
import {useDispatch} from 'react-redux'
import { Link, useLocation, Route, Routes } from "react-router-dom";
import "../style/Main.css";
// import Quiz from "./Quiz";
// import Quiz2 from "./Quiz2";
// import Quiz3 from "./Quiz3";
// import Quiz4 from "./Quiz4";

import Quiz from "./Quizes";
import { setUserId } from "../redux/result_reducer";

const Main = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch()

  function startQuiz(){
    if(inputRef.current?.value){
      dispatch(setUserId(inputRef.current?.value))
    }
  }

  const location = useLocation();
  return (
    <div className="container-main">
     {/* <h3 style={{ color: "white" }}>
        Welcome {location.state && location.state.id}
  </h3>*/}
      <h1 className=" title text-light">Quiz Application</h1>
      <div className="Mainbox">
        <div className="box b1">
          <h3>Genaral Knowlege</h3>
          <div className="start s1">
            <Link className="btn" to={"/quiz"} onClick={startQuiz} >
              Start Quiz
            </Link>
          </div>
        </div>
        <div className="box b2">
          <h3>Sports</h3>
          <div className="start s2">
            <Link className="btn" to={"/quiz2"} onClick={startQuiz}>
              Start Quiz
            </Link>
          </div>
        </div>
        <div className="box b3">
          <h3>Science</h3>
          <div className="start s3">
            <Link className="btn" to={"/quiz3"} onClick={startQuiz}>
              Start Quiz
            </Link>
          </div>
        </div>
        <div className="box b4">
          <h3>Programming</h3>
          <div className="start s4">
            <Link className="btn" to={"/quiz4"} onClick={startQuiz}>
              Start Quiz
            </Link>
          </div>
        </div>
      </div>

      <form id="form">
        <input
          ref={inputRef}
          type="text"
          className="userid"
          placeholder="UserName*"
        />
      </form>

      <Routes>
        <Route path="/quiz" element={<Quiz quizName="General Knowledge" />} />
        <Route path="/quiz2" element={<Quiz quizName="Sports" />} />
        <Route path="/quiz3" element={<Quiz quizName="Science" />} />
        <Route path="/quiz4" element={<Quiz quizName="Programming" />} />
      </Routes>
    </div>
  );
};

export default Main;
