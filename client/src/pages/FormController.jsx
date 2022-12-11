import React, { useState, useEffect } from "react";
import { Row, Col, Steps, Button, message, Form } from "antd";
import {
  UserInfo,
  Summary,
  TechnicalSkills,
  Projects,
  Experience,
  Education,
} from "../components/Forms";

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

export default FormController;
