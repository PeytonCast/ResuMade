import React, { useEffect } from "react";
import { Checkbox, Form, Input, Row, Col } from "antd";
const { TextArea } = Input;

const Projects = () => {
  const form = Form.useFormInstance();

  useEffect(() => {
    console.log(form.getFieldsValue(true));
  });

  const projectName = Form.useWatch("projectName", form);

  // checkbox
  const collaborative = Form.useWatch("collaborative", form);

  const deployedApplicationLink = Form.useWatch(
    "deployedApplicationLink",
    form
  );
  const githubRepoLink = Form.useWatch("githubRepoLink", form);
  const projectDescription = Form.useWatch("projectDescription", form);
  const yourRole = Form.useWatch("yourRole", form);
  const toolsTechnologies = Form.useWatch("toolsTechnologies", form);

  // checkbox
  const addAnother = Form.useWatch("addAnother", form);

  return (
    <>
      <Row>
        <Col span={20}>
          <Form.Item label="Project Name" name="projectName">
            <Input maxLength={15} />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item
            label="Collaborative?"
            name="collaborative"
            valuePropName="checked"
          >
            <Checkbox></Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item
            label="Deployed Application Link"
            name="deployedApplicationLink"
          >
            <Input addonBefore="https://" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Github Repo Link" name="githubRepoLink">
            <Input addonBefore="https://" placeholder="Github" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Project Description" name="projectDescription">
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item label="Your Role" name="yourRole">
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item label="Tools and Technologies Used" name="toolsTechnologies">
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Add Another" name="addAnother" valuePropName="checked">
        <Checkbox></Checkbox>
      </Form.Item>
    </>
  );
};
export default Projects;
