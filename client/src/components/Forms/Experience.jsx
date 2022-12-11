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
// import { useWatch } from "antd/es/form/Form";

const Experience = () => {
  const { TextArea } = Input;

  const form = Form.useFormInstance();
  const jobTitle = Form.useWatch("jobTitle", form);
  const companyName = Form.useWatch("companyName", form);
  const city = Form.useWatch("city", form);
  const state = Form.useWatch("state", form);

  // const startDate = Form.useWatch("startDate", form);
  const startDateMonth = Form.useWatch("startDateMonth", form);
  const startDateYear = Form.useWatch("startDateYear", form);

  // const endDate = Form.useWatch("endDate", form);
  const endDateMonth = Form.useWatch("endDateMonth", form);
  const endDateYear = Form.useWatch("endDateYear", form);

  const currentJob = Form.useWatch("currentJob", form);
  const jobDescription = Form.useWatch("jobDescription", form);
  const addAnother = Form.useWatch("addAnother", form);

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
          <Form.Item label="Current Job?" name="currentJob">
            <Checkbox></Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Job Description" name="jobDescription">
        <TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Add Another" name="addAnother">
        <Checkbox></Checkbox>
      </Form.Item>
    </>
  );
};
export default Experience;