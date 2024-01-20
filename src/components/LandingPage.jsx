import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import vector from "../assets/img/vector-2.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <Container className="text-white">
        <Row>
          <Col xs={12} md={5}>
            <Image src={vector} fluid className=" mt-5" />
          </Col>
          <Col xs={12} md={7} className="mt-5 pt-5 text-center">
            <h1>Welcome to Quiz App</h1>
            <h2 className="mt-3" style={{ fontWeight: "100" }}>
              Your ultimate Quiz Experience
            </h2>
            <Link className="mobile-btn" to={"/login"}>
              <Button className="get-started mt-3">Get Started</Button>
            </Link>

            <p className="mt-5 ">
              Welcome to Quiz App, where you are about to embark on your
              ultimate Quiz Experience. Get ready to test your knowledge,
              challenge your intellect, and have a thrilling time answering a
              diverse range of questions. Whether you're a trivia enthusiast or
              a casual player, our Quiz App is designed to provide you with an
              engaging and enjoyable experience. Dive into the world of quizzes
              and let the excitement begin!
            </p>

            <Link to={"/login"}>
              <Button className="pc-btn get-started mt-3">Get Started</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
