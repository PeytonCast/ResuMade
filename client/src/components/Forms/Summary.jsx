import React, { useEffect } from "react";
import { Form, Input, Col, Row } from "antd";
const { TextArea } = Input;

const Summary = () => {
  const form = Form.useFormInstance();

  useEffect(() => {
    console.log(form.getFieldsValue(true));
  });

  Form.useWatch("summary", form);

  return (
    <>
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
    </>
  );
};
export default Summary;
