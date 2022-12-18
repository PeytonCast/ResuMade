import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Col, DatePicker, Form, Input, Row } from "antd";
import "./forms.css";
const { TextArea } = Input;

const Experience = ({ preload }) => {
  const form = Form.useFormInstance();

  const [disabled, setDisabled] = useState(false);
  // console.log("preload", preload)
  useEffect(() => {
    const formValues = form.getFieldsValue();

    // const startDate = dayjs().set('year', preload?.experiences[0]?.startDate?.year ? preload?.experiences[0]?.startDate?.year : (formValues.startDateYearExperience ? formValues.startDateYearExperience : null))
    const startDate = preload?.experiences[0]?.startDate?.year
      ? preload?.experiences[0]?.startDate?.year
      : formValues.startDateYearExperience
      ? formValues.startDateYearExperience
      : null;
    const endDate = preload?.experiences[0]?.endDate?.year
      ? preload?.experiences[0]?.endDate?.year
      : formValues.endDateYearExperience
      ? formValues.endDateYearExperience
      : null;

    console.log(startDate);
    form.setFieldsValue({
      jobTitle: formValues.jobTitle
        ? formValues.jobTitle
        : preload?.experiences[0]?.title,
      companyName: formValues.companyName
        ? formValues.companyName
        : preload?.experiences[0]?.company,
      cityExperience: formValues.cityExperience
        ? formValues.cityExperience
        : preload?.experiences[0]?.city,
      stateExperience: formValues.stateExperience
        ? formValues.stateExperience
        : preload?.experiences[0]?.state,
      startDateYearExperience: startDate ? dayjs().set("year", startDate) : "",
      endDateYearExperience: endDate ? dayjs().set("year", endDate) : "",
      jobDescription: formValues.jobDescription
        ? formValues.jobDescription
        : preload?.experiences[0]?.summary,
      // addAnotherExperience: preload?.experiences[0]?.addAnotherExperience
    });
  }, []);

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

  const startDateYear = Form.useWatch("startDateYearExperience", form);
  const endDateYear = Form.useWatch("endDateYearExperience", form);

  const rules = [
    {
      required: true,
      message: "This field is required",
    },
  ];

  return (
    <div className="experience">
      <Form.Item label="Job Title" name="jobTitle" rules={rules}>
        <Input type="text" />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item label="Company Name" name="companyName" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={9}>
          <Form.Item label="City" name="cityExperience" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="State" name="stateExperience" rules={rules}>
            <Input maxLength={2} type="text" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item
            label="Start Date"
            name="startDateYearExperience"
            rules={rules}
          >
            <DatePicker picker="year" format={"YYYY"} placeholder="YYYY" />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="End Date"
            name="endDateYearExperience"
            rules={rules}
          >
            <DatePicker picker="year" format={"YYYY"} disabled={disabled} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Job Description" name="jobDescription" rules={rules}>
        <TextArea rows={3} maxLength={150} showCount />
      </Form.Item>
    </div>
  );
};
export default Experience;
