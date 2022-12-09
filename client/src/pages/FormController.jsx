import React, { useState } from "react";
import { Row, Col, Steps, Button, message } from "antd";
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

  return (
    <Row justify="center" align="middle">
      <Col>
        <Steps current={current} items={items} />
        <div className="steps-content">{steps[current].content}</div>
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
              onClick={() => message.success("Processing complete!")}
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
