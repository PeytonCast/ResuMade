import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

import "../index.css";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
// import { useQuery } from "@apollo/client";

// import { QUERY_ME } from "../utils/queries";

const LoginForm = (props) => {
  // const { userData, loading } = useQuery(QUERY_ME);
  // antd func to check values of form after submit
  const onFinish = async (formData) => {
    // console.log("Received values of form: ", formData);

    try {
      const { data } = await login({
        variables: { ...formData },
      });
      Auth.login(data.login.token);

      console.log("userData", data);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setLoginFormData({
      email: "",
      password: "",
    });
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

  // update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  return (
    <div className="login-form">
      <Row align="top" justify="center">
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
                <Form.Item>
                  <p>
                    No account yet? Click <Link to="/signup">here</Link> to
                    signup.
                  </p>
                </Form.Item>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default LoginForm;
