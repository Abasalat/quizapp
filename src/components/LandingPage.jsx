import React, { useState } from "react";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ullam vero deleniti molestiae! Dicta quo ab culpa
              ullam nemo non vitae facilis delectus eos, cum accusantium
              adipisci perspiciatis quos.
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
