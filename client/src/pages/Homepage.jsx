import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Auth from "../utils/auth";

import { Carousel } from "antd";

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const Homepage = () => {
  return (
    <div>
        <div className="hero">
          <div className="hero-content">
            <h1 className="title">Welcome to ResuMade</h1>
            <p className="subtitle">Easily create professional resumes here</p>
            <a href="#learn-how" id="learn-link">Learn how</a>
        </div>
    </div>
      <div className="motto-container">
        <Container>
          <Row>
            <Col sm={4}>
              <img
                className="motto-img"
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg"
                alt="typewriter"></img>
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
        </Container>
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
              <h4 style={{padding: '50px'}}>Create an account to save your information</h4>
              <div className="carousel-img">
              <img src="https://uploads-ssl.webflow.com/6084b8de4ac99398870ea634/6097b9174eb64608cbcb5a08_gpfTiueUTZym2xzjJI7q.png" style={{height: '400 px', width: "500 px"}} alt="form"></img>
              </div>
            </div>
            <div>
              <h4 style={{padding: '50px'}}>Fill out the questionnaire</h4>
              <div className="carousel-img">
              <img src="https://uploads-ssl.webflow.com/6084b8de4ac99398870ea634/6097b9174eb64608cbcb5a08_gpfTiueUTZym2xzjJI7q.png" style={{height: '400 px', width: "500 px"}} alt="form"></img>
              </div>
            </div>
            <div>
              <h4 style={{padding: '50px'}}> Save and quit anytime</h4>
              <div className="carousel-img">
              <img src="https://uploads-ssl.webflow.com/6084b8de4ac99398870ea634/6097b9174eb64608cbcb5a08_gpfTiueUTZym2xzjJI7q.png" style={{height: '400 px', width: "500 px"}} alt="form"></img>
              </div>
            </div>
            <div>
              <h4 style={{padding: '50px'}}>Preview and download your generated resume after completing all the questions!</h4>
              <div className="carousel-img">
              <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt16402488_quantized.png" style={{height: '400 px', width: "500 px"}} alt="form"></img>
              </div>
            </div>
           
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
