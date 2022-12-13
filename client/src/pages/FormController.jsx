import React, { useState, useEffect } from "react";
import { Row, Col, Steps, Button, message, Form } from "antd";
import {
  UserInfo,
  Summary,
  TechnicalSkills,
  Projects,
  Experience,
  Education,
  Preview,
} from "../components/Forms";

import docSaver from "file-saver";

const { Packer } = require("docx");
const renderResume = require('../components/Templates/template.js');
const doneBtnHandler = async () => {
  const resumeBlob = await Packer.toBlob(renderResume(resume));
  docSaver.saveAs(
      resumeBlob, 
      `${resume.personalInfo.firstName} ${resume.personalInfo.lastName}.docx`
  )
}

const FormController = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [userData, setUserData] = useState({});

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Personal Info",
      content: <UserInfo />,
    },
    {
      title: "Summary",
      content: <Summary />,
    },
    {
      title: "Technical Skills",
      content: <TechnicalSkills />,
    },
    {
      title: "Projects",
      content: <Projects />,
    },
    {
      title: "Experience",
      content: <Experience />,
    },
    {
      title: "Education",
      content: <Education />,
    },
    {
      title: "Preview",
      content: <Preview resume={resume}/>,
      // content: < />, // add <Preview/> here when it's ready
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  useEffect(() => {
    console.log(userData);
  });

  return (
    <Row justify="center" align="middle">
      <Col>
        <Steps current={current} items={items} />

        <div className="steps-content">
          <Form form={form}>{steps[current].content}</Form>
        </div>

        <div className="steps-action">
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}

          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                form.submit();
                setUserData(form.getFieldsValue(true));
                message.success("Your ResuMate is ready to download!");
              }}
            >
              Done
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

const resume = {
  "personalInfo": {
      "firstName": "Tho (Arthur)",
      "lastName": "Ong",
      "address": "792 Sanctuary Ln",
      "city": "Lawrenceville",
      "state": "GA",
      "phoneNumber": "714-589-7485",
      "email": "odthientho@gmail.com",
      "github": "odthientho",
      "linkedin": "odthientho",
      "portfolio": "odthientho.github.io/arthur-portfolio"
  },
  "summary": "A software engineer with a professional education background in Theology (Master) and Computer Science (Bachelor) who has recently been trained at Georgia Tech coding boot camp in full stack web development. Logically computing thinking and problem-solver passionate about developing web-based applications for real life problems. Ability to work in a fast-paced high pressure and in a diverse team-working environment with strong communication and collaboration.",
  "technicalSkills": {
      "languages": ["HTML", "CSS", "JavaScript", "Java", "SQL", "NoSQL"],
      "frameworks": [],
      "libraries": [],
      "concepts": []
  },
  "projects": [
      {
          "name": "ResuMade",
          "github": "github.com/PeytonCast/ResuMade",
          "deployment": "github.com/PeytonCast/ResuMade",
          "summary": "A web app to generate professional employer-ready resumé samples for newly graduates.",
          "responsibility": "Worked as full stack web developer who initialized the project’s idea of resumé generator app.",
          "technologies": ["HTML", "CSS", "JavaScript", "Nodejs", "ExpressJS", "React", "MongoDB", "GraphSQL"]
      },
      {
          "name": "Polished",
          "github": "github.com/lflyew/Polished",
          "deployment": "polished-booking-app.herokuapp.com/",
          "summary": "A web app to book appointments for nail salons customers and salon managers.",
          "responsibility": "Worked as a project manager who initialized the group project’s idea and managed to lead group members from scratch to production.",
          "technologies": ["HTML", "CSS", "JavaScript", "Nodejs", "ExpressJS", "MySQL"]
      }
  ],
  "experiences": [
      {
          "isCurrent": true,
          "title": "Nail Salon Front-Desk & Manager",
          "company": "Allure Nail Bar",
          "city": "Alpharetta",
          "state": "GA",
          "summary": "Managed a team of 12 technicians for about 5000 customers a month including taking appointments, checking customers in and out, accommodating customers' requests.",
          "startDate": {
              "month": 7,
              "year": 2022
          }
      },
      {
          "isCurrent": false,
          "title": "Campus Staff Minister",
          "company": "InterVarsity Christian Fellowship",
          "city": "Atlanta",
          "state": "GA",
          "summary": "Led student ministry; Trained student leaders and volunteers; Developed financial ministry partners",
          "startDate": {
              "month": 6,
              "year": 2020
          },
          "endDate": {
              "month": 6,
              "year": 2022
          }
      },
      {
          "isCurrent": false,
          "title": "Software Engineering",
          "company": "KMS Technology",
          "city": "Ho Chi Minh city",
          "state": "Vietnam",
          "summary": "Passed 3-month probation of on-the-job trainings with the certificate to be Java software engineering",
          "startDate": {
              "month": 3,
              "year": 2015
          },
          "endDate": {
              "month": 6,
              "year": 2015
          }
      }
  ],
  "educations": [
      {
          "degree": "Boot Camp Certificate",
          "fieldOfStudy": "Coding",
          "schoolName": "Georgia Tech Professional Education Center",
          "city": "Atlanta",
          "state": "GA",
          "isCurrent": false,
          "startDate": {
              "month": 7,
              "year": 2022
          },
          "endDate": {
              "month": 12,
              "year": 2022
          }
      },
      {
          "degree": "Master of Divinity",
          "fieldOfStudy": "Theology",
          "schoolName": "Haven University - School of Theology",
          "city": "Garden Grove",
          "state": "CA",
          "isCurrent": false,
          "startDate": {
              "month": 8,
              "year": 2015
          },
          "endDate": {
              "month": 5,
              "year": 2020
          }
      },
      {
          "degree": "Bachelor of Engineering",
          "fieldOfStudy": "Computer Science",
          "schoolName": "Ho Chi Minh city University of Technology",
          "city": "Ho Chi Minh city",
          "state": "Vietnam",
          "isCurrent": false,
          "startDate": {
              "month": 8,
              "year": 2010
          },
          "endDate": {
              "month": 1,
              "year": 2015
          }
      }
    ]
}

export default FormController;
