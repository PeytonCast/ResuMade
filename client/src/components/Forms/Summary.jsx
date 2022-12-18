import React, { useEffect } from "react";
import { Col, Form, Input, Row } from "antd";
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

  Form.useWatch(["summary", "bug"], form);

  return (
    <>
      <h4>
        In no more than five lines (420-500 characters), summarize: current
        title, accomplishments, relevant past experience, tranferrable skills
        and what makes you passionate about this position or industry.
      </h4>
      <div className="summary">
        <Row>
          <Col span={24}>
            <Form.Item label="Summary" name="summary">
              <TextArea rows={5} maxLength={500} showCount />
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Summary;
