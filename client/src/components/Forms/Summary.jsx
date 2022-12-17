import React, { useEffect } from "react";
import { Form, Input, Col, Row } from "antd";
import "./forms.css";
const { TextArea } = Input;

const Summary = ({ preload }) => {
  const form = Form.useFormInstance();
  console.log("preload", preload);

  useEffect(() => {
    form.setFieldsValue({
      summary: preload?.summary,
    });
  });
  // useEffect(() => {
  //   console.log(form.getFieldsValue(true));
  // });

  Form.useWatch(["summary", "bug"], form);

  return (
    <div className="summary">
      <Row>
        <Col span={24}>
          {/* make the label just say "summary" and find another way to provide the instructions */}
          {/* also determine what would be five lines in the finished docx file */}
          <Form.Item label="Summary" name="summary">
            <TextArea rows={5} />
            {/* <Input /> */}
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};
export default Summary;
