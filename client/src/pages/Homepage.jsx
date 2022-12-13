import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Auth from "../utils/auth";

const Homepage = () => {
  return (
    <div>
      <div>
        <div className="hero">
          <div className="hero-content">
            <h1 className="title">Welcome to ResuMade</h1>
            <p className="subtitle">Easily create professional resumes here</p>
          </div>
        </div>
      </div>
      <div className="example-container">
        <Container>
          <Row>
            <Col sm={4}>
              <img
                className="example-img"
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg"
                alt="example"></img>
            </Col>
            <Col sm={8}>
              <h3>Need a resume?</h3>
              <p style={{ fontStyle: "italic" }}>
                "A resume is an important tool for your job search as it offers
                a page or two where you can display your relevant skills and
                qualities for a job. Resumes help employers make hiring
                decisions and help you get your first interview. That's why it
                matters how you structure your resume and what information you
                decide to include."
              </p>
              <p>
                Not sure how to write a resume or tired of creating your own?
                Just fill out our questionnaire and we'll do the work for you.{" "}
              </p>
              {Auth.loggedIn() ? (
                <p>
                  <Link to="/dashboard" className="link">
                    Go to your dashboard.
                  </Link>
                </p>
              ) : (
                <p>
                  <Link to="/login" className="link">
                    Log in to get started.
                  </Link>
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
