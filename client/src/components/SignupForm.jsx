import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Card,
  ConfigProvider,
  Divider,
  Alert,
} from "antd";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const SignupForm = (props) => {
  const { userData, loading } = useQuery(QUERY_ME);
  const [signup, { error, data }] = useMutation(ADD_USER);

  const [signupFormData, setSignupFormData] = useState({
    email: "",
    password: "",
  });

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupFormData({ ...signupFormData, [name]: value });
  };

  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  // onFinish = onSubmit
  const onFinish = async (formData) => {
    // console.log("Received values of form: ", formData);

    try {
      const { data } = await signup({
        variables: { ...formData },
      });
      Auth.login(data.signup.token);

      console.log("userData", data);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setSignupFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Row align="middle" justify="center">
      <Col span={12}>
        <Card>
          <Divider>Create an account</Divider>
          {showAlert && (
            <Alert
              type="error"
              message="Signup Error"
              description="Something went wrong with your login credentials!"
              closable
            />
          )}
          {data ? (
            <p>Your account has been created!</p>
          ) : (
            <Form name="register" onFinish={onFinish}>
              <Form.Item
                name="email"
                label="Your Email"
                onChange={handleInputChange}
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                onChange={handleInputChange}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback>
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}>
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#141414",
                    },
                  }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="signup-form-button">
                    Sign Up
                  </Button>
                </ConfigProvider>
              </Form.Item>
              <Form.Item>
                <p>
                  Have an account?{" "}
                  <Link to="/login" className="link">
                    Login here.
                  </Link>
                </p>
              </Form.Item>
            </Form>
          )}
        </Card>
      </Col>
    </Row>
  );
};
export default SignupForm;
