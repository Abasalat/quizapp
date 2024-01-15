import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Email already exists");
          } else if (res.data === "notexist") {
            history("/main", { id: email });
          }
        })
        .catch((e) => {
          alert("Something went wrong");
          console.log(e);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="wrapper">
      <form method="POST">
        <h1>Sign Up</h1>
        <div className="input-box">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="input-box">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <input onClick={submit} className="Login-btn" type="submit" />
        <div className="register-link">
          Already have an account?
          <div>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
