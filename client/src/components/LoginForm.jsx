import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  Card,
  ConfigProvider,
} from "antd";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const LoginForm = () => {
  // from antd login form
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  // Login auth variables
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}>
      <Col span={12}>
        <Card>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}>
            <Form.Item
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
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
              value={userFormData.password}
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
            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              {/* <a className="login-form-forgot" href="">
                Forgot password
              </a> 
            </Form.Item> */}

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
        </Card>
      </Col>

      <Col span={12}>
        <Card>
          <Form name="register" onFinish={onFinish}>
            <Form.Item
              name="email"
              label="E-mail"
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
      </Col>
    </Row>
  );
};
export default LoginForm;
