import React from "react";
import { Form, Input, Col, Row } from "antd";

const Summary = () => {
  const { TextArea } = Input;
  const form = Form.useFormInstance();
  const summary = Form.useWatch("summary", form);

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
