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
