import "../style/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//**import component */
import Main from "./Main";
import { Quiz } from "./Quiz";
import { Quiz2 } from "./Quiz2";
import { Quiz3 } from "./Quiz3";
import { Quiz4 } from "./Quiz4";
import Result from "./Result";
import Data from "../database/Data";
import LandingPage from "./LandingPage";
import LoginForm from "../components/LoginForm";
import Signup from "../components/Signup";
import { CheckUserExist } from "../helper/helper";
//**react routes */

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>,
  },
  {
    path: "/main",
    element: <Main></Main>,
  },
  {
    path: "/login",
    element: <LoginForm></LoginForm>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/quiz",
    element: <CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path: "/quiz2",
    element: <CheckUserExist><Quiz2/></CheckUserExist>
  },
  {
    path: "/quiz3",
    element: <CheckUserExist><Quiz3/></CheckUserExist>
  },
  {
    path: "/quiz4",
    element: <CheckUserExist><Quiz4/></CheckUserExist>
  },
  {
    path: "/result",
    element: <CheckUserExist><Result/></CheckUserExist>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
