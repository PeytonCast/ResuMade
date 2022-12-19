import React, { useEffect } from "react";
import { Checkbox, Col, Input, Form, Row, Divider } from "antd";
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 24,
  },
};

const Projects = ({ preload }) => {
  const form = Form.useFormInstance();

  console.log("preload", preload);
  useEffect(() => {
    form.setFieldsValue({
      projectNameOne: preload?.projects[0]?.name,
      githubRepoLinkOne: preload?.projects[0]?.githubLink,
      deployedApplicationLinkOne: preload?.projects[0]?.deployment,
      projectDescriptionOne: preload?.projects[0]?.summary,
      yourRoleOne: preload?.projects[0]?.responsibility,
      toolsTechnologiesOne: preload?.projects[0]?.technologies.join(","),

      projectNameTwo: preload?.projects[1]?.name,
      githubRepoLinkTwo: preload?.projects[1]?.githubLink,
      deployedApplicationLinkTwo: preload?.projects[1]?.deployment,
      projectDescriptionTwo: preload?.projects[1]?.summary,
      yourRoleTwo: preload?.projects[1]?.responsibility,
      toolsTechnologiesTwo: preload?.projects[1]?.technologies.join(","),

      projectNameThree: preload?.projects[2]?.name,
      githubRepoLinkThree: preload?.projects[2]?.githubLink,
      deployedApplicationLinkThree: preload?.projects[2]?.deployment,
      projectDescriptionThree: preload?.projects[2]?.summary,
      yourRoleThree: preload?.projects[2]?.responsibility,
      toolsTechnologiesThree: preload?.projects[2]?.technologies.join(","),
    });
  });

  Form.useWatch(
    [
      "projectName",
      "githubRepoLink",
      "deployedApplicationLink",
      "projectDescription",
      "yourRole",
      "toolsTechnologies",
      "addAnotherProject",
    ],
    form
  );

  return (
    <div className="projects">
      <h4>A minimum of three projects is industry standard.</h4>
      <Divider>Project 1</Divider>
      <Form.Item {...formItemLayout} label="Project Name" name="projectNameOne">
        <Input maxLength={15} type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Github Repo"
        name="githubRepoLinkOne">
        <Input
          addonBefore="https://"
          placeholder="github.com/user/repo-name"
          type="text"
        />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Deployed Application"
        name="deployedApplicationLinkOne">
        <Input addonBefore="https://" type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Project Description"
        name="projectDescriptionOne">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Your Role" name="yourRoleOne">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        labelWrap
        label="Tools and Technologies Used"
        name="toolsTechnologiesOne">
        <TextArea rows={4} />
      </Form.Item>

      {/* second project */}
      <Divider>Project 2</Divider>
      <Form.Item {...formItemLayout} label="Project Name" name="projectNameTwo">
        <Input maxLength={15} type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Github Repo"
        name="githubRepoLinkTwo">
        <Input addonBefore="https://" placeholder="Github" type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Deployed Application"
        name="deployedApplicationLinkTwo">
        <Input addonBefore="https://" placeholder="DeployedApp" type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Project Description"
        name="projectDescriptionTwo">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Your Role" name="yourRoleTwo">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Tools and Technologies Used"
        name="toolsTechnologiesTwo">
        <TextArea rows={4} />
      </Form.Item>

      {/* third project */}
      <Divider>Project 3</Divider>
      <Form.Item
        {...formItemLayout}
        label="Project Name"
        name="projectNameThree">
        <Input maxLength={15} type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Github Repo"
        name="githubRepoLinkThree">
        <Input addonBefore="https://" placeholder="Github" type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Deployed Application"
        name="deployedApplicationLinkThree">
        <Input addonBefore="https://" placeholder="DeployedApp" type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Project Description"
        name="projectDescriptionThree">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Your Role" name="yourRoleThree">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Tools and Technologies Used"
        name="toolsTechnologiesThree">
        <TextArea rows={4} />
      </Form.Item>
    </div>
  );
};
export default Projects;
