import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

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

import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import "./formController.css";
const resume = require("../components/Templates/resumedata");
const stripePromise = loadStripe(
  "pk_test_51MEcXfKCu6tOY76M3glH98vnG12XLfoyY7tA9sT5APZOwtj6LnhXMPiatC5I8BealmLrL3ejoUoLVU2Se51Caoty00ul1ZAgr5"
);

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
      content: <Preview resume={resume} />,
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

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const doneBtnHandler = async () => {
    getCheckout();
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <div className="flex-container flex-row">
          <Row justify="center" align="middle">
            <Col className="FormContainer">
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
                    onClick={() => prev()}>
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
                      doneBtnHandler();
                    }}>
                    Done
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>
            You must be logged in to access this page!{" "}
          </h2>
          <p style={{ textAlign: "center" }}>
            Click <Link to="/login">here</Link> to go to the login page.
          </p>
        </>
      )}
    </>
  );
};

export default FormController;
