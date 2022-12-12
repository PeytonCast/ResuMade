import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Button,
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Space,
} from "antd";
const { TextArea } = Input;

const Experience = () => {
  const form = Form.useFormInstance();

  useEffect(() => {
    console.log(form.getFieldsValue(true));
  });

  Form.useWatch(
    [
      "jobTitle",
      "companyName",
      "city",
      "state",
      "startDateMonth",
      "startDateYear",
      "endDateMonth",
      "endDateYear",
      "currentJob",
      "jobDescription",
      "addAnotherExperience",
    ],
    form
  );

  // const companyName = Form.useWatch("companyName", form);
  // const city = Form.useWatch("city", form);
  // const state = Form.useWatch("state", form);

  // // const startDate = Form.useWatch("startDate", form);
  // const startDateMonth = Form.useWatch("startDateMonth", form);
  // const startDateYear = Form.useWatch("startDateYear", form);

  // // const endDate = Form.useWatch("endDate", form);
  // const endDateMonth = Form.useWatch("endDateMonth", form);
  // const endDateYear = Form.useWatch("endDateYear", form);

  // // checkbox
  const currentJob = Form.useWatch("currentJob", form);
  // Form.useWatch = (namePath: "currentJob", formInstance: form): Value

  // const jobDescription = Form.useWatch("jobDescription", form);

  // // checkbox
  const addAnother = Form.useWatch("addAnotherExperience", form);

  return (
    <>
      <Form.Item label="Job Title" name="jobTitle">
        <Input />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item label="Company Name" name="companyName">
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

        <Col span={4}>
          <Form.Item
            label="Current Job?"
            name="currentJob"
            id="currentJob"
            valuePropName="checked"
            // onChange={(e) => {
            //   console.log(e.target);
            // }}
          >
            {/* <Checkbox checked={checked} onChange={onCheckboxChange}></Checkbox> */}
            <Checkbox></Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Job Description" name="jobDescription">
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Add Another" name="addAnotherExperience" valuePropName="checked">
        <Checkbox></Checkbox>
      </Form.Item>
    </>
  );
};
export default Experience;
