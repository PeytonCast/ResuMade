import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
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

import { useNavigate, Navigate } from "react-router-dom"; //for redirecting after login

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = (props) => {
  // antd func to check values of form after submit
  const onFinish = (data) => {
    console.log("hello from loginform")
    console.log("Received values of form: ", data);
    nav("/dashboard");
  };

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  // set state for form validation --- kept giving me errors in console, believe this is for bootstrap form. Not need with antd form
  // const [validated] = useState(false);

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const nav = useNavigate();

  return (
    <Row
      align="middle"
      justify="center"
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}>
      <Col span={12}>
        <Card style={{ height: 352 }}>
          <Divider>Login to your account</Divider>
          {showAlert && (
            <Alert
              type="error"
              message="Login Error"
              description="Something went wrong with your login credentials!"
              closable
            />
          )}
          {data ? (
            <p>Success!</p>
          ) : (
            <Form
              // noValidate
              // validated={validated}
              name="normal_login"
              className="login-form"
              onFinish={onFinish}>
              <Form.Item
                name="email"
                onChange={handleInputChange}
                value={loginFormData.email}
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}>
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                onChange={handleInputChange}
                value={loginFormData.password}
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
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
                    className="login-form-button">
                    Log in
                  </Button>
                </ConfigProvider>
              </Form.Item>
            </Form>
          )}
        </Card>
      </Col>

      {/* SIGN UP FORM */}
      {/* <Col span={12}>
        <Card>
          <Divider>Create an account</Divider>
          <Form name="register" onFinish={onFinish}>
            <Form.Item
              name="email"
              label="Email"
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
          </Form>
        </Card> 
      </Col>*/}
    </Row>
  );
};
export default LoginForm;

