import React from "react";
import { Form, Input } from "antd";

const Summary = () => {
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="summary"
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
      
      {/* make the label just say "summary" and find another way to provide the instructions */}
      {/* also determine what would be five lines in the finished docx file */}
      <Form.Item label="Summary: In no more than five lines, summarize your current title, accomplishments, relevant past experience, tranferrable skills and what makes you passionate about this position or industry.">
        <TextArea rows={5} />
      </Form.Item>
    </Form>
  );
};
export default Summary;
