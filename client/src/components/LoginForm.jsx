import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Card, ConfigProvider } from 'antd';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Row> 
      <Col span={12}>
        <Card>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              {/* <a className="login-form-forgot" href="">
                Forgot password
              </a> */}
            </Form.Item>

            <Form.Item>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#141414',
                },
              }}
            >
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              </ConfigProvider>
            </Form.Item>
          </Form>
        </Card>
      </Col>

      <Col span={12}>
        <Card>
          <Form
            name="register"
            onFinish={onFinish}
            >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              labelWrap
              wrapperCol={{
                flex: 1,
              }}
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#141414',
                },
              }}
            >
              <Button type="primary" htmlType="submit" className="signup-form-button">
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