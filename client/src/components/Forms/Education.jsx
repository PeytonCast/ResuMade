import React, { useEffect } from "react";
import {
  // Checkbox,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  DatePicker,
  Checkbox,
} from "antd";

const Education = () => {
  const form = Form.useFormInstance();

  useEffect(() => {
    console.log(form.getFieldsValue(true));
  });

  Form.useWatch(
    [
      "certificateDegreeName",
      "universityInstitutionName",
      "city",
      "state",
      "startDateMonth",
      "startDateYear",
      "endDateMonth",
      "endDateYear",
      "grade",
      "addAnother",
    ],
    form
  );
  // Form.useWatch(
  //   "universityInstitutionName",
  //   form
  // );
  // Form.useWatch("city", form);
  // Form.useWatch("state", form);

  // // const startDate = Form.useWatch("startDate", form);
  // Form.useWatch("startDateMonth", form);
  // Form.useWatch("startDateYear", form);

  // // const endDate = Form.useWatch("endDate", form);
  // Form.useWatch("endDateMonth", form);
  // Form.useWatch("endDateYear", form);

  // Form.useWatch("grade", form);

  // // checkbox
  // Form.useWatch("addAnother", form);

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

        <Form.Item
          label="Add Another"
          name="addAnother"
          valuePropName="checked"
        >
          <Checkbox></Checkbox>
        </Form.Item>
      </Row>
    </>
  );
};
export default Education;
