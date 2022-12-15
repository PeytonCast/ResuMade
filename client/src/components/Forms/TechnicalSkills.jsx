import React, { useEffect } from "react";
import { Input, Form, Row, Col } from "antd";
const { TextArea } = Input;

const TechnicalSkills = ({ preload }) => {
  const form = Form.useFormInstance();

  console.log("preload", preload)
  useEffect(() => {
    form.setFieldsValue({
      languages: preload?.skills?.languages,
      frameworks: preload?.skils?.frameworks,
      libraries: preload?.skils?.libraries,
      coreConcepts: preload?.skils?.concepts
  })})
  // useEffect(() => {
  //   console.log(form.getFieldsValue(true));
  // });

  Form.useWatch(["languages", "frameworks", "libraries", "coreConcepts"], form);
  // const frameworks = Form.useWatch("frameworks", form);
  // const libraries = Form.useWatch("libraries", form);
  // const coreConcepts = Form.useWatch("coreConcepts", form);

  return (
    // note to ask user to separate each item with a comma and a space
    <>
      <Row>
        <Col span={24}>
          <Form.Item label="Languages" name="languages">
            <TextArea rows={3} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Frameworks" name="frameworks">
            <TextArea rows={3} />
          </Form.Item>
          <Col span={24}></Col>

          <Form.Item label="Libraries" name="libraries">
            <TextArea rows={3} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Core Concepts" name="coreConcepts">
            <TextArea rows={3} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
export default TechnicalSkills;
