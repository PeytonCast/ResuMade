import React from "react";
import {
  // Checkbox,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  DatePicker,
} from "antd";

const Education = () => {
  const form = Form.useFormInstance();
  const certificateDegreeName = Form.useWatch("certificateDegreeName", form);
  const universityInstitutionName = Form.useWatch(
    "universityInstitutionName",
    form
  );
  const city = Form.useWatch("city", form);
  const state = Form.useWatch("state", form);

  // const startDate = Form.useWatch("startDate", form);
  const startDateMonth = Form.useWatch("startDateMonth", form);
  const startDateYear = Form.useWatch("startDateYear", form);

  // const endDate = Form.useWatch("endDate", form);
  const endDateMonth = Form.useWatch("endDateMonth", form);
  const endDateYear = Form.useWatch("endDateYear", form);

  const grade = Form.useWatch("grade", form);

  return (
    <>
      <Form.Item label="Certificate/Degree Name" name="certificateDegreeName">
        <Input />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item
            label="University/Institution Name"
            name="universityInstitutionName"
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={9}>
          <Form.Item label="City" name="city">
            <Input />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="State" name="state">
            {/* default input to all caps */}
            <Input maxLength={2} />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item label="Start Date: Month" name="startDateMonth">
            <DatePicker picker="month" format={"MMMM"} />
          </Form.Item>

          <Form.Item label="Start Date: Year" name="startDateYear">
            <DatePicker picker="year" format={"YYYY"} />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item label="End Date: Month" name="endDateMonth">
            <DatePicker picker="month" format={"MMMM"} />
          </Form.Item>

          <Form.Item label="End Date: Year" name="endDateYear">
            <DatePicker picker="year" format={"YYYY"} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Grade (if applicable)" name="grade">
            <InputNumber maxLength={2} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
export default Education;
