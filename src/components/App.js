import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes, // Change Switch to Routes
} from "react-router-dom";
import axios from "axios";

import "../style/App.css";

import Main from "./Main";
import { Quiz } from "./Quiz";
import { Quiz2 } from "./Quiz2";
import { Quiz3 } from "./Quiz3";
import { Quiz4 } from "./Quiz4";
import Result from "./Result";
import LandingPage from "./LandingPage";
import LoginForm from "../components/LoginForm";
import Signup from "../components/Signup";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "../Home/Home";
import CreateQuiz from "../createquiz/CreateQuiz";
import Result1 from "../CreateResult/Result1";

const App = () => {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );

      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/createquiz",
      element: (
        <CreateQuiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      ),
    },
    {
      path: "/quiz2",
      element: <Quiz2 />,
    },
    {
      path: "/quiz3",
      element: <Quiz3 />,
    },
    {
      path: "/quiz4",
      element: <Quiz4 />,
    },
    {
      path: "/result1",
      element: <Result1 name={name} score={score} />,
    },
    {
      path: "/Home",
      element: (
        <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
      ),
    },
    {
      path: "/result",
      element: <Result />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <div className="app">
        <Header />
        <Routes>
          {" "}
          {/* Change Switch to Routes */}
          <Route
            path="/main"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/createquiz"
            element={
              <CreateQuiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result1"
            element={<Result1 name={name} score={score} />}
          />
        </Routes>
      </div>
      <Footer />
    </RouterProvider>
  );
};

export default App;
