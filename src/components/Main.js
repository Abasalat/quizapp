import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../style/Main.css";
// import Quiz from "./Quiz";
// import Quiz2 from "./Quiz2";
// import Quiz3 from "./Quiz3";
// import Quiz4 from "./Quiz4";

import Quiz from "./Quizes";
import Home from "../Home/Home";

const Main = () => {
  return (
    <div className="container-main">
      <h1 className=" title text-light">Quiz Application</h1>
      <div className="Mainbox">
        <div className="box b1">
          <h3>Genaral Knowlege</h3>
          <div className="start s1">
            <Link className="btn" to={"/quiz"}>
              Start Quiz
            </Link>
          </div>
        </div>
        <div className="box b2">
          <h3>Sports</h3>
          <div className="start s2">
            <Link className="btn" to={"/quiz2"}>
              Start Quiz
            </Link>
          </div>
        </div>
        <div className="box b3">
          <h3>Science</h3>
          <div className="start s3">
            <Link className="btn" to={"/quiz3"}>
              Start Quiz
            </Link>
          </div>
        </div>
        <div className="box b4">
          <h3>Programming</h3>
          <div className="start s4">
            <Link className="btn" to={"/quiz4"}>
              Start Quiz
            </Link>
          </div>
        </div>
        <div className="box b5">
          <h3>SelectQuiz</h3>
          <div className="start s5">
            <Link className="btn" to={"/Home"}>
              Create
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/quiz" element={<Quiz quizName="General Knowledge" />} />
        <Route path="/quiz2" element={<Quiz quizName="Sports" />} />
        <Route path="/quiz3" element={<Quiz quizName="Science" />} />
        <Route path="/quiz4" element={<Quiz quizName="Programming" />} />
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
