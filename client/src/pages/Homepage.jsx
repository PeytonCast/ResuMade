import React from "react";
import "../index.css";
import { Jumbotron } from "react-bootstrap";
import { Col, Row } from "antd";

const Homepage = () => {
  return (
    <div>
      <Jumbotron>
        <div className="hero">
          <div className="hero-text d-flex justify-content-center align-items-center h-100">
            <h1>Welcome to ResuMade</h1>
            <p>Easily create your resume here</p>
          </div>
        </div>
      </Jumbotron>
      <div className="example-container">
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    </div>
  );
};

export default Homepage;
