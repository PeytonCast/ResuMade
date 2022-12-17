import React, { useEffect } from "react";
import { Checkbox, Form, Input, Row, Col } from "antd";
const { TextArea } = Input;

const Projects = ({ preload }) => {
  const form = Form.useFormInstance();

  console.log("preload", preload)
  useEffect(() => {
    form.setFieldsValue({
      projectName: preload?.projects[0]?.name,
      githubRepoLink: preload?.projects[0]?.githubLink,
      deployedApplicationLink: preload?.projects[0]?.deployment,
      projectDescription: preload?.projects[0]?.summary,
      yourRole: preload?.projects[0]?.responsibility,
      toolsTechnologies: preload?.projects[0]?.technologies.join(","),
  })})
  // useEffect(() => {
  //   console.log(form.getFieldsValue(true));
  // });

  Form.useWatch(
    [
      "projectName",
      // "collaborative",
      "githubRepoLink",
      "deployedApplicationLink",
      "projectDescription",
      "yourRole",
      "toolsTechnologies",
      "addAnotherProject",
    ],
    form
  );

  // // checkbox
  // const collaborative = Form.useWatch("collaborative", form);

  // const deployedApplicationLink = Form.useWatch(
  //   "deployedApplicationLink",
  //   form
  // );
  // const githubRepoLink = Form.useWatch("githubRepoLink", form);
  // const projectDescription = Form.useWatch("projectDescription", form);
  // const yourRole = Form.useWatch("yourRole", form);
  // const toolsTechnologies = Form.useWatch("toolsTechnologies", form);

  // // checkbox
  const addAnother = Form.useWatch("addAnotherProject", form);

  return (
    <>
      <Row>
        <Col span={20}>
          <Form.Item label="Project Name" name="projectName">
            <Input maxLength={15} />
          </Form.Item>
        </Col>

        {/* <Col span={4}>
          <Form.Item
            label="Collaborative?"
            name="collaborative"
            valuePropName="checked"
          >
            <Checkbox></Checkbox>
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item label="Github Repo Link" name="githubRepoLink">
            <Input addonBefore="https://" placeholder="Github" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Deployed Application Link"
            name="deployedApplicationLink"
          >
            <Input addonBefore="https://" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Project Description" name="projectDescription">
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item label="Your Role" name="yourRole">
        <TextArea rows={2} />
      </Form.Item>

      {/* note to ask user to separate each item with a comma and a space */}
      {/* array of strings */}
      <Form.Item label="Tools and Technologies Used" name="toolsTechnologies">
        <TextArea rows={4} />
      </Form.Item>

      {/* need a spot to emphasize that resumes should have 3-5 projects, spotlighting collaborative projects first (not MVP) */}
      <Form.Item
        label="Add Another"
        name="addAnotherProject"
        valuePropName="checked"
      >
        {/* upon check, add a duplicate project section to add additional project */}
        <Checkbox></Checkbox>
      </Form.Item>
    </>
  );
};
export default Projects;
