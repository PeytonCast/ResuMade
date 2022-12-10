import React from "react";
import { Input, Form } from "antd";

const TechnicalSkills = () => {
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="technicalSkills"
      // labelCol={{
      //   span: 16,
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
      <Form.Item label="Languages">
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Frameworks">
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Libraries">
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Core Concepts">
        <TextArea rows={3} />
      </Form.Item>
    </Form>
  );
};
export default TechnicalSkills;
