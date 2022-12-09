import React from "react";
import { Checkbox, Form, Input, Row, Col } from "antd";

const Experience = () => {
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="experience"
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
      <Form.Item
        label="Job Title"
        name="jobTitle"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item
            label="Company Name"
            name="companyName"
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

        <Col span={9}>
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
      </Row>

      <Row>
        <Col span={6}>{/* startDate here: mm/yyyy */}</Col>

        <Col span={6}>{/* endDate here: mm/yyyy */}</Col>

        <Col span={12}>
          <Form.Item
            name="currentJob"
            valuePropName="checked"
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            {/* upon check, grey out the endDate */}
            <Checkbox>Current Job</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      {/* make the label just say "job description" and find another way to provide the instructions */}
      <Form.Item label="Job Description: Emphasize transferrable skills with 2-4 bullet points.">
        {/* make this a list instead? */}
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item name="addAnother" valuePropName="checked">
        {/* upon check, add a duplicate experience section to add additional job */}
        <Checkbox>Add Another Job</Checkbox>
      </Form.Item>
    </Form>
  );
};
export default Experience;
