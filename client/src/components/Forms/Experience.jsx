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
    // console.log(form.getFieldsValue(true));

    // this is not DRY I know
    if (form.getFieldsValue("startDateMonthExperience")["startDateMonthExperience"]) {
      // console logs the user input's start date month
      console.log(
        form.getFieldsValue("startDateMonthExperience")["startDateMonthExperience"].format("MMMM")
      );
    }

    if (form.getFieldsValue("startDateYearExperience")["startDateYearExperience"]) {
      // console logs the user input's start date year
      console.log(
        form.getFieldsValue("startDateYearExperience")["startDateYearExperience"].format("YYYY")
      );
    }

    if (form.getFieldsValue("endDateMonthExperience")["endDateMonthExperience"]) {
      // console logs the user input's end date month
      console.log(
        form.getFieldsValue("endDateMonthExperience")["endDateMonthExperience"].format("MMMM")
      );
    }

    if (form.getFieldsValue("endDateYearExperience")["endDateYearExperience"]) {
      // console logs the user input's end date year
      console.log(
        form.getFieldsValue("endDateYearExperience")["endDateYearExperience"].format("YYYY")
      );
    }
  });

  Form.useWatch(
    [
      "jobTitle",
      "companyName",
      "city",
      "state",
      "startDateMonthExperience",
      "startDateYearExperience",
      "endDateMonthExperience",
      "endDateYearExperience",
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
  const startDateMonth = Form.useWatch("startDateMonthExperience", form);
  const startDateYear = Form.useWatch("startDateYearExperience", form);

  // // const endDate = Form.useWatch("endDate", form);
  const endDateMonth = Form.useWatch("endDateMonthExperience", form);
  const endDateYear = Form.useWatch("endDateYearExperience", form);

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
          <Form.Item label="Start Date: Month" name="startDateMonthExperience">
            <DatePicker picker="month" format={"MMMM"} />
          </Form.Item>

          <Form.Item label="Start Date: Year" name="startDateYearExperience">
            <DatePicker picker="year" format={"YYYY"} />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item label="End Date: Month" name="endDateMonthExperience">
            <DatePicker picker="month" format={"MMMM"} />
          </Form.Item>

          <Form.Item label="End Date: Year" name="endDateYearExperience">
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

      <Form.Item
        label="Add Another"
        name="addAnotherExperience"
        valuePropName="checked"
      >
        <Checkbox></Checkbox>
      </Form.Item>
    </>
  );
};
export default Experience;
