import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    if (!name) {
      navigate("/"); // Use navigate instead of history.push
    }
  }, [name, navigate]); // Update the dependencies array

  return (
    <div className="quiz-container">
      <h1 className="quiz-title text-light">Quiz Application</h1>
      <div className="result">
        <span className="text-light final">Final Score : {score}</span>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
        >
          <Link to={"/main"} style={{ textDecoration: "none", color: "white" }}>
            Restart
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Result;
