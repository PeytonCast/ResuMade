import React, { useEffect } from "react";
import { Checkbox, Col, Input, Form, Row } from "antd";
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    span: 4,
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
      projectName: preload?.projects[0]?.name,
      githubRepoLink: preload?.projects[0]?.githubLink,
      deployedApplicationLink: preload?.projects[0]?.deployment,
      projectDescription: preload?.projects[0]?.summary,
      yourRole: preload?.projects[0]?.responsibility,
      toolsTechnologies: preload?.projects[0]?.technologies.join(","),
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
      <Form.Item {...formItemLayout} label="Project Name" name="projectNameOne">
        <Input maxLength={15} type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Github Repo"
        name="githubRepoLinkOne"
      >
        <Input
          addonBefore="https://"
          placeholder="github.com/user/repo-name"
          type="text"
        />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Deployed Application"
        name="deployedApplicationLinkOne"
      >
        <Input addonBefore="https://" type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Project Description"
        name="projectDescriptionOne"
      >
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Your Role" name="yourRoleOne">
        <TextArea rows={2} maxLength={150} showCount />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Tools and Technologies Used"
        name="toolsTechnologiesOne"
      >
        <TextArea rows={4} />
      </Form.Item>

      {/* second project */}
      <Row>
        <Col span={20}>
          <Form.Item label="Project Name" name="projectNameTwo">
            <Input maxLength={15} type="text" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item label="Github Repo" name="githubRepoLinkTwo">
            <Input addonBefore="https://" placeholder="Github" type="text" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Deployed Application"
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

      <Form.Item
        label="Tools and Technologies Used"
        name="toolsTechnologiesTwo"
      >
        <TextArea rows={4} />
      </Form.Item>

      {/* third project */}
      <Row>
        <Col span={20}>
          <Form.Item label="Project Name" name="projectNameThree">
            <Input maxLength={15} type="text" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item label="Github Repo" name="githubRepoLinkThree">
            <Input addonBefore="https://" placeholder="Github" type="text" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Deployed Application"
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

      <Form.Item
        label="Tools and Technologies Used"
        name="toolsTechnologiesThree"
      >
        <TextArea rows={4} />
      </Form.Item>
    </div>
  );
};
export default Projects;
