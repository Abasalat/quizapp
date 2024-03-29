import React from "react";
import "../style/Result.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer"; //**import actions*/
import { resetResultAction } from "../redux/result_reducer";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  //** store user result */

  function onRestart() {
    //console.log('on Restart')
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className="container-main text-white">
      <h1 className="title text-light">Quiz Application</h1>
      <div className="result flex-center">
        <div
          className="flex"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Total Quiz Points: </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div
          className="flex"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Total Questions: </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div
          className="flex"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Total Attempts: </span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div
          className="flex"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Total Earn Points: </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div
          className="flex"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Quiz Result: </span>
          <span
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>

      <div className="start">
        <Link className="btn bc" to={"/main"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container-main">
        {/*This is the result table*/}
        <div>
          <table style={{ color: "black" }}>
            <thead className="table-header">
              <tr className="table-row">
                <td>Name</td>
                <td>Attemps</td>
                <td>Earn Points</td>
                <td>Result</td>
              </tr>
            </thead>
            <tbody>
              <tr className="table-body">
                <td>Salat</td>
                <td>{attempts || 0}</td>
                <td>{totalPoints || 0}</td>
                <td>{earnPoints || 0}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Result;
