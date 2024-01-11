import React from "react";
import "../style/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";

const Result = () => {
  function onRestart(){
    console.log('on Restart')
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily tution</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions: </span>
          <span className="bold">10</span>
        </div>
        <div className="flex">
          <span>Total Attempts :</span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total AEarn Points :</span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result:</span>
          <span className="bold">Pass</span>
        </div>
      </div>

      <div className="start">
      <Link className="btn bc" to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className="container">
      {/*This is the result table*/}
      <ResultTable/>
      </div>
    </div>
  );
};

export default Result;
