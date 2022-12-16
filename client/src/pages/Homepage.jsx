import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

import { Carousel, Col, Row } from "antd";

const Homepage = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1 className="title">Welcome to ResuMade</h1>
          <p className="subtitle">Easily create professional resumes here</p>
          <a href="#learn-how" id="learn-link">
            Learn how
          </a>
        </div>
      </div>
      <div className="motto-container">
        <Row>
          <Col span={6} offset={4} xs={20} sm={16} xl={6}>
            <img
              className="motto-img"
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg"
              alt="typewriter"></img>
          </Col>
          <Col span={8} xs={{ span: 20, offset: 2 }} sm={20} xl={8}>
            <h2>Need a resume?</h2>
            <p style={{ fontStyle: "italic" }}>
              "A resume is an important tool for your job search as it offers a
              page or two where you can display your relevant skills and
              qualities for a job. Resumes help employers make hiring decisions
              and help you get your first interview. That's why it matters how
              you structure your resume and what information you decide to
              include."
            </p>
            <p>
              Not sure how to write a resume or tired of creating your own? Just
              fill out our questionnaire and we'll do the work for you.{" "}
            </p>
            {Auth.loggedIn() ? (
              <p>
                <Link to="/dashboard" id="dash-link">
                  Go to your dashboard to create a new resume
                </Link>
              </p>
            ) : (
              <p>
                <Link to="/login" id="start-link">
                  Log in to get started
                </Link>
              </p>
            )}
          </Col>
        </Row>
      </div>
      <div className="preview-section" id="learn-how">
        {/* <Container>
          <Row className="preview-container">
            <Col sm={4}>
              <p>Start by entering your information into our questionnaire</p>
            </Col>
            <Col sm={8}><img src="https://uploads-ssl.webflow.com/6084b8de4ac99398870ea634/6097b9174eb64608cbcb5a08_gpfTiueUTZym2xzjJI7q.png" alt="example question" style={{width: "800px", height: "400px"}}></img>
            </Col>
          </Row>
          <Row className="preview-container">
            <Col sm={8}>
            <img src="https://uploads-ssl.webflow.com/6084b8de4ac99398870ea634/6097b9174eb64608cbcb5a08_gpfTiueUTZym2xzjJI7q.png" alt="example question" style={{width: "800px", height: "400px"}}></img>
            </Col>
            <Col sm={4}>
                <p>Can't finish? </p>
                  <p>No worries, you can save your progress and edit it later.</p>
            </Col>
          </Row>
          <Row className="preview-container">
          <Col sm={4}>
                <p>Once you complete all the questions, you can preview and download your generated resume! EZ</p>
            </Col>
            <Col sm={8}>
            <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402488_quantized.png" alt="example question" ></img>
            </Col>
          </Row>
        </Container> */}
        <div className="carousel-css">
          <Carousel autoplay>
            <div>
              <h2 style={{ padding: "50px" }}>
                1. Create an account to save your information
              </h2>
              <div className="carousel-img">
                <img
                  src="https://uploads-ssl.webflow.com/6084b8de4ac99398870ea634/6097b9174eb64608cbcb5a08_gpfTiueUTZym2xzjJI7q.png"
                  style={{ height: "400 px", width: "500 px" }}
                  alt="form"></img>
              </div>
            </div>
            <div>
              <h2 style={{ padding: "50px" }}>2. Fill out the questionnaire</h2>
              <div className="carousel-img">
                <img
                  src="https://uploads-ssl.webflow.com/6084b8de4ac99398870ea634/6097b9174eb64608cbcb5a08_gpfTiueUTZym2xzjJI7q.png"
                  style={{ height: "400 px", width: "500 px" }}
                  alt="form"></img>
              </div>
            </div>
            <div>
              <h2 style={{ padding: "50px" }}>3. Save and quit anytime</h2>
              <div className="carousel-img">
                <img
                  src="https://uploads-ssl.webflow.com/6084b8de4ac99398870ea634/6097b9174eb64608cbcb5a08_gpfTiueUTZym2xzjJI7q.png"
                  style={{ height: "400 px", width: "500 px" }}
                  alt="form"></img>
              </div>
            </div>
            <div>
              <h2 style={{ padding: "50px" }}>
                4. Preview and download your generated resume after completing
                all the questions!
              </h2>
              <div className="carousel-img">
                <img
                  src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402488_quantized.png"
                  style={{ height: "400 px", width: "500 px" }}
                  alt="form"></img>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
