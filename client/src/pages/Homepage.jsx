import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { Carousel, Col, Row, Layout } from "antd";
import dashboardCap from "../assets/dashboard-cap.png";
import formPreview1 from "../assets/form-preview-1.png";
import formPreview2 from "../assets/form-preview-2.png";
import resumePreview from "../assets/resume-preview-cap.png";
import signupPreveiw from "../assets/signup-cap.png";

const { Content } = Layout;

const Homepage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <div className="home-content">
          <div className="hero">
            <div className="hero-content">
              <h1 className="title">Welcome to ResuMade</h1>
              <p className="subtitle">
                Easily create professional resumes here
              </p>
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
                  "A resume is an important tool for your job search as it
                  offers a page or two where you can display your relevant
                  skills and qualities for a job. Resumes help employers make
                  hiring decisions and help you get your first interview. That's
                  why it matters how you structure your resume and what
                  information you decide to include."
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
          </div>
          <div className="preview-section" id="learn-how">
            <div className="carousel-css">
              <Carousel autoplay>
                <div>
                  <h2 style={{ padding: "50px" }}>
                    1. Create an account to save your information
                  </h2>
                  <div className="carousel-img">
                    <img
                      src={signupPreveiw}
                      style={{ maxHeight: 600, maxWidth: 800 }}
                      alt="form"></img>
                  </div>
                </div>
                <div>
                  <h2 style={{ padding: "50px" }}>
                    2. Fill out the questionnaire
                  </h2>
                  <div className="carousel-img">
                    <img
                      src={formPreview1}
                      style={{ maxHeight: 600, maxWidth: 800 }}
                      alt="form"></img>
                  </div>
                </div>
                <div>
                  <h2 style={{ padding: "50px" }}>
                    3. Preview your resume and download
                  </h2>
                  <div className="carousel-img">
                    <img
                      src={resumePreview}
                      style={{ maxHeight: 600, maxWidth: 800 }}
                      alt="form"></img>
                  </div>
                </div>
                <div>
                  <h2 style={{ padding: "50px" }}>
                    4. Your resumes will be automatically saved to your account
                    dashboard
                  </h2>
                  <div className="carousel-img">
                    <img
                      src={dashboardCap}
                      style={{ maxHeight: 600, maxWidth: 800 }}
                      alt="form"></img>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Homepage;
