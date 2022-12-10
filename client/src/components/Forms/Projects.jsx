import React from "react";
import { Checkbox, Form, Input, Row, Col } from "antd";

const Projects = () => {
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="projects"
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
      <Row>
        <Col span={20}>
          <Form.Item
            label="Project Name"
            name="projectName"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input maxLength={15} />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item
            name="collaborative"
            valuePropName="checked"
            wrapperCol={{
              // how to move checkbox down?
              offset: 4,
              span: 16,
            }}
          >
            <Checkbox>Collaborative?</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item
            label="Deployed Application Link"
            name="deployedApplicationLink"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input addonBefore="https://" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Github Repo Link"
            name="githubRepoLink"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input addonBefore="https://" placeholder="Github" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Project Description">
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item label="Your Role">
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item label="Tools and Technologies Used">
        <TextArea rows={4} />
      </Form.Item>

      {/* button here to add another project */}
      {/* potentially move collaborative checkmark down here */}
      {/* need a spot to emphasize that resumes should have 3-5 projects, spotlighting collaborative projects first (not MVP) */}

    </Form>
  );
};
export default Projects;
