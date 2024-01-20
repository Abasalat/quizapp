import { useEffect, useState } from "react";
import { questionsForUI, answer } from "../database/Data";
import { useDispatch } from "react-redux";

//** redux actions */
import * as Action from "../redux/question_reducer";
let randomQuestions5 = questionsForUI;
let answers = answer;

/* fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    //** async function fetch backend data */
    (async () => {
      try {
        let question = await randomQuestions5;
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: question }));

          //** dispatch an action */
          dispatch(Action.startExamAction({ question, answers }));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

//** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); //**it increase the trace value by 1 */
  } catch (error) {
    console.log(error);
  }
};
//** Prev Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction()); //**it decrease the trace value by 1 */
  } catch (error) {
    console.log(error);
  }
};
