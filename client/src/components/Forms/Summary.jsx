import React, { useEffect } from "react";
import { Form, Input, Col, Row } from "antd";
const { TextArea } = Input;

const Summary = () => {
  const form = Form.useFormInstance();

  // useEffect(() => {
  //   console.log(form.getFieldsValue(true));
  // });

  Form.useWatch("summary", form);

  return (
    <>
      <h4>
        In no more than five lines (420-500 characters), summarize: current
        title, accomplishments, relevant past experience, tranferrable skills
        and what makes you passionate about this position or industry.
      </h4>
      <Row>
        <Col span={24}>
          <Form.Item label="Summary" name="summary">
            <TextArea rows={5} maxLength={500} showCount />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
export default Summary;
