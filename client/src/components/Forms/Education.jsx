import React from "react";
import { Checkbox, Form, Input, InputNumber, Row, Col } from "antd";

const Education = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="education"
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
        label="Certificate/Degree Name"
        name="certificateDegreeName"
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
            label="University/Institution Name"
            name="universityInstitutionName"
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
            label="Grade (if applicable)"
            name="grade"
            valuePropName="checked"
            // wrapperCol={{
            //   offset: 4,
            //   span: 16,
            // }}
          >
            <InputNumber max={2} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default Education;
