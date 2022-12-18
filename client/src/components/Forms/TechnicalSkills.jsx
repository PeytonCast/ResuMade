import React, { useEffect } from "react";
import { Input, Form, Row, Col } from "antd";
import "./forms.css";
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
};

const TechnicalSkills = ({ preload }) => {
  const form = Form.useFormInstance();

  console.log("preload", preload);
  useEffect(() => {
    form.setFieldsValue({
      languages: preload?.skills?.languages?.join(","),
      frameworks: preload?.skills?.frameworks?.join(","),
      libraries: preload?.skills?.libraries?.join(","),
      coreConcepts: preload?.skills?.concepts?.join(","),
    });
  });
  // useEffect(() => {
  //   console.log(form.getFieldsValue(true));
  // });

  Form.useWatch(["languages", "frameworks", "libraries", "coreConcepts"], form);
  // const frameworks = Form.useWatch("frameworks", form);
  // const libraries = Form.useWatch("libraries", form);
  // const coreConcepts = Form.useWatch("coreConcepts", form);

  return (
    <>
      <h4>Separate each list item with a comma.</h4>
      <div className="technical">
        <Row>
          <Col span={20}>
            <Form.Item {...formItemLayout} label="Languages" name="languages">
              <TextArea rows={3} />
            </Form.Item>
          </Col>

          <Col span={20}>
            <Form.Item {...formItemLayout} label="Frameworks" name="frameworks">
              <TextArea rows={3} />
            </Form.Item>
          </Col>
          <Col span={20}>
            <Form.Item {...formItemLayout} label="Libraries" name="libraries">
              <TextArea rows={3} />
            </Form.Item>
          </Col>

          <Col span={20}>
            <Form.Item
              {...formItemLayout}
              label="Core Concepts"
              name="coreConcepts"
            >
              <TextArea rows={3} />
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default TechnicalSkills;
