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
    const startDateOne = preload?.experiences[0]?.startDate?.year
      ? preload?.experiences[0]?.startDate?.year
      : formValues.startDateYearExperienceOne
      ? formValues.startDateYearExperienceOne
      : null;
    const endDateOne = preload?.experiences[0]?.endDate?.year
      ? preload?.experiences[0]?.endDate?.year
      : formValues.endDateYearExperienceOne
      ? formValues.endDateYearExperienceOne
      : null;

    console.log(startDateOne);
    form.setFieldsValue({
      jobTitleOne: formValues.jobTitleOne
        ? formValues.jobTitleOne
        : preload?.experiences[0]?.title,
        companyNameOne: formValues.companyNameOne
        ? formValues.companyNameOne
        : preload?.experiences[0]?.company,
        cityExperienceOne: formValues.cityExperienceOne
        ? formValues.cityExperienceOne
        : preload?.experiences[0]?.city,
        stateExperienceOne: formValues.stateExperienceOne
        ? formValues.stateExperienceOne
        : preload?.experiences[0]?.state,
      startDateYearExperienceOne: startDateOne ? dayjs().set("year", startDateOne) : "",
      endDateYearExperienceOne: endDateOne ? dayjs().set("year", endDateOne) : "",
      jobDescriptionOne: formValues.jobDescriptionOne
        ? formValues.jobDescriptionOne
        : preload?.experiences[0]?.summary,
      // addAnotherExperience: preload?.experiences[0]?.addAnotherExperience
    });


    const startDateTwo = preload?.experiences[1]?.startDate?.year
      ? preload?.experiences[1]?.startDate?.year
      : formValues.startDateYearExperienceTwo
      ? formValues.startDateYearExperienceTwo
      : null;
    const endDateTwo = preload?.experiences[1]?.endDate?.year
      ? preload?.experiences[1]?.endDate?.year
      : formValues.endDateYearExperienceTwo
      ? formValues.endDateYearExperienceTwo
      : null;

    form.setFieldsValue({
      jobTitleTwo: formValues.jobTitleTwo
        ? formValues.jobTitleTwo
        : preload?.experiences[1]?.title,
        companyNameTwo: formValues.companyNameTwo
        ? formValues.companyNameTwo
        : preload?.experiences[1]?.company,
        cityExperienceTwo: formValues.cityExperienceTwo
        ? formValues.cityExperienceTwo
        : preload?.experiences[1]?.city,
        stateExperienceTwo: formValues.stateExperienceTwo
        ? formValues.stateExperienceTwo
        : preload?.experiences[1]?.state,
      startDateYearExperienceTwo: startDateTwo ? dayjs().set("year", startDateTwo) : "",
      endDateYearExperienceTwo: endDateTwo ? dayjs().set("year", endDateTwo) : "",
      jobDescriptionTwo: formValues.jobDescriptionTwo
        ? formValues.jobDescriptionTwo
        : preload?.experiences[1]?.summary,
      // addAnotherExperience: preload?.experiences[0]?.addAnotherExperience
    });


    const startDateThree = preload?.experiences[2]?.startDate?.year
      ? preload?.experiences[2]?.startDate?.year
      : formValues.startDateYearExperienceThree
      ? formValues.startDateYearExperienceThree
      : null;
    const endDateThree = preload?.experiences[2]?.endDate?.year
      ? preload?.experiences[2]?.endDate?.year
      : formValues.endDateYearExperienceThree
      ? formValues.endDateYearExperienceThree
      : null;

    form.setFieldsValue({
      jobTitleThree: formValues.jobTitleThree
        ? formValues.jobTitleThree
        : preload?.experiences[2]?.title,
        companyNameThree: formValues.companyNameThree
        ? formValues.companyNameThree
        : preload?.experiences[2]?.company,
        cityExperienceThree: formValues.cityExperienceThree
        ? formValues.cityExperienceThree
        : preload?.experiences[2]?.city,
        stateExperienceThree: formValues.stateExperienceThree
        ? formValues.stateExperienceThree
        : preload?.experiences[2]?.state,
      startDateYearExperienceThree: startDateThree ? dayjs().set("year", startDateThree) : "",
      endDateYearExperienceTree: endDateThree ? dayjs().set("year", endDateThree) : "",
      jobDescriptionThree: formValues.jobDescriptionThree
        ? formValues.jobDescriptionThree
        : preload?.experiences[2]?.summary,
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

  const rules = [
    {
      required: true,
      message: "This field is required",
    },
  ];

  return (
    <div className="experience">
      <Form.Item label="Job Title" name="jobTitleOne" rules={rules}>
        <Input type="text" />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item label="Company Name" name="companyNameOne" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={9}>
          <Form.Item label="City" name="cityExperienceOne" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="State" name="stateExperienceOne" rules={rules}>
            <Input maxLength={2} type="text" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item
            label="Start Date"
            name="startDateYearExperienceOne"
            rules={rules}
          >
            <DatePicker picker="year" format={"YYYY"} placeholder="YYYY" />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="End Date"
            name="endDateYearExperienceOne"
            rules={rules}
          >
            <DatePicker picker="year" format={"YYYY"} disabled={disabled} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Job Description" name="jobDescriptionOne" rules={rules}>
        <TextArea rows={3} maxLength={150} showCount />
      </Form.Item>

      <Form.Item label="Job Title" name="jobTitleTwo" rules={rules}>
        <Input type="text" />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item label="Company Name" name="companyNameTwo" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={9}>
          <Form.Item label="City" name="cityExperienceTwo" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="State" name="stateExperienceTwo" rules={rules}>
            <Input maxLength={2} type="text" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item
            label="Start Date"
            name="startDateYearExperienceTwo"
            rules={rules}
          >
            <DatePicker picker="year" format={"YYYY"} placeholder="YYYY" />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="End Date"
            name="endDateYearExperienceTwo"
            rules={rules}
          >
            <DatePicker picker="year" format={"YYYY"} disabled={disabled} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Job Description" name="jobDescriptionTwo" rules={rules}>
        <TextArea rows={3} maxLength={150} showCount />
      </Form.Item>


      
      <Form.Item label="Job Title" name="jobTitleThree" rules={rules}>
        <Input type="text" />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item label="Company Name" name="companyNameThree" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={9}>
          <Form.Item label="City" name="cityExperienceThree" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="State" name="stateExperienceThree" rules={rules}>
            <Input maxLength={2} type="text" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item
            label="Start Date"
            name="startDateYearExperienceThree"
            rules={rules}
          >
            <DatePicker picker="year" format={"YYYY"} placeholder="YYYY" />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item
            label="End Date"
            name="endDateYearExperienceThree"
            rules={rules}
          >
            <DatePicker picker="year" format={"YYYY"} disabled={disabled} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Job Description" name="jobDescriptionThree" rules={rules}>
        <TextArea rows={3} maxLength={150} showCount />
      </Form.Item>
    </div>
  );
};
export default Experience;
