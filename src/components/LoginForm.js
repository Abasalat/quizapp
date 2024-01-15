import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3000/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/main", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User has not signed up");
          }
        })
        .catch((e) => {
          alert("Wrong credentials");
          console.log(e);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="wrapper">
      <form action="POST">
        <h1>Login</h1>
        <div className="input-box">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
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
        <input onClick={submit} type="submit" className="Login-btn" />

        <div className="remember-forget">
          <input type="checkbox" style={{ width: "10px" }} />
          <label style={{ marginRight: "5rem" }}>Remember me</label>

          <a href="/">Forgot Password?</a>
        </div>
        <div className="register-link">
          Don't have an account?
          <br />
          <Link to="/signup">Register now</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
