import React from "react";
import { Form, Input, Row, Col, Space, InputNumber } from "antd";

const UserInfo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="userInfo"
      // labelCol={{
      //   span: 8,
      // }}
      // wrapperCol={{
      //   span: 16,
      // }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      {/* <Space
        direction="vertical"
        size="large"
        style={{
          display: "flex",
        }}
      ></Space> */}

      <Row>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            // wrapperCol={{
            //   offset: 8,
            //   span: 16,
            // }}
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            {/* default input to all caps */}
            <Input maxLength={2} />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item
            label="Zip"
            name="zip"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <InputNumber min={5} max={9} />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Professional Email"
            name="professionalEmail"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Socials" name="socials">
        <Input.Group>
          <Input addonBefore="https://" placeholder="Github" />
          <Input addonBefore="https://" placeholder="LinkedIn" />
          <Input addonBefore="https://" placeholder="Portfolio" />
        </Input.Group>
      </Form.Item>
    </Form>
  );
};
export default UserInfo;
