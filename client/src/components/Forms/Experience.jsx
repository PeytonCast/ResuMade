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
import "./forms.css";
const { TextArea } = Input;

const Experience = ({ preload }) => {
  const form = Form.useFormInstance();

  const [disabled, setDisabled] = useState(false);
  console.log("preload", preload);
  useEffect(() => {
    form.setFieldsValue({
      jobTitle: preload?.experiences[0]?.title,
      companyName: preload?.experiences[0]?.company,
      cityExperience: preload?.experiences[0]?.city,
      stateExperience: preload?.experiences[0]?.state,
      // startDateMonthExperience: preload?.experiences[0]?.startDate?.month,
      // startDateYearExperience: preload?.experiences[0]?.startDate?.year,
      // endDateMonthExperience: preload?.experiences[0]?.endDate?.month,
      // endDateYearExperience: preload?.experiences[0]?.endDate?.year,
      jobDescription: preload?.experiences[0]?.summary,
      // addAnotherExperience: preload?.experiences[0]?.addAnotherExperience
    });
  });

  // const toggleDisabled = ({ disabled }) => {
  //   console.log("toggleDisabled function is working");
  //   setDisabled(disabled);
  // };

  useEffect(() => {
    // console.log(form.getFieldsValue(true));

    // this is not DRY I know
    if (
      form.getFieldsValue("startDateMonthExperience")[
        "startDateMonthExperience"
      ]
    ) {
      // console logs the user input's start date month
      console.log(
        form
          .getFieldsValue("startDateMonthExperience")
          ["startDateMonthExperience"].format("MMMM")
      );
    }

    if (
      form.getFieldsValue("startDateYearExperience")["startDateYearExperience"]
    ) {
      // console logs the user input's start date year
      console.log(
        form
          .getFieldsValue("startDateYearExperience")
          ["startDateYearExperience"].format("YYYY")
      );
    }

    if (
      form.getFieldsValue("endDateMonthExperience")["endDateMonthExperience"]
    ) {
      // console logs the user input's end date month
      console.log(
        form
          .getFieldsValue("endDateMonthExperience")
          ["endDateMonthExperience"].format("MMMM")
      );
    }

    if (form.getFieldsValue("endDateYearExperience")["endDateYearExperience"]) {
      // console logs the user input's end date year
      console.log(
        form
          .getFieldsValue("endDateYearExperience")
          ["endDateYearExperience"].format("YYYY")
      );
    }

    // console.log(typeof(form.getFieldValue("currentJob")));
    if (form.getFieldValue("currentJob")) {
      // console.log("currentJob");
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    if (form.getFieldValue("addAnotherExperience")) {
      // if addAnother checkbox is checked, duplicate experience form below the first one to add another experience
      // Experience()
    }
  });

  Form.useWatch(
    [
      "jobTitle",
      "companyName",
      "cityExperience",
      "stateExperience",
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
    <div className="experience">
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
          <Form.Item label="City" name="cityExperience">
            <Input />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="State" name="stateExperience">
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
            <DatePicker picker="month" format={"MMMM"} disabled={disabled} />
          </Form.Item>

          <Form.Item label="End Date: Year" name="endDateYearExperience">
            <DatePicker picker="year" format={"YYYY"} disabled={disabled} />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item
            id="currentJob"
            name="currentJob"
            label="Current Job?"
            valuePropName="checked">
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
        valuePropName="checked">
        <Checkbox></Checkbox>
      </Form.Item>
    </div>
  );
};
export default Experience;
