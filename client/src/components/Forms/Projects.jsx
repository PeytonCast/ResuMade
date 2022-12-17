import React, { useEffect } from "react";
import { Checkbox, Form, Input, Row, Col } from "antd";
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
    <div className="projects">
      <Form.Item {...formItemLayout} label="Project Name" name="projectName">
        <Input maxLength={15} />
      </Form.Item>

      {/* <Col span={4}>
          <Form.Item
            label="Collaborative?"
            name="collaborative"
            valuePropName="checked"
          >
            <Checkbox></Checkbox>
          </Form.Item>
        </Col> */}

      <Form.Item {...formItemLayout} label="Github Repo" name="githubRepoLink">
        <Input addonBefore="https://" placeholder="github.com/user/repo-name" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Deployed Application"
        name="deployedApplicationLink">
        <Input addonBefore="https://" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Project Description"
        name="projectDescription">
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Your Role" name="yourRole">
        <TextArea rows={2} />
      </Form.Item>

      {/* note to ask user to separate each item with a comma and a space */}
      {/* array of strings */}
      <Form.Item
        {...formItemLayout}
        label="Tools and Technologies Used"
        name="toolsTechnologies">
        <TextArea rows={4} />
      </Form.Item>

      {/* need a spot to emphasize that resumes should have 3-5 projects, spotlighting collaborative projects first (not MVP) */}
      <Form.Item
        {...formItemLayout}
        label="Add Another"
        name="addAnotherProject"
        valuePropName="checked">
        {/* upon check, add a duplicate project section to add additional project */}
        <Checkbox></Checkbox>
      </Form.Item>
    </div>
  );
};
export default Projects;
