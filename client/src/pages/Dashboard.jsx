import React from "react";
import AddResumeCard from "../components/AddResume";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Col, Row } from "antd";
import ResumeList from "../components/ResumeList";

//user can add, delete, edit resume
const Dashboard = () => {
  const { data: userObject, loading:loadingData } = useQuery(QUERY_ME);
  const user = userObject?.me || userObject?.user || {};

  //Arthur, this return the whole resume object if you give the resumeID that you are looking for
  const resumeId = ''
  const getResumeObject = (resumeId) => {
    const resumeList = user?.resumes
    if(resumeList) {
       const resumeIndex = resumeList.findIndex(obj => {
      return obj._id == resumeId
    })
      return resumeList[resumeIndex]
    } else {
      return 
    }
   
  }
  
  console.log("answer",getResumeObject(resumeId))

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <h2>Welcome {`${user.username} to your Profile`}!</h2>
          <AddResumeCard />
          <ResumeList />
        </>
      ) : (
        <>
          <Row>
            <Col span={8} xs={{ span: 20, offset: 2 }} sm={20} xl={8}>
              <h1 style={{ textAlign: "center", marginTop: "300px" }}>
                <Link to="/login">Login</Link> to create your resume
              </h1>
              <p style={{ textAlign: "center" }}>
                Or click <Link to="/signup">here</Link> to signup.
              </p>
            </Col>
            <Col span={6} offset={4} xs={20} sm={16} xl={6}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1510442650500-93217e634e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80"
                  alt={"typing"}></img>
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
export default Dashboard;
