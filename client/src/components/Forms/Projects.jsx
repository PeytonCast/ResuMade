import React, { useEffect } from "react";
import { Checkbox, Form, Input, Row, Col } from "antd";
const { TextArea } = Input;

const Projects = () => {
  const form = Form.useFormInstance();

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

  // const rules = [
  //   {
  //     required: true,
  //     message: "This field is required",
  //   },
  // ];

  return (
    <>
      <h4>A minimum of three projects is industry standard.</h4>
      <Row>
        <Col span={20}>
          <Form.Item label="Project Name" name="projectNameOne">
            <Input maxLength={15} type="text" />
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
          <Form.Item label="Github Repo Link" name="githubRepoLinkOne">
            <Input addonBefore="https://" placeholder="Github" type="text" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Deployed Application Link"
            name="deployedApplicationLinkOne"
          >
            <Input
              addonBefore="https://"
              placeholder="DeployedApp"
              type="text"
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Project Description" name="projectDescriptionOne">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item label="Your Role" name="yourRoleOne">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      {/* note to ask user to separate each item with a comma and a space */}
      {/* array of strings */}
      <Form.Item
        label="Tools and Technologies Used"
        name="toolsTechnologiesOne"
      >
        <TextArea rows={4} />
      </Form.Item>

      {/* need a spot to emphasize that resumes should have 3-5 projects, spotlighting collaborative projects first (not MVP) */}
      <Form.Item
        label="Add Another"
        name="addAnotherProjectOne"
        valuePropName="checked"
      >
        {/* upon check, add a duplicate project section to add additional project */}
        <Checkbox></Checkbox>
      </Form.Item>

      {/* second project */}
      <Row>
        <Col span={20}>
          <Form.Item label="Project Name" name="projectNameTwo">
            <Input maxLength={15} type="text" />
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
          <Form.Item label="Github Repo Link" name="githubRepoLinkTwo">
            <Input addonBefore="https://" placeholder="Github" type="text" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Deployed Application Link"
            name="deployedApplicationLinkTwo"
          >
            <Input
              addonBefore="https://"
              placeholder="DeployedApp"
              type="text"
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Project Description" name="projectDescriptionTwo">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item label="Your Role" name="yourRoleTwo">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      {/* note to ask user to separate each item with a comma and a space */}
      {/* array of strings */}
      <Form.Item
        label="Tools and Technologies Used"
        name="toolsTechnologiesTwo"
      >
        <TextArea rows={4} />
      </Form.Item>

      {/* need a spot to emphasize that resumes should have 3-5 projects, spotlighting collaborative projects first (not MVP) */}
      <Form.Item
        label="Add Another"
        name="addAnotherProjectTwo"
        valuePropName="checked"
      >
        {/* upon check, add a duplicate project section to add additional project */}
        <Checkbox></Checkbox>
      </Form.Item>

      {/* third project */}
      <Row>
        <Col span={20}>
          <Form.Item label="Project Name" name="projectNameThree">
            <Input maxLength={15} type="text" />
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
          <Form.Item label="Github Repo Link" name="githubRepoLinkThree">
            <Input addonBefore="https://" placeholder="Github" type="text" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Deployed Application Link"
            name="deployedApplicationLinkThree"
          >
            <Input
              addonBefore="https://"
              placeholder="DeployedApp"
              type="text"
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Project Description" name="projectDescriptionThree">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item label="Your Role" name="yourRoleThree">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      {/* note to ask user to separate each item with a comma and a space */}
      {/* array of strings */}
      <Form.Item
        label="Tools and Technologies Used"
        name="toolsTechnologiesThree"
      >
        <TextArea rows={4} />
      </Form.Item>

      {/* need a spot to emphasize that resumes should have 3-5 projects, spotlighting collaborative projects first (not MVP) */}
      <Form.Item
        label="Add Another"
        name="addAnotherProjectThree"
        valuePropName="checked"
      >
        {/* upon check, add a duplicate project section to add additional project */}
        <Checkbox></Checkbox>
      </Form.Item>
    </>
  );
};
export default Projects;
